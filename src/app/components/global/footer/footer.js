import Container from "../container/container";
import ContactCard from "./contactCard/contactCard";
import FooterSectionOne from "./sections/one/one";
import FooterSectionThree from "./sections/three/three";
import FooterSectionTwo from "./sections/two/two";

const Footer = () => {
   return (
      <section className="bg-secondary pt-32 pb-7">
         <Container>
            <div className="flex items-center justify-between border-blue-950 border-2 rounded-md p-6">
               <ContactCard
                  icon="phone"
                  heading="Call Now"
                  text="+8801761614500"
               />
               <ContactCard
                  icon="email"
                  heading="Write to us"
                  text="robin4500bd@gmail.com"
               />
               <ContactCard
                  icon="address"
                  heading="Address"
                  text="Gazipur, Dhaka, Bangladesh"
               />
            </div>
            <div className="py-20 flex justify-between border-b-2 border-blue-950">
               <FooterSectionOne />
               <FooterSectionTwo />
               <FooterSectionThree />
            </div>
            <p className="text-gray-300 pt-4">
               Designed By{" "}
               <a
                  target="_blank"
                  className="text-primary"
                  href="https://robinrana.vercel.app/">
                  Robin Rana
               </a>
            </p>
         </Container>
      </section>
   );
};

export default Footer;
