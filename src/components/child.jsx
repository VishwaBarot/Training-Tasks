import React from 'react';
import PropTypes from 'prop-types';

class Child extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'abcd',
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.props.clickHandler}>Click</button>
        <h2>
          My name is
          {this.state.name}
        </h2>
      </>
    );
  }
}

Child.propTypes = {
  clickHandler: PropTypes.shape({
  }),
};

Child.defaultProps = {
  clickHandler: null,
};

export default Child;
