import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";
import Footer from "./scenes/footer";

function App() {
  // const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="app ">
      <Navbar />
      <Home />
      <div className="bg-black">
        <Benefits />
      </div>
      <OurClasses />
      <div className="bg-black">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
