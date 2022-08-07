import React from "react";

function Info() {
  return (
    <div className="info">
      <div className="info--image"></div>
      <div className="info--name">Aniket Sen</div>
      <div className="info--role">Frontend Developer</div>
      <div className="info--website">aniket-sen-1</div>
      <div className="info--buttons">
        <a href="https://linkedin.com/in/aniket-sen-806a25197">
          <div className="buttons--left">
            <div className="button">
              <i className="fa-solid fa-envelope info-icon"></i>
              Email
            </div>
          </div>
        </a>

        <a href="https://linkedin.com/in/aniket-sen-806a25197">
          <div className="buttons--right">
            <div className="button">
              <i className="fa-brands fa-linkedin info-icon"></i>
              LinkedIn
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Info;
