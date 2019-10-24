import React from 'react';
import styled from 'styled-components';

import { BASE_URL } from 'constants/env';

const Container = styled.div`
  width: 100%;
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
`;
const Column = styled.div`
  width: 100%;
  position: relative;
`;
const Header = styled.div`
  width: 100%;
  height: 187.5px;
  background-image: ${({ bgImg }) => `url(${bgImg})`};
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
`;
const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  color: var(--button-font-color);
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  font-weight: 400;
`;
const LikeIcon = styled.i`
  margin-right: 5px;
  color: ${({ isLike }) =>
    isLike ? `var(--like-true-color)` : `var(--like-false-color)`};
`;
const Footer = styled.div`
  padding: 14px 10px;
  height: 175px;
`;
const Position = styled.h3`
  text-overflow: ellipsis;
  word-break: break-word;
  overflow: hidden;
  color: var(--font-color);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 14px;
  line-height: 1.4;
  max-height: 50px;
`;
const CompanyInfo = styled.h4`
  text-overflow: ellipsis;
  color: var(--sub-font-color);
  font-weight: 400;
  line-height: 1.6;
`;
const Reward = styled.span`
  display: inline-block;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #666;
  font-size: 13px;
  font-weight: 400;
`;

const Job = ({ data }) => {
  return (
    <Container>
      <Link href={`${BASE_URL}/wd/${data.id}`} target="_blank">
        <Column>
          <Button>
            <LikeIcon
              className="icon-ic_favorite_black_24px"
              isLike={data.is_like}
            />
            {data.like_count}
          </Button>
          <Header bgImg={data.title_img.thumb} />
        </Column>
        <Column>
          <Footer>
            <Position>{data.position}</Position>
            <CompanyInfo>{data.company.name}</CompanyInfo>
            <CompanyInfo>
              {data.address.location} ・ {data.address.country}
            </CompanyInfo>
            <Reward>채용보상금 {data.reward.formatted_total}</Reward>
          </Footer>
        </Column>
      </Link>
    </Container>
  );
};

export default Job;
