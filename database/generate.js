module.exports = () => {
    const faker = require("faker")
    const data = { participants: [] }
    
    const randomID = (min, max, id) => {
        let iterationError = 0
        let numbers = []
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
        let secondNumber = Math.floor(Math.random() * (max - min + 1) + min)

            while(randomNumber === (id + 1) || secondNumber === (id + 1) || secondNumber === randomNumber) {

                if(iterationError >= 250) {
                    randomID()
                    break
                }

                iterationError += 1
                randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
                secondNumber = Math.floor(Math.random() * (max - min + 1) + min)
            }
            
        numbers.push(randomNumber, secondNumber)
        return numbers
      }


    for (let i = 0; i < 20; i++) {
        data.participants.push({
            id: i + 1,
            name: faker.name.findName(),
            blacklist: randomID(1, 20, i),
            randomParticipant: 0,
            historic: [],
        })
    }

    return data
}
