import { useSelector, useDispatch } from "react-redux";
import { removeVehicle } from "../../store/index";

export const VehicleList = () => {
  const dispatch = useDispatch();

  const data = useSelector(({ vehicles: { list, searchTerm } }) => {
    return list.filter((v) => {
      return v.name.toLowerCase().match(searchTerm.toLowerCase());
    });
  });

  const handleVehicleDelete = (veh) => {
    dispatch(removeVehicle(veh.id));
  };

  const renderedList = data.map((v) => {
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
