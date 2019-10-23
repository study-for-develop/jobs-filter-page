import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 9px 15px;
  border-radius: 2px;
  border: 1px solid var(--filter-border-color);
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: var(--filter-background-hover);
  }
`;
const LeftText = styled.span`
  color: var(--filter-sub-font-color);
  font-weight: 400;
  font-size: 13px;
  margin-right: 5px;
`;
const Text = styled.span`
  color: ${({ isAll }) =>
    isAll ? `var(--font-color)` : `var(--filter-font-color)`};
  font-weight: 600;
  font-size: 13px;
`;

const Filter = ({ data }) => {
  return (
    <Button type="button">
      {data.left && <LeftText>{data.left}</LeftText>}
      <Text isAll={data.display === '전국'}>{data.display}</Text>
    </Button>
  );
};

export default Filter;
