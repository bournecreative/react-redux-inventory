import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addVehicle } from "../../store/index";

export const VehicleForm = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.form.name);
  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  return (
    <>
      <div className="car-form panel">
        <h4 className="subtitle is-3">Add Vehicle</h4>
        <form>
          <div className="field-group">
            <div className="field">
              <label className="label">Vehicle Name</label>
              <input
                className="input is-expanded"
                value={name}
                onChange={handleNameChange}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
