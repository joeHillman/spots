import React, { Component, Fragment } from 'react';
import { array } from 'prop-types';

import MapEmbed from './MapEmbed';
import CategoryFilter from './CategoryFilter';

class MapFilterContainer extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isDriving: false,
        selectedVenue: null,
        mapEmbed: `https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=42.358780, -71.056198`
      }
  }

  handleCaptureSelection = (event) => {
    const selectedVenue = this.props.venueJSON.find(item => item.name === event.target.value)
    const mapEmbed = `https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_MAPS_API_KEY}&origin=42.358780, -71.056198&destination=${selectedVenue.gps[0]}, ${selectedVenue.gps[1]}&mode=${this.state.isDriving ? 'driving' : 'walking'}`
    this.setState({ selectedVenue, mapEmbed })
    window.location.href = '#'+event.target.dataset.name;

  }

  handleCaptureTransportModeChange = (drivingBool) => {
    const isDriving = drivingBool;
    this.setState({ isDriving }, () =>
      {if(this.state.selectedVenue) {
        const mapEmbed = `https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_MAPS_API_KEY}&origin=42.358780, -71.056198&destination=${this.state.selectedVenue.gps[0]},${this.state.selectedVenue.gps[1]}&mode=${this.state.isDriving ? 'driving' : 'walking'}`
        this.setState({ mapEmbed })
      }})
  }
  
  render() {
    const { venueJSON } = this.props;
    const { mapEmbed } = this.state;
    return (
      <div>
        <CategoryFilter venueJSON={venueJSON} captureSelection={this.handleCaptureSelection} captureTransportModeChange={this.handleCaptureTransportModeChange} selectedVenue={this.state.selectedVenue} mapEmbed={this.state.mapEmbed}/>
        {/* <MapEmbed apiLink={mapEmbed} /> */}
      </div>
    )
  }
}

export default MapFilterContainer;

MapFilterContainer.propTypes = {
  venueJSON: array.isRequired,
};