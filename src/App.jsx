import { VehicleForm } from "./components/vehicleForm";
import { VehicleList } from "./components/vehicleList";
import { VehicleSearch } from "./components/vehicleSearch/index";
import { VehicleValue } from "./components/vehicleValue/index";

function App() {
  return (
    <div className="container is-fluid">
      <VehicleForm />
      <VehicleSearch />
      <VehicleList />
      <VehicleValue />
    </div>
  );
}

export default App;
