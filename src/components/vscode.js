import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDocker,
  faDochub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopy,
  faSearch,
  faPlay,
  faUserCircle,
  faCog,
  faCodeBranch,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

export default () => (
  <section className="h-screen bg-purple-800" style={{background: "334499"}}>
    <nav>
      <ul className="flex bg-white ">
        <li className="">File</li>
        <li className="ml-3">Edit</li>
        <li className="ml-3">Selection</li>
        <li className="ml-3">View</li>
        <li className="ml-3">Go</li>
        <li className="ml-3">Run</li>
        <li className="ml-3">Terminal</li>
        <li className="ml-3">Help</li>
      </ul>
    </nav>
    <main className="flex">
      <aside
        className="flex flex-col pr-7 items-center justify-start pl-2 bg-purple-900 mr-2"
        style={{ height: "calc(100vh - 30px)" }}
      >
        <i className="text-gray-400 text-2xl mt-1">
          <FontAwesomeIcon icon={faCopy} />
        </i>
        <i className="text-gray-400 text-2xl my-3">
          <FontAwesomeIcon icon={faSearch} />
        </i>
        <i className="text-gray-400 text-2xl my-3">
          <FontAwesomeIcon icon={faCodeBranch} />
        </i>
        <i className="text-gray-400 text-2xl my-3">
          <FontAwesomeIcon icon={faPlay} />
        </i>
        <i className="text-gray-400 text-2xl my-3">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </i>
        <i className="text-gray-400 text-2xl my-3">
          <FontAwesomeIcon icon={faDocker} />
        </i>
        <i className="text-gray-400 text-2xl my-3">
          <FontAwesomeIcon icon={faDochub} />
        </i>
        <i className="text-gray-400 text-2xl my-3">
          <FontAwesomeIcon icon={faUserCircle} />
        </i>

        <i className="text-gray-400 text-2xl my-3 bottom-0 relative">
          <FontAwesomeIcon icon={faCog} />
        </i>
      </aside>

      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
          deleniti. Quos nihil molestias neque atque, qui ea maxime nemo unde
          distinctio molestiae nisi iste delectus officia consectetur rem
          voluptas? Pariatur! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dolore, deleniti. Quos nihil molestias neque atque,
          qui ea maxime nemo unde distinctio molestiae nisi iste delectus
          officia consectetur rem voluptas? Pariatur! Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Dolore, deleniti. Quos nihil
          molestias neque atque, qui ea maxime nemo unde distinctio molestiae
          nisi iste delectus officia consectetur rem voluptas? Pariatur! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Dolore, deleniti.
          Quos nihil molestias neque atque, qui ea maxime nemo unde distinctio
          molestiae nisi iste delectus officia consectetur rem voluptas?
          Pariatur!
        </p>

        <section>Terminal</section>
      </section>
    </main>
  </section>
);
