import React from 'react';
import './App.css';
import { Footer, Header } from "./components/components";
import {About} from "./pages/pages";


function App() {
  return (
    <main>
      <Header />
          <About/>
    <Footer/>
    </main> 
  );
}

export default App;
