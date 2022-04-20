import React from 'react';
import '../styles/day6.css';
import { Table, Button } from 'react-bootstrap';
import { BsPersonFill, BsFillEyeFill } from 'react-icons/bs';

class day6 extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          Name: 'John Smith',
          PhoneNumber: '(573)672-5697',
          Address: '979 Hill Lane,Hamburg, NY 14075',
          Age: 24,
          City: 'New York',
        },

        {
          id: 2,
          Name: 'George Shaw',
          PhoneNumber: '(614)541-3289',
          Address: '91 Beechwood Rd.Dyewood, CA 90262',
          Age: 22,
          City: 'California',
        },
        {
          id: 3,
          Name: 'Vishwa Barot',
          PhoneNumber: '9900234566',
          Address: 'Manek Baug,Satellite',
          Age: 21,
          City: 'Ahmedabad',
        },
      ],
      Information: [],
    };
  }

  showUsers = (id) => {
    const { users } = this.state;
    const user = users.filter((data) => data.id === id);
    console.log(user);
    this.setState({ Information: user });
  };

  render() {
    return (
      <>
        <h2 className="head">Users Information</h2>
        <Table striped bordered hover responsive="sm" className="w-50" align="center">
          <tbody>
            <tr>
              <th>Name</th>
              <th>More Details</th>
            </tr>
            {this.state.users.length === 0
              ? null
              : this.state.users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <BsPersonFill /> {user.Name}
                  </td>

                  <td className="text-center">
                    <Button
                      onClick={() => this.showUsers(user.id)}
                      variant="outline-primary"
                      size="sm"
                    >
                      Show <BsFillEyeFill />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <div>
          {this.state.Information.length === 0
            ? null
            : this.state.Information.map((user, index) => (
              <div key={index} className="main">
                <h2 className="h2">
                  User
                  {user.id} :
                </h2>
                <h3 className="info">
                  <div>Name</div>
                  <div>:</div>
                  <div> {user.Name}</div>
                </h3>
                <h3 className="info">
                  <div>PhoneNumber</div>
                  <div>:</div>
                  <div>{user.PhoneNumber}</div>
                </h3>

                <h3 className="info">
                  <div>Address</div>
                  <div>:</div>
                  <div>{user.Address}</div>
                </h3>

                <h3 className="info">
                  <div>Age</div>
                  <div>:</div>
                  <div>{user.Age}</div>
                </h3>

                <h3 className="info">
                  <div>City</div>
                  <div>:</div>
                  <div>{user.City}</div>
                </h3>
              </div>
            ))}
        </div>
      </>
    );
  }
}
export default day6;
