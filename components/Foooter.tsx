import React from "react";
import { MdImageNotSupported } from "react-icons/md";
import ShimmerButton from "./ui/ShimmerButton";

const Foooter = () => {
  return (
    <div className="w-full h-screen md:h-fit flex items-center flex-col p-4 bg-gray-800 justify-center bg-transparent border-t-2">
      <div className="max-w-7xl w-full h-96 grid md:grid-cols-2 gap-4 grid-cols-1">
        <div className="w-full p-4 h-full flex items-center md:flex-col justify-center rounded-xl">
          <MdImageNotSupported className="text-white hidden md:block md:h-32 md:w-32 lg:w-36 lg:h-36" />
          <div className="flex items-center justify-center mx-auto flex-col">
            <h1 className="text-lg text-white font-bold mx-auto text-wrap md:text-xl text-center">
              Doğal Güzelliği Evlerinize Taşıyoruz
            </h1>
            <span className="text-sm text-slate-200 text-center flex-wrap font-semibold mt-2">
              Kaliteli mermer ve doğal taş ürünleriyle, ev ve iş yerlerinize
              doğal güzellik katıyoruz. Türkiye'nin dört bir yanına hizmet
              veriyoruz. İhtiyaçlarınız için bize ulaşın ve projelerinize uygun
              çözümler bulun.
            </span>
            <a href="tel:905522403705">
              {" "}
              <ShimmerButton content="Hemen Arayın" />
            </a>
          </div>
        </div>
        <div className="w-full h-full overflow-hidden rounded-xl bg-neutral-800 drop-shadow-lg p-2 flex items-center justify-center">
          <img
            src="/footer-image.jpg"
            alt="footer marble image"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>
      <div className="w-full mt-2 max-w-7xl h-24 rounded-xl flex items-center gap-4 justify-center">
        <a href="https://www.instagram.com/aydinmermercilik/">
          <img src="/insta.svg" className="w-12 h-12" />
        </a>
        <a href="https://wa.me/905522403705">
          {" "}
          <img src="/wha.svg" className="w-12 h-12" />
        </a>
        <a href="#">
          <img src="/app.svg" className="w-12 h-12" />
        </a>
      </div>
      <div className="text-neutral-700 font-semibold ">
        © 2024 Aydın Mermer. Tüm hakları saklıdır.
      </div>
    </div>
  );
};

export default Foooter;
