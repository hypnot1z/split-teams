import { IoIosContact } from 'react-icons/io'
import { FaCheck } from 'react-icons/fa'
import styles from './PlayerData.module.css'
import PlayerContacts from './PlayerContacts'

function PlayerData({ player, toggle }) {
  return (
    <div
      onClick={() => toggle(player.id)}
      className={`${styles.data} ${player.select ? styles.selectedPlayer : ''}`}
    >
      <IoIosContact className={styles.ava} />
      <PlayerContacts player={player} />
      <div className={styles.rank}>RANK: {player.rank}</div>
      <FaCheck className={styles.checkIcon} />
    </div>
  )
}

export default PlayerData
