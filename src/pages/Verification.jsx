import { Input } from "antd";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";
import ResendEmailButton from "../components/ResendEmailButton";
import { SendCodeToEmail } from "../components/SendCodeToEmail";

export const Verification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { code, email } = location.state || {};
  const [inputCode, setInputCode] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const onChange = (text) => {
    setInputCode(text);
  };

  const verifyCode = () => {
    if (inputCode === code) {
      navigate("/home", {
        state: { status: "success" },
      });
    } else {
      console.error("Invalid code. Please try again.");
      setInputCode("");
      messageApi.open({
        type: "warning",
        content: "Invalid code. Please try again.",
      });
    }
  };

  return (
    <div className="h-screen w-full bg-[#111417] px-[24px] pt-[48px] pb-[25px] flex flex-col flex-1">
      {contextHolder}
      <div className="flex-1">
        <h1 className="text-[#E7E8E8] text-[24px] font-[500] pb-[4px]">
          Verification
        </h1>
        <p className="text-[#616365] text-[14px] font-[500] pb-[24px] leading-[20px]">
          We have sent an OTP code to your email address{" "}
          <span className="text-[#aeaeaf]">{email}</span>. Enter the OTP code
          below to verify.
        </p>

        <Input.OTP
          length={4}
          formatter={(str) => str.toUpperCase()}
          onChange={onChange}
          value={inputCode}
          type="number"
          size="large"
        />

        <ResendEmailButton
          onResend={() => {
            // Generate a random 4-digit code
            const generatedCode = Math.floor(
              1000 + Math.random() * 9000
            ).toString();
            SendCodeToEmail(email, generatedCode);
            navigate(location.pathname, {
              state: { code: generatedCode, email: email },
            });
          }}
        />
      </div>

      <button
        onClick={verifyCode}
        disabled={!inputCode}
        className={`w-full h-[48px] font-[600] rounded-[4px] mt-4
          ${
            inputCode.length === 4
              ? "bg-[#B6F09C] text-[#131619] cursor-pointer"
              : "bg-[#B6F09C] text-[#131619] opacity-50 cursor-not-allowed"
          }`}
      >
        Create Account
      </button>
    </div>
  );
};
