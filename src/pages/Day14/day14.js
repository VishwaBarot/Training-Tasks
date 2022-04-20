/* eslint-disable react/jsx-no-undef */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable operator-linebreak */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Button } from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { getUser, addUser, editUser, deleteUser } from '../Redux/action';
import '../../styles/day14-redux.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

class Day14 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      userName: '',
      userEmail: '',
      userDepartment: '',
    };
  }

  componentDidMount() {
    this.props.getUser();
  }

  submitData = () => {
    if (
      this.state.userName &&
      this.state.userEmail &&
      this.state.userDepartment &&
      !this.state.id
    ) {
      const newUser = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        userName: this.state.userName,
        userEmail: this.state.userEmail,
        userDepartment: this.state.userDepartment,
      };

      this.props.addUser(newUser);
    } else if (
      this.state.userName &&
      this.state.userEmail &&
      this.state.userDepartment &&
      this.state.id
    ) {
      const updatedDetails = {
        id: this.state.id,
        userName: this.state.userName,
        userEmail: this.state.userEmail,
        userDepartment: this.state.userDepartment,
      };

      this.props.editUser(updatedDetails);
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter Users  Details.');
    }

    this.clearData();
  };

  editDetails = (data) => {
    this.setState({
      id: data.id,
      userName: data.userName,
      userEmail: data.userEmail,
      userDepartment: data.userDepartment,
    });
  };

  deleteUser = (id) => {
    this.clearData();
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure?')) {
      this.props.deleteUser(id);
    }
  };

  handleNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      userEmail: e.target.value,
    });
  };

  handleDepartmentChange = (e) => {
    this.setState({
      userDepartment: e.target.value,
    });
  };

  clearData = () => {
    this.setState({
      id: 0,
      userName: '',
      userEmail: '',
      userDepartment: '',
    });
  };

  render() {
    return (
      <div className="App-cont">
        <h3 className="App-title" align="center">
          Day14 Redux CRUD Operation without backend
        </h3>
        <div className="formsection">
          <form>
            <div className="form-group1 mb-3">
              <label>Name</label>
              <input
                className="form-control pl-2"
                onChange={this.handleNameChange}
                value={this.state.userName}
                type="text"
                placeholder=" Name"
              />
            </div>

            <div className="form-group1">
              <label>Email</label>
              <input
                className="form-control pl-2"
                onChange={this.handleEmailChange}
                value={this.state.userEmail}
                type="email"
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group1">
              <label>Department</label>
              <input
                className="form-control pl-2"
                onChange={this.handleDepartmentChange}
                value={this.state.userDepartment}
                type="text"
              />
              {this.state.id ? (
                <Button className="clickbtn" variant="info" onClick={this.submitData}>
                  Update
                </Button>
              ) : (
                <Button className="clickbtn" variant="primary" onClick={this.submitData}>
                  Add
                </Button>
              )}{' '}
              <Button className="clickbtn" variant="danger" color="error" onClick={this.clearData}>
                Clear
              </Button>
            </div>
          </form>
        </div>
        <div className="tablesection mb-5">
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Id</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Action(s)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.users &&
                this.props.users.map((data, index) => (
                  <StyledTableRow key={index + 1}>
                    <StyledTableCell>{index + 1}</StyledTableCell>
                    <StyledTableCell>{data.userName}</StyledTableCell>
                    <StyledTableCell>{data.userEmail}</StyledTableCell>
                    <StyledTableCell>{data.userDepartment}</StyledTableCell>
                    <StyledTableCell>
                      <Button
                        type="button"
                        variant="success"
                        size="sm"
                        className="actionbtn"
                        onClick={() => this.editDetails(data)}
                      >
                        <BiEdit /> Edit
                      </Button>{' '}
                      <Button
                        type="button"
                        variant="danger"
                        size="sm"
                        className="actionbtn"
                        onClick={() => this.deleteUser(data.id)}
                      >
                        <RiDeleteBinLine /> Delete
                      </Button>{' '}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }
}
Day14.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, {
  getUser,
  addUser,
  editUser,
  deleteUser,
})(Day14);
