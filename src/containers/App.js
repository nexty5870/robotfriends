import React, { Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import '../containers/App.css'
import Scroll from '../component/Scroll';
import ErrorBoundry from '../component/ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if (robots.lenght === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1>RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={ filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
  }
  
}

export default App;