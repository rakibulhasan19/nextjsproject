import Image from "next/image";
import shield_cloud21 from "@/public/img/shield-cloud21.svg";
import ai_icon31 from "@/public/img/ai-icon31.svg";
import Tux from "@/public/img/Tux.svg";

export default function gain() {
  return (
    <section id="gain" className="gain-section">
      <div className="wrapper">
        <div className="gain-box">
          <div className="gain-box--title bg-black">
            <h2 className="primary-title withe-text">What Will You Gain?</h2>
          </div>
          <div className="gain-items gain-items--first">
            <div className="gain-item">
              <div className="gain-item--content">
                <Image
                  className="cloud-icon"
                  src={shield_cloud21}
                  alt="cloud"
                />
                <p className="gain-text">
                  A practical introduction to ethical hacking and cybersecurity.
                </p>
              </div>
              <div className="line"></div>
            </div>
            <div className="gain-item gain-item--middle">
              <div className="line"></div>
              <div className="gain-item--content">
                <Image className="ai-icon" src={ai_icon31} alt="cloud" />
                <p className="gain-text">
                  An understanding of Generative AI and its transformative
                  power.
                </p>
              </div>
            </div>
            <div className="gain-item gain-items--last">
              <div className="gain-item--content">
                <Image className="penguin-icon" src={Tux} alt="Penguin Icon" />
                <p className="gain-text">
                  Practical introduction to Linux and its pervasiveness.
                </p>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
