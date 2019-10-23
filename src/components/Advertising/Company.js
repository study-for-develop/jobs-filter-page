import React from 'react';
import styled from 'styled-components';
import { BASE_URL } from 'constants/env';

const Container = styled.div`
  width: calc(20% - 20px);
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 147px;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-position: 50%;
  background-size: cover;
  background-color: var(--base-background-color);
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
`;
const Footer = styled.div`
  width: 100%;
  padding: 34px 16px 0;
  position: relative;
  height: 124px;
`;
const Logo = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: -25px;
  left: 16px;
  border: 1px solid var(--filter-border-color);
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--base-background-color);
  z-index: 10;
`;
const Name = styled.h4`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: var(--font-color);
  margin: 4px 0;
  max-height: 58px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const JobCount = styled.h5`
  color: var(--sub-font-color);
  font-weight: 400;
  letter-spacing: -0.2px;
  margin-top: 6px;
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid var(--filter-border-color);
  border-radius: 3px;
  &:hover {
    ${Header} {
      transform: scale(1.06);
    }
    ${Name} {
      color: var(--active-font-color);
    }
  }
`;
const Column = styled.div`
  &:first-child {
    overflow: hidden;
  }
`;

const Company = ({ data }) => {
  return (
    <Container>
      <Link href={`${BASE_URL}/company/${data.id}`} target="_blank">
        <Column>
          <Header bgImg={data.title_img.origin} />
        </Column>
        <Column>
          <Footer>
            <Logo bgImg={data.logo_img.thumb} />
            <Name>{data.name}</Name>
            <JobCount>{data.job_count}개 포지션</JobCount>
          </Footer>
        </Column>
      </Link>
    </Container>
  );
};

export default Company;
