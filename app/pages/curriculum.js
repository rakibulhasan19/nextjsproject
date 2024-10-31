import Image from "next/image";
import penguin from "@/public/img/linux-penguin-3.png";
import ai_icon_lg from "@/public/img/ai-icon-lg.png";
export default function curriculum() {
  return (
    <section id="curriculum" className="curriculum-section">
      <div className="wrapper curriculum-wrapper">
        <Image
          className="curriculum-penguin"
          src={penguin}
          alt="Linux"
          priority={true}
        />
        <div className="curriculum-title">
          <h2 className="secondery-title black-text">Curriculum</h2>
        </div>
        <div className="curriculum-items">
          <div className="curriculum-item curriculum-item1">
            <div className="rectangle"></div>
            <p className="curriculum-text">1. Introduction</p>
          </div>
          <div className="curriculum-item curriculum-item2">
            <div className="rectangle"></div>
            <p className="curriculum-text">2. Ethical hacking</p>
          </div>
          <div className="curriculum-item curriculum-item3">
            <div className="rectangle"></div>
            <p className="curriculum-text">3. Cybersecurity</p>
          </div>
          <div className="curriculum-item curriculum-item4">
            <div className="rectangle"></div>
            <p className="curriculum-text">4. Generative AI</p>
          </div>
          <div className="curriculum-item curriculum-item5">
            <div className="rectangle"></div>
            <p className="curriculum-text">5. Linux</p>
          </div>
        </div>
        <Image
          className="curriculum-ai"
          src={ai_icon_lg}
          alt="AI"
          priority={true}
        />
      </div>
    </section>
  );
}
