export default function register() {
  return (
    <section id="register" className="register-section">
      <div className="register-heading">
        <h2 className="primary-title register-sub--title">register now!</h2>
        <h2 className="primary-title black-text">register now!</h2>
        <h2 className="primary-title register-sub--title">register now!</h2>
      </div>
      <div className="wrapper">
        <div className="form-wrapper">
          <form action="#">
            <div className="input-group">
              <label htmlFor="name">your name*</label>
              <input id="name" className="input-field" type="text" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">your email*</label>
              <input id="email" className="input-field" type="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="phone">your phone number*</label>
              <input id="phone" className="input-field" type="text" required />
            </div>
            <div className="input-group">
              <label htmlFor="time">Time - Place*</label>
              <div id="time" className="select-menu">
                <div className="select-btn">
                  <div className="sBtn-text plaseholer">Select an event...</div>
                  <span className="bx bx-chevron-down">
                    <svg
                      width="18"
                      height="15"
                      viewBox="0 0 18 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.0001 15L17.6604 0H0.339844L9.0001 15Z"
                        fill="#F6BE19"
                      />
                    </svg>
                  </span>
                </div>

                <div className="options">
                  <div className="option-list">
                    <div className="option">
                      <div className="option-text">
                        <span className="event-date">4mar</span>{" "}
                        <span className="event-time">10AM</span>{" "}
                        <span className="event-place">
                          Brampton - Public Library
                        </span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-text">
                        <span className="event-date">5mar</span>{" "}
                        <span className="event-time">7AM</span>{" "}
                        <span className="event-place">
                          Toronto - North York Saint And
                        </span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-text">
                        <span className="event-date">8mar</span>{" "}
                        <span className="event-time">2PM</span>{" "}
                        <span className="event-place">
                          Oshawa - Public Library
                        </span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-text">
                        <span className="event-date">14mar</span>{" "}
                        <span className="event-time">8AM</span>{" "}
                        <span className="event-place">
                          Vancouver - Central Algoma
                        </span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-text">
                        <span className="event-date">21mar</span>{" "}
                        <span className="event-time">10AM</span>{" "}
                        <span className="event-place">
                          Sudbury - Chapleau Public S
                        </span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-text">
                        <span className="event-date">4mar</span>{" "}
                        <span className="event-time">10AM</span>{" "}
                        <span className="event-place">
                          Brampton - Public Library
                        </span>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-text">
                        <span className="event-date">4mar</span>{" "}
                        <span className="event-time">10AM</span>{" "}
                        <span className="event-place">
                          Brampton - Public Library
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="bio">your bio</label>
              <textarea className="textarea" id="bio"></textarea>
            </div>
            <div className="btn-group">
              <button className="reg-btn" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
