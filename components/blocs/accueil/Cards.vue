<script>

export default {
    name: 'Cards',
    components: {},
    data() {
        return {
            isClicked: false
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>


<template>
    <section class="u-flex u-justify-content-evenly u-gap100 u-plr150">
        <div class="u-flex u-flex-direction-column u-align-items-center u-mt100 u-mb100">
            <h4 class="fs25px u-pb10">Le Mot du Président</h4>
            <div class="cartes u-flex u-align-items-center w100 h280px">
                <img class="u-m15 h250px" src="../../../static/images/image.png" alt="Photo du Président">
                <div class="u-flex u-flex-direction-column u-justify-content-evenly h250px u-p15">
                    <h4>Nathalie Contart-Demazeux</h4>
                    <p class="role">Président du CID</p>
                    <p>"Ensemble, tissons la toile de la connaissance numérique au sein du CID. Que chaque informaticien dispersé trouve ici son point de convergence pour partager, apprendre et grandir dans notre communauté dédiée à l'excellence informatique."</p>
                </div>
            </div>
        </div>
        <div class="u-flex u-flex-direction-column u-align-items-center u-mt100 u-mb100">
            <h3 class="fs25px u-pb10">Le Mot de la Secrétaire</h3>
            <div class="cartes jaune u-flex u-align-items-center h280px">
                <div class="u-flex u-flex-direction-column u-justify-content-evenly h250px u-p15">
                    <h4>Sophie Martin</h4>
                    <p class="role">Secrétaire du CID</p>
                    <p>"Chers membres du CID, bienvenue sur notre plateforme dédiée aux passionnés d'informatique. Ensemble, cultivons la connectivité et l'échange au sein du Cercle des Informaticiens Dispersés."</p>
                </div>
                <img class="u-m15 h250px" src="../../../static/images/img.png" alt="Photo du Président">
            </div>
        </div>
    </section>
</template>


<style lang="scss">
.cartes{
    background-color: $color-dusky-blue;
    color: white;
    border-radius: 10px;
    width: 800px;
    div{
        h4{
            font-size: 20px;
            text-align: center;
        }
        .role{
            font-style: italic;
            text-align: center;
        }
    }
    img{
        border-radius: 5px;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
}
.jaune{
    background-color: $color-yellow-sand;
    color: black;
}

</style>