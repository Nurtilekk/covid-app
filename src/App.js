import React from 'react';
import './App.css';
import { Footer, Header } from "./components/components";
import {About} from "./pages/pages";


function App() {
  return (
    <main>
      <Header />
      <div style={{height: '100vh'}}>
          <About/>
      </div>
    <Footer/>
    </main> 
  );
}

export default App;
