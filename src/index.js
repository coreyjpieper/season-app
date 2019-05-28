import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

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

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  // determine what to show in the render method
  renderContent() {
    if (this.state.error) { // if error occurs
      return <div>An error occured: {this.state.error}</div>;
    } else if (!this.state.lat) { // if lat has not been updated
      return <Loading message="Please allow geolocation access" />;
    } else { // no errors, lat has been updated
      return <SeasonDisplay lat={this.state.lat} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
