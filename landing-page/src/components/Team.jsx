import React from "react";
import foto from "../assets/images/01.jpg";

function Team() {
  return (
    <div>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold py-7">MEET THE TEAM </h1>
        <p className="text-gray-500 text-xl pb-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          dolorum.
        </p>
        <div className="grid grid-cols-4 gap-10">
          <div className="flex flex-col my-10">
            <img src={foto} />
            <h4 className="py-2 text-xl font-semibold">John Die</h4>
            <p>Director</p>
          </div>
          <div className="flex flex-col my-10">
            <img src={foto} />
            <h4 className="py-2 text-xl font-semibold">John Die</h4>
            <p>Director</p>
          </div>
          <div className="flex flex-col my-10">
            <img src={foto} />
            <h4 className="py-2 text-xl font-semibold">John Die</h4>
            <p>Director</p>
          </div>
          <div className="flex flex-col my-10">
            <img src={foto} />
            <h4 className="py-2 text-xl font-semibold">John Die</h4>
            <p>Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
