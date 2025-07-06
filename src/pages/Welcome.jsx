import { WelcomeModal } from "../components/WelcomeModal";

const Welcome = () => {
  return (
    <div className="">
      <WelcomeModal
        img="/image/welcome2.png"
        title={"Text to Image with ART.AI"}
        description={
          "Enter a prompt, choose a style, and watch ART.AI bring your ideas to life!"
        }
      />
    </div>
  );
};

export default Welcome;
