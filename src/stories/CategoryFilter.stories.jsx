import React from 'react';
// import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import CategoryFilter from '../components/CategoryFilter';
import venueData from './venueData';
// This story is written in "Component Story Format" that was introduced in Storybook 5.2
// https://storybook.js.org/docs/formats/component-story-format/
export default {
  title: 'CategoryFilter',
  parameters: {
    component: CategoryFilter,
    // decorators: [withKnobs],
  },
};

export const defaultView = () => {
  return (
    <div>
      <p>A generic place embed showing Exchange Place.</p>
      <CategoryFilter 
        venueJSON={venueData}
      />
    </div>
  );
};