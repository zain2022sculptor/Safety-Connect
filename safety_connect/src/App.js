import BreadCrumbNav from "./components/BreadCrumbNav";
import InspectionDetails from "./components/InspectionDetails";
import InspectionSummary from "./components/InspectionSummary";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <div className="hidden md:w-1/5 md:block">
          <Menu />
        </div>

        <div className="w-full md:w-4/5 mr-4">
          <BreadCrumbNav />
          <InspectionDetails />
          <InspectionSummary />
        </div>
      </div>
    </div>
  );
}

export default App;
