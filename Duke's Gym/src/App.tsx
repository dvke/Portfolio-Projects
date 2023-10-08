import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourClasses";
import ContactUs from "./scenes/contactUs";

function App() {
  // const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
    </div>
  );
}

export default App;
