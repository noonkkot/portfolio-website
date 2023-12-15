// Home.js
import React from 'react';

function Home() {
  return (
    <>
    <article id="article">
      <img src={process.env.PUBLIC_URL + 'images/index_gray.png'} alt="인덱스 이미지" className="indexImage" />
    </article>
    </>
  );
}

export default Home;
