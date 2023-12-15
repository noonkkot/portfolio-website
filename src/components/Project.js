// Project.js
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper-bundle.min.css';
import '../App.css'; // Swiper 커스텀 스타일 파일 import

const projects = [
  {
    title: "PROJECT #1 포트폴리오 사이트",
    techStack: ["#React.js", "#CSS", "#Javascript", "#Swiper.js"],
    description: "인트로 페이지로 시작한다. 자기소개를 담은 어바웃 페이지, 프로젝트 썸네일을 담아 Swiper.js로 구현한 프로젝트 페이지 그리고 이메일, 깃허브 등의 내용을 담은 컨텍트 페이지를 포함하고 있다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project1.png`,
    deployedUrl: "https://papaya-entremet-96eed9.netlify.app"
  },
  {
    title: "PROJECT #2 KMDb 한국영화 데이터베이스 검색 사이트",
    techStack: ["#React.js", "#CSS", "#Javascript", "#RestAPI"],
    description: "KMDb Open API를 활용한 검색 사이트로 전체검색과 영화제목, 감독, 배우를 엔드포인트로 한 검색이 가능하다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project2.png`,
    deployedUrl: "https://verdant-torte-dbfc1d.netlify.app"
  },
  {
    title: "PROJECT #3 북 어드밴트 캘린더",
    techStack: ["#HTML", "#CSS", "#Javascript"],
    description: "날짜를 기준으로 클릭할 경우 어떤 책인지 알 수 있으며 동시에 책 속 글귀가 플립되며 나타난다. 날짜가 지나지 않은 경우 공개까지 남은 일자를 알려준다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project3.png`,
    deployedUrl: "https://noonkkot.github.io/book-advent-calendar/"
  },
  {
    title: "PROJECT #4 바늘이야기 리뉴얼",
    techStack: ["#React.js", "#CSS", "#Swiper.js"],
    description: "바늘이야기 쇼핑몰 리뉴얼 프로젝트이다. 구현 목표는 리액트를 사용하여 동적이고 사용자 친화적인 UI 설계이다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project4.png`,
    deployedUrl: "https://playful-tulumba-cc37c6.netlify.app"
  },
  {
    title: "PROJECT #5 TEAM PROJECT 애플스토어 리뉴얼",
    techStack: ["#HTML", "#CSS", "#Javascript", "#Swiper.js"],
    description: "플레이명 저장, 게임 종료 후 재시작",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project5.png`,
    deployedUrl: "https://noonkkot.github.io/team-project-complete/"
  },
  {
    title: "PROJECT #6 틱택토 게임",
    techStack: ["#HTML", "#CSS", "#Javascript"],
    description: "플레이명 저장, 게임 종료 후 재시작",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project6.png`,
    deployedUrl: "https://noonkkot.github.io/tictactoe-game/"
  },
  {
    title: "PROJECT #7 좋아하는 장소",
    techStack: ["#React.js", "#Node.js", "#Mongodb"],
    description: "React.js로 프론트엔드 구축 후 Node.js와 Express.js로 REST API를 구축한 후 MongoDB와 연결 한 후 React.js 프론트 엔드를 백엔드에 연결하고 로그인 기능을 넣어 인증과 권한 부여하는 기능을 추가해 배포까지 마친다.",
    features: "추후 기입",
    image: `${process.env.PUBLIC_URL}/images/project7.png`,
    deployedUrl: "https://example.com/project1"
  },
  // 다른 프로젝트들도 유사한 구조로 추가
];

function ProjectItem({ project }) {

  const handleClick = () => {
    // 썸네일 클릭 시 해당 프로젝트의 배포 사이트로 이동
    window.open(project.deployedUrl, '_blank');
  };

  // 이미지 경로 가져오기
  return (
    <div className="swiper-slide">
      <div className="project">
        <div className="thumbnail" onClick={handleClick}>
          <img src={project.image} alt={project.title} />
        </div>
        <div className="description">
          <h3><span>{project.title}</span></h3>
          <h4>기술스택</h4>
          {project.techStack.map((tech, techIndex) => (
            <span key={techIndex} className="skill">{tech}</span>
          ))}
          <h4>프로젝트 소개</h4>
          <p>{project.description}</p>
          <h4>구현 기능</h4>
          <p>{project.features}</p>
        </div>
      </div>
    </div>
  );
}


function Project() {
  // Swiper 초기화 함수
  const initSwiper = () => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  // 컴포넌트가 마운트된 후에 Swiper 초기화
  useEffect(() => {
    initSwiper();
  }, []); // 빈 배열을 전달하여 마운트된 후 한 번만 실행되도록 설정

  return (
    <article id="article" className="swiper-container">
      <div className="swiper-wrapper">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </article>
  );
}

export default Project;
