import React, {useState, useCallback} from 'react';
import styled from 'styled-components';

const HomeViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const HomeTitle = styled.h2`
  color: #444444;
`;

const DetailLink = styled.a`
  cursor: pointer;
  color: #0011bb;

  &:visited {
    color: #6600cc;
  }
`;

const SORT = {
  ASC: "asc",
  DESC: "desc"
}
const HomeView = (props) => {
  const { data, onFeatureClick } = props;

  const [sortDirection, setSortDirection] = useState(SORT.ASC);

  const handleShowDetailView = (feature) => {
    console.log('-- detail', feature);
    onFeatureClick(feature);
  }

  const getTableRows = useCallback(() => {
    return data.features.map(feature => {
      const {
        id,
        properties: {
          place,
          mag,
          time
        }
      } = feature;

      const convertedDate = new Date(time).toDateString();
      const convertedTime = new Date(time).toTimeString();

      return (
        <tr key={id}>
          <td><DetailLink href={`#${id}`} onClick={() => handleShowDetailView(feature)}>{place}</DetailLink></td>
          <td>{mag}</td>
          <td>{convertedDate} {convertedTime}</td>
        </tr>
      )
    })
  }, data.features);

  return (<HomeViewContainer>
    <HomeTitle>{data.metadata.title}</HomeTitle>
    <table>
      <thead>
        <tr><th>Title</th><th>Magnitude</th><th>Time</th></tr>
      </thead>
      <tbody>
        {getTableRows()}
      </tbody>
    </table>
    </HomeViewContainer>);
}

export default HomeView;