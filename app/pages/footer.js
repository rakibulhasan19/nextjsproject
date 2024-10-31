import Image from "next/image";
import Link from "next/link";
import inst from "@/public/img/inst.svg";
import youtube from "@/public/img/youtube.svg";
import tiktok from "@/public/img/tiktok.svg";
import email from "@/public/img/email.svg";
export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="wrapper">
          <ul className="footer-social--links">
            <li>
              <Link className="footer-social--link" href="/">
                <Image src={inst} alt="" />
              </Link>
            </li>
            <li>
              <Link className="footer-social--link" href="/">
                <Image src={youtube} alt="" />
              </Link>
            </li>
            <li>
              <Link className="footer-social--link" href="/">
                <Image src={tiktok} alt="" />
              </Link>
            </li>
            <li>
              <Link className="footer-social--link" href="/">
                <Image src={email} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrapper">
          <div className="footer-bottom--content">
            <p className="copyright-text"> &copy; 2024 CyberCaravan</p>
            <nav>
              <ul className="footer-nav--links">
                <li>
                  <Link className="footer-navlink" href="/">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="footer-navlink" href="/">
                    Terms & conditions
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
