/* eslint-disable default-param-last */
const initialstate = {
  users: [
    {
      id: 1,
      userName: 'Vishwa Barot',
      userEmail: 'vishwa@gmail.com',
      userDepartment: 'React Native',
    },
    {
      id: 2,
      userName: 'Priyanka Patel',
      userEmail: 'priyanka@gmail.com',
      userDepartment: '.NET ',
    },
    {
      id: 3,
      userName: 'Raquel Murillo',
      userEmail: 'murillo.raquel@gmail.com',
      userDepartment: 'Flutter ',
    },
    {
      id: 4,
      userName: 'Priyanka Patel',
      userEmail: 'priyanka.patel@gmail.com',
      userDepartment: 'IOS',
    },
    {
      id: 5,
      userName: 'Priyanshi Shah',
      userEmail: 'priyanshi@gmail.com',
      userDepartment: 'Android',
    },
    {
      id: 6,
      userName: 'Raquel Martina',
      userEmail: 'raquel@gmail.com',
      userDepartment: 'React Native ',
    },
    {
      id: 7,
      userName: 'Alicia Sierra',
      userEmail: 'alicia.sierra@gmail.com',
      userDepartment: 'Vue Js ',
    },
  ],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
      };
    case 'ADD_USER':
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case 'EDIT_USER':
      return {
        ...state,
        users: state.users.map((content) => (content.id === action.payload.id
          ? {
            ...content,
            userName: action.payload.userName,
            userEmail: action.payload.userEmail,
            userDepartment: action.payload.userDepartment,
          }
          : content)),
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
