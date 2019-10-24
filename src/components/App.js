import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Filters from './Filter';
import Advertising from './Advertising';
import Jobs from './Job';

const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px 0 80px;
`;

const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Filters />
      <Advertising />
      <Jobs />
    </Container>
  );
};

export default App;
