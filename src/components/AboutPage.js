import React from 'react';
import './AboutPage.css';

const pageContents = [
  { color: 'blue', content: 'BLUE PAGE' },
  { color: 'red', content: 'RED PAGE' },
  { color: 'gray', content: 'GRAY PAGE' },
  { color: 'purple', content: 'PURPLE PAGE' },
  { color: 'green', content: 'GREEN PAGE' },
];

const AboutPage = () => {
  return (
    <div className='containerWrap'>
      <div className="container">
        {pageContents.map((page, index) => (
          <section key={index} className={`panel ${page.color}`}>
            {page.content}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;