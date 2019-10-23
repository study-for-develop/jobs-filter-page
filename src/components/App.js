import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Filters from './Filter';

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
    </Container>
  );
};

export default App;
