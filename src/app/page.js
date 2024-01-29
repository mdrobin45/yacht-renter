import About from "./components/homeComponents/about/about";
import Banner from "./components/homeComponents/banner/banner";
import PremiumYacht from "./components/homeComponents/premiumYacht/premiumYacht";

const Home = () => {
   return (
      <section>
         <Banner />
         <About />
         <PremiumYacht />
      </section>
   );
};

export default Home;
