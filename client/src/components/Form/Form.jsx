import { useState } from "react";
import styles from "../Form/Form.module.css";
import Validation from "./Validation";
export default function Form(props) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target; //Trae el name y el value de cada input
    setUserData({ ...userData, [name]: value });
    setErrors(Validation({ ...userData, [name]: value }));
    console.log(errors);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };
  return (
    <div className={styles.formContainer}>
      <p className={styles.title}>LOGIN</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="">EMAIL</label>
          <input
            type="email"
            value={userData.email} //Aca es donde ingresa el dato
            onChange={handleInputChange}
            name="email" //Esto muestra en la consola
            placeholder="gonzalohb10@hotmail.com"
          />
          <p className={styles.error}>{errors.email}</p>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="">PASSWORD </label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="gonzalo11"
          />
          <p className={styles.error}>{errors.password}</p>
          <a className={styles.forgot} href="/home">
            Olvidaste tu password?
          </a>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
