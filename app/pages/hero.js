import Image from "next/image";
import ai2 from "@/public/img/ai2.png";
import ai1 from "@/public/img/ai1.png";
export default function hero() {
  return (
    <section id="Hero" className="hero-section">
      <div className="hero-images">
        <h1 className="d-none">CyberCaravan</h1>
        <Image className="hero-img1" src={ai2} alt="AI" priority={true} />
        <Image className="hero-img2" src={ai1} alt="AI" priority={true} />
      </div>
    </section>
  );
}
