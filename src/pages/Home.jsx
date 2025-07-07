import { message } from "antd";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const location = useLocation();
  const navigate = useNavigate();
  const { status } = location.state || {};

  useEffect(() => {
    if (status === "success") {
      messageApi.open({
        type: "success",
        content: "Email successfully verified!",
      });

      // 👇 Удаляем status из location.state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [status, messageApi, navigate, location.pathname]);

  return (
    <div className="h-screen w-full text-center bg-[#111417] px-[24px] pt-[48px] pb-[25px] flex flex-col flex-1">
      <div className="flex-1">
        {contextHolder}
        <h1 className="text-[#E7E8E8] text-[48px] leading-[52px] !font-[600] !mb-[34px]">
          Welcome to ART.AI
        </h1>

        <div>
          <p className="text-[#E7E8E8] text-[18px] !mb-[10px] font-[500] leading-[20px]">
            Create Stunning AI-Generated Art
          </p>
          <p className="text-[#616365] text-[14px] font-[500] pb-[16px] leading-[20px]">
            Join ART.AI and explore your creativity with advanced tools for
            generating, editing, and sharing your own unique AI artwork.
          </p>
        </div>

        <div>
          <p className="text-[#E7E8E8] text-[18px] !mb-[10px] font-[500] leading-[20px]">
            Share and Curate Your Art
          </p>
          <p className="text-[#616365] text-[14px] font-[500] leading-[20px]">
            Publish your creations, build your personal gallery, and get
            discovered by a vibrant community of AI art lovers.
          </p>
        </div>
      </div>

      <Link to="/projects">
        <button
          className="w-full py-[12px] text-center font-[600] bg-[#B6F09C] text-[#131619] rounded-[4px]"
        >
          Start Creating
        </button>
      </Link>
    </div>
  );
};
