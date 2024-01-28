import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import Container from "../../global/container/container";
import SubHeading from "../../global/subHeading/subHeading";
import aboutThumbnail from "/public/images/about4.jpg";

const About = () => {
   return (
      <Container>
         <section className="flex items-center justify-between py-20">
            <div className="w-2/4">
               <Image
                  className="rounded-md"
                  width={450}
                  height={600}
                  src={aboutThumbnail.src}
                  alt="about"
               />
            </div>
            <div className="w-2/4">
               <SubHeading>SINCE 1880</SubHeading>
               <h2 className="text-h2 font-bold">Enjoy Yachting</h2>
               <p className="text-gray-500">
                  Lorem ipsum elementum sesue in the aucanion vestibulum aliquam
                  usto inthe sapien rutrum volutate inthemiss quis the
                  pellentesque donec velit arcution mosuere blane nestibulum
                  suam the monte nellen.
               </p>
               <div className="gap-y-3 flex flex-col mt-4">
                  <div className="flex items-center gap-2">
                     <CiCircleCheck className="text-primary text-2xl" />
                     <p>Highly trained captains and crew</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CiCircleCheck className="text-primary text-2xl" />
                     <p>Experienced service staff</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <CiCircleCheck className="text-primary text-2xl" />
                     <p>5-Star rated customer services</p>
                  </div>
               </div>
               <div className="w-full h-1 bg-blue-300 mt-4">
                  <div className="bg-primary block h-full w-1/5"></div>
               </div>
               <div className="flex items-center gap-3 mt-4">
                  <div className="border text-2xl borer-primary p-4 text-primary rounded-full">
                     <FiPhone className="animate-pulse" />
                  </div>
                  <div>
                     <p className="text-gray-500">Call To Ask Any Queary</p>
                     <h3 className="text-2xl font-bold">0800 333 444</h3>
                  </div>
               </div>
            </div>
         </section>
      </Container>
   );
};

export default About;