import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="relative h-screen w-full bg-[#111417] overflow-hidden">
      {/* Верхняя панель с логотипом */}
      <div className="py-[24px] flex items-center justify-center z-10 relative">
        <img src="/image/Logo.svg" className="h-[55px]" alt="Logo" />
      </div>

      {/* Фоновое изображение */}
      <img
        className="absolute top-[101px] left-[0] overflow-hidden h-screen w-full"
        src="/image/cat.png"
        alt=""
      />

      {/* Градиентный оверлей */}
      <div
        className="absolute bottom-0 h-[222px] w-full"
        style={{
          background: "linear-gradient(180deg, #00000000 0%, #131619 100%)",
        }}
      ></div>

      {/* Контент */}
      <div className="absolute bottom-0 z-10 px-[24px] pb-[24px] w-full text-center">
        <h1 className="text-[#CEF5BD] text-[48px] leading-[48px] font-[600] mb-[64px]">
          Create <br /> artwork <br /> with AI
        </h1>

        <div className="space-y-3">
          <Link
            to="/create-account"
            className="block w-full py-[12px] text-center font-[600] bg-[#B6F09C] text-[#131619] rounded-[4px]"
          >
            Create an Account
          </Link>

          <button className="w-full py-[12px] border border-[#B6F09C] !text-[#B6F09C] rounded-[4px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
