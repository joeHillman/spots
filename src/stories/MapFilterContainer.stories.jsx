import React from 'react';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import MapFilterContainer from '../components/MapFilterContainer';
import venueData from './venueData';

// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'MapFilterContainer',
  parameters: {
    component: MapFilterContainer,
    // decorators: [withKnobs],
  },
};

export const defaultView = () => {
  return (
    <div>
      <MapFilterContainer 
        venueJSON={venueData}
      />
    </div>
  );
};