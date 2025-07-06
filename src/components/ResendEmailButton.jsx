import { useEffect, useState } from "react";
import { Button } from "antd"; // можно и обычный <button>

const ResendEmailButton = ({ onResend }) => {
  const [timeLeft, setTimeLeft] = useState(30); // 30 секунд по умолчанию

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleResend = () => {
    if (timeLeft == 0) {
      setTimeLeft(60); // сбрасываем таймер на 1 минуту
      onResend(); // вызываем переданную функцию отправки письма
    }
  };

  return (
    <div className="flex justify-between items-center p-[10px] mt-[21px]">
      <p className="text-[#616365] text-[14px] font-[500] !m-0">
        {timeLeft > 0 ? `${formatTime(timeLeft)}` : "Send the code now."}
      </p>

      <button onClick={handleResend} className="!text-[#E7E8E8]">
        Resend Code
      </button>
    </div>
  );
};

export default ResendEmailButton;
