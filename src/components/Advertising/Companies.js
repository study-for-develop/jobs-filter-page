import React from 'react';
import styled from 'styled-components';
import Company from './Company';

const Container = styled.div`
  width: 100%;
`;
const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.3px;
  color: var(--font-color);
  margin: 30px 0 14px;
`;
const CompanyContainer = styled.div`
  width: 100%;
  margin: 0 0px 60px;
  display: flex;
  justify-content: space-between;
`;

const Companies = () => {
  const data = [
    {
      job_count: 10,
      ad_id: 1535,
      name: '마켓보로',
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/6788/dewawgsbb8od0gcr__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/6788/dewawgsbb8od0gcr__400_400.jpg'
      },
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.15dba21f.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.15dba21f.jpg'
      },
      id: 6788,
      industry_name: 'IT, 컨텐츠'
    },
    {
      job_count: 10,
      ad_id: 1609,
      name: '원티드랩',
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/79/ezwalry5cue2gemd__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/79/ezwalry5cue2gemd__400_400.jpg'
      },
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.ce4fd8b1.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.ce4fd8b1.jpg'
      },
      id: 79,
      industry_name: 'IT, 컨텐츠'
    },
    {
      job_count: 8,
      ad_id: 1593,
      name: '카플랫',
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/2086/lgkogufqjwi1ngpg__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/2086/lgkogufqjwi1ngpg__400_400.jpg'
      },
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.683d1463.png',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.683d1463.png'
      },
      id: 2086,
      industry_name: 'IT, 컨텐츠'
    },
    {
      job_count: 4,
      name: '셰어라운드',
      industry_name: 'IT, 컨텐츠',
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/7099/4dontndpatqgadar__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/7099/4dontndpatqgadar__400_400.jpg'
      },
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.0ca89357.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.0ca89357.jpg'
      },
      id: 7099
    },
    {
      job_count: 23,
      name: '아이스크림에듀',
      industry_name: '교육',
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/2708/9439_2_0.1072ffd1__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/2708/9439_2_0.1072ffd1__400_400.jpg'
      },
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.fc94c516.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.fc94c516.jpg'
      },
      id: 2708
    }
  ];
  return (
    <Container>
      <Title>적극 채용 중인 회사</Title>
      <CompanyContainer>
        {data.map(item => (
          <Company key={item.id} data={item} />
        ))}
      </CompanyContainer>
    </Container>
  );
};

export default Companies;
