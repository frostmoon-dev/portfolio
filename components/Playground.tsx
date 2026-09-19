"use client";

import { useEffect, useRef } from "react";

// No recorded message yet — the audio element points at a file that doesn't
// exist. The player UI still works (buttons, progress bar); drop a real clip
// at public/audio/message.m4a to make it play.
export function Playground() {
  const playerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playBtnRef = useRef<HTMLButtonElement>(null);
  const muteBtnRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const player = playerRef.current;
    const audio = audioRef.current;
    const playBtn = playBtnRef.current;
    const muteBtn = muteBtnRef.current;
    const progress = progressRef.current;
    const fill = fillRef.current;
    if (!player || !audio || !playBtn || !muteBtn || !progress || !fill) return;

    const icPlay = playBtn.querySelector<HTMLElement>(".ic-play")!;
    const icPause = playBtn.querySelector<HTMLElement>(".ic-pause")!;
    const icVolOn = muteBtn.querySelector<HTMLElement>(".ic-vol-on")!;
    const icVolOff = muteBtn.querySelector<HTMLElement>(".ic-vol-off")!;

    function setPlayingUI(on: boolean) {
      player!.classList.toggle("is-playing", on);
      icPlay.style.display = on ? "none" : "";
      icPause.style.display = on ? "" : "none";
      playBtn!.setAttribute("aria-label", on ? "Pause" : "Play");
    }

    function onPlayClick() {
      if (audio!.paused) {
        const p = audio!.play();
        if (p && p.catch) p.catch(() => {});
      } else {
        audio!.pause();
      }
    }
    playBtn.addEventListener("click", onPlayClick);

    function onMuteClick() {
      audio!.muted = !audio!.muted;
      icVolOn.style.display = audio!.muted ? "none" : "";
      icVolOff.style.display = audio!.muted ? "" : "none";
      muteBtn!.setAttribute("aria-label", audio!.muted ? "Unmute" : "Mute");
    }
    muteBtn.addEventListener("click", onMuteClick);

    const hearts = Array.from(player.querySelectorAll<HTMLButtonElement>(".ctrl.heart"));
    let liked = false;
    function onHeartClick() {
      liked = !liked;
      hearts.forEach((h) => {
        h.classList.toggle("liked", liked);
        h.setAttribute("aria-pressed", liked ? "true" : "false");
      });
    }
    hearts.forEach((h) => h.addEventListener("click", onHeartClick));

    function onPlay() {
      setPlayingUI(true);
    }
    function onPause() {
      setPlayingUI(false);
    }
    function onEnded() {
      setPlayingUI(false);
    }
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onEnded);

    let progRaf: number | null = null;
    function paintProgress() {
      if (!audio!.duration) return;
      const pct = (audio!.currentTime / audio!.duration) * 100;
      fill!.style.width = pct.toFixed(2) + "%";
      progress!.setAttribute("aria-valuenow", String(Math.round(pct)));
    }
    function progressLoop() {
      paintProgress();
      progRaf = !audio!.paused && !audio!.ended ? requestAnimationFrame(progressLoop) : null;
    }
    function onPlayForProgress() {
      if (progRaf == null) progRaf = requestAnimationFrame(progressLoop);
    }
    function onPauseForProgress() {
      if (progRaf) {
        cancelAnimationFrame(progRaf);
        progRaf = null;
      }
      paintProgress();
    }
    function onTimeUpdate() {
      if (audio!.paused) paintProgress();
    }
    audio.addEventListener("play", onPlayForProgress);
    audio.addEventListener("pause", onPauseForProgress);
    audio.addEventListener("ended", paintProgress);
    audio.addEventListener("seeked", paintProgress);
    audio.addEventListener("timeupdate", onTimeUpdate);

    function seekTo(clientX: number) {
      const r = progress!.getBoundingClientRect();
      let ratio = (clientX - r.left) / r.width;
      ratio = Math.max(0, Math.min(1, ratio));
      if (audio!.duration) audio!.currentTime = ratio * audio!.duration;
    }
    function onPointerDown(e: PointerEvent) {
      e.preventDefault();
      seekTo(e.clientX);
      try {
        progress!.setPointerCapture(e.pointerId);
      } catch {
        // ignore
      }
      function move(ev: PointerEvent) {
        seekTo(ev.clientX);
      }
      function up() {
        progress!.removeEventListener("pointermove", move);
        progress!.removeEventListener("pointerup", up);
      }
      progress!.addEventListener("pointermove", move);
      progress!.addEventListener("pointerup", up);
    }
    progress.addEventListener("pointerdown", onPointerDown);

    function onProgressKeydown(e: KeyboardEvent) {
      if (!audio!.duration) return;
      if (e.key === "ArrowRight") {
        audio!.currentTime = Math.min(audio!.duration, audio!.currentTime + 1);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        audio!.currentTime = Math.max(0, audio!.currentTime - 1);
        e.preventDefault();
      }
    }
    progress.addEventListener("keydown", onProgressKeydown);

    return () => {
      playBtn.removeEventListener("click", onPlayClick);
      muteBtn.removeEventListener("click", onMuteClick);
      hearts.forEach((h) => h.removeEventListener("click", onHeartClick));
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlayForProgress);
      audio.removeEventListener("pause", onPauseForProgress);
      audio.removeEventListener("ended", paintProgress);
      audio.removeEventListener("seeked", paintProgress);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      progress.removeEventListener("pointerdown", onPointerDown);
      progress.removeEventListener("keydown", onProgressKeydown);
      if (progRaf) cancelAnimationFrame(progRaf);
    };
  }, []);

  return (
    <section id="message" className="playground" aria-label="A lullaby from Teha">
      <div className="player" id="player" ref={playerRef}>
        <div className="player-art">
          <img className="art-img" src="/images/avatar.png" alt="" />
          <span className="art-hole" />
        </div>
        <div className="player-body">
          <div className="player-top">
            <div className="player-meta">
              <p className="player-title">Lullaby</p>
              <p className="player-sub">From Teha</p>
            </div>
            <button className="icon-btn" ref={muteBtnRef} type="button" aria-label="Mute">
              <svg
                className="ic-vol-on"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 5 6 9H3v6h3l5 4z" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M18.5 6a8 8 0 0 1 0 12" />
              </svg>
              <svg
                className="ic-vol-off"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ display: "none" }}
              >
                <path d="M11 5 6 9H3v6h3l5 4z" />
                <path d="M22 9l-6 6M16 9l6 6" />
              </svg>
            </button>
          </div>
          <div
            className="progress"
            id="progress"
            ref={progressRef}
            role="slider"
            aria-label="Seek"
            tabIndex={0}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={0}
          >
            <div className="progress-fill" ref={fillRef} />
          </div>
          <div className="controls">
            <button className="ctrl heart" id="heartLeft" type="button" aria-label="Love" aria-pressed="false">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20.3 4.2 12.4a4.6 4.6 0 0 1 0-6.5 4.6 4.6 0 0 1 6.5 0l1.3 1.3 1.3-1.3a4.6 4.6 0 0 1 6.5 0 4.6 4.6 0 0 1 0 6.5z" />
              </svg>
            </button>
            <button className="ctrl play" ref={playBtnRef} type="button" aria-label="Play">
              <svg className="ic-play" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              <svg className="ic-pause" viewBox="0 0 24 24" aria-hidden="true" style={{ display: "none" }}>
                <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
              </svg>
            </button>
            <button className="ctrl heart" id="heartRight" type="button" aria-label="Love" aria-pressed="false">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20.3 4.2 12.4a4.6 4.6 0 0 1 0-6.5 4.6 4.6 0 0 1 6.5 0l1.3 1.3 1.3-1.3a4.6 4.6 0 0 1 6.5 0 4.6 4.6 0 0 1 0 6.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <audio ref={audioRef} src="/audio/message.m4a" preload="none" />
    </section>
  );
}
