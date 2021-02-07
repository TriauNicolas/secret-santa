<template>
    <div class="main-screen">
        <div class="title-container columns">
            <div class="column is-1 is-offset-3">
                <figure class="image is-96x96">
                    <img src="../assets/Santa.svg">
                </figure>
            </div>
            <div class="column is-offset-1">
                <h1 class="title is-1">Secret Santa !</h1>
            </div>
        </div>

        <div class="rules content">
            <p class="content is-medium">Pour jouer au Secret Santa, rien de plus simple ! Il suffit d'observer quelques règles avant de commencer :</p>
        </div>

        <div class="columns">
            <ol class="column is-half is-offset-3 content is-medium" type="I">
                <li>Chaque personne doit tirer un numéro aléatoire entre 1 et 20</li>
                <li>Personne ne doit savoir votre numéro !</li>
                <li>Quand vous l'aurez, regarder votre fiche personnage afin de regarder à qui vous devez offrir un cadeau ! :)</li>
            </ol>
        </div>

        <div class="action-button column is-offset-5">
            <b-button
            type="is-primary"
            @click="callToAPI()">Commencer !</b-button>
        </div>
    </div>
</template>

<script>
export default {

    data () {
        return {
        }
    },

    methods: {
        callToAPI () {
          fetch("http://localhost:3000/participants")
            .then(res => res.json())
            .then(data => {
              this.$emit('data', data)
            })
        },
    }

  
};
</script>

<style scoped>

.main-screen {
  width: 100%;
  padding: 15% 0;
}

.title-container {
    align-items: center;
}

.rules {
    padding: 5% 0
}

.action-button {
    padding: 5% 1%;
}

</style>
