import Image from "next/image";
import question from "@/public/img/question.png";
import about_us from "@/public/img/about-us.png";
export default function about() {
  return (
    <section id="about" className="about-section">
      <div className="wrapper">
        <div className="about-box">
          <div className="about-box--title">
            <h2 className="secondery-title black-text">About Us:</h2>
          </div>
          <div className="about-box-top">
            <Image src={question} alt="question" />
            <p className="about-question--text">
              Pascal Fenkam, PhD, is an entrepreneur, researcher, software
              developer, and the founder of CyberCaravan. He's a Red Hat
              Certified Architect, with 20+ years in IT, working for many
              Fortune 500 companies.
            </p>
          </div>
          <div className="about-box-bottom">
            <Image src={about_us} alt="question" />
            <p className="about-question--text">
              Pascal teaches at Seneca College and works as a Solutions
              Architect at Red Hat, an IBM Company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
