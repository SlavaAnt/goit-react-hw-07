import { useSelector, useDispatch } from "react-redux";

import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => {
    return state.filters.name;
  });

  const handleOnChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <label className={css.searchBox}>
      <span className={css.searchBoxInputName}>
        Find contacts by name or number
      </span>
      <input
        className={css.searchBoxInput}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleOnChange}
      />
    </label>
  );
};

export default SearchBox;
