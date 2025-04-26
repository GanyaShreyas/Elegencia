import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className='max-w-2xl mx-auto text-center space-y-8'>
                  <h1 className='text-3xl sm:text-4xl font-bold text-white'>
                      Stay Updated with Latest Products
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <input
                          data-aos="fade-up"
                          type="email"
                          placeholder="Enter your email"
                          className="w-full sm:w-[400px] px-6 py-3 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                      />
                      <button 
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                      >
                          Subscribe Now
                      </button>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
