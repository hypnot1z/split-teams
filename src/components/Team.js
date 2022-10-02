import Player from './Player'

function Team({ team, children }) {
  return (
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
  )
}

export default Team
