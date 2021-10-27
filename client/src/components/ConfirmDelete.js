import React from "react";

export default function ConfirmDelete(props) {

  const { modalState, setModalState, removeFromTeam } = props;


  return (
    <div className={modalState.modalOpen === false ? "modal" : "modal is-active"}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Are you sure you want to delete this Pokemon?</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
        <img className="no-match" src="/images/confused.png" alt='sad pikachu' style={{height: '150px', marginLeft: '35%' }}/> 
        </section>
        <footer className="modal-card-foot">
          <button 
          className="button is-danger"
          onClick={() => {
            removeFromTeam(modalState.pokemonId)
            setModalState({modalOpen: false})
          }}
          >
          Delete Pokemon
          </button>
          <button
           className="button"
           onClick={() => setModalState({modalOpen: false})}
           >
          Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
