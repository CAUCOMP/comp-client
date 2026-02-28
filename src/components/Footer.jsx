import Icon from "./Icon";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerLine" />

      <div className="footerIcons" aria-label="Social links">
        <Icon label="Instagram">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="..." />
          </svg>
        </Icon>

        <Icon label="GitHub">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="..." />
          </svg>
        </Icon>

        <Icon label="Chat">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="..." />
          </svg>
        </Icon>
      </div>

      <div className="footerTitle">CAU COMP</div>
      <div className="footerText">
        CHUNG-ANG univ, Room 407, Building 107, 84 Heukseok-ro, Dongjak-gu, Seoul
      </div>
      <div className="footerText">
        © 2026 COMP, All Rights Reserved.
      </div>
    </footer>
  );
}