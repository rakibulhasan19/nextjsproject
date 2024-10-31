import Image from "next/image";
import clock from "@/public/img/clock.svg";
import Script from "next/script";
export default function calendar() {
  return (
    <section id="calendar" className="calendar-section">
      <Script src="http://code.jquery.com/jquery-1.9.1.js" />
      <Script src="./js/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="./js/main.js" strategy="lazyOnload" />
      <div className="wrapper">
        <div className="calender-title">
          <h2 className="secondery-title black-text">Calendar</h2>
        </div>
        <div className="calendar-owl owl-carousel owl-theme">
          <div className="item">
            <div className="calendar-items">
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">4</h3>
                    <span className="month">Mar</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    How to Break the Habbit of Self Doubt <br />
                    and build Real Confidience
                  </p>
                  <p className="calendar-text--light">
                    Speaker: Benedikt Safiyulin
                  </p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item mt-30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">14</h3>
                    <span className="month">Mar</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    Master Your People Skill
                  </p>
                  <p className="calendar-text--light">Speaker: Beth Burphy</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">2</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    Get Into Your Creative flow
                  </p>
                  <p className="calendar-text--light">
                    Speaker: Deveeprasad Achatya
                  </p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item mt-30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">3</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    Make Your Dream Trip a Reality
                  </p>
                  <p className="calendar-text--light">Speaker: Dontae Little</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>

              <div className="calendar-item mt--30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">5</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    how to Retire early: the latte factor{" "}
                  </p>
                  <p className="calendar-text--light">Speaker: chloe Modibro</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">7</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    The Power of Body language
                  </p>
                  <p className="calendar-text--light">Speaker: Jioke Ugorji</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item mt--30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">8</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    How Billonaires, Icons and world-class performrs master
                    productivity
                  </p>
                  <p className="calendar-text--light">Speaker: ren Xue</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">13</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    How Billonaires, Icons and world-class performrs master
                    productivity
                  </p>
                  <p className="calendar-text--light">Speaker: ren Xue</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="calendar-items">
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">4</h3>
                    <span className="month">Mar</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    How to Break the Habbit of Self Doubt <br />
                    and build Real Confidience
                  </p>
                  <p className="calendar-text--light">
                    Speaker: Benedikt Safiyulin
                  </p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item mt-30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">14</h3>
                    <span className="month">Mar</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    Master Your People Skill
                  </p>
                  <p className="calendar-text--light">Speaker: Beth Burphy</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">2</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    Get Into Your Creative flow
                  </p>
                  <p className="calendar-text--light">
                    Speaker: Deveeprasad Achatya
                  </p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item mt-30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">3</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    Make Your Dream Trip a Reality
                  </p>
                  <p className="calendar-text--light">Speaker: Dontae Little</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>

              <div className="calendar-item mt--30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">5</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    how to Retire early: the latte factor{" "}
                  </p>
                  <p className="calendar-text--light">Speaker: chloe Modibro</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">7</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    The Power of Body language
                  </p>
                  <p className="calendar-text--light">Speaker: Jioke Ugorji</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item mt--30">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">8</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    How Billonaires, Icons and world-class performrs master
                    productivity
                  </p>
                  <p className="calendar-text--light">Speaker: ren Xue</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
              <div className="calendar-item">
                <div className="calendar-item--top">
                  <div className="item-top--left">
                    <h3 className="date">13</h3>
                    <span className="month">Oct</span>
                  </div>
                  <div className="item-top--right">
                    <Image className="clock-icon" src={clock} alt="Time" />
                    <p className="date-details">02:20-04:20</p>
                  </div>
                </div>
                <div className="calendar-body">
                  <p className="calendar-text--bold">
                    How Billonaires, Icons and world-className performrs master
                    productivity
                  </p>
                  <p className="calendar-text--light">Speaker: ren Xue</p>
                </div>
                <a className="btn-reg" href="/">
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
