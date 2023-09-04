import "./Rsvp.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const [choice, setChoice] = useState();

  // const handleSubmit = () => {
  //   window.location.href = "https://drive.google.com/file/d/1y3oYXEjiW2zEmchNK0RQUxFY4APZ3IMk/view?usp=sharing";
  // };

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();
    if (name.trim() === "") {
      alert("Tolong isi nama tamu.");
      return;
    }
    if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
      alert("Nama hanya tidak boleh menggunakan angka ataupun simbol");
      return;
    }

    if (trimmedName.length > 30) {
      alert("Nama tidak boleh melebihi 30 karakter.");
      return;
    }

    const doa = document.getElementById("Doa").value.trim();
    if (doa === "") {
      alert("Mohon isi doa Anda untuk pengantin dan keluarga");
      return;
    }
    if (doa.length > 100) {
      alert("Doa tidak boleh melebihi 100 karakter");
      return;
    }

    navigate("/bukti", {
      state: {
        nama: name,
      },
    });
  };

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
        <form onSubmit={handleSubmit}>
          <label>
            Name :
            <input
              type="text"
              name="name"
              size={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <p className="text1"> Berikan Doa untuk Pipop & Cuyung </p>
            <textarea name="Doa" id="Doa" rows="7" cols="50"></textarea>
          </label>
          <br />
          <button type="submit">
            SUBMIT
            {/* <Link to="/bukti" >SUBMIT</Link> */}
          </button>
        </form>
        <p className="column-layout">
          KELUARGA
          <br />
          BPK. ABIE
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
