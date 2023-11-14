import { useState } from "react";
import styles from "../Form/Form.module.css";
import Validation from "./Validation";
import { useNavigate } from "react-router-dom";
export default function Form(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      Validation({
        ...userData,
        [name]: value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div className={styles.formContainer}>
      <p className={styles.title}>Iniciar sesión</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              placeholder="gonzalohb10@hotmail.com"
            />
            <br />
            <br />
            <span className={styles.error}>{errors.username}</span>
            <br />
          </label>
          <br />
        </div>
        <div className={styles.inputGroup}>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="gonzalo11"
            />
            <br />
            <br />
            <span className={styles.error}>{errors.password}</span>
            <br />
          </label>
          <br />
          <br />

          <a className={styles.forgot} href={"/home"}>
            Olvidaste tu password?
          </a>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

//   const [userData, setUserData] = useState({ email: "", password: "" });
//   const handleInputChange = (event) => {
//     const { name, value } = event.target; //Trae el name y el value de cada input
//     setUserData({ ...userData, [name]: value });
//     setErrors(Validation({ ...userData, [name]: value }));
//     console.log(errors);
//   };
//   return (
//     <div className={styles.formContainer}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="">EMAIL</label>
//           <input
//             type="email"
//             value={userData.email} //Aca es donde ingresa el dato
//             onChange={handleInputChange}
//             name="email" //Esto muestra en la consola
//             placeholder="gonzalohb10@hotmail.com"
//           />
//           <p className={styles.error}>{errors.email}</p>
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor="">PASSWORD </label>
//           <input
//             name="password"
//             type="password"
//             value={userData.password}
//             onChange={handleInputChange}
//             placeholder="gonzalo11"
//           />
//           <p className={styles.error}>{errors.password}</p>
//           <a className={styles.forgot} href="/home">
//             Olvidaste tu password?
//           </a>
//         </div>
//         <button>Login</button>
//       </form>
//     </div>
//   );
// }
