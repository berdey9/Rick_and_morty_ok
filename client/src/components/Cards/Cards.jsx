import Card from "../Card/Card";
export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map((character) => (
        <Card
          onClose={() => props.onClose(character.id)}
          id={character.id}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin}
          image={character.image}
        />
      ))}
    </div>
  );
}
