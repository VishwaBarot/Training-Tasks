/* eslint-disable react/state-in-constructor */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable react/no-access-state-in-setstate */
import * as React from 'react';
import '../styles/day12.css';
import SearchComponent from './day12-datagrid';

const Users = [
  {
    id: 1,
    selected: false,
    name: 'Vishwa Barot',
    email: 'vishwa@gmail.com',
    phone: '98987876554',
  },
  {
    id: 2,
    selected: false,
    name: 'Raquel Murillo',
    email: 'raquel@yahoo.com',
    phone: '(254)954-1245',
  },
  {
    id: 3,
    selected: false,
    name: 'Monica Patel',
    email: 'monika.p@gmail.com',
    phone: '(146)123-4447',
  },
  {
    id: 4,
    selected: false,
    name: 'Patricia Lebsack',
    email: 'patricia12@yahoo.com',
    phone: '493-170-9623',
  },
  {
    id: 5,
    selected: false,
    name: 'Alicia Sierra',
    email: 'aliciasierra@gmail.com',
    phone: '(256)954-1289',
  },
];
class CheckedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedUsersList: [],
    };
  }

  onMasterCheck(e) {
    const tempList = this.state.List;
    // eslint-disable-next-line no-return-assign
    tempList.map((user) => (user.selected = e.target.checked));

    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedUsersList: this.state.List.filter((e) => e.selected),
    });
  }

  onItemCheck(e, item) {
    const tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      // eslint-disable-next-line no-shadow
      SelectedUsersList: this.state.List.filter((e) => e.selected),
    });
  }

  getSelectedRows() {
    this.setState({
      SelectedUsersList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <SearchComponent />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={this.state.MasterChecked}
                    id="mastercheck"
                    onChange={(e) => this.onMasterCheck(e)}
                  />
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.List.map((user) => (
                <tr key={user.id} className={user.selected ? 'selected' : ''}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      checked={user.selected}
                      className="form-check-input"
                      id="rowcheck{user.id}"
                      onChange={(e) => this.onItemCheck(e, user)}
                    />
                  </th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" className="btn btn-primary" onClick={() => this.getSelectedRows()}>
            selected rows : {this.state.SelectedUsersList.length}
          </button>
        </div>
      </div>
    );
  }
}

export default CheckedTable;
