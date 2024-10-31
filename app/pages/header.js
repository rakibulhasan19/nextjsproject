import Image from "next/image";
import logo from "@/public/img/logo.svg";
import bar from "@/public/img/bar.svg";
import closs from "@/public/img/closs.svg";
import Link from "next/link";
export default function header() {
  return (
    <header className="header">
      <Link className="brand-name" href="/">
        <Image src={logo} alt="CYBERCARAVAN" priority={true} />
      </Link>
      <nav className="nav">
        <button type="button" className="nav-btn open-nav small-devices">
          <Image src={bar} alt="Toggle" priority={true} />
        </button>
        <div className="nav-items">
          <button type="button" className="nav-btn close-nav small-devices">
            <Image src={closs} alt="Toggle" priority={true} />
          </button>
          <ul className="nav-item--list">
            <li className="nav-item">
              <Link className="nav-link" href="#whyattend">
                Why Attend?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#shouldattend">
                Who Should Attend?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#gain">
                What Will You Gain?
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#calendar">
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#curriculum">
                Curriculum
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#community">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#testimonies">
                Testimonies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#register">
                Register
              </Link>
            </li>
            <li className="nav-btn large-devices">
              <button className="lg-btn" type="button">
                EN
              </button>
            </li>
          </ul>
        </div>
        <button className="lg-btn small-devices" type="button">
          EN
        </button>
      </nav>
    </header>
  );
}
