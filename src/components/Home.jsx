import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Pizzacard from "./Pizzacard";

function Home() {
  return (
    <>
      <div className=" bg-[url('/Assets/Iteration-1-assets/home-banner.png')] bg-cover bg-no-repeat flex justify-center ">
        <div className="flex flex-col items-center text-white pb-64 pt-10">
          <h1 className="font-londrina text-5xl mb-12">Teknolojik Yemekler</h1>
          <div className="flex flex-col items-center">
            <p className="font-satisfy text-yellow text-3xl ">
              fırsatı kaçırma
            </p>
            <h2 className="font-roboto font-light text-7xl text-center leading-[5.5rem]  w-[398px] md:w-full ">
              KOD ACIKTIRIR <br /> PİZZA, DOYURUR
            </h2>
            <Link to={`/order`}>
              <button className="bg-yellow text-black rounded-full w-[193px] h-14 font-barlow font-semibold ">
                ACIKTIM
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-14 h-24 *:gap-6 ">
        {" "}
        <div className="flex items-center">
          <img src="Assets/Iteration-2-aseets/icons/2.svg" alt="" />
          Pizza
        </div>
        <div className="flex items-center">
          <img src="Assets/Iteration-2-aseets/icons/3.svg" alt="" />
          Burger
        </div>
        <div className="flex items-center ">
          <img src="Assets/Iteration-2-aseets/icons/4.svg" alt="" />
          Kızartmalar
        </div>
        <div className="flex items-center ">
          <img src="Assets/Iteration-2-aseets/icons/5.svg" alt="" />
          Fast Food
        </div>
        <div className="flex items-center">
          <img src="Assets/Iteration-2-aseets/icons/6.svg" alt="" />
          Gazlı İçecek
        </div>
      </div>
      <div className="bg-[#FAF7F2] ">
        <div className="flex justify-center pt-16 gap-4">
          <div className="bg-[url('/Assets/Iteration-2-aseets/cta/kart-1.png')] w-[531px] h-[449px] bg-cover bg-no-repeat *:text-white rounded-md pt-12 pl-14 ">
            <h1 className="text-6xl font-quattrocento font-weigh pb-1">
              Özel <br />
              Lezzet Us
            </h1>
            <h2 className="text-xl font-barlow font-semibold ">
              Position:Absolute Acı Burger
            </h2>
            <Link to={`/order`}>
              <button className=" absolute bg-white text-red rounded-full w-[138px] h-14 font-barlow font-semibold mt-10">
                SİPARİŞ VER
              </button>
            </Link>
          </div>

          <div className=" flex flex-col gap-2">
            <div className="bg-[url('/Assets/Iteration-2-aseets/cta/kart-2.png')] w-[531px] h-[220px] bg-cover bg-no-repeat rounded-md pt-6 pl-8">
              <h2 className="text-3xl font-barlow font-semibold text-white ">
                Hacklathon <br /> Burger Menü
              </h2>
              <Link to={`/order`}>
                {" "}
                <button className=" absolute bg-white text-red rounded-full w-[138px] h-14 font-barlow font-semibold mt-10">
                  SİPARİŞ VER
                </button>
              </Link>
            </div>
            <div className="bg-[url('/Assets/Iteration-2-aseets/cta/kart-3.png')] w-[531px] h-[220px] bg-cover bg-no-repeat rounded-md pt-6 pl-8">
              <h2 className="text-3xl font-barlow font-semibold text-black ">
                <span className="text-red">Çoooook</span> hızlı
                <br />
                npm gibi kurye
              </h2>
              <Link to={`/order`}>
                {" "}
                <button className=" absolute bg-white text-red rounded-full w-[138px] h-14 font-barlow font-semibold mt-10">
                  SİPARİŞ VER
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16">
          <div className="font-satisfy text-red text-3xl mb-2 ">
            en çopk paketlenen menüler
          </div>
          <h1 className="font-barlow text-5xl font-semibold mb-2">
            {" "}
            Acıktıran Kodlara Doyuran Lezzetler
          </h1>
        </div>

        <div className="flex justify-center gap-5 h-16 *:gap-2 *:border *:bg-white *:rounded-full *:px-6 mt-4 ">
          {" "}
          <div className="flex items-center hover:bg-dark-gray hover:text-white">
            <img src="Assets/Iteration-2-aseets/icons/2.svg " alt="" />
            Pizza
          </div>
          <div className="flex items-center hover:bg-dark-gray hover:text-white">
            <img src="Assets/Iteration-2-aseets/icons/3.svg" alt="" />
            Burger
          </div>
          <div className="flex items-center hover:bg-dark-gray hover:text-white">
            <img src="Assets/Iteration-2-aseets/icons/4.svg" alt="" />
            Kızartmalar
          </div>
          <div className="flex items-center hover:bg-dark-gray hover:text-white ">
            <img src="Assets/Iteration-2-aseets/icons/5.svg" alt="" />
            Fast Food
          </div>
          <div className="flex items-center hover:bg-dark-gray hover:text-white">
            <img src="Assets/Iteration-2-aseets/icons/6.svg" alt="" />
            Gazlı İçecek
          </div>
        </div>
        <div className="flex justify-center gap-8 *:bg-white *:w-[419] *:h-[334] mt-8 pb-16">
          <Pizzacard
            src="Assets/Iteration-2-aseets/pictures/food-1.png"
            cname="Terminal Pizza"
          />
          <Pizzacard
            src="Assets/Iteration-2-aseets/pictures/food-2.png"
            cname="Position Absolute Acı Pizza"
          />
          <Pizzacard
            src="Assets/Iteration-2-aseets/pictures/food-3.png"
            cname="Position Absolute Acı Pizza"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;