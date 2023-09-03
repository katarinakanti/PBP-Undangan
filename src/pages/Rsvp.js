import "./Rsvp.css";
import React, { useState } from "react";

function App() {
  const [choice, setChoice] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <p className="tempat">SEMARANG, 28 AGUSTUS 2023</p>
        <p className="rsvp">RSVP</p>
        <p>
          Kami mengharapkan Respon Bapak/Ibu/Saudara/I Pada
          <br />
          Sabtu, 2 September 2023
        </p>
        <form>
          <label>
            Name :
            <input type="text" name="name" size={80} />
            <p>
              <input
                type="radio"
                name="choice"
                value="Terima Dengan Bahagia"
                onChange={(e) => setChoice(e.target.value)}
              />{" "}
              Terima Dengan Bahagia
              <input
                type="radio"
                name="choice"
                value="Menolak Dengan Menyesal"
                onChange={(e) => setChoice(e.target.value)}
              />{" "}
              Menolak Dengan Bahagia{" "}
            </p>
            <p className="text1"> Berikan Doa untuk Pipop & Abi </p>
            <textarea name="Doa" id="Doa" rows="7" cols="50"></textarea>
          </label>
          <br />
          <button type="submit">SUBMIT</button>
        </form>
        <p className="column-layout">
          KELUARGA
          <br />
          BPK. VARREL
          <br />
          IBU ABIGAIL METANOIA
          <p className="nama">PIPOP</p>
          KELUARGA
          <br />
          BPK. RUSWANTORO ABIYAN
          <br />
          IBU UMARIYAH NUR
          <p className="nama">ABI</p>
        </p>
      </header>
    </div>
  );
}

export default App;