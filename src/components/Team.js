import Player from './Player'
import styles from './Team.module.css'

function Team({ team, children }) {
  return (
    <div className={styles.card}>
      <ol>
        {children}
        {team.map((player) => (
          <Player
            key={player.id}
            name={player.name}
            lastName={player.lastName}
            rank={player.rank}
          />
        ))}
      </ol>
    </div>
  )
}

export default Team
