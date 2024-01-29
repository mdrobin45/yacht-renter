import About from "./components/homeComponents/about/about";
import Activities from "./components/homeComponents/activities/activities";
import Banner from "./components/homeComponents/banner/banner";
import PremiumYacht from "./components/homeComponents/premiumYacht/premiumYacht";

const Home = () => {
   return (
      <section>
         <Banner />
         <About />
         <PremiumYacht />
         <Activities />
      </section>
   );
};

export default Home;
