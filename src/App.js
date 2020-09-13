import React, { useState } from 'react';
import './App.css';
import { Footer, Header, Modal } from "./components/components";

function App() {
  const [toggleModal, setToggleModal] = useState(false)

  if(toggleModal) {
    document.body.classList.add('modal-is-open')
  } else {
    document.body.classList.remove('modal-is-open')
  }

  const closeModal = () => {
    setToggleModal(false)
  }

  const openModal = () => {
    setToggleModal(true)
  } 

  return (
    <main>
    <Modal closeModal={closeModal} toggleModal={toggleModal} setToggleModal={setToggleModal}/>
      <Header openModal={openModal}/>
      <div style={{height: '100vh'}}></div>
    <Footer/>
    </main> 
  );
}

export default App;