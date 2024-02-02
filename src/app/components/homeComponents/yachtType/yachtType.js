import Container from "../../global/container/container";
import SubHeading from "../../global/subHeading/subHeading";
import TypeCard from "./typeCard/typeCard";
import yacht1 from "/public/images/1.svg";
import yacht3 from "/public/images/3.svg";
import yacht2 from "/public/images/motor-boat.svg";

const YachtType = () => {
   return (
      <>
         <div className="bg-secondary pt-20 pb-52 text-center">
            <Container>
               <SubHeading className="justify-center">Explore</SubHeading>
               <h2 className="text-h2 text-white font-bold">Type of Yacht</h2>
            </Container>
         </div>
         <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 -mt-32">
               <TypeCard
                  img={yacht1.src}
                  count={1}
                  title="Sailing Yachts"
                  description="Sailing yachts epitomize the timeless allure of the open seas, combining elegant design with the thrill of harnessing the power of the wind."
               />
               <TypeCard
                  img={yacht2.src}
                  count={2}
                  title="Motor Boats"
                  description="The convenience of motorized propulsion allows for easy maneuverability, making motor boats suitable for both recreational outings and practical transportation. "
               />
               <TypeCard
                  img={yacht3.src}
                  count={3}
                  title="Catamarans"
                  description="Catamarans, with their distinctive twin-hull design, embody a harmonious blend of stability, speed, and spacious elegance on the water. "
               />
            </div>
         </Container>
      </>
   );
};

export default YachtType;
