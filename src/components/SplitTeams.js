import Team from './Team'
import styles from './SplitTeams.module.css'

function SplitTeams({ teams, closeModal }) {
  return (
    <div className={styles.table} onClick={closeModal}>
      {teams.map((team, index) => (
        <Team key={index} team={team}>
          Команда {index + 1}
        </Team>
      ))}
    </div>
  )
}

export default SplitTeams
