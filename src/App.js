import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RiPlayFill, RiRefreshLine } from 'react-icons/ri'
import './App.css'
import PlayerForm from './components/PlayerForm'
import Button from './UI/Button'
import players from './DB'
import Mixer from './components/Mixer'
import Modal from './components/Modal'

function App() {
  const [state, setState] = useState(players)
  const [show, setShow] = useState(false)

  const openModal = () => {
    setShow(true)
  }
  const closeModal = () => {
    setShow(false)
  }

  const toggleState = (id) => {
    setState(
      state.map((player) => {
        return player.id === id
          ? { ...player, select: !player.select }
          : { ...player }
      })
    )
  }

  let selected = state.filter((el) => el.select)

  const resetSelected = () => {
    setState(players)
  }

  return (
    <div className="App">
      <h1>Mamaika Project</h1>
      {selected.length < 10 && <h2>Выбери больше 10 игроков</h2>}
      {!show && (
        <div className="topBar">
          <Button title="Reset" onClick={resetSelected}>
            <RiRefreshLine />
          </Button>
          <span className="s">{selected.length}</span>
          {selected.length > 9 && (
            <Button title="Creat Team" onClick={() => openModal()}>
              <RiPlayFill />
            </Button>
          )}
        </div>
      )}
      {!show && <PlayerForm players={state} toggle={toggleState} />}
      {!!show && (
        <Mixer
          selected={selected}
          closeModal={closeModal}
          onClick={() => closeModal()}
        />
      )}
      {/* <Modal closeModal={closeModal} show={show} selected={selected} /> */}
    </div>
  )
}

export default App
