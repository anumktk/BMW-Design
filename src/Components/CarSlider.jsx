import React, { useState } from "react";
import car1 from "../Assets/car1.png";
import car2 from "../Assets/car2.png";
import car3 from "../Assets/car3.png";
import car4 from "../Assets/car4.png";
import car5 from "../Assets/car5.png";

const CarSlider = () => {
  const images = [car1, car2, car3, car4, car5];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="grid grid-cols-2 m-20">
      {/* grid 1 */}
      <div className="flex-row ">
        <h1 className="text-5xl text-blue-600 font-bold mr-24">Our</h1>
        <h1 className="text-5xl font-bold ml-20">CARS</h1>
        <div className="flex mt-8 justify-center">
          <button
            type="button"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-300"
            onClick={prevSlide}
          >
            {/* this is code is for arrow key  */}
            &larr;
          </button>
          <button
            type="button"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-300 ml-2"
            onClick={nextSlide}
          >
            {/* this is code is for arrow key. it is called character entity */}
            &rarr;
          </button>
        </div>
      </div>
      {/* grid 2 */}
      <div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`p-4 ${index === currentSlide ? "block" : "hidden"}`}
          >
            <img
              src={image}
              alt={`slide-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSlider;

// import React from "react";
// import bmw8 from "../Assets/bmw8.png";

// const CarSlider = () => {
//   return (
//     <div className="flex mt-20 mb-20">
//       <div className="flex-row m-20">
//         <h1 className="text-5xl text-blue-600 font-bold mr-24">Our</h1>
//         <h1 className="text-5xl font-bold ml-24">CARS</h1>
//       </div>
//       <div className="flex ml-40">
//         <img src={bmw8} alt="bmw8" />
//       </div>
//     </div>
//   );
// };

// export default CarSlider;

//  grid
//  {
//    /* <div className="grid grid-cols-2">
//         <div>1</div>
//         <div>2</div>
//       </div> */
//  }
