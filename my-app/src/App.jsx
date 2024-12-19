import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import ImageGallery from "./components/ImageGallery";
import Traffic from "./components/Traffic";
import QuizApp from "./components/QuizApp";


const App = () => {
  const [title, setTitle] = useState("");
  return (
    <>
      <Navbar title={title} />
      {/* <Counter onCounterLoad={() => setTitle("Counter")} /> */}
      {/* <ImageGallery onGalleryLoad={() => setTitle("Image Gallery")} /> */}
      {/* <Traffic onTrafficLoad={() => setTitle("Traffic Lights")}/> */}
      <QuizApp onQuizAppLoad={() => setTitle("Quiz App")} />
    </>
  );
};

export default App;
