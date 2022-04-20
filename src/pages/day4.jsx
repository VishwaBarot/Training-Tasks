import React from 'react';

export default class List extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    setTimeout(() => this.getUsers(), 1000 * 5);
  }

  getUsers() {
    fetch('https://reqres.in/api/users?page=2')
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          users: json.data,
        });
      })

      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <>
        <h2 align="center">User &apos;s Information </h2>
        <table border="1" align="center">
          <tbody>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>avatar</th>
            </tr>
            {this.state.users.length === 0 ? (
              <tr>
                <td colSpan="{99}">No records Found </td>
              </tr>
            ) : (
              this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <img src={user.avatar} alt="avatar" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </>
    );
  }
}
