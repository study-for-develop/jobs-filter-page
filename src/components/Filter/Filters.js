import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';

const Container = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const Column = styled.div``;
const FilterIcon = styled.i``;

const Filters = () => {
  const data = [
    { display: '최신순', left: '' },
    { display: '한국', left: '국가' },
    { display: '전국', left: '지역' },
    { display: '신입', left: '경력' },
    { display: '필터', left: <FilterIcon className="icon-filter-bar" /> }
  ];
  return (
    <Container>
      <Column>
        {data.map(
          (item, index) =>
            index !== data.length - 1 && <Filter key={index} data={item} />
        )}
      </Column>
      <Column>
        <Filter data={data[data.length - 1]} />
      </Column>
    </Container>
  );
};

export default Filters;
