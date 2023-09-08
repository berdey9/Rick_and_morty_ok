import axios from "axios";
import styles from "../Detail/Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    //PARA USEEFFECT ES MEJOR PROMESAS QUE ASYNC AWAIT
    axios(`http://localhost:3001/rickandmorty/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailId]);
  return (
    <div>
      <h1>Detail</h1>
      <img src={character.image} alt={character.name} />
      <div className={styles.detail}>
        <h2>{character.name}</h2>
        <br />
        <h3>{character.status}</h3>
        <br />
        <h3>{character.species}</h3>
        <br />
        <h3>{character.gender}</h3>
        <br />
        {character.origin && <h3>{character.origin.name}</h3>}
      </div>
    </div>
  );
}
