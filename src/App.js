import logo from './logo.svg';
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
          <p><i>Student <code>ReactJS&NodeJS</code> EduWork</i></p>
          <p>MUKHAMMAD BASHOFI</p>
          <button className="button" href="https://www.instagram.com/?hl=id"> My Social Media </button>
        </header>
        <div>    
          <h5 className='about'>My Profile</h5>
          <p>Halo selamat datang di porto sederhana saya, saat ini saya sedang mengikuti pembelajaran materi di Eduwork dengan materi tentang HTML, dan ini adalah tugas pertama saya tentang html untuk membuat portofolio sederhana untuk melengkapi tugas saya akan menyampaikan riwayat pengalaman pekerjaan dan riwayat pendidikan saya dan susunan saudara saya</p>
        </div>
        <div className="row">
          <div className="col">
            <h3>Riwayat Pendidikan</h3>
            <ul>
              <li>SD N KRADENAN 01 (2002 - 2008)</li>
              <li>SMP N KALIWUNGU 02 (2008 - 2011)</li>
              <li>SMK BHINNEKA KARYA SIMO (2011 - 2014)</li>
              <li>I-CON "desain grafis" (2017 - selama 4 bln)</li>
            </ul>
          </div>
          <div className="col">
            <h3>Pengalaman Pekerjaan</h3>
            <ol>
              <li>PT. Astra Honda Motor (2014 - 2015)</li>
              <li>PT. Jungwoo Shinhwa Mold (2016 - 2018)</li>
              <li>PT. Sanoh Indonesia (2019 - 2022)</li>
            </ol>
          </div>
          <div className="col">
          <table border="2px" cellSpacing="3" cellPadding="5">
            <tbody>
            <tr>
              <th>Nama</th>
              <th>Tempat Tinggal</th>
              <th>anak ke</th>
            </tr>
            <tr>
              <td>Effendi</td>
              <td>cikarang</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Mukhammad Bashofi</td>
              <td>Semarang</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Riski Ayu</td>
              <td>Yogyakarta</td>
              <td>3</td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
        <Label />
        Learn React
      </div>
    </div>
  );
}

export default App;
