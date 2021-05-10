import React from 'react';
import styled from 'styled-components';

const DetailViewContainer = styled.div``;

const DetailBody = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const DetailTitle = styled.h2`
  color: #444444;
`;

const DetailTable = styled.table`
  tr > td:first-child {
    width: 150px;
    font-weight: bold;
  }
`;

const DetailView = props => {
  const { detailedData } = props;
  console.log('-- DETA', detailedData)
  return (<DetailViewContainer>
    <DetailBody>
      <DetailTitle>{detailedData.properties.title}</DetailTitle>
      <DetailTable>
        <tbody>
          <tr>
            <td>Title</td>
            <td>{detailedData.properties.title}</td>
          </tr>
          <tr>
            <td>Magnitude</td>
            <td>{detailedData.properties.mag}</td>
          </tr>
          <tr>
            <td>Time</td>
            <td>{detailedData.properties.time}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{detailedData.properties.status}</td>
          </tr>
          <tr>
            <td>Tsunami</td>
            <td>{detailedData.properties.tsunami}</td>
          </tr>
          <tr>
            <td>type</td>
            <td>{detailedData.properties.type}</td>
          </tr>
        </tbody>
      </DetailTable>
    </DetailBody>
  </DetailViewContainer>);
}

export default DetailView;