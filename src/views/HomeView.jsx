import React, {useState, useCallback, useEffect} from 'react';
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

const TableHeader = styled.th`
  cursor: pointer;
`;

const SORT_ASC = true;

const SORT_DATA_POINT = {
  TITLE: "title",
  MAG: "mag",
  TIME: "time"
};

const HomeView = (props) => {
  const { data, onFeatureClick } = props;

  const [sortDirection, setSortDirection] = useState(SORT_ASC);
  const [sortDataPoint, setSortDataPoint] = useState(SORT_DATA_POINT.TITLE);
  const [parsedData, setParsedData] = useState([]);

  useEffect(() => {
    if (data.features) {
      const tempData = [];

      data.features.forEach(feature => {
        const convertedDate = new Date(feature.properties.time).toDateString();
        const convertedTime = new Date(feature.properties.time).toLocaleTimeString();
        feature.properties.dateTime = `${convertedDate} ${convertedTime}`;

        feature.properties.id = feature.id;

        tempData.push(feature.properties);
      });

      setParsedData(tempData);
    }
  }, data.features);

  const handleShowDetailView = (feature) => {
    onFeatureClick(feature);
  }

  const handleSortData = (dataPoint) => {
    let sortDir = sortDirection;

    if (dataPoint === sortDataPoint) {
      sortDir = !sortDirection;
      setSortDirection(sortDir);
    } else {
      sortDir = true;
      setSortDirection(true);
    }

    setSortDataPoint(dataPoint);

    const sorter = (a, b) => {
      if (a[dataPoint] < b[dataPoint]) {
          return sortDir ? -1 : 1;
      } else if (a[dataPoint] > b[dataPoint]) {
          return sortDir ? 1 : -1;
      } else {
          return 0;
      }
    };

    setParsedData(parsedData.sort(sorter));
  }

  const getTableRows = useCallback(() => {
    return parsedData.map(feature => {
      const {
        id,
        place,
        mag,
        dateTime
      } = feature;

      return (
        <tr key={id}>
          <td><DetailLink href={`#${id}`} onClick={() => handleShowDetailView(feature)}>{place}</DetailLink></td>
          <td>{mag}</td>
          <td>{dateTime}</td>
        </tr>
      )
    })
  }, [parsedData]);

  return (<HomeViewContainer>
    <HomeTitle>{data.metadata.title}</HomeTitle>
    <table>
      <thead>
        <tr>
          <TableHeader onClick={() => handleSortData("title")}>Title</TableHeader>
          <TableHeader onClick={() => handleSortData("mag")}>Magnitude</TableHeader>
          <TableHeader onClick={() => handleSortData("time")}>Time</TableHeader>
        </tr>
      </thead>
      <tbody>
        {getTableRows()}
      </tbody>
    </table>
    </HomeViewContainer>);
}

export default HomeView;