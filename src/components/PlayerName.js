import styles from './PlayerName.module.css'

function PlayerName({ name }) {
  return <div className={styles.name}>{name.name}</div>
}

export default PlayerName
