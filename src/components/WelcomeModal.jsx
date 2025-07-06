import { Link } from "react-router-dom";

export const WelcomeModal = ({ img, title, description }) => {
  return (
    <div className="w-full h-screen bg-[#111417] relative">
      {/* Фоновое изображение */}
      <img className="absolute top-0 left-0 w-full" src={img} alt="image" />

      {/* Крестик для выхода */}
      <Link to="/auth">
        <img
          className="absolute z-10 right-[24px] top-[24px] w-[24px] h-[24px] cursor-pointer"
          src="/image/close.svg"
          alt="close"
        />
      </Link>

      {/* Градиентный оверлей */}
      <div
        className="absolute top-[305px] h-[222px] w-full"
        style={{
          background: "linear-gradient(180deg, #00000000 0%, #131619 100%)",
        }}
      ></div>

      {/* Контент */}
      <div className="absolute bottom-0 z-10 px-[24px] pb-[24px] w-full text-center">
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
