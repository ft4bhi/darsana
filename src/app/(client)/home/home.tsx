import HeroCarousel from "@/components/homepage/heroimage";
// import OurEvents from "@/components/homepage/status";
import OurEvents from "@/components/homepage/event";
import Frame from "@/components/homepage/product";
import Featured from "@/components/homepage/featured";
const Home = () => {
    return (
        <>
        <HeroCarousel  />
        <OurEvents />
        
        {/* <Activities />
        <Frame /> */}
        <Featured />

        </>
    )
};
export default Home;