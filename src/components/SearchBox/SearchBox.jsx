import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const searchField = useSelector(selectFilter);

  return (
    <div className={css.searchBlock}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        name="search"
        id={searchId}
        value={searchField}
        onChange={(event) => dispatch(changeFilter(event.currentTarget.value))}
      ></input>
    </div>
  );
};

export default SearchBox;