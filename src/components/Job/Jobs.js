import React from 'react';
import styled from 'styled-components';
import Job from './Job';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
`;

const Jobs = () => {
  const data = [
    {
      status: 'active',
      is_like: true,
      is_bookmark: false,
      company: {
        id: 3576,
        name: '콩테크(Kong-tech)',
        industry_name: 'IT, 컨텐츠'
      },
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/3576/4jtx0tnnj6jbjjso__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/3576/4jtx0tnnj6jbjjso__400_400.jpg'
      },
      compare_country: true,
      due_time: '2019-11-08',
      like_count: 19,
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.1724e8da.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.1724e8da.jpg'
      },
      address: {
        country: '한국',
        location: '경기'
      },
      position: 'Web Developer/Front-End',
      reward: {
        formatted_total: '1,000,000원',
        formatted_recommender: '500,000원',
        formatted_recommendee: '500,000원'
      },
      id: 23933
    },
    {
      status: 'active',
      is_like: false,
      is_bookmark: false,
      company: {
        id: 82,
        name: '마이뮤직테이스트',
        industry_name: 'IT, 컨텐츠'
      },
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/82/qz7hh8jhzj7qlvio__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/82/qz7hh8jhzj7qlvio__400_400.jpg'
      },
      compare_country: true,
      due_time: null,
      like_count: 5,
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.4ec4966a.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.4ec4966a.jpg'
      },
      address: {
        country: '한국',
        location: '서울'
      },
      position: 'CREAM Mobile App Engineer (iOS/Android/React Native)',
      reward: {
        formatted_total: '1,000,000원',
        formatted_recommender: '500,000원',
        formatted_recommendee: '500,000원'
      },
      id: 27639
    },
    {
      status: 'active',
      is_like: false,
      is_bookmark: false,
      company: {
        id: 8894,
        name: '보로노이',
        industry_name: '전문, 과학기술'
      },
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/8894/nodydasinwzp0dej__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/8894/nodydasinwzp0dej__400_400.jpg'
      },
      compare_country: true,
      due_time: null,
      like_count: 1,
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.9db4d272.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.9db4d272.jpg'
      },
      address: {
        country: '한국',
        location: '서울'
      },
      position: '보로노이 프론트엔드(풀스택)연구원',
      reward: {
        formatted_total: '1,000,000원',
        formatted_recommender: '500,000원',
        formatted_recommendee: '500,000원'
      },
      id: 30167
    },
    {
      status: 'active',
      is_like: false,
      is_bookmark: false,
      company: {
        id: 2113,
        name: '스퀘어랩',
        industry_name: 'IT, 컨텐츠'
      },
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/2113/yiprywb9yd1vbwjt__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/2113/yiprywb9yd1vbwjt__400_400.jpg'
      },
      compare_country: true,
      due_time: null,
      like_count: 51,
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.2eb94a74.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.2eb94a74.jpg'
      },
      address: {
        country: '한국',
        location: '서울'
      },
      position: 'Client Engineer',
      reward: {
        formatted_total: '1,000,000원',
        formatted_recommender: '500,000원',
        formatted_recommendee: '500,000원'
      },
      id: 13169
    },
    {
      status: 'active',
      is_like: false,
      is_bookmark: false,
      company: {
        id: 6817,
        name: '같다(gatda Corp)',
        industry_name: 'IT, 컨텐츠'
      },
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/6817/rjmnqz8mznybrn47__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/6817/rjmnqz8mznybrn47__400_400.jpg'
      },
      compare_country: true,
      due_time: '2019-10-31',
      like_count: 83,
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.b624bb23.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.b624bb23.jpg'
      },
      address: {
        country: '한국',
        location: '서울'
      },
      position: 'Android Developer',
      reward: {
        formatted_total: '1,000,000원',
        formatted_recommender: '500,000원',
        formatted_recommendee: '500,000원'
      },
      id: 24266
    },
    {
      status: 'active',
      is_like: true,
      is_bookmark: false,
      company: {
        id: 5650,
        name: '코드브릭 (Tokotalk)',
        industry_name: 'IT, 컨텐츠'
      },
      title_img: {
        origin:
          'https://static.wanted.co.kr/images/company/5650/iupp78vr0lw7hmrj__1080_790.jpg',
        thumb:
          'https://static.wanted.co.kr/images/company/5650/iupp78vr0lw7hmrj__400_400.jpg'
      },
      compare_country: true,
      due_time: null,
      like_count: 22,
      logo_img: {
        origin: 'https://static.wanted.co.kr/images/wdes/0_4.9215a279.jpg',
        thumb: 'https://static.wanted.co.kr/images/wdes/0_5.9215a279.jpg'
      },
      address: {
        country: '한국',
        location: '서울'
      },
      position: '소프트웨어 웹 개발 엔지니어(병역특례/산업기능요원 가능)',
      reward: {
        formatted_total: '1,000,000원',
        formatted_recommender: '500,000원',
        formatted_recommendee: '500,000원'
      },
      id: 22778
    }
  ];
  return (
    <Container>
      {data.map(item => (
        <Job key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Jobs;
