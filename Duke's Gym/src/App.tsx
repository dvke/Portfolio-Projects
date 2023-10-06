import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Benefits from "./scenes/benefits";

function App() {
  // const [selectedPage, setSelectedPage] = useState("home");

  return (
    <div className="app bg-gray-20">
      <Navbar />
      <Home />
      <Benefits />
    </div>
  );
}

export default App;
