import "./Undangan.css";
import { Component } from "react";
import kucing from "../component/kucing.png";
// import bungakucing from './component/bungakucing.png';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <br />
        <h1 className="App-header">PERNIKAHAN</h1>
        <img src={kucing} style={{ width: 220, height: 220 }} alt="kucing" />
        {/* <img src={bungakucing} alt ="bungakucing"/> */}
      </header>
      <section>
        <br />
        <p className="App-Isi">
          {" "}
          DENGAN MEMOHON RIDHO DAN RAHMATMU IZINKAN KAMU BERSATU DALAM IKATAN
          SUCI PERNIKAHAN
        </p>
        <p className="App-Isi">
          {" "}
          AGAR MENJADI KELUARGA YANG SAKINAH MAWARDAH WARAHMAH
        </p>

        <p className="nama">PIPOP</p>
        <p className="nama">&</p>
        <p className="nama">ABI</p>

        <h3 className="tanggal">SABTU, 2 SEPTEMBER 2023</h3>
        <h3 className="waktu">19:00 WIB</h3>

        <p className="App-Isi">GEDUNG FOREVER</p>
        <p className="App-Isi">
          JALAN PIPOP KESAYANGAN BUNDA NO. 93 RT/RW 03/05, BULUSAN, SEMARANG,
          JAWA TENGAH 19051
        </p>

        <Link to="/rsvp">
          <p className="rsvp">RSVP</p>
        </Link>
      </section>
    </div>
  );
}

export default App;
