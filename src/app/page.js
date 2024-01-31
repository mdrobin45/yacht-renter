import About from "./components/homeComponents/about/about";
import Activities from "./components/homeComponents/activities/activities";
import Banner from "./components/homeComponents/banner/banner";
import PremiumYacht from "./components/homeComponents/premiumYacht/premiumYacht";
import WatchVideo from "./components/homeComponents/watchVideo/watchVideo";
import YachtType from "./components/homeComponents/yachtType/yachtType";

const Home = () => {
   return (
      <section>
         <Banner />
         <About />
         <PremiumYacht />
         <Activities />
         <YachtType />
         <WatchVideo />
      </section>
   );
};

export default Home;
