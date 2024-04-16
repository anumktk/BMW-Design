import React, { useState } from "react";

function Video() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videos = [
    "https://www.youtube.com/embed/ALS_3hsTIYk",
    "https://www.youtube.com/embed/pWcYIeD0S4o",
    "https://www.youtube.com/embed/32L870Lk9Cc",
    "https://www.youtube.com/embed/3rX8Ou0YF6k",
    "https://www.youtube.com/embed/oSpdlJRTTNk",
    "https://www.youtube.com/embed/AlxyrW0Jl7o",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl text-blue text-blue-600 text-center mb-8">
        Our Videos
      </h1>
      <div className="relative overflow-hidden">
        <div className="flex -mx-2">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`w-full px-2 ${
                index !== currentIndex ? "hidden" : ""
              }`}
            >
              <div className="mb-4">
                <iframe
                  title={`video${index + 1}`}
                  className="w-full"
                  height="400"
                  src={video}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
        {/* Slide Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-black bg-opacity-50">
          <button className="text-white focus:outline-none" onClick={prevSlide}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-black bg-opacity-50">
          <button className="text-white focus:outline-none" onClick={nextSlide}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* End of Slide Controls */}
      </div>
    </div>
  );
}

export default Video;

// import React from "react";

// function VideoSlider() {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-5xl text-blue text-blue-600 text-center mb-8">
//         Our Videos
//       </h1>
//       <div className="relative overflow-hidden">
//         <div className="flex -mx-2">
//           {/* Video Slide Items */}
//           {/* video1 */}
//           <div className="w-full md:w-1/3 px-2">
//             <div className="mb-4">
//               <iframe
//                 title="video1"
//                 className="w-full"
//                 height="200"
//                 src="https://www.youtube.com/embed/ALS_3hsTIYk"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* video2 */}
//           <div className="w-full md:w-1/3 px-2">
//             <div className="mb-4">
//               <iframe
//                 title="video1"
//                 className="w-full"
//                 height="200"
//                 src="https://www.youtube.com/embed/pWcYIeD0S4o"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* video3 */}
//           <div className="w-full md:w-1/3 px-2">
//             <div className="mb-4">
//               <iframe
//                 title="video1"
//                 className="w-full"
//                 height="200"
//                 src="https://www.youtube.com/embed/32L870Lk9Cc"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* video4 */}
//           <div className="w-full md:w-1/3 px-2">
//             <div className="mb-4">
//               <iframe
//                 title="video1"
//                 className="w-full"
//                 height="200"
//                 src="https://www.youtube.com/embed/3rX8Ou0YF6k"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* video 5 */}
//           <div className="w-full md:w-1/3 px-2">
//             <div className="mb-4">
//               <iframe
//                 title="video1"
//                 className="w-full"
//                 height="200"
//                 src="https://www.youtube.com/embed/oSpdlJRTTNk"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* video 6*/}
//           <div className="w-full md:w-1/3 px-2">
//             <div className="mb-4">
//               <iframe
//                 title="video1"
//                 className="w-full"
//                 height="200"
//                 src="https://www.youtube.com/embed/AlxyrW0Jl7o"
//                 frameBorder="0"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* Add more video slide items here */}
//         </div>
//         {/* Slide Controls */}
//         <div className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-black bg-opacity-50">
//           <button className="text-white focus:outline-none">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//         </div>
//         <div className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-black bg-opacity-50">
//           <button className="text-white focus:outline-none">
//             <svg
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//         {/* End of Slide Controls */}
//       </div>
//     </div>
//   );
// }

// export default VideoSlider;
