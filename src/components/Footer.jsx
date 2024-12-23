import React from "react";

function Footer() {
  return (
    <div className="bg-dark-gray w-full flex flex-col items-center">
      <div className="w-[1066px]  text-white flex flex-col py-10 ">
        <div className="flex justify-center items-center w-full  justify-between ">
          <div className="flex flex-col">
            <h1 className="font-londrina text-4xl  mb-7">
              Teknolojik <br /> Yemekler
            </h1>
            <div>
              <address>
                <ul className="footer-address flex flex-col gap-6">
                  <li className="flex gap-2 items-start">
                    <img
                      src="Assets/Iteration-2-aseets/footer/icons/icon-1.png"
                      alt="adres"
                    />
                    341 Londonderry Road, <br />
                    Istanbul Türkiye
                  </li>
                  <li className="flex gap-2 items-start">
                    <img
                      src="Assets/Iteration-2-aseets/footer/icons/icon-2.png"
                      alt="mail"
                    />
                    <a href="mailto:aciktim@teknolojikyemekler.com">
                      aciktim@teknolojikyemekler.com
                    </a>
                  </li>
                  <li className="flex gap-2 items-start">
                    <img
                      src="Assets/Iteration-2-aseets/footer/icons/icon-3.png"
                      alt="tel"
                    />
                    <a href="tel:++90 216 123 45 67"> +90 216 123 45 67</a>
                  </li>
                </ul>
              </address>
            </div>
          </div>
          <div>
            <h2 className="font-barlow font-semibold text-2xl mb-7">
              Hot Menu
            </h2>
            <ul className="font-light text-white text-lg flex flex-col gap-2">
              <li>Terminal Pizza</li>
              <li>5 Kişilik Hackathlon Pizza</li>
              <li>useEffect Tavuklu Pizza</li>
              <li>Beyaz Console Frosty</li>
              <li>Testler Geçti Mutlu Burger</li>
              <li>Position Absolute Acı Burger</li>
            </ul>
          </div>
          <div>
            <h2 className="font-barlow font-semibold text-2xl  mb-7">
              Instagram
            </h2>
            <div className="flex flex-wrap w-[347px] gap-4">
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-0.png"
                alt="pizza"
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-1.png"
                alt="pizza"
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-2.png"
                alt="pizza"
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-3.png"
                alt="pizza"
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-4.png"
                alt="pizza"
              />
              <img
                src="Assets/Iteration-2-aseets/footer/insta/li-5.png"
                alt="pizza"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" border-white w-full border-t opacity-[.15]"></div>
      <div className="copyright w-[1066px] h-[90px] flex items-center">
        <span className="font-light text-white">
          © 2023 Teknolojik Yemekler.
        </span>
        <img src="Assets/iteration-2/footer/icons/twitterx.png" alt="" />
      </div>
    </div>
  );
}

export default Footer;