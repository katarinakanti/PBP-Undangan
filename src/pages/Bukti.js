import './Bukti.css';
import { Component } from 'react';
import kucing from "../component/kucing.png";
// import bungakucing from './component/bungakucing.png';
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div className = "Bukti">
      <header>
        <br/>
        <h1 className = "App-header">PERNIKAHAN</h1>
        <img src={kucing} style= {{width: 150, height : 150}} alt ="kucing"/> 
        {/* <img src={bungakucing} alt ="bungakucing"/> */}
      </header>
      <section>
        <br/>
        <p className = "App-Isi"> DENGAN MEMOHON RIDHO DAN RAHMATMU </p>
        <p className = "App-Isi">IZINKAN KAMU BERSATU DALAM IKATAN SUCI PERNIKAHAN</p>
        <p className = "App-Isi"> AGAR MENJADI KELUARGA YANG SAKINAH MAWARDAH WARAHMAH</p>

        <p className = "nama">PIPOP</p>
        <p className = "nama">&</p>
        <p className = "nama">CUYUNG</p>

        <h3 className = "tanggal">SABTU, 2 SEPTEMBER 2023</h3>
        <h3 className = "waktu">19:00 WIB</h3>

        <p className = "App-Isi">GEDUNG FOREVER</p>
        <p className = "App-Isi">JALAN PIPOP KESAYANGAN BUNDA NO. 93 RT/RW 03/05,</p>
        <p className = "App-Isi">BULUSAN, SEMARANG, JAWA TENGAH 19051</p>
        <br/>
        <h1 className = "namaundangan">Kepada Bapak & Ibu </h1>
        <p className="namatamu">{data.nama}</p>
      </section>
      
    </div>
  );
}

export default App;
