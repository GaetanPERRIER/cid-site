<template>
    <section class="u-flex u-justify-content-center u-mt280 u-mb280">
        <form class="u-flex u-flex-direction-column form-connexion" target="_blank" method="POST" action="https://cidapi.alwaysdata.net/connexion/">
            <h2>Connexion</h2>
            <label for="Login">Login</label>
            <input type="text" id="Login" name="Login">

            <label for="Mdp">Mot de passe</label>
            <input type="password" id="Mdp" name="Mdp">

            <input class="bouton-submit" type="submit" value="Send">

        </form>
    </section>
</template>


<script>

export default{
    data(){
        return{
        }
    },

    mounted(){
        this.test()


    },

    methods :{

        async sendDataToBackend() {
            const csrfToken = this.$cookies.get('csrftoken');
            console.log(csrfToken)
            const url = 'https://cidapi.alwaysdata.net/connexion/';
            const dataToSend = { 
                Login: "cidapi",
                Mdp: "tenezlemdp",
             };
            console.log(JSON.stringify(dataToSend))
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': csrfToken, // Utilisation du CSRF Token récupéré
                    },
                    body: JSON.stringify(dataToSend)
                });
                // Traitez la réponse comme nécessaire
            } catch (error) {
                console.error('Erreur lors de l\'envoi des données au backend :', error);
            }
        },

        async test(){
            const boutonSubmit = document.querySelector(".bouton-submit")

            boutonSubmit.addEventListener('click', () => {
                this.sendDataToBackend()
            });
        },

    }
}
</script>