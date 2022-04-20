import React from 'react';
import User from '../components/User';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        firstName: 'Vishwa',
        lastName: 'Barot',
        city: 'Ahmedabad',
        state: 'Gujarat',
        country: 'India',
      },
    };
  }

  render() {
    return <User data={this.state.details} />;
  }
}

export default App;
