import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import Filters from './Filter';
import Advertising from './Advertising';
import Jobs from './Job';

const Header = styled.header`
  width: 100%;
  border: 1px solid var(--filter-border-color);
  position: fixed;
  top: 0;
  background-color: #fff;
  padding-top: 10px;
  z-index: 15;
`;
const Container = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 20px 0 80px;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Filters />
      </Header>
      <Container>
        <Advertising />
        <Jobs />
      </Container>
    </>
  );
};

export default App;
