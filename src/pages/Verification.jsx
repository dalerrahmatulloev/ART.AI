import { Input } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Verification = () => {
  const location = useLocation();
  const { code, email } = location.state || {};
  console.log(code);

  const [inputCode, setInputCode] = useState("");

  const onChange = (text) => {
    setInputCode(text);
  };

  const verifyCode = () => {
    if (inputCode === code) {
      console.log("Code verified successfully!");
      alert("Code verified successfully!");
    } else {
      console.error("Invalid code. Please try again.");
      setInputCode("");
      alert("Invalid code. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full bg-[#111417] px-[24px] pt-[48px] pb-[25px] flex flex-col flex-1">
      <div className="flex-1">
        <h1 className="text-[#E7E8E8] text-[24px] font-[500] pb-[4px]">
          Verification
        </h1>
        <p className="text-[#616365] text-[14px] font-[500] pb-[24px] leading-[20px]">
          We have sent an OTP code to your email address{" "}
          <span className="text-[#d0d0d1]">{email}</span>. Enter the OTP code
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
