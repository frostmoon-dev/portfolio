import { Nav } from "@/components/Nav";
import { Widget } from "@/components/Widget";
import { AvatarPlaceholder, PhotoPlaceholder } from "@/components/Placeholders";
import {
  StarDoodle,
  HeartDoodle,
  MusicNoteDoodle,
  CameraDoodle,
  BookDoodle,
  ControllerDoodle,
  PaintbrushDoodle,
  PawDoodle,
  SparkleTriple,
  SquiggleUnderline,
  SocialIcon,
} from "@/components/Icons";

const HOBBIES = [
  { label: "Reading", icon: BookDoodle, rotate: -2 },
  { label: "Gaming", icon: ControllerDoodle, rotate: 1.5 },
  { label: "Photography", icon: CameraDoodle, rotate: -1 },
  { label: "Music", icon: MusicNoteDoodle, rotate: 2 },
  { label: "Art", icon: PaintbrushDoodle, rotate: -1.5 },
  { label: "Pets", icon: PawDoodle, rotate: 1 },
];

const PROJECTS = [
  {
    title: "Project One",
    blurb: "A short one-line description of what this project does and why it exists.",
    seed: 0,
    big: true,
  },
  {
    title: "Project Two",
    blurb: "Another short description goes here.",
    seed: 1,
    big: false,
  },
  {
    title: "Project Three",
    blurb: "Swap this for a real project.",
    seed: 2,
    big: false,
  },
];

const GUESTBOOK_SAMPLE = [
  {
    name: "sample visitor",
    note: "love what you're building here — this whole corner has such a good vibe!",
  },
  {
    name: "another sample",
    note: "(this is placeholder text — replace with real guestbook entries, or remove this section)",
  },
];

export default function Home() {
  return (
    <>
      <a id="top" />
      <Nav />

      <main id="main" className="mx-auto max-w-[1100px] px-4 md:px-6 py-8 md:py-12">
        {/* ---------------- PROFILE ---------------- */}
        <section id="profile" className="scroll-mt-20 grid md:grid-cols-[280px_1fr] gap-6 mb-10">
          <Widget title="Profile" rotate={-0.6} icon={<StarDoodle className="w-4 h-4 text-primary-dark" />}>
            <div className="flex flex-col items-center text-center gap-3">
              <AvatarPlaceholder initials="YN" className="w-24 h-24 rounded-full text-2xl border-2 border-primary-dark" />
              <div>
                <h1 className="font-display text-2xl font-semibold text-primary-dark">Your Name</h1>
                <p className="font-hand text-xl text-secondary-ink mt-0.5">
                  builds things, breaks things, tries again
                </p>
              </div>
              <p className="flex items-center gap-2 text-sm">
                <span
                  aria-hidden="true"
                  className="status-dot inline-block w-2.5 h-2.5 rounded-full bg-success animate-blink"
                />
                <span className="text-ink-muted">Status: online now</span>
              </p>
            </div>

            <dl className="mt-5 border-t-2 border-dashed border-border pt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">Job</dt>
                <dd className="text-right font-medium">Placeholder Job Title</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">Location</dt>
                <dd className="text-right font-medium">Placeholder City</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">On the internet since</dt>
                <dd className="text-right font-medium">2024</dd>
              </div>
            </dl>
          </Widget>

          <div className="flex flex-col gap-6">
            <Widget title="About Me" icon={<HeartDoodle className="w-4 h-4 text-primary-dark" />}>
              <p className="leading-relaxed">
                Hi, I&apos;m <strong>Your Name</strong> — replace this paragraph with a real bio. Two or
                three sentences about who you are, what you do, and what you care about tends to be
                plenty. Write it like you talk, not like a press release.
              </p>
              <p className="mt-3 flex items-baseline gap-2 font-hand text-lg text-secondary-ink">
                <span>currently into: placeholder hobby, placeholder show, placeholder song</span>
                <SparkleTriple className="w-8 h-4 shrink-0 translate-y-0.5" />
              </p>
            </Widget>

            <Widget title="Now Playing" icon={<MusicNoteDoodle className="w-4 h-4 text-primary-dark" />}>
              <div className="flex items-center gap-4">
                <div
                  className="relative w-16 h-16 rounded-full bg-primary-dark shrink-0 flex items-center justify-center animate-spin motion-reduce:animate-none"
                  style={{ animationDuration: "6s" }}
                >
                  <span className="w-3 h-3 rounded-full bg-bg" />
                  <span className="absolute inset-1 rounded-full border border-ink-muted/40" />
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-primary-dark truncate">
                    Placeholder Song Title
                  </p>
                  <p className="text-sm text-ink-muted truncate">Placeholder Artist</p>
                </div>
              </div>
            </Widget>
          </div>
        </section>

        {/* ---------------- HOBBIES ---------------- */}
        <section id="hobbies" className="scroll-mt-20 mb-10">
          <Widget title="Hobbies &amp; Interests" rotate={0.5} icon={<PaintbrushDoodle className="w-4 h-4 text-primary-dark" />}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {HOBBIES.map(({ label, icon: Icon, rotate }) => (
                <div
                  key={label}
                  className="sticker bg-accent/40 border-2 border-dashed border-accent-ink/40 rounded-md p-4 flex flex-col items-center gap-2 text-center"
                  style={{ transform: `rotate(${rotate}deg)` }}
                >
                  <Icon className="w-7 h-7 text-accent-ink" />
                  <span className="font-hand text-lg text-primary-dark">{label}</span>
                </div>
              ))}
            </div>
          </Widget>
        </section>

        {/* ---------------- WORK ---------------- */}
        <section id="work" className="scroll-mt-20 mb-10">
          <Widget title="Work I've Made" icon={<StarDoodle className="w-4 h-4 text-primary-dark" />}>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.map((p) => (
                <a
                  key={p.title}
                  href="#"
                  className={`group border-2 border-primary-dark rounded-sm overflow-hidden bg-surface hover:-translate-y-0.5 transition-transform ${
                    p.big ? "sm:col-span-2" : ""
                  }`}
                >
                  <PhotoPlaceholder label={p.title} seed={p.seed} className={p.big ? "h-40" : "h-32"} />
                  <div className="p-3">
                    <h3 className="font-display font-semibold text-primary-dark group-hover:text-secondary-ink">
                      {p.title}
                    </h3>
                    <p className="text-sm text-ink-muted mt-0.5">{p.blurb}</p>
                  </div>
                </a>
              ))}
            </div>
          </Widget>
        </section>

        {/* ---------------- GUESTBOOK ---------------- */}
        <section id="guestbook" className="scroll-mt-20 mb-10">
          <Widget title="Guestbook" rotate={-0.4} icon={<HeartDoodle className="w-4 h-4 text-primary-dark" />}>
            <p className="text-xs text-ink-muted mb-4">
              Sample entries below — swap in real ones, or wire this up to an actual form later.
            </p>
            <ul className="space-y-3">
              {GUESTBOOK_SAMPLE.map((entry) => (
                <li
                  key={entry.name}
                  className="border-2 border-dashed border-border rounded-sm p-3 bg-surface-alt/40"
                >
                  <p className="text-sm leading-relaxed">&ldquo;{entry.note}&rdquo;</p>
                  <p className="font-hand text-base text-secondary-ink mt-1">— {entry.name}</p>
                </li>
              ))}
            </ul>
          </Widget>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="border-t-2 border-primary-dark bg-primary-dark text-bg">
        <div className="overflow-hidden py-2 border-b border-bg/20" aria-hidden="true">
          <div className="marquee-track flex gap-8 whitespace-nowrap font-hand text-lg w-max">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex gap-8">
                <span>☆ made with care</span>
                <span>☆ always learning</span>
                <span>☆ coffee powered</span>
                <span>☆ thanks for stopping by</span>
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-[1100px] px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-bg/80 flex items-center gap-2">
            <SquiggleUnderline className="w-10 h-3 text-secondary" />
            © {new Date().getFullYear()} Your Name
          </p>
          <nav aria-label="Social" className="flex flex-wrap gap-4">
            <a href="#" className="flex items-center gap-1.5 text-sm hover:text-secondary transition-colors">
              <SocialIcon name="Github" /> GitHub
            </a>
            <a href="#" className="flex items-center gap-1.5 text-sm hover:text-secondary transition-colors">
              <SocialIcon name="LinkedIn" /> LinkedIn
            </a>
            <a href="#" className="flex items-center gap-1.5 text-sm hover:text-secondary transition-colors">
              <SocialIcon name="X" /> X
            </a>
            <a
              href="mailto:you@example.com"
              className="flex items-center gap-1.5 text-sm hover:text-secondary transition-colors"
            >
              <SocialIcon name="Mail" /> Email
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
