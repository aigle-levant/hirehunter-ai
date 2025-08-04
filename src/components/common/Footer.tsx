import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="fixed w-full bg-blue-950">
      <div id="final-cta" className="flex flex-row gap-6">
        <p>Lorem ipsum dolor sit amet</p>
        <div id="btn-grp">
          <button type="button">Scan resumes</button>
          <button type="button">Schedule an interview</button>
        </div>
      </div>
      <div id="footer-main" className="flex flex-row gap-4">
        <div id="footer-left" className="flex flex-col">
          <p>HireHunter</p>
          <p>Made by Team Technoblasters</p>
          <div id="socials" className="flex flex-row gap-3">
            <a href="https://github.com/aigle-levant/hirehunter-ai">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/prajanya-subramanian/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://x.com/aiglelevant">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
        <div id="footer-right">
          <div className="flex flex-col">
            <div>
              <NavLink to="/scan" className="block hover:underline">
                Scan resumes
              </NavLink>
              <p>Let the AI scan resumes and bring you the details.</p>
            </div>
            <div>
              <NavLink to="/leaderboard" className="block hover:underline">
                Leaderboard
              </NavLink>
              <p>Rank your candidates and select the best of the best!</p>
            </div>
            <div>
              <NavLink to="/about" className="block hover:underline">
                About
              </NavLink>
              <p>Take a look at how HireHunter was built</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <NavLink to="/schedule" className="block hover:underline">
                Schedule
              </NavLink>
              <p>Prepare interviews and queries real quick!</p>
            </div>
            <div>
              <NavLink to="/contact" className="block hover:underline">
                Contact us
              </NavLink>
              <p>Have a query? Contact us!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
