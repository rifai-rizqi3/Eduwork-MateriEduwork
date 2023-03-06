import logo from './pptransparant.png';
import './App.css';
import StylingComponen from './Tugas/StylingComponen';
import Label from './Tugas/StylingComponen/Label';


function App() {
  return (
    <div className='main'>
      <div className="App">
        <StylingComponen />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p><i>Bootcamp <code>ReactJS&NodeJS</code> EduWork</i></p>
          <p>Rizqi Nur Rifai</p>
          <button className="button" href="https://www.instagram.com/rizqinurrifai_" target="_blank" rel="noopener noreferrer"> Instagram </button>
        </header>
        <div>    
          <h5 className='about'>A little more about me...</h5>
          <p>Hi, I’m Rizqi and I’m a DevOps Engineer at PT. Digital Nayaka Abhinaya. My current focus is optimizing Cloud Computing. My background is in computer science. Before joining this team, I worked with big data to identify insights for our clients in the digital industry. I’m excited to work with you all to solve our clients’ biggest challenges! blush</p>
        </div>
        <div className="row">
          <div className="col">
            <h3>Riwayat Pendidikan</h3>
            <ul>
              <p>UNIVERSITAS PEMBANGUNAN JAYA</p>
              <p>SMKN 56 JAKARTA RSBI</p>
            </ul>
          </div>
          <div className="col">
            <h3>Pekerjaan</h3>
            <ol>
              <p>DevOps Engineer<br/>at<br/>PT. Digital Nayaka Abhinaya</p>
            </ol>
          </div>
        </div>
        <Label />
        Learn React
      </div>
    </div>
  );
}

export default App;
