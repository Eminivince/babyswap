import Footer from "../components/Footer";
import Intro from "../components/home/Intro";
import Supportedfeatures from "../components/home/Supportedfeatures";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <main className="pt-[120px] bg-gray-300 w-full">
      <Navbar />
      <Intro />
      <Supportedfeatures />
      {/* <Trade />
        <AboutUs />
        <Roadmap />
        <Blog /> */}
      <Footer />
    </main>
  );
}

export default Home;
