import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faBell,
  faEnvelope,
  faUserCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Twitter() {
  return (
    <nav>
      <ul
        className=" flex h-12 items-center py-0 px-3 rounded-md border-gray-400"
        style={{
          border: "1px solid rgba(238,238,238 ,1)",
          color: "rgba(117,117,117 ,1)",
          boxShadow: "5px 10px 20px -20px rgba(85,172,238 ,1)",
        }}
        role="navigation"
      >
        <li className="mr-3 text-gray-400 cursor-pointer hover:text-blue-300">
          <FontAwesomeIcon icon={faHome} />
          <span className="ml-1">Home</span>
        </li>
        <li className="mr-3 cursor-pointer">
          <FontAwesomeIcon icon={faBell} />
          <span className="ml-1">Notifications</span>
        </li>
        <li className="cursor-pointer mr-3">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="ml-1">Notifications</span>
        </li>
        <li
          className="mx-auto cursor-pointer"
          style={{ color: "rgba(85,172,238 ,1)" }}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </li>
        <li className="cursor-pointer mr-3">
          <form>
            <input type="text" /> <FontAwesomeIcon icon={faSearch} />
          </form>
        </li>
        <li className="cursor-pointer mr-3">
          {/* <i class="fa fa-user-circle-o"></i> */}
          <FontAwesomeIcon icon={faUserCircle} />
        </li>
        <li className="cursor-pointer">
          <button
            className="text-lg border-0 text-white rounded-full"
            style={{ background: "rgba(85,172,238 ,1)" }}
          >
            tweet
          </button>
        </li>
      </ul>
    </nav>
  );
}
