import React from "react";
import bmw1 from "../Assets/bmw1.png";
import bmw2 from "../Assets/bmw2.png";
import bmw3 from "../Assets/bmw3.png";
import bmw4 from "../Assets/bmw4.png";
import bmw5 from "../Assets/bmw5.png";
import bmw6 from "../Assets/bmw6.png";
import bmw7 from "../Assets/bmw7.png";
import bmw8 from "../Assets/bmw8.png";

const Collections = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-5xl text-blue-600"> Bmw Collections </h1>
      {/* grid */}
      <div class="grid grid-rows-3 grid-flow-col gap-4 m-16">
        <div>
          <img src={bmw1} alt="bmw1" />
        </div>
        <div>
          <img src={bmw2} alt="bmw2" />
        </div>
        <div>
          <img src={bmw3} alt="bmw3" />
        </div>
        {/* sub grid */}
        <div class="grid grid-rows-subgrid gap-4 row-span-2">
          <div>
            <img src={bmw7} alt="bmw7" />
          </div>
        </div>
        <div>
          <img src={bmw4} alt="bmw4" />
        </div>
        <div>
          <img src={bmw5} alt="bmw5" />
        </div>
        <div>
          <img src={bmw6} alt="bmw6" />
        </div>
        <div>
          <img src={bmw8} alt="bmw8" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-5xl text-blue-600">Bmw Forever</h1>
        <p className="mt-10">
          Life has many unforgettable moments in store for us. Some, we think
          back on <br />
          fondly; others, less so. But every one of them is unique. That is why
          a BMW is <br />
          more than just a method of transportation. It is a companion that
          creates space
          <br /> for emotion and allows us to feel the joy which lives within
          every single moment.
          <br /> Dive into the emotional farewell drive in this video, and
          discover exclusive behind-
          <br />
          the-scenes recordings from the film production.
        </p>
      </div>
    </div>
  );
};

export default Collections;

// {
//   /* grid */
// }
// <div class="grid grid-rows-3 grid-flow-col gap-4">
//   <div>01</div>
//   <div>02</div>
//   <div>03</div>
//   {/* sub grid */}
//   <div class="grid grid-rows-subgrid gap-4 row-span-2">
//     <div>07</div>
//   </div>
//   <div>04</div>
//   <div>05</div>
//   <div>06</div>
//   <div>08</div>
// </div>;
