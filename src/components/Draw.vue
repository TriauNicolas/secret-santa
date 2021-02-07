<template>
    <div class="main-screen">
        <div class="datas-table">
            <b-table :data="people" :columns="columns"></b-table>
        </div>

        <div class="action-button column is-offset-5">
            <b-button type="is-primary" @click="draw(), historic()">I CAN DRAW</b-button>
        </div>
    </div>
</template>

<script>
export default {

    props: [
        'people'
    ],

    data () {
        return {
            columns: [
                {
                    field: 'id',
                    label: 'Numéro',
                    width: '40',
                    numéric: true
                },
                {
                    field: 'name',
                    label: 'Nom',
                    centered: true
                },
                {
                    field: 'blacklist',
                    label: 'blacklist',
                    centered: true
                },
                {
                    field: 'randomParticipant',
                    label: 'Personne tirée',
                    centered: true
                },
                {
                    field: 'historic',
                    label: 'Personne(s) déjà tirée(s)',
                    centered: true
                }
            ],
        }
    },


    methods: {
        randomOne (_min, _max) {
        const min = Math.ceil(_min)
        const max = Math.floor(_max)

        let randomParticipant = Math.floor(Math.random() * (max - min + 1) + min)

        return randomParticipant
        },

        draw () {
            let alreadyTaken = []
            let iterationError = 0

            this.people.forEach(participant => {
            
            let takenParticipant = this.randomOne(1, 20)
            
            while(alreadyTaken.includes(takenParticipant) || takenParticipant === participant.id || takenParticipant === participant.blacklist[0] || takenParticipant === participant.blacklist[1]) {

                if(iterationError >= 250) {
                this.draw()
                break
                }

                takenParticipant = this.randomOne(1, 20)
                iterationError += 1
            }
            
            participant.randomParticipant = takenParticipant
            alreadyTaken.push(takenParticipant)
            })
        },

        historic () {
            this.people.forEach(participant => {
                participant.historic = [...participant.historic, participant.randomParticipant]
                if(participant.historic.length > 5) {
                    participant.historic = [participant.randomParticipant]
                }
            })
        },
    },
}
</script>

<style scoped>

.main-screen {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.datas-table {
    margin: 2% 0 2% 0;
}

</style>
