import Image from "next/image";
import OJK92B11 from "@/public/img/OJK92B11.png";
import Link from "next/link";
import whatsapp from "@/public/img/whatsapp.svg";
import discord from "@/public/img/discord.svg";
export default function community() {
  return (
    <section id="community" className="community-section">
      <div className="wrapper">
        <div className="community-title">
          <h2 className="secondery-title black-text">Curriculum</h2>
        </div>
      </div>
      <div className="community-img">
        <Image src={OJK92B11} alt="OJK92B11" />
        <ul className="community-links">
          <li>
            <Link href="/">
              <Image src={whatsapp} alt="whatsapp" />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Image src={discord} alt="discord" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
