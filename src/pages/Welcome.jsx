import { InstallPWAButton } from "../components/InstallPWAButton";
import { WelcomeModal } from "../components/WelcomeModal";
import { Carousel } from "antd";

const Welcome = () => {
  return (
    <div className="">
      <Carousel autoplay autoplaySpeed={5000} effect="fade" >
        <WelcomeModal
          img="/image/welcome1.png"
          title={"Create artwork with AI"}
          description={
            "Create a ART.AI account to gain access to more creation tools, publish & curate your AI generated art!"
          }
        />
        <WelcomeModal
          img="/image/welcome2.png"
          title={"Text to Image with ART.AI"}
          description={
            "Enter a prompt, choose a style, and watch ART.AI bring your ideas to life!"
          }
        />
        <WelcomeModal
          img="/image/welcome3.png"
          title={"Discover Various Art Styles"}
          description={
            "Potential unfold and create captivating art on our Text-to-Art Generator"
          }
        />
      </Carousel>

      <InstallPWAButton style={{ position: "fixed", bottom: 20, right: 20 }} />
    </div>
  );
};

export default Welcome;
