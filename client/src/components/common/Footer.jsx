import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 text-gray-300 px-8 py-12 border-t border-white/10">
      {/* Top CTA Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <p className="text-lg font-light max-w-lg"></p>
        <div className="flex gap-4">
          <NavLink
            to="/jd"
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white transition-all"
          >
            Scan resumes
          </NavLink>
          <NavLink
            to="/schedule"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            Schedule an interview
          </NavLink>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-semibold text-white">Hirehunter</h2>
          <p className="text-sm text-gray-400 mt-1">
            Made by Team Technoblasters
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/aigle-levant/hirehunter-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/prajanya-subramanian/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://x.com/aiglelevant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
          </div>
        </div>

        {/* Column 1 */}
        <div className="space-y-4">
          <div>
            <NavLink to="/jd" className="block text-white hover:underline">
              Scan resumes
            </NavLink>
            <p className="text-sm text-gray-400">
              Let the AI scan resumes and bring you the details.
            </p>
          </div>
          <div>
            <NavLink
              to="/leaderboard"
              className="block text-white hover:underline"
            >
              Leaderboard
            </NavLink>
            <p className="text-sm text-gray-400">
              Rank your candidates and select the best of the best!
            </p>
          </div>
          <div>
            <NavLink to="/about" className="block text-white hover:underline">
              About
            </NavLink>
            <p className="text-sm text-gray-400">
              Take a look at how Hirehunter was built
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div>
            <NavLink
              to="/schedule"
              className="block text-white hover:underline"
            >
              Schedule
            </NavLink>
            <p className="text-sm text-gray-400">
              Prepare interviews and queries real quick!
            </p>
          </div>
          <div>
            <NavLink
              to="/schedule"
              className="block text-white hover:underline"
            >
              Feedback
            </NavLink>
            <p className="text-sm text-gray-400">
              Send and receive feedback and analyse their tone.
            </p>
          </div>
          <div>
            <NavLink to="/contact" className="block text-white hover:underline">
              Contact us
            </NavLink>
            <p className="text-sm text-gray-400">Have a query? Contact us!</p>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 pt-6 border-t border-white/10 text-sm text-gray-500">
        © {new Date().getFullYear()} HireHunter. All rights reserved.
      </div>
    </footer>
  );
}
