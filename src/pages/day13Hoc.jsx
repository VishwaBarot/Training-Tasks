import React from 'react';
import Loading from '../components/loader/loader';

const IsLoading = (Component) => {
  class Hoc extends React.Component {
    constructor() {
      super();
      this.state = {
        loading: false,
      };
    }

    updateLoader = (value) => {
      this.setState({ loading: value });
    };

    render() {
      return (
        <>
          {this.state.loading ? <Loading /> : null}

          <Component loadervalue={this.updateLoader} />
        </>
      );
    }
  }
  return Hoc;
};
export default IsLoading;
