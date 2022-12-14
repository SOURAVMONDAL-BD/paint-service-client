import React from 'react';
import img1 from "../../../img/7399226.jpg";
import img2 from "../../../img/girl_dress_back_180944_3840x2160.jpg";
import img3 from "../../../img/spring_painting-wallpaper-1280x800.jpg";
import img4 from "../../../img/vincent_van_gogh_the_starry_night_oil_canvas_117815_1600x900.jpg";

const Banner = () => {


    return (
        <div>


            <div className="carousel w-5/6 mx-auto">
                <div id="item1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" alt="bn" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-10 top-1/3">
                        <h1 className='font-bold text-white md:text-2xl lg:text-4xl'>Welcome to<br/> <span>Paint Hub</span></h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-10 md:top-1/2 sm:top-1/2 top-2/3">
                        <p className=' text-white  md:text-xl'>Lets dive into the beautiful world of painting.<br/>And mark yourself as a painting lover</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-10 md:top-3/4  bottom-0">
                        <button className="btn btn-secondary btn-xs sm:btn-sm md:btn-secondary text-xs">Get Started</button>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-full" alt="bn" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-full" alt="bn" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} className="w-full" alt="bn" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn  btn-primary btn-xs">1</a>
                <a href="#item2" className="btn  btn-primary btn-xs">2</a>
                <a href="#item3" className="btn  btn-primary btn-xs">3</a>
                <a href="#item4" className="btn  btn-primary btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;