import React from 'react';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import MapEmbed from '../components/MapEmbed';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'MapEmbed',
  parameters: {
    component: MapEmbed,
    // decorators: [withKnobs],
  },
};

export const placeView = () => {
  return (
    <div>
      <p>A generic place embed showing Exchange Place.</p>
      <MapEmbed 
        apiLink={`https://www.google.com/maps/embed/v1/place?key=${process.env.GOOGLE_MAPS_API_KEY}&q=42.358780, -71.056198`}
      />
    </div>
  );
};

export const directionsView = () => {
  return (
    <div>
      <p>A generic directions embed to Sabroso for some great burritos!</p>
      <MapEmbed 
        apiLink={`https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_MAPS_API_KEY}
        &origin=42.358780, -71.056198
        &destination=42.357200, -71.054460`}
      />
    </div>
  );
};