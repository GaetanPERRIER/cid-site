<template>
    <section class="u-flex u-justify-content-center u-mt280 u-mb280">
        <form class="u-flex u-flex-direction-column form-connexion" method="POST" action="https://cidapi.alwaysdata.net/connexion/">
            <h2>Connexion</h2>
            <label for="Login">Login</label>
            <input type="text" id="Login" name="Login">

            <label for="Mdp">Mot de passe</label>
            <input type="password" id="Mdp" name="Mdp">

            <input type="submit" value="Send">

        </form>
    </section>
</template>