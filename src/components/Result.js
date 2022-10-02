import { RiSettings2Fill } from 'react-icons/ri'
import styles from './Result.module.css'

function Result({ selected }) {
  selected.sort((a, b) => b.rank - a.rank)
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
  }

  if (selected.length === 30) {
    let basketOne = selected.slice([0], [6])
    shuffle(basketOne)

    let basketTwo = selected.slice([6], [12])
    shuffle(basketTwo)

    let basketThree = selected.slice([12], [18])
    shuffle(basketThree)

    let basketFour = selected.slice([18], [24])
    shuffle(basketFour)

    let basketFive = selected.slice([24])
    shuffle(basketFive)

    let teamOne = [
      basketOne[0],
      basketTwo[0],
      basketThree[0],
      basketFour[0],
      basketFive[0],
    ]
    let teamTwo = [
      basketOne[1],
      basketTwo[1],
      basketThree[1],
      basketFour[1],
      basketFive[1],
    ]
    let teamThree = [
      basketOne[2],
      basketTwo[2],
      basketThree[2],
      basketFour[2],
      basketFive[2],
    ]
    let teamFour = [
      basketOne[3],
      basketTwo[3],
      basketThree[3],
      basketFour[3],
      basketFive[3],
    ]
    let teamFive = [
      basketOne[4],
      basketTwo[4],
      basketThree[4],
      basketFour[4],
      basketFive[4],
    ]
    let teamSix = [
      basketOne[5],
      basketTwo[5],
      basketThree[5],
      basketFour[5],
      basketFive[5],
    ]
    const res1 = teamOne.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })

    const res2 = teamTwo.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res3 = teamThree.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res4 = teamFour.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res5 = teamFive.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res6 = teamSix.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })

    return (
      <div className={styles.result}>
        <table title="TEAM 1">
          <caption>Команда 1</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res1}</tbody>
        </table>

        <table title="TEAM 2">
          <caption>Команда 2</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res2}</tbody>
        </table>
        <table title="TEAM 3">
          <caption>Команда 3</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res3}</tbody>
        </table>
        <table title="TEAM 4">
          <caption>Команда 4</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res4}</tbody>
        </table>
        <table title="TEAM 5">
          <caption>Команда 5</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res5}</tbody>
        </table>
        <table title="TEAM 6">
          <caption>Команда 6</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res6}</tbody>
        </table>
      </div>
    )
  }

  if (selected.length === 36) {
    let basketOne = selected.slice([0], [6])
    shuffle(basketOne)

    let basketTwo = selected.slice([6], [12])
    shuffle(basketTwo)

    let basketThree = selected.slice([12], [18])
    shuffle(basketThree)

    let basketFour = selected.slice([18], [24])
    shuffle(basketFour)

    let basketFive = selected.slice([24], [30])
    shuffle(basketFive)

    let basketSix = selected.slice([30])
    shuffle(basketSix)
    let teamOne = [
      basketOne[0],
      basketTwo[0],
      basketThree[0],
      basketFour[0],
      basketFive[0],
      basketSix[0],
    ]
    let teamTwo = [
      basketOne[1],
      basketTwo[1],
      basketThree[1],
      basketFour[1],
      basketFive[1],
      basketSix[1],
    ]
    let teamThree = [
      basketOne[2],
      basketTwo[2],
      basketThree[2],
      basketFour[2],
      basketFive[2],
      basketSix[2],
    ]
    let teamFour = [
      basketOne[3],
      basketTwo[3],
      basketThree[3],
      basketFour[3],
      basketFive[3],
      basketSix[3],
    ]
    let teamFive = [
      basketOne[4],
      basketTwo[4],
      basketThree[4],
      basketFour[4],
      basketFive[4],
      basketSix[4],
    ]
    let teamSix = [
      basketOne[5],
      basketTwo[5],
      basketThree[5],
      basketFour[5],
      basketFive[5],
      basketSix[5],
    ]
    const res1 = teamOne.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })

    const res2 = teamTwo.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res3 = teamThree.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res4 = teamFour.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res5 = teamFive.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })
    const res6 = teamSix.map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.name}</td>
          <td>{el.lastName}</td>
          <td>{el.rank}</td>
        </tr>
      )
    })

    return (
      <div className={styles.result}>
        <table title="TEAM 1">
          <caption>Команда 1</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res1}</tbody>
        </table>

        <table title="TEAM 2">
          <caption>Команда 2</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res2}</tbody>
        </table>
        <table title="TEAM 3">
          <caption>Команда 3</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res3}</tbody>
        </table>
        <table title="TEAM 4">
          <caption>Команда 4</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res4}</tbody>
        </table>
        <table title="TEAM 5">
          <caption>Команда 5</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res5}</tbody>
        </table>
        <table title="TEAM 6">
          <caption>Команда 6</caption>
          <thead>
            <tr>
              <td>Name</td>
              <td>Last Name</td>
              <td>Rank</td>
            </tr>
          </thead>
          <tbody>{res6}</tbody>
        </table>
      </div>
    )
  }
}

export default Result
