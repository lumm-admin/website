import React from 'react';
import { Container } from 'react-bootstrap';


const HomePage = () => {
    return (
<div>
        <Container>
          <h1></h1>
          <p>Coucou tout le monde c'est la lume</p>
          <div className="ratio ratio-21x9">
            <iframe src="https://www.youtube.com/embed/wbPmxP5Sc3A?si=Q-q4d1nj0Lb1qdi4" title="YouTube video player" allowFullScreen></iframe>
          </div>
        </Container>
      </div> );
};
export default HomePage;