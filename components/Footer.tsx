import { Reveal } from "@/components/Reveal";

export function Footer() {
  return (
    <Reveal as="footer" className="site-footer">
      <div className="wrap footer-inner">
        <p className="footer-line">
          Kept by hand · Teha<span className="zh">(テハ)</span> · {new Date().getFullYear()}
        </p>
        <a href="#top" className="footer-top">
          Back to top ↑
        </a>
      </div>
    </Reveal>
  );
}
