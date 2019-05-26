import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//
//   return <div>Season Display</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, error: '' };
  }

  // equivalent to above
  state = { lat: null, error: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
    console.log("My component was rendered to the screen");
  }

  componentDidUpdate() {
      console.log("My component was just updated - it rerendered");
  }

  // Have to define render
  render() {
    if (this.state.error) { // if error occurs
      return <div>An error occured: {this.state.error}</div>;
    } else if (!this.state.lat) { // if lat has not been updated
      return <div> Loading... </div>;
    } else { // no errors, lat has been updated
      return <div>Latitude: {this.state.lat}</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
