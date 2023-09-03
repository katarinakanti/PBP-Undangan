import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useState and useEffect
import Sound from "react-sound";
import WeddingMarch from "./component/WeddingMarch.mp3";
import Undangan from "./pages/Undangan";
import Rsvp from "./pages/Rsvp";

export default function App() {
  // Create a state variable to manage the song playing status
  const [isSongPlaying, setIsSongPlaying] = useState(false);

  useEffect(() => {
    // Use setTimeout to start playing the song after 3 seconds
    const timer = setTimeout(() => {
      setIsSongPlaying(true);
    }, 3000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Undangan />} />
          <Route path="rsvp" element={<Rsvp />} />
        </Route>
      </Routes>

      {/* <audio autoPlay={true}>
        <source src={WeddingMarch} type="audio/mpeg" />
      </audio> */}
    </BrowserRouter>
  );
}
