import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  background: #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // padding: 0 10px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin-left: 10px;
`;

const Title = styled.h1`
  color: #777777;
`;

const ProfileLink = styled.a`
  cursor: pointer;
  margin-right: 10px;
  color: #0011bb;

  &:visited {
    color: #6600cc;
  }
`;

const Header = props => {
  const {
    site,
    profile,
    onLogoClick,
    onProfileClick
  } = props;

  return (<StyledHeader>
    <Logo src={site.logoImage} onClick={onLogoClick} />
    <Title>{site.title}</Title>
    <ProfileLink href={`#${profile.firstName}`}onClick={onProfileClick}>Welcome, {profile.firstName}</ProfileLink>
  </StyledHeader>);
}

export default Header;