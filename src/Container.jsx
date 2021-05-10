import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import Header from './components/header.jsx';
import HomeView from './views/HomeView.jsx';
import DetailView from './views/DetailView.jsx';
import ProfileView from './views/ProfileView.jsx';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`;

const VIEWS = {
  HOME: "home",
  PROFILE: "profile",
  DETAIL: "detail"
}

const Container = (props) => {
  const [currentView, setCurrentView] = useState(VIEWS.HOME);
  const [currentFeature, setCurrentFeature] = useState(null);
  
  const {
    site,
    profile,
    data
  } = props.sampleData;

  const handleChangeView = (view) => {
    setCurrentView(view);
  };

  const handleChangeDetailFeature = (feature) => {
    setCurrentFeature(feature);
    setCurrentView(VIEWS.DETAIL);
  }

  const getCurrentView = useCallback(() => {
    switch(currentView) {
      case VIEWS.PROFILE:
        return <ProfileView profile={profile} />;
      case VIEWS.DETAIL:
        // const details = data[id] ? data[id] : null;
        // return <DetailView details={data[id]}/>;
        return <DetailView detailedData={currentFeature}/>;
      default:
        return <HomeView data={data} onFeatureClick={handleChangeDetailFeature} />;
    } 
  }, [currentView]);

  return (<StyledContainer>
    <Header
      site={site}
      profile={profile}
      onLogoClick={() => handleChangeView(VIEWS.HOME)}
      onProfileClick={() => handleChangeView(VIEWS.PROFILE)}
    />
    {getCurrentView()}
  </StyledContainer>);
}

export default Container;