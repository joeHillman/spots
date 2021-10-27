import React from 'react';
import { string } from 'prop-types';

/* eslint-disable */
const MapEmbed = (props) => {
  const { apiLink } = props;
  return (
    <div>
      <iframe
        width="100%"
        height="450"
        style={{border:"0"}}
        loading="lazy"
        allowfullscreen
        src={`${apiLink}`}>
      </iframe>
    </div>
  );
};
/* eslint-enable */

export default MapEmbed;

MapEmbed.propTypes = {
  apiLink: string.isRequired,
};
