import React from 'react';
import styled from 'styled-components';

const ProfileViewContainer = styled.div`
text-align: center;
`;

const ProfileTitle = styled.h2`
  color: #444444;
`;

const ProfileBody = styled.div`
  width: 600px;
  display: flex;
  margin: 0 auto;
`;

const ProfileImg = styled.img`
  height: 200px;
  width: 200px;
`;

const ProfileInfo = styled.div`
  margin-left: 20px;
`;

const ProfileTable = styled.table`
  tr > td:first-child {
    width: 150px;
    font-weight: bold;
  }
`;

const ProfileView = (props) => {
  const { profile } = props;
  
  return (<ProfileViewContainer>
    <ProfileTitle>Profile</ProfileTitle>
    <ProfileBody>
      <ProfileImg src={profile.avatarImage} />
      <ProfileInfo>
        <ProfileTable>
          <tbody>
            <tr>
              <td>First name</td>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <td>First name</td>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{profile.phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td>{profile.bio}</td>
            </tr>
          </tbody>
        </ProfileTable>
      </ProfileInfo>
    </ProfileBody>
  </ProfileViewContainer>);
}

export default ProfileView;