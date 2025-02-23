import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import photo from '../assets/photo.jpg'; // Import the image

const HomePage = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Software Engineer", "Full-stack Developer" /*, "Freelancer" */],
      typeSpeed: 70,
      backSpeed: 55,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      className="flex flex-col-reverse items-center justify-center h-screen px-0 text-center space-y-8 md:flex-row md:space-y-0 md:space-x-10 lg:px-20"
    >
      <div className="w-full md:w-1/2 md:order-last">
        <h5 className="text-sm md:text-base">
          Hi, I'm <span className="text-[#007ced] font-medium" ref={typedElement}></span>
        </h5>
        <h1 className="text-3xl font-bold text-[#007ced] mt-3 md:text-4xl lg:text-5xl hover:cursor-auto">
          Abdelillah Chikh
        </h1>
        <p className="mt-5 text-sm md:text-base lg:text-lg">
          Passionate Computer Science Engineer specializing in web development. With a strong foundation in programming.
        </p>
        <div className="mt-6 flex flex-wrap justify-center space-x-4">
          <a
            href="#"
            className="px-6 py-2 bg-[#007ced] text-white rounded-3xl inline-block hover:bg-transparent hover:border-[#007ced] hover:border-2 transition"
          >
            Download CV
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="text-2xl hover:text-[#007ced] transition"
            aria-label="Twitter"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-2xl hover:text-[#007ced] transition"
            aria-label="LinkedIn"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-2xl hover:text-[#007ced] transition"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="w-4/5 md:w-1/2 flex justify-center md:order-first">
        <img
          src={photo} // Use the imported image
          alt="Abdelillah Chikh"
          className="w-60 h-60 object-cover rounded-full shadow-lg md:w-80 md:h-80 transition-transform duration-500 transform hover:scale-110 border-solid border-4 border-[#007ced]"
        />
      </div>
    </section>
  );
};

export default HomePage;