import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
export default function Nav(props) {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
      <NavLink to="/home">
        <button>Home</button>
      </NavLink>
      <NavLink to="/favorites">
        <button>Favorites</button>
      </NavLink>
      <NavLink to="/about">
        <button>About</button>
      </NavLink>
    </div>
  );
}
