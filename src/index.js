import React from 'react';
import ReactDOM from 'react-dom';

let lat;
let long;

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>  lat = position.latitude,
      (err) => console.log(err)
    );

    return <div>Latitude: </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)