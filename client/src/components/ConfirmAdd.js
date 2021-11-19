import React from "react";

export default function ConfirmAdd(props) {
  const { modalState, setModalState, addToTeam } = props;
// console.log(modalState)

  return (
    <div
      className={modalState.modalOpen === false ? "modal" : "modal is-active"}
    >
      {modalState.teamLength >= 6 ? (
        <>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                You Can't Own More than 6 Pokemon
              </p>
            </header>
            <section className="modal-card-body">
              <h3>
                Delete a pokemon from your team to be able to add another.
              </h3>
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-info"
                onClick={() => setModalState({ modalOpen: false })}
              >
                Ok
              </button>
            </footer>
          </div>
        </>
      ) : (
        <>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Purchase this Pokemon? </p>
              <button className="delete" aria-label="close" onClick={() => setModalState({modalOpen: false})}></button>
            </header>
            <section className="modal-card-body">
              <img
                className="no-match"
                src={modalState.img}
                alt="sad pikachu"
                style={{ height: "150px", marginLeft: "35%" }}
              />
            </section>
            <footer className="modal-card-foot">
              <button
                className="button is-success"
                onClick={() => {
                  addToTeam(modalState.pokemonId);
                  setModalState({ modalOpen: false });
                }}
              >
               ${modalState.price} to Purchase
              </button>
              <button
                className="button is-danger"
                onClick={() => setModalState({ modalOpen: false })}
              >
                Cancel
              </button>
            </footer>
          </div>
        </>
      )}
    </div>
  );
}
