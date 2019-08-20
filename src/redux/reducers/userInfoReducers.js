const SET_USER_DATA = "SET_USER_DATA";
const ADD_CONSUMPTION = "ADD_CONSUMPTION";
const GET_USER_DATA = "GET_USER_DATA";

let initialState = {
  user: {
    data: {
      cashe: {
        income: "",
        consumption: ""
      },
      shoppingList: []
    },
    login: "",
    password: ""
  },
  category: ["Досуг", "Еда", "Комуналка", "Транспорт"]
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
    case ADD_CONSUMPTION: {
      return {
        ...state,
        user:{ ...state.user, 
          data: { ...state.user.data,
            shoppingList: [...state.user.data.shoppingList, {value:action.value}]
           }
        }
       
       
      }
    }
    default:
      return state;
  }
};

export const addConsumptionAction = (category, value) => {
  return {
    type: ADD_CONSUMPTION,
    category,
    value
  };
};

export const setUserDataAction = (data, login, password) => {
  return {
    type: SET_USER_DATA,
    data,
    login,
    password
  };
};

// export const setuserData = (data, login, password) => {
//   setUserDataAction(data, login, password);
// };

export const getUserData = (login, password) => {
  var { data, login, password } = JSON.parse(localStorage.getItem(login));
  return setUserDataAction(data, login, password);
};

export default userReducers;
