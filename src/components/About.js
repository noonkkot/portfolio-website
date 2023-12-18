// components/About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEllipsisV, faHeart, faComment, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faComment as farComment } from '@fortawesome/free-regular-svg-icons';

function About() {
  return (
    <article id="article">
      <div className="articleWrap">
        <div className="about-img">
          <div className="about-img-top"></div>
          <div className="about-img-bottom"></div>
        </div>
        <div className="about-txt">
          <h2>ABOUT</h2>
          <p>자소서 내용 넣을 예정</p>
          {/* <p>관심을 가지면 닿을 수 있는 길을 찾아 나서며 적극적으로 소비하고 배웁니다.</p>
          <p>도전적인 마음가짐으로 언어를 시각화하는 과정에 대한 꾸준한 관심을 유지하게 해왔습니다.새로운 것을 배우는 경험에 익숙하고, 중요시하는 저의 성장 과정은 계속해서 업데이트되는 개발 언어와 환경에 대한 적응력을 갖출 수 있도록 해주었습니다. 새로운 기술이 등장하거나 환경이 변화해도 변화에 대한 두려움보다는 호기심과 열정으로 접근하여 업데이트할 수 있는 자신감을 가지고 있습니다. 이를 통해 항상 최신 동향을 파악하고 새로운 도전에 대해 겁먹지 않으며, 업무에 필요한 기술과 지식을 습득하여 발전하는 개발자로 성장할 자신이 있습니다.</p> */}
          <h4>PROFILE</h4>
          <p>이설화</p>
          <p>010-8371-1200</p>
          <p>oyatnunkkot@gmail.com</p>
          <h4>CAREER</h4>
          <p></p>
          <h4>SKILLS</h4>
          <span className="skill">#HTML</span>
          <span className="skill">#CSS</span>
          <span className="skill">#Javascript</span>
          <span className="skill">#React.js</span>
          <span className="skill">#Vue.js</span>
          <span className="skill">#SCSS</span>
          <h4>CERTIFICATE</h4>
          <p>Craftsman Web Design</p>
        </div>
      </div>
    </article>
    // <div id="article">
    // <div className="wrapper">
    //   <div className="img-area">
    //     <div className="inner-area">
    //       <img src={process.env.PUBLIC_URL + 'images/about.jpg'} alt="프로필 이미지" />
    //     </div>
    //   </div>
    //   <div className="icon arrow"><FontAwesomeIcon icon={faArrowLeft} /></div>
    //   <div className="icon dots"><FontAwesomeIcon icon={faEllipsisV} /></div>
    //   <div className="name">LEE, SEOLHWA</div>
    //   <div className="about">Designer & Developer</div>
    //   <div className="social-icons">
    //     <a href="#" className="fb"><FontAwesomeIcon icon={['fab', 'fa-facebook-f']} /></a>
    //     <a href="#" className="twitter"><FontAwesomeIcon icon={['fab', 'fa-twitter']} /></a>
    //     <a href="#" className="insta"><FontAwesomeIcon icon={['fab', 'fa-instagram']} /></a>
    //     <a href="#" className="yt"><FontAwesomeIcon icon={['fab', 'fa-youtube']} /></a>
    //   </div>
    //   <div className="buttons">
    //     <button>Message</button>
    //     <button>Be Friends</button>
    //   </div>
    //   <div className="social-share">
    //     <div className="row">
    //       {/* <FontAwesomeIcon icon={farHeart} /> */}
    //       <FontAwesomeIcon className="icon-2" icon={faHeart} />
    //       <span>20.4k</span>
    //     </div>
    //     <div className="row">
    //       {/* <FontAwesomeIcon icon={farComment} /> */}
    //       <FontAwesomeIcon className="icon-2" icon={faComment} />
    //       <span>14.3k</span>
    //     </div>
    //     <div className="row">
    //       <FontAwesomeIcon icon={faShare} />
    //       <span>12.8k</span>
    //     </div>
    //   </div>
    // </div>
    // </div>
  );
};
export default About;
