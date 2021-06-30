import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Navbar from '../../components/atoms/Navbar';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class PetaIsolasi extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
     <>
     <Navbar></Navbar>
      <div style={{ height: '80vh', width: '80%', marginLeft: 250, marginTop: 70}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}

export default PetaIsolasi;