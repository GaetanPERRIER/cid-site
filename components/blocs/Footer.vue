<script>
export default {
    name: 'Footer',
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
    <!--buttons -->
    <footer class="u-flex u-flex-direction-column u-pt50 u-pb50">
        <div class="u-flex u-justify-content-end u-gap25 u-pr210">
            <button>Nous rejoindre</button>
            <button>Nous contacter</button>
        </div>

    <!-- Listes-->
        <div class="u-flex u-justify-content-evenly u-p50">
            <div class="u-flex u-flex-direction-column u-gap10">
                <h5>Informations</h5>
                <a href="">Conférences</a>
                <a href="">Calendrier</a>
                <a href="">Rencontres</a>
                <a href="">Inscription</a>
            </div>
            <div class="u-flex u-flex-direction-column u-gap10">
                <h5>Présentation</h5>
                <a href="">L'association</a>
                <a href="">Le mot du président</a>
                <a href="">Le bureau</a>
                <a href="">Documents statuaires</a>
            </div>
            <div class="u-flex u-flex-direction-column u-gap10">
                <h5>Crédits</h5>
                <a href="">Cookies</a>
                <a href="">Mentions légales</a>
                <a href="">Confidentialités</a>
            </div>
            <div class="u-flex u-flex-direction-column u-gap10">
                <h5>Informations</h5>
                <a href=""><img src="" alt="Logo Linkedin"></a>
                <a href=""><img src="" alt="Logo X"></a>
                <a href=""><img src="" alt="Logo Facebook"></a>
                
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    footer{
        background-color: $color-dusky-blue;
        a{
            text-decoration: none;
            color: white;
            font-size: 15px;
        }
        h5{
            font-size: 15px;
            font-weight: bold;
            color: white;
        }

        button{
            font-size: 15px;
            background-color: $color-rhino-blue;
            padding: 10px 15px;
            border-radius: 15px;
            color: white;
        }
    }
</style>