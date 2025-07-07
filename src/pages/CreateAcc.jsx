import { useState } from "react";
import { Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { SendCodeToEmail } from "../components/SendCodeToEmail";

const CreateAcc = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [errorTest, setErrorTest] = useState("");
  const handlePhoneInput = (e) => {
    let val = e.target.value.replace(/[^0-9]/g, "");
    if (val.length > 10) val = val.slice(0, 10);
    setPhone(val);

    if (val.length >= 10) {
      setErrorTest("");
    }
  };

  const SubmitFun = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const email = e.target.email.value;

    if (phone.length < 10) {
      setErrorTest("Phone number must be at least 10 digits long.");
      return;
    }

    try {
      // Generate a random 4-digit code
      const generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
      await SendCodeToEmail(email, generatedCode);

      setErrorTest("");
      navigate("/verification", {
        state: { code: generatedCode, email: email },
      });
    } catch (error) {
      setErrorTest("Failed to send code. Please try again.");
    }
  };

  return (
    <div className="h-screen w-full bg-[#111417] px-[24px] pt-[48px] pb-[25px] flex flex-col">
      <h1 className="text-[#E7E8E8] text-[24px] font-[500] pb-[4px]">
        Create an Account
      </h1>
      <p className="text-[#616365] text-[14px] font-[500] pb-[24px] leading-[20px]">
        Create a ART.AI account to gain access to more creation tools, publish &
        curate your AI generated art!
      </p>

      <form onSubmit={SubmitFun} className="flex flex-col flex-1">
        <div className="flex-1">
          <div className="mb-[16px]">
            <label
              className="block text-[#B6B7B8] text-[14px] mb-[16px]"
              htmlFor="email"
            >
              e-Mail Address
            </label>
            <div className="w-full flex gap-[12px] p-[10px_12px] border border-[#B6B7B84D] rounded-[8px]">
              <img
                className="w-[24px] h-[24px]"
                src="/image/Lead Icon.svg"
                alt="email icon"
              />
              <input
                type="email"
                id="email"
                className="placeholder-[#B6B7B8] outline-none"
                style={{ color: "#B6B7B8" }}
                placeholder="e-Mail Address"
                required
              />
            </div>
          </div>

          <div className="mb-[16px]">
            <label
              className="block text-[#B6B7B8] text-[14px] mb-[16px]"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div
              style={{ borderColor: errorTest ? "#D0302F" : "#B6B7B84D" }}
              className="w-full flex gap-[12px] p-[10px_12px] border rounded-[8px]"
            >
              <img
                className="w-[33px] h-[24px] mt-[-2px]"
                src="/image/Lead Text.svg"
                alt="email icon"
              />
              <input
                type="tel"
                id="phone"
                className="placeholder-[#B6B7B8] outline-none"
                style={{ color: "#B6B7B8" }}
                placeholder="Phone Number"
                required
                value={phone}
                onChange={handlePhoneInput}
              />
            </div>

            {errorTest && (
              <div className="flex gap-2">
                <img src="/image/Outline.svg" alt="" />
                <p className="text-[#D0302F] text-[14px] pt-[16px]">
                  {errorTest}
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-[12px] items-center">
            <Checkbox
              checked={isChecked}
              onChange={(e) => setChecked(e.target.checked)}
              style={{ transform: "scale(1.2)" }}
            />
            <p className="!mb-0 text-[#CDCECF] text-[14px]">
              I agree with
              <span className="text-[#A6DA8E]"> Terms and conditions</span>
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isChecked}
          className={`w-full h-[48px] font-[600] rounded-[4px] mt-4
          ${
            isChecked
              ? "bg-[#B6F09C] text-[#131619] cursor-pointer"
              : "bg-[#B6F09C] text-[#131619] opacity-50 cursor-not-allowed"
          }`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAcc;
