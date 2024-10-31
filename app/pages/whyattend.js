import Image from "next/image";
import quote from "@/public/img/quote.svg";
import Tux4 from "@/public/img/Tux4.png";
import brain21 from "@/public/img/brain21.svg";
import road21 from "@/public/img/road21.svg";
import skill21 from "@/public/img/skill21.svg";
export default function whyattend() {
  return (
    <section id="whyattend" className="why-attend">
      <div className="wrapper">
        <div className="why-attend--top">
          <div className="why-attend--content">
            <Image
              className="quote-img"
              src={quote}
              alt="Quote"
              priority={true}
            />
            <div>
              <h2 className="primary-title primary-color">
                Cyber Hacking Caravan:
              </h2>
              <h3 className="primary-subtitle">
                The Command Center for Future Tech Heroes – We Hack the Present
                to Shape the Future!
              </h3>
              <p className="why-attend--des">
                Embark on a journey of discovery and empowerment with our
                one-day workshop in Cybersecurity, Linux, and AI.
              </p>
            </div>
          </div>
          <div className="penguin">
            <Image
              className="penguin-img"
              src={Tux4}
              alt="Tux"
              priority={true}
            />
          </div>
        </div>
      </div>
      <div className="why-attend--bottom">
        <div className="why-attend--bg">
          <div className="wrapper">
            <div className="why-attend--wrapper">
              <div className="why-attend--box">
                <div className="attend-box--title">
                  <h2 className="primary-title black-text">Why Attend?</h2>
                </div>
                <div className="attend-box--items">
                  <div className="attend-box--item">
                    <Image
                      className="attend-box--icon"
                      src={brain21}
                      alt="brain21"
                      priority={true}
                    />
                    <div>
                      <p className="attend-item--text">Hands-on Learning:</p>
                      <p className="attend-item--text">
                        Immerse yourself in the practical aspects of
                        cybersecurity, AI, and Linux.
                      </p>
                    </div>
                  </div>
                  <div className="attend-box--item">
                    <Image
                      className="attend-box--icon"
                      src={road21}
                      alt="road21"
                      priority={true}
                    />
                    <div>
                      <p className="attend-item--text">Inspiring Journeys:</p>
                      <p className="attend-item--text">
                        Explore the landscape of tech through interactive
                        workshops.
                      </p>
                    </div>
                  </div>
                  <div className="attend-box--item">
                    <Image
                      className="attend-box--icon"
                      src={skill21}
                      alt="skill21"
                      priority={true}
                    />
                    <div>
                      <p className="attend-item--text">Future-Ready Skills:</p>
                      <p className="attend-item--text">
                        Equip yourself for the evolving world of tech.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
