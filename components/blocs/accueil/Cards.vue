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
                <img class="u-m15 h250px" src="../../../assets/imgs/imgs-accueil/president.png" alt="Photo du Président">
                <div class="u-flex u-flex-direction-column u-justify-content-evenly h250px u-p15">
                    <h4>Thomas Wiscart</h4>
                    <p class="role">Président du CID</p>
                    <p>Je pense que c'est plutôt contre-productif d'envoyer constamment des messages sur le BDE. Cela oblige les membres du BDE à vérifier constamment que les nouveaux messages ne sont pas borderline, ce qui ne leur permet pas de...</p>
                </div>
            </div>
        </div>
        <div class="u-flex u-flex-direction-column u-align-items-center u-mt100 u-mb100">
            <h3 class="fs25px u-pb10">Le Mot de la Secrétaire</h3>
            <div class="cartes jaune u-flex u-align-items-center w100 h280px">
                <div class="u-flex u-flex-direction-column u-justify-content-evenly h250px u-p15">
                    <h4>Thomas Wiscart</h4>
                    <p class="role">Secrétaire du CID</p>
                    <p>Je pense que c'est plutôt contre-productif d'envoyer constamment des messages sur le BDE. Cela oblige les membres du BDE à vérifier constamment que les nouveaux messages ne sont pas borderline, ce qui ne leur permet pas de...</p>
                </div>
                <img class="u-m15 h250px" src="../../../assets/imgs/imgs-accueil/president.png" alt="Photo du Président">
            </div>
        </div>
    </section>
</template>


<style lang="scss">
.cartes{
    background-color: $color-dusky-blue;
    color: white;
    border-radius: 10px;
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
    }
}
.jaune{
    background-color: $color-yellow-sand;
    color: black;
}

</style>