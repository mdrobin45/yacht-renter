"use client";
import playButton from "../../../utils/play_button_lottie.json";
import Container from "../../global/container/container";
import SubHeading from "../../global/subHeading/subHeading";
import sectionBG from "/public/images/watch_video-bg.jpg";

const WatchVideo = () => {
   const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: playButton,
   };
   return (
      <section
         style={{
            background: `linear-gradient(0deg, rgba(6, 17, 56, 0.7), rgba(6, 17, 56, 0.7)), url(${sectionBG.src})`,
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
         }}
         className="py-32">
         <Container>
            <SubHeading className="justify-center">Discover</SubHeading>
            <h2 className="text-4xl text-white text-center font-bold">
               Watch Yacht Video
            </h2>
            {/* <LottiePlayer options={defaultOptions} width={100} height={100} /> */}
         </Container>
      </section>
   );
};

export default WatchVideo;
