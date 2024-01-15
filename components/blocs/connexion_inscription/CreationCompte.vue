<template>
    <section class="u-flex u-justify-content-center u-mt100 u-mb100 ">
        <form @submit.prevent="PostCreateAccount" class="form-connexion u-flex u-flex-direction-column u-align-items-center w40 u-gap20 u-p50" >
            <h2 class="fs30px u-mb15">Créer un compte</h2>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="mail">Adresse mail :</label>
                <input type="email" v-model="formData.mail" id="mail" name="mail" required>
            </div>

            <div class="u-flex u-justify-content-between u-gap50">
                <div class="u-flex u-flex-direction-column">
                    <label for="name">Nom :</label>
                    <input type="text" v-model="formData.name"  id="name" name="name" required>
                </div>

                <div class="u-flex u-flex-direction-column">
                    <label for="surname">Prénom : </label>
                    <input type="text" v-model="formData.surname"  id="surname" name="surname" required>
                </div>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="birth">Date de naissance :</label>
                <input type="date" v-model="formData.birth" id="birth" name="birth" required>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="debEtude">Début d'étude :</label>
                <input type="number" v-model="formData.debEtude" id="debEtude" name="debEtude" min="1980" max="2024" step="1" required>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="finEtude">Fin d'étude : </label>
                <input type="number" v-model="formData.finEtude" id="finEtude" name="finEtude"  min="1980" max="2030" step="1" required>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="phone">Numéro de téléphone (falcultatif) :</label>
                <input type="tel" v-model="formData.phone" id="phone" name="phone" pattern="[0-9]{10}">
            </div>


            <p>Déja un compte ? <NuxtLink class="create-account" to="/compte/connexion">Connectez-vous</NuxtLink></p>

            <input class="bouton-submit u-plr15 u-pt10 u-pb10" type="submit" value="Créer un compte">
        </form>
        <div class="popup-container">
            <div class="popup u-flex u-flex-direction-column u-align-items-center u-justify-content-center u-p25">
                <img class="cross" src="../../../static/images/cross.png" alt="">
                <p>Votre demande de création de compte à bien été envoyé !</p>
                <p>Si cette dernière est accepté vous recevrez un e-mail contenant votre identifiant et votre mot de passe</p>
            </div>

        </div>
    </section>
</template>

<style lang="scss">

section{
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
        font-size: 15px;
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

    .popup-container{
        z-index: -1;
        transition: all ease-in-out 200ms;
        position: fixed;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.571);
        opacity: 0;
        
        .popup{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50% ,-50%);
        width: 400px;
        height: fit-content;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 15px gray;
        text-align: center;
        .cross{
            width: 25px;
            position: absolute;
            top: 5px;
            right: 5px;
            cursor: pointer;
        }


    }

}
}
</style>


<script>
import axios from 'axios'
export default{
    data(){
        return{
            formData: {
                mail : "",
                name: "",
                surname: "",
                birth: "",
                debEtude: "",
                finEtude: "",
                phone:"",
            }
        }
    },

    mounted(){

       
    },


    methods: {
    
        async displayPopUp(){
            const popup = document.querySelector(".popup-container")
            const cross = document.querySelector(".cross")

            popup.style.opacity = "100%"
            popup.style.zIndex = 10
            cross.addEventListener("click", () => {
                popup.style.opacity = 0
                popup.style.zIndex = -1
                this.$router.push('/');
            })
        },

        async PostCreateAccount(){
            const url = "https://cidapi.alwaysdata.net/creer_compte/";
            const dataToSend = this.formData;
            try{
                const response = await axios.post(url, dataToSend, {withCredentials : true});
                this.displayPopUp()
            }catch(error){
                console.error("Erreur lors de la soumission du formulaire :", error);
            }
            

            
       }

    }
}

        
</script>


