import styles from './Modal.module.css'
import Mixer from './Mixer'

function Modal({ show, closeModal, selected }) {
  return (
    <>
      <div className={show ? styles.overlay : styles.hide} onClick={closeModal}>
        <div className={show ? styles.modal : styles.hide}>
          <button onClick={closeModal}>X</button>

          <Mixer selected={selected} />
          {selected.length < 10 && <span>Мало игроков</span>}
          {selected.length > 36 && <span>Перебор игроков</span>}
        </div>
      </div>
    </>
  )
}

export default Modal
