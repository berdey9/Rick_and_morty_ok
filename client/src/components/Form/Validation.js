export default function Validation(input) {
  const errors = {};
  const regExUsername = /\S+@\S+\.\S+/;
  const regExPass = new RegExp("[0-9]");
  const userInput = input.username;
  const passInput = input.password;
  if (!regExUsername.test(userInput)) {
    errors.username = "Ingresar un email válido";
  }
  if (!userInput) {
    errors.username = "Por favor ingresar un email";
  }
  if (userInput.length > 35) {
    errors.username = "El email no puede tener mas de 35 carácteres";
  }
  if (!regExPass.test(passInput))
    errors.password = "La contraseña debe tener al menos 1 número";
  if (passInput.length < 6 || passInput.length > 10) {
    errors.password = "El password debe tener entre 6 y 10 caracteres";
  }
  return errors;
}
