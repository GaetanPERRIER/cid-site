<template>
    <section class="u-flex u-justify-content-center u-mt100 u-mb100 ">
        <form @submit.prevent="" class="form-connexion u-flex u-flex-direction-column u-align-items-center w40  u-gap20 u-p50" >
            <h2 class="fs30px u-mb15 u-mt15">Créer un compte</h2>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="mail">Adresse mail :</label>
                <input type="mail" v-model="formData.Mail" id="mail" name="mail">
            </div>

            <div class="u-flex u-justify-content-between u-gap50">
                <div class="u-flex u-flex-direction-column">
                    <label for="name">Nom :</label>
                    <input type="text" v-model="formData.Nom"  id="name" name="name">
                </div>

                <div class="u-flex u-flex-direction-column">
                    <label for="surname">Prénom : </label>
                    <input type="text" v-model="formData.Prenom"  id="surname" name="surname">
                </div>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="birth">Date de naissance :</label>
                <input type="date" v-model="formData.Birth" id="birth" name="birth">
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="debEtude">Début d'étude :</label>
                <input type="text" v-model="formData.debEtude" id="debEtude" name="debEtude">
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="finEtude">Fin d'étude : </label>
                <input type="text" v-model="formData.finEtude" id="finEtude" name="finEtude">
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="phone">Numéro de téléphone (falcultatif) :</label>
                <input type="text" v-model="formData.phone" id="phone" name="phone">
            </div>


            <p>Déja un compte ? <NuxtLink class="create-account" to="/">Connexion-vous</NuxtLink></p>

            <input class="bouton-submit u-plr15 u-pt10 u-pb10" type="submit" value="Connexion">

            

        </form>
    </section>
</template>


<script>
import axios from 'axios'
export default{
    data(){
        return{
            formData: {
                Mail : "",
                Nom: "",
                Prenom: "",
                Birth: "",
                debEtude: "",
                finEtude: "",
                phone:"",
            }
        }
    },

    mounted(){

       
    },

    methods: {
       

    }
}

        
</script>
<style lang="scss">
.form-connexion{
    box-shadow: 0 0 15px $color-dusky-blue;
    border-radius: 10px;
    div{
        width: 100%;
        label{
            margin-bottom: 5px;
            width: inherit;
        }
        input{
            height: 40px;
            width: 100%;
            border-radius: 5px;
            border: 1px solid black;
        }
    }

    
    .bouton-submit{
        width: fit-content;
        height: fit-content;
        border: none;
        background-color: $color-dusky-blue;
        color: white;
        border-radius: 10px;
        cursor: pointer;
        transition: all ease-in-out 300ms;
    }

    .bouton-submit:hover{
        background-color: $color-rhino-blue;
    }

    p{
        color: $color-dusky-blue;
        .create-account{
            transition: all ease-in-out 150ms;
            text-decoration: none;
            color: $color-yellow-sand;
        }
        .create-account:hover{
            color: $color-yellow-dark;
        }
    }
}
    
</style>


