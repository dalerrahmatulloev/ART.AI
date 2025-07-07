import { Link } from "react-router-dom";

export const WelcomeModal = ({ img, title, description }) => {
  return (
    <div className="w-full h-screen bg-[#111417] relative">
      <div className="relative w-full h-full">
        {/* Фоновое изображение */}
        <img className="w-full" src={img} alt="image" />

        {/* Градиентный оверлей */}
        <div
          className="absolute bottom-0 h-[222px] w-full transition-all duration-700"
          style={{
            background: "linear-gradient(180deg, #00000000 0%, #131619 100%)",
          }}
        ></div>
      </div>

      {/* Крестик для выхода */}
      <Link to="/auth">
        <img
          className="absolute z-10 right-[24px] top-[24px] w-[24px] h-[24px] cursor-pointer"
          src="/image/close.svg"
          alt="close"
        />
      </Link>

      {/* Контент */}
      <div className="absolute bottom-0 z-10 px-[24px] pb-[24px] w-full max-w-[500px] mx-auto text-center">
        <h1 className="text-[#CEF5BD] text-[48px] leading-[48px] font-[600] mb-[14px]">
          {title}
        </h1>
        <p className="text-[#616365] text-[14px] mb-[41px]">{description}</p>
        <Link to="/auth">
          <button className="bg-[#B6F09C] !text-black font-[600] w-full h-[48px] rounded-[4px]">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};
