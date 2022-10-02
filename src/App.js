import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { RiPlayFill, RiRefreshLine } from 'react-icons/ri'
import './App.css'
import PlayerForm from './components/PlayerForm'
import Button from './UI/Button'
import players from './DB'
import Result from './components/Result'
import Mixer from './components/Mixer'

function App() {
  const [state, setState] = useState(players)

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
      <div className="s">{selected.length}</div>
      <Button title="Reset" onClick={resetSelected}>
        <RiRefreshLine />
      </Button>
      <Button title="Creat Team">
        <RiPlayFill />
      </Button>
      <PlayerForm players={state} toggle={toggleState} />
      {/* <Result selected={selected} /> */}
      <Mixer selected={selected} />
    </div>
  )
}

export default App
