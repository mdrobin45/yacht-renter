"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";
// import "react-modal-video/scss/modal-video.scss";
import "react-modal-video/scss/modal-video.scss";
import Container from "../../global/container/container";
import SubHeading from "../../global/subHeading/subHeading";
import PlayIcon from "/public/images/play.png";
import sectionBG from "/public/images/watch_video-bg.jpg";

const WatchVideo = () => {
   const [videoOpen, setVideoOpen] = useState(false);
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
            <Image
               onClick={() => {
                  setVideoOpen(true);
               }}
               className="mx-auto cursor-pointer mt-4 animate-pulse"
               width={100}
               height={100}
               src={PlayIcon.src}
               alt="Play"
            />
            <ModalVideo
               channel="youtube"
               isOpen={videoOpen}
               videoId="YwMLNJ9FkXg"
               onClose={() => {
                  setVideoOpen(false);
               }}
            />
         </Container>
      </section>
   );
};

export default WatchVideo;
