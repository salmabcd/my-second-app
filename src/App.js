import logo from './logo.svg';
import './App.css';
import img1 from './photo/les profs 2.jfif';
import VideoPlayer from 'react-video-js-player';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Card>
            <Card.Title> Les Profs: La Saga</Card.Title>
            <Card.Body>
              <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
                <h1 className="title-red">Les Profs: la Saga</h1>
                <br />
                <Row>
                  <Col>
                    <img src="/images/les profs.jfif" alt="the image is invaliable" />
                  </Col>
                  <br />
                  <Col>
                    <img src={img1} alt="the image is invaliable" />
                  </Col>
                </Row>
              </div>

              <video width={320} height={240} controls>
                <source src="/videos/profs.mp4" type="video.mp4" />
              </video>
              <br />
              <Button> Regarder </Button>
            </Card.Body>
          </Card>
        </div>


      </header>
    </div>
  );
}

export default App;
