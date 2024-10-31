import Image from "next/image";
import hacker1 from "@/public/img/hacker1.png";
export default function shouldattend() {
  return (
    <section id="shouldattend" className="should-attend">
      <div className="wrapper">
        <div className="should-attend--box">
          <div className="should-box--title">
            <h2 className="primary-title black-text">Who Should Attend?</h2>
          </div>
          <div className="should-items">
            <div className="should-img">
              <Image src={hacker1} alt="Hacker" />
            </div>
            <ul className="should-lists">
              <li>
                High school and college students who are ready to delve into
                tech.
              </li>
              <li>Young innovators and tech enthusiasts.</li>
              <li>
                Any youth interested in shaping their future or protecting their
                community from cyberwarfare.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
