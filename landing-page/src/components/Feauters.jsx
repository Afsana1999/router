import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faUsers,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

function Feauters() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="container mx-auto pb-14">
        <h1 className="text-4xl font-bold text-center py-10 mb-10">FEAUTERS</h1>
        <div className="grid grid-cols-4 ">
          <div className="text-center px-7">
            <div className=" bg-[#6088FD] inline text-5xl text-white p-5 rounded-full ">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className=" mt-10 pt-5 text-2xl pb-5">Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              temporibus ex, voluptatem porro ipsam perspiciatis!
            </p>
          </div>
          <div className="text-center px-7">
            <div className=" bg-[#6088FD] inline text-5xl text-white p-5 rounded-full ">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3 className=" mt-10 pt-5 text-2xl pb-5">Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              temporibus ex, voluptatem porro ipsam perspiciatis!
            </p>
          </div>
          <div className="text-center px-7">
            <div className=" bg-[#6088FD] inline text-5xl text-white p-5 rounded-full ">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </div>
            <h3 className=" mt-10 pt-5 text-2xl pb-5">Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              temporibus ex, voluptatem porro ipsam perspiciatis!
            </p>
          </div>
          <div className="text-center px-7">
            <div className=" bg-[#6088FD] inline text-5xl text-white p-5 rounded-full ">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className=" mt-10 pt-5 text-2xl pb-5">Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              temporibus ex, voluptatem porro ipsam perspiciatis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feauters;
