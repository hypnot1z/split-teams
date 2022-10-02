import styles from './PlayerForm.module.css'
import PlayerData from './PlayerData'

function PlayerForm({ players, toggle }) {
  return (
    <div className={styles.form}>
      {players.map((player) => (
        <PlayerData player={player} key={player.id} toggle={toggle} />
      ))}
    </div>
  )
}

export default PlayerForm
