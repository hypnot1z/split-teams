import SplitTeams from './SplitTeams'

function Mixer({ selected, closeModal }) {
  selected.sort((a, b) => b.rank - a.rank)
  let s = selected.length

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
  }

  let teams = []
  let teamOne = []
  let teamTwo = []
  let teamThree = []
  let teamFour = []
  let teamFive = []
  let teamSix = []

  if (s < 10 || s > 36) {
    return // button disabled
  } else {
    let quantityTeams = Math.floor(s / 5)
    switch (quantityTeams) {
      case 2:
        for (let i = 0; i < s; i = i + 2) {
          if (i + 2 > s) {
            teamOne.push(selected[i])
          } else {
            if (Math.random() > 0.5) {
              teamOne.push(selected[i]) && teamTwo.push(selected[i + 1])
            } else {
              teamOne.push(selected[i + 1]) && teamTwo.push(selected[i])
            }
          }
        }
        teams = [teamOne, teamTwo]
        return <SplitTeams teams={teams} closeModal={closeModal} />
      case 3:
        for (let i = 0; i < s; i = i + 3) {
          if (i + 1 === s) {
            teamOne.push(selected[i])
            break
          } else if (i + 2 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            break
          } else {
            let arr = [i, i + 1, i + 2]
            shuffle(arr)
            teamOne.push(selected[arr[0]])
            teamTwo.push(selected[arr[1]])
            teamThree.push(selected[arr[2]])
          }
        }

        teams = [teamOne, teamTwo, teamThree]
        return <SplitTeams teams={teams} closeModal={closeModal} />
      case 4:
        for (let i = 0; i < s; i = i + 4) {
          if (i + 1 === s) {
            teamOne.push(selected[i])
            break
          } else if (i + 2 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            break
          } else if (i + 3 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            teamThree.push(selected[i + 2])
            break
          } else {
            let arr = [i, i + 1, i + 2, i + 3]
            shuffle(arr)
            teamOne.push(selected[arr[0]])
            teamTwo.push(selected[arr[1]])
            teamThree.push(selected[arr[2]])
            teamFour.push(selected[arr[3]])
          }
        }

        teams = [teamOne, teamTwo, teamThree, teamFour]
        return <SplitTeams teams={teams} closeModal={closeModal} />
      case 5:
        for (let i = 0; i < s; i = i + 5) {
          if (i + 1 === s) {
            teamOne.push(selected[i])
            break
          } else if (i + 2 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            break
          } else if (i + 3 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            teamThree.push(selected[i + 2])
            break
          } else if (i + 4 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            teamThree.push(selected[i + 2])
            teamFour.push(selected[i + 3])
            break
          } else {
            let arr = [i, i + 1, i + 2, i + 3, i + 4]
            shuffle(arr)
            teamOne.push(selected[arr[0]])
            teamTwo.push(selected[arr[1]])
            teamThree.push(selected[arr[2]])
            teamFour.push(selected[arr[3]])
            teamFive.push(selected[arr[4]])
          }
        }

        teams = [teamOne, teamTwo, teamThree, teamFour, teamFive]
        return <SplitTeams teams={teams} closeModal={closeModal} />
      case 6:
      case 7:
        for (let i = 0; i < s; i = i + 6) {
          if (i + 1 === s) {
            teamOne.push(selected[i])
          } else if (i + 2 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
          } else if (i + 3 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            teamThree.push(selected[i + 2])
          } else if (i + 4 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            teamThree.push(selected[i + 2])
            teamFour.push(selected[i + 3])
          } else if (i + 5 === s) {
            teamOne.push(selected[i])
            teamTwo.push(selected[i + 1])
            teamThree.push(selected[i + 2])
            teamFour.push(selected[i + 3])
            teamFive.push(selected[i + 4])
          } else {
            let arr = [i, i + 1, i + 2, i + 3, i + 4, i + 5]
            shuffle(arr)
            teamOne.push(selected[arr[0]])
            teamTwo.push(selected[arr[1]])
            teamThree.push(selected[arr[2]])
            teamFour.push(selected[arr[3]])
            teamFive.push(selected[arr[4]])
            teamSix.push(selected[arr[5]])
          }
        }

        teams = [teamOne, teamTwo, teamThree, teamFour, teamFive, teamSix]
        return <SplitTeams teams={teams} closeModal={closeModal} />
    }
  }
}

export default Mixer
