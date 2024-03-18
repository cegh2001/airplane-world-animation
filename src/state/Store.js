import {create} from "zustand";
import Cookies from "js-cookie";
import {persist} from "zustand/middleware";

const useStore = create(persist((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {
    // Usuario y contraseña estáticos para fines de prueba
    const testUser = "usuario";
    const testPassword = "contraseña";

    if (username === testUser && password === testPassword) {
      alert("Inicio de sesión exitoso");
      set({ isAuthenticated: true, user: username });
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}),
{
      name: "auth-context",
      getStorage: () => ({
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value),
        removeItem: (key) => Cookies.remove(key),
      }),
    }

));

export default useStore;
