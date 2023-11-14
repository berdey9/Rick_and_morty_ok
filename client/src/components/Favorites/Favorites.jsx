import Card from "../Card/Card";
import { useState } from "react";
import { filterCards, orderCards } from "../../Redux/actions";
import { connect, useDispatch, useSelector } from "react-redux";
const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
        <option value="All">All</option>
      </select>
      {myFavorites?.map(({ id, name, species, gender, image, onClose }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </>
  );
};

export default Favorites;
