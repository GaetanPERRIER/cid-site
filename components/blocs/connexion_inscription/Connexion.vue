<template>
    <section class="u-flex u-justify-content-center u-mt100 u-mb100 ">
        <form @submit.prevent="postConnexion" class="form-connexion u-flex u-flex-direction-column u-align-items-center w40  u-gap20 u-p50" >
            <h2 class="fs30px u-mb15">Se connecter</h2>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="Login">Identifiant :</label>
                <input type="text" v-model="formData.Login" id="Login" name="Login" required>
            </div>

            <div class="u-flex u-flex-direction-column">
                <label for="Mdp">Mot de passe :</label>
                <input type="password" v-model="formData.Mdp"  id="Mdp" name="Mdp" required>
            </div>

            <p class="connexion-error">Identifiant ou mot de passe invalide</p>

            <NuxtLink to="/compte/forgot-password" class="forgot-password">Mot de passe oublié ?</NuxtLink>

            <input class="bouton-submit u-plr15 u-pt10 u-pb10" type="submit" value="Connexion">

            

            <p>Vous n'avez pas de compte ? <NuxtLink class="create-account" to="/compte/creation-compte">Créez un compte</NuxtLink></p>

        </form>
    </section>
</template>

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

    .forgot-password{
        color: $color-dusky-blue;
        text-decoration: none;
        transition: all ease-in-out 150ms;

    }

    .forgot-password:hover{
        color: $color-rhino-blue;
    }
    .bouton-submit{
        width: fit-content;
        height: fit-content;
        font-size: 15px;
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

    .connexion-error{
        color: red;
        display: none;
        font-style: italic;
        font-size: 10px;
        transform: translateY(-15px);
    }
    

}
    
</style>


<script>
import axios from 'axios';
import CryptoJS from 'crypto-js';

export default{
    data(){
        return{
            formData: {
                Login : "",
                Mdp:"",
            }
        }
    },

    mounted(){
       
    },

    methods: {
        async postConnexion() {
            const connexionError = document.querySelector(".connexion-error")
            const url = "https://cidapi.alwaysdata.net/connexion/";
            const hashedPassword = this.hashPassword(this.formData.Mdp).toString();
            const dataToSend = {Login: this.formData.Login, Mdp : hashedPassword}
            try {
                const response = await axios.post(url, dataToSend ,{withCredentials : true})

                var expirationDate = new Date();
                expirationDate.setTime(expirationDate.getTime() + (2 * 60 * 60 * 1000)); 
                
                const token = response.data.token
                document.cookie = `Token= ${token}; path=/; expires=${expirationDate.toUTCString()}; secure; SameSite=Strict`;
                this.$router.push('/');
                

            } catch (error) {
                console.error('Erreur lors de la soumission du formulaire :', error);
                connexionError.style.display = "block"
            }
        },

        hashPassword(Mdp){
            return CryptoJS.SHA256(Mdp).toString();
        },
    }
}

        
</script>