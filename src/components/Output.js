import Team from './Team'

function Output({ teams }) {
  //   const t1 = (team) =>
  //     team.map((el) => (
  //       <li key={el.id}>
  //         {el.name} {el.lastName} Rank {el.rank}
  //       </li>
  //     ))

  //   const player = (props) => {
  //     for (let item in props) {
  //       props[item].map((element) => <li key={element.id}>{element.name}</li>)
  //     }
  //   }

  return (
    <div>
      {teams.map((team, index) => (
        <Team key={index} team={team}>
          Команда {index + 1}
        </Team>
      ))}
    </div>
  )
}

export default Output
