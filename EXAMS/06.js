const getWinner = (competition) => {
    let currName = ""
    let currPoints = 0

    let maxPoints = 0

    let winner = ""
    for(let i = 1; i< competition.length; i++) {
        if(competition[i] === "Stop") {
            console.log(`${currName} has ${currPoints} points.`)
    
            if(currPoints > maxPoints) { 
                maxPoints = currPoints
                console.log(`${currName} is the new number 1!`)
                winner = currName
            }
            currName = ""
            currPoints = 0
        }
    
        else if(isNaN(competition[i]) ) { 
            currName = competition[i]
        }
    
        else currPoints += parseInt(competition[i])

    }

    console.log(`${winner} won competition with ${maxPoints} points!`)

}
getWinner(["3",
"Chef Manchev",
"10",
"10",
"10",
"10",
"Stop",
"Natalie",
"8",
"2",
"9",
"Stop",
"George",
"9",
"2",
"4",
"2",
"Stop"])
