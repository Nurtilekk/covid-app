import React from "react";
import style from "./Modal.module.css";

export const Modal = ({ toggleModal, closeModal }) => {
  document.body.addEventListener("click", function (e) {
    if (e.target === document.querySelector(`.${style.modalWrapper}`)) {
      closeModal();
    }
  });

  const linkHandler = (e) => {
    e.preventDefault();
  }

  document.body.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
      closeModal()
    }
  })

  return (
    <div
      style={{ display: `${toggleModal ? "flex" : "none"}` }}
      className={style.modalWrapper}
    >
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <a href="#" target="_blank" onClick={linkHandler} onClickCapture={() => closeModal()}  className={style.closeBtn}>X</a>
        </div>
        <div className={style.modalCenter}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          harum commodi ab repellat, distinctio tenetur.
        </div>
        <div className={style.modalFooter}>Lorem ipsum dolor sit amet.</div>
      </div>
    </div>
  );
};
