<template>
    <section class="u-flex u-justify-content-center u-mt100 u-mb100">
        <div class="form-content u-flex u-flex-direction-column u-align-items-center w25 u-p30">
            <h2 class="u-mb30">VOTRE AVIS COMPTE</h2>
            <form class="u-flex u-flex-direction-column u-align-items-center w100" id="form-contact" action="/contact" method="post">
                
                <div class="w100">
                    <label for="objet">Objet : </label>
                    <input class="h40px w100 u-mt10" type="text" name="objet" id="objet" placeholder="">
                </div>

                <div class="u-flex u-flex-direction-column u-gap10 w100 u-mb25 u-mt20 u-noselect">
                    <h5>Destinataire :</h5>
                    <div class="radio-button-container u-flex u-justify-content-between w100 u-mt5">
                        <div class="button-container">
                            <input class="bouton-contact" type="radio" id="directeur" value="directeur" name="radio-button-contact" checked>
                            <label for="directeur">Directeur</label>
                        </div>
                        <div class="button-container">
                            <input class="bouton-contact" type="radio" id="secretaire" value="secretaire" name="radio-button-contact">
                            <label for="secretaire">Secrétaire</label>
                        </div>
                        <div class="button-container">
                            <input class="bouton-contact" type="radio" id="admin" value="admin" name="radio-button-contact">
                            <label for="admin">Administrateur</label>
                        </div>
                    </div>
                </div>
                
                <div class="w100">
                    <label for="message">Message :</label>
                    <textarea rows="4" cols="50" name="message" form="form-contact"></textarea>
                </div>

                <input class="bouton-publier" type="submit" value="Envoyer">
            </form>
            
        </div>
    </section>
</template>

<style lang="scss">

.form-content{
    box-shadow: 0 0 15px $color-dusky-blue;
    border-radius: 10px;


    textarea{
        resize: none;
        width: 100%;
        height: 120px;
        margin: 10px 0;
    }
    
    input[type="radio"] {
        display: none;
    }

    input[type="radio"]+label {
        color: black;
        padding: 5px;
        border: 1px solid black;
        border-radius: 2px;
        cursor: pointer;
    }

    input[type="radio"]:checked+label, input[type="radio"]:hover+label {
        background-color: $color-dusky-blue;
        color: white;
        transition: all ease-in-out 250ms;

    }


    .input-message{
        text-align: start;
    }

    .bouton-publier{
        width: fit-content;
        height:fit-content;
        background-color: $color-dusky-blue;
        border: 1px solid white;
        color: white;
        border-radius: 10px;
        padding: 10px 30px;
        font-size: 15px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all ease-in-out 300ms;
    }
    .bouton-publier:hover{
        background-color:$color-rhino-blue;
    }
}
</style>

<script>
export default {
    name: 'Formulaire',
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