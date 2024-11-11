import React from "react";
import foto from "../assets/images/foto1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="container mx-auto flex my-10">
      <div>
        <img src={foto} width={1540} />
      </div>
      <div className="ml-10">
        <h1 className="text-4xl font-semibold mb-3">ABOUT US</h1>
        <p className="text-lg pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          fugit repellendus, reiciendis ratione accusantium harum adipisci earum
          iure placeat necessitatibus enim nemo, tenetur tempora laborum, iusto
          possimus voluptates! Repudiandae, debitis? At eligendi sed repellendus
          repellat rerum voluptatibus debitis officia Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quia beatae similique nulla sapiente
          nostrum voluptas enim suscipit architecto minima magni!
        </p>
        <h3 >Why Choose Us?</h3>
        <div className="flex pt-2">
          <div className="pr-5">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor.
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor
              </li>
              <li>
                <FontAwesomeIcon icon={faCheck} />
                Lorem, ipsum dolor
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
