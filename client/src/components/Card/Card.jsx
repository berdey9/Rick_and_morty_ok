import styles from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../Redux/actions";
function Card({
  id,
  name,
  species,
  gender,
  image,
  status,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, gender, image, status, onClose });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);

  return (
    <div>
      {
        <>
          <div className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <img src={image} alt={name} />
                <br />
                <h2>{name}</h2>
              </div>
              <div className={styles.flipCardBack}>
                <button onClick={onClose} className={styles.btn}>
                  CERRAR
                </button>

                <p className={styles.titleBack}>Status:{status}</p>
                <p className={styles.titleBack}>Specie:{species}</p>
                <p className={styles.titleBack}>Gender:{gender}</p>
                <p className={styles.titleBack}>Origin:{origin.name}</p>
                <Link to={`/detail/${id}`}>
                  <p className={styles.title}>👉 + INFO </p>
                </Link>
                {isFav ? (
                  <button onClick={handleFavorite}>❤️Favorite</button>
                ) : (
                  <button onClick={handleFavorite}>🤍Not favorite</button>
                )}
              </div>
            </div>
          </div>
        </>
      }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
