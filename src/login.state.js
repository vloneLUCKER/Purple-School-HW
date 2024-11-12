export const INITIAL_CONDITIONS = {
  isLogged: localStorage.getItem("isLogged"),
  userName: localStorage.getItem("name"),
  name: "Войти",
};

export function loginReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("name", action.payload);
      localStorage.setItem("isLogged", true);
      return {
        ...state,
        isLogged: true,
        userName: action.payload,
        name: "Выйти",
      };
  }
}
