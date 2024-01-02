import { useSelector, useDispatch } from "react-redux";
import { removeVehicle } from "../../store/index";

export const VehicleList = () => {
  const list = useSelector((state) => state.vehicles.list);

  const dispatch = useDispatch();

  const handleVehicleDelete = (veh) => {
    dispatch(removeVehicle(veh.id));
  };

  const renderedList = list.map((v) => {
    return (
      <div key={v.id} className="panel">
        <p>
          {v.name} - ${v.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleVehicleDelete(v)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedList}
      <hr />
    </div>
  );
};
