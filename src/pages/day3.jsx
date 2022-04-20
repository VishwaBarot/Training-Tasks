import React from 'react';
import Child from '../components/child';

class Day3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, date: new Date(), name: 'amrita' };

    this.updateCount = this.updateCount.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log('componentDidMount called');
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('componentWillMount called');
  }

  updateCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    console.log('update Count ');
  };

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h3>
          {' '}
          Count:
          {this.state.count}
        </h3>
        <Child clickHandler={this.updateCount} name={this.state.name} />
        <h3>
          The count is:
          {this.state.count}
        </h3>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}
export default Day3;
