export function getUser() {
  return (dispatch) => dispatch({
    type: 'GET_USER',
  });
}

export function addUser(data) {
  return (dispatch) => dispatch({
    type: 'ADD_USER',
    payload: data,
  });
}

export function editUser(data) {
  return (dispatch) => dispatch({
    type: 'EDIT_USER',
    payload: data,
  });
}

export function deleteUser(Id) {
  return (dispatch) => dispatch({
    type: 'DELETE_USER',
    payload: Id,
  });
}
