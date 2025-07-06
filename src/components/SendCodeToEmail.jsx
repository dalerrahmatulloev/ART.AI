import emailjs from "@emailjs/browser";

export const SendCodeToEmail = async (email, code) => {
  try {
    emailjs.send(
      "service_0sqfnb7", // ID твоего сервиса
      "template_ma6y1t9", // ID шаблона
      {
        code: code, // 👈 это подставляется в {{code}}
        email: email, // 👈 это подставляется в {{email}}, если ты используешь его в шаблоне
      },
      "bNGdpIFYwXxM8oIXi" //  публичный ключ из EmailJS
    );
  } catch (error) {
    console.error("Email error", error);
  }
};
