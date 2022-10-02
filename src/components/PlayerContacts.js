import PlayerLastName from './PlayerLastName'
import PlayerName from './PlayerName'
import PlayerTel from './PlayerTel'
import styles from './PlayerContacts.module.css'

function PlayerContacts({ player }) {
  return (
    <div className={styles.contact}>
      <div className={styles.name}>
        <PlayerName name={player} />
        <PlayerLastName lastName={player.lastName} />
      </div>
      <PlayerTel tel={player.tel} />
    </div>
  )
}

export default PlayerContacts
