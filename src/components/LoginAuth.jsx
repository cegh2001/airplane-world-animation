"use client";  
import useStore from "../state/Store";

export default function LoginAuth() {
  const login = useStore((state) => state.login);
  const logout = useStore((state) => state.logout);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    login(username, password);
  };

  const isAuthenticated = useStore((state) => state.isAuthenticated);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario:
          <input type="text" name="username" required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
      <div>
        {isAuthenticated ? (
          <div>Contenido protegido</div>
        ) : (
          <div>autentiquese</div>
        )}
      </div>
      <div>
        <button onClick={logout}>Cerrar sesión</button>{" "}
      </div>
    </div>
  );
}
