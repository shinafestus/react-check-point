import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import RightSide from './Components/RightSide';
import LeftSide from './Components/LeftSide';
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <Row className="App">
      <Menu></Menu>
      <Col> <LeftSide></LeftSide> </Col>
      <Col><RightSide></RightSide></Col>
    
    
    </Row>
  );
}

export default App;
