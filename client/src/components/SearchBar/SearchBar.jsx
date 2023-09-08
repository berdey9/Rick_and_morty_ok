import { useState } from "react";
export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    const { value } = event.target; //Desestructuro value de event.target para usarlo despues
    setId(value);
  };
  return (
    <div>
      {
        <>
          <input
            type="search"
            name="search"
            id="search"
            onChange={handleChange} //Cada vez que se realiza un cambio ejecuta la funcion
          />
          <button onClick={() => props.onSearch(id)}>Agregar</button>
        </>
      }
    </div>
  );
}
