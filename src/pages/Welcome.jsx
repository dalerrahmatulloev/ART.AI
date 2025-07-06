import { InstallPWAButton } from "../components/InstallPWAButton";
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

      <InstallPWAButton style={{ position: "fixed", bottom: 20, right: 20 }} />
    </div>
  );
};

export default Welcome;
