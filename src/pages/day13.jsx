/* eslint-disable react/prop-types */
import React from 'react';
import Table from 'react-bootstrap/Table';
import loading from './day13Hoc';
import Loader from '../components/loader/loader';

class Day13 extends React.Component {
  constructor(props) {
    super(props);
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
        this.props.loadervalue(false);
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
        <h2 align="center">Day 13 HOC (Loader) </h2>
        {this.state.users.length ? (
          <Table striped bordered hover size="sm" align="center" className="w-50">
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
                  <td align="center">{this.props.loadervalue(true)} </td>
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
          </Table>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default loading(Day13);
