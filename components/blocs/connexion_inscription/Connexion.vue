<template>
    <section class="u-flex u-justify-content-center u-mt280 u-mb280">
        <form @submit.prevent="postConnexion" class="u-flex u-flex-direction-column form-connexion" >
            <h2>Connexion</h2>
            <label for="Login">Login</label>
            <input type="text" v-model="formData.Login" id="Login" name="Login">

            <label for="Mdp">Mot de passe</label>
            <input type="password" v-model="formData.Mdp"  id="Mdp" name="Mdp">

            <input class="bouton-submit" type="submit" value="Send">

        </form>
    </section>
</template>


<script>
import axios from 'axios'
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
            const url = "https://cidapi.alwaysdata.net/connexion/";
            try {
                const response = await axios.post(url, this.formData)
                console.log(response)
            } catch (error) {
                console.error('Erreur lors de la soumission du formulaire :', error);
            }
        }

    }
}

        
</script>