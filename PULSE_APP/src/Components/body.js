import React from 'react';
import ListParagraph from './body/List'; // Assuming the correct file path
import Reviews from './body/review';
import FeatureCards from './body/featurecards';
import Managecard from './body/managecard';
import HeadlineCards from './body/headlinecard';
import Features from './body/features';
import Title from './body/title';

function Body() {
  return (
    <div>
      <Title/>
      <ListParagraph />
      <Reviews/>
      <HeadlineCards/>
      <Features/>
      <FeatureCards/>
      <Managecard/>


    </div>
  );
}

export default Body;
