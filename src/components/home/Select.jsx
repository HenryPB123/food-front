import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions/actions";

const Select = ({ handleFilter }) => {
  const diets = useSelector((state) => state.diets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <select
      className="form-select bg-warning "
      onChange={(e) => handleFilter(e)}
    >
      <option value="">Diets</option>
      {diets?.map((d, i) => (
        <option key={i} value={d}>
          {d}
        </option>
      ))}
    </select>
  );
};

export default Select;
