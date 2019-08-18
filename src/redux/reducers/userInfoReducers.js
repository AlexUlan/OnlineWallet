const SET_USER_DATA = "SET_USER_DATA";
const GET_USER_DATA = "GET_USER_DATA";

let initialState = {
  user: {
    data: {
      cashe:{
        income:"",
        consumption: ""

      }
    },
    login: "",
    password: ""
  }
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        user: {
          data: { ...action.data },
          login: action.login,
          password: action.password
        }
      };
    }
    default:
      return state;
  }
};

export const setUserDataAction = (data, login, password) => {
  return {
    type: SET_USER_DATA,
    data,
    login,
    password
  };
};

export const setuserData = (data, login, password) => {
  setUserDataAction(data, login, password);
  console.log(data, login, password)
};

export const getUserData = (login, password) => {
  var { data, login, password } = JSON.parse(localStorage.getItem(login));
  return setUserDataAction(data, login, password);
  console.log("sucses");
};

export default userReducers;
