import React, { Fragment, useState } from 'react';
import { array } from 'prop-types';
import { convertKMtoMiles } from './utils/distanceInKmBetweenEarthCoordinates'
import get from 'lodash.get';
import MapEmbed from './MapEmbed';

import als from './als.png';
import bteaParty from './bteaParty.png';
import gillette from './gillette.png';
import gingerman from './gingerman.png';
import lamplighter from './lamplighter.svg';
import NEAcquarium from './NEAcquarium.svg';
import paradiseRockClub from './paradiseRockClub.png';
import sabroso from './sabroso.png';

import like from './Like.svg';

const CategoryFilter = (props) => {
  const { venueJSON } = props;
  let categories = []
  venueJSON.forEach(item => item.category.forEach(item => categories.push(item)))
  const [loggedInMode, setLoggedInMode] = useState(false)
  const [under1MileMode, setUnder1MileMode] = useState(false)
  const [drivingMode, setDrivingMode] = useState(false)
  const [filteredArray, setFilteredArray] = useState(null);

  const buildOptionList = (arr) => {
    return arr.map(item => (<option value={item}>{item[0].toUpperCase() + item.substring(1)}</option>))
  }

  const handleTransportModeChange = (event) => {
    setDrivingMode(event.target.checked);
    props.captureTransportModeChange(event.target.checked);
  }

  const handle1MileFilter = (event) => {
    setUnder1MileMode(event.target.checked);
  }

  const handleLoggedIn = (event) => {
    setLoggedInMode(event.target.checked)
  }

  const handleSelectListChange = (event) => {
    if(event.target.value === 'all') {
      setFilteredArray(venueJSON);
    }
    else {setFilteredArray(venueJSON.filter(item => item.category.includes(event.target.value)))}
  }

  const walkOrDrive = drivingMode ? 'distanceDriving' : 'distanceWalking';

  const sortedArray = (filteredArray || venueJSON).sort((a, b) => {
    return convertKMtoMiles(a[walkOrDrive][0].distance.text) - convertKMtoMiles(b[walkOrDrive][0].distance.text);
  });

  const distanceFilteredArray = sortedArray.filter(item => convertKMtoMiles(item[walkOrDrive][0].distance.text) < 1);

  const imagePicker = (str) => {
    switch (str) {
      case 'als': return als;
      case 'bteaParty': return bteaParty;
      case 'gillette': return gillette;
      case 'gingerman': return gingerman;
      case 'lamplighter': return lamplighter;
      case 'NEAcquarium': return NEAcquarium;
      case 'paradiseRockClub': return paradiseRockClub;
      case 'sabroso': return sabroso;
      default: return null;
    }
  }

  return (
    <div className="filter-container">
      <div className="poi-listing-container">
        <div className="controls-container">
          <p className="filter-control">Begin by selecting a filter if desired. You can further narrow a results set by enabling the driving and/or under 1 mile checkboxes.</p>          
          <select className="filter-control" onChange={handleSelectListChange}>
            <option value='all'>View all</option>
            {buildOptionList(Array.from(new Set([...categories])))}
          </select>
          <br/>
          <div className="drive-container">
            <label htmlFor="driveInstead">View driving details:</label>
            <input type="checkbox" id="driveInstead" onChange={handleTransportModeChange} />
          </div>
          <div className="under-mile-container">
            <label htmlFor="showUnderAMile">Show only under 1 mile:</label>
            <input type="checkbox" id="showUnderAMile" onChange={handle1MileFilter} />
          </div>
          <div className="under-mile-container">
            <label htmlFor="toggleLoggedIn">Toggle logged in:</label>
            <input type="checkbox" id="toggleLoggedIn" onChange={handleLoggedIn} />
          </div>
          {(under1MileMode && distanceFilteredArray.length === 0) && <div className="under-mile-container" style={{marginTop: '25px'}}><b>There are no results that meet your criteria, please try another search.</b></div>}
        </div>
        {(under1MileMode ? distanceFilteredArray : sortedArray).map(item => {
          const selectedVenueNameFromParent = get(props, ['selectedVenue', 'name'])
          return (
            <Fragment>
              <a name={`${item.image}`} href={`#${item.image}`} aria-hidden='true'></a>
              <br/>
              <div  className={`${selectedVenueNameFromParent === item.name ? 'selected' : 'notSelected'} ${item.image} poi-container`}>
                {loggedInMode && (get(item, 'favorite') || get(item, 'rating')) && (
                  <div style={{display: 'flex'}}>
                    <div className="fav-container" style={{backgroundImage: `url(${like})`}}></div>
                    <div className="rating-container">My rating: {item.rating}</div>
                  </div>
                )}
                <div className={`${item.image} img-container`} style={{backgroundImage:  `url(${imagePicker(item.image)})`}}>
                  {/* <img src={imagePicker(item.image)} alt={item.name}/> */}
                </div>
                <div className="info-container">
                  <p>{`${item.name} is a ${convertKMtoMiles(item[walkOrDrive][0].distance.text)} mile ${walkOrDrive === 'distanceDriving' ? 'drive' : 'walk'} from Exchange Place.`}<br />
                    This journey, {walkOrDrive === 'distanceDriving' ? 'DRIVING' : 'WALKING'}, will take you {`${item[walkOrDrive][0].duration.text}`}
                  </p>
                  <button className="view-map" type="button" onClick={props.captureSelection} value={item.name} data-name={`${item.image}`}>View map</button>
                  {item.relatedLinks.length > 0 && 
                    (<div className="related-container">
                      <p>Check out a couple related stories here!</p>
                      <ul>
                        {item.relatedLinks.map(item => <li><a href={item}>{item}</a></li>)}
                      </ul>
                    </div>
                  )
                  }
                </div>
                <div className="map-container">
                {
                  selectedVenueNameFromParent === item.name ? (
                    <Fragment>
                      <MapEmbed apiLink={props.mapEmbed}/>
                      <a className="view-map site-link" href={item.website}>View website</a>
                    </Fragment>
                      ) : null
                    }
                </div>
              </div>
            </Fragment>
          )
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  venueJSON: array.isRequired,
};
