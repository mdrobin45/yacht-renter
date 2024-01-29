import Container from "../../global/container/container";
import SubHeading from "../../global/subHeading/subHeading";
import YachtSlide from "./yachtSlide/yachtSlide";

const PremiumYacht = () => {
   return (
      <>
         <div className="bg-secondary pt-20 pb-52 text-center">
            <Container>
               <SubHeading className="justify-center">
                  PREMIUM YACHTS
               </SubHeading>
               <h2 className="text-h2 text-white font-bold">Yachts & Boats</h2>
            </Container>
         </div>
         <div className=" -mt-60 mb-32">
            <YachtSlide />
         </div>
      </>
   );
};

export default PremiumYacht;
