import TopNavBar from "../atoms/TopNavbar";
import HeroSection from "../organisms/Hero";
import SearchSection from "../organisms/SearchSection";
import CarList from "../organisms/CarList";
import Footer from "../atoms/Footer";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNavBar />
      <HeroSection />

      <main className="px-6 py-8 space-y-10">
        <SearchSection />
        <CarList />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
