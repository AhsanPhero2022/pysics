import React from "react";
import banner from "../../assets/banner.jpg";
import Physics from "./Physics";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mb-16">
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/356660321_2528233510665853_2103152633883545906_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeFKCMRIK36r6Y3HzWGnecre_sv71TwkzGH-y_vVPCTMYf9VjC9GlqJ1gfkha4ceXsKLGlFJf8MuVK4CetLaDi5B&_nc_ohc=vS5-ZzCtQ5AAX9xxayB&_nc_ht=scontent.frjh1-1.fna&oh=00_AfDmUwLJz7ggIRy2VnM0twnzIaBee6aPvWuShowQkh--Yw&oe=649F3894"
              className="w-full lg:h-[800px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/355301768_1876818019369006_5758827967443531838_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHXv8yK0tMIj8xKs70dfyT2QjDCBjP4AvFCMMIGM_gC8TDcXr7O7gEgm96bw-vMsQwv_LLDaLYRX_tPWyC6DDNd&_nc_ohc=vZD0E_m9m1MAX8Ehwsq&_nc_ht=scontent.frjh1-1.fna&oh=00_AfCacr5PZd8sByCQRR6P6mB-T21iHl-8rPinEVAglHVtHA&oe=649F6A84"
              className="w-full lg:h-[800px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/351967397_244918734904234_3323201626289657715_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeELBM7JRYC1060hv884oN1BEGLr8NxodAEQYuvw3Gh0AZjaza8RcC01LFLWabX3VligaesW_GOG5k-y_dqCP7K6&_nc_ohc=p_ct2nsdbHAAX_o-9--&_nc_ht=scontent.frjh1-1.fna&oh=00_AfCeiQdGRK7UiJLxec8NQOJXa39mGx3Qwu-DJLyYxawx4w&oe=64A06A16"
              className="w-full lg:h-[800px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://scontent.frjh1-1.fna.fbcdn.net/v/t39.30808-6/351836748_803107407686180_2011213113920311924_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHyNdxOnegfpxBMcdZRsrWTlGB5VsIFZT-UYHlWwgVlP0HoYmN8CRW1pZA0BZ3RtmihIJ2RulG4FeAFNqsMYgly&_nc_ohc=z7jw10JaROEAX-8oXvT&_nc_ht=scontent.frjh1-1.fna&oh=00_AfAZzGggFxzutBaU_yWfh35adyhjDCIfSvCZlQ0kUf52uQ&oe=649FA2F8"
              className="w-full lg:h-[800px]"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className="
      "
        >
          <img className="min-h-full w-full relative  " src={banner} alt="" />
        </div> */}

        <Link className="flex justify-center" to="/register">
          <button className="btn btn-info lg:-mt-24 absolute opacity-50 mt-4">
            Join now
          </button>
        </Link>
      </div>

      {/* banner end here */}

      <div className="h-72">
        <h2 className="text-2xl font-semibold text-center mt-24">
          Our Success
        </h2>
        <div className="grid  mt-8 gap-5 lg:grid-cols-3 text-center  lg:px-40 lg:py-8">
          <div>
            <h1 className="text-2xl font-bold">2K+</h1>
            <p>BUET</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">100%</h1>
            <p>MEDICAL</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold">10k+</h1>
            <p>CRUET</p>
          </div>
        </div>
      </div>
      {/* Physics section end here */}
      <Physics></Physics>
      <Contact></Contact>
    </div>
  );
};

export default Home;
