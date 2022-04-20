import React from 'react';
import PropTypes from 'prop-types';
import '../styles/day2.css';

class User extends React.Component {
  render() {
    const {
      data: {
        firstName, lastName, city, state, country,
      },
    } = this.props;
    return (
      <>
        <h3 className="head"> Employee Detail </h3>

        <div className="content">
          <p>
            FirstName :
            {firstName}
          </p>
          <p>
            LastName :
            {lastName}
          </p>
          <p>
            City :
            {city}
          </p>
          <p>
            State :
            {state}
          </p>
          <p>
            Country :
            {country}
          </p>
        </div>
      </>
    );
  }
}

User.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country: PropTypes.string,
  }),
};
User.defaultProps = {
  data: {},
};

export default User;
