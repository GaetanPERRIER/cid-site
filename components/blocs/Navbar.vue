<template>
    <nav :class="{'transparent-navbar' : isTranparent}">
        <div class="u-flex u-align-items-center u-gap50 fs18px">
            <NuxtLink to="/"><img class="w35px " src="../../assets/imgs/imgs-navbars/logo_CID.png" alt="Logo CID"></NuxtLink>
            <NuxtLink to="/contact">Nous contacter</NuxtLink>
            <NuxtLink to="/about">A propos</NuxtLink>
            <NuxtLink to="/galerie">Galerie</NuxtLink>  
        </div>
        <div class="u-flex u-align-items-center u-gap50">
            <a href="#"><img class="icon-profil w40px" src="../../assets/imgs/imgs-navbars/logo_compte.png" alt="Logo mon compte"></a>
        </div>
        <div class="menu-profil u-flex u-flex-direction-column">
            <NuxtLink to="/connexion" class="bouton-menu">Connexion</NuxtLink>
            <NuxtLink to="/" class="bouton-menu">Créer un compte</NuxtLink>
            <NuxtLink to="/" class="bouton-menu">Mon compte</NuxtLink>
            <NuxtLink to="/ajout-image" class="bouton-menu">Publier une image</NuxtLink>
            <NuxtLink to="/ajout-event" class="bouton-menu">Publier un évenement</NuxtLink>
            <NuxtLink to="/" class="bouton-menu admin">Demandes</NuxtLink>
            <NuxtLink to="/" class="bouton-menu admin">Comptes</NuxtLink>
        </div> 

    </nav>
</template>


<script>
export default {
    name: 'Navbar',
    components: {},
    props:{
        isTranparent:{
            type:Boolean,
            default:false,
        },
    },
    data() {
        return {
            isClicked: false
        }
    },
    mounted() {
        const iconProfil = document.querySelector(".icon-profil");
        const menu = document.querySelector(".menu-profil");
        iconProfil.addEventListener('click', function (e){
            menu.classList.toggle("menu-visible");
        })
    },
    methods: {

    }
}
</script>

<style lang="scss">

nav{
    display: flex;
    justify-content: space-between;
    padding: 20px;

    z-index: 2;
    background-color: $color-dusky-blue;
    backdrop-filter: blur(2px);
    border-bottom: 1px solid white;
    a{
        color:white;
        text-transform: uppercase;
        text-decoration: none;
    }
    .menu-profil{
        display: none;
        position: absolute;
        top: 100%;
        right: 0;
        width: 20%;
        height: fit-content;
        background-color: $color-dusky-blue;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 10px 15px;
        .bouton-menu{
            width: 100%;
            margin: 5px 0;
            height: fit-content;
            color: black;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: $color-yellow-sand;
        }
        .admin{
            display: none;
        }
    }
    .menu-visible{
        display: flex;
    }
    
}
.transparent-navbar{
    background-color: transparent;
    position: absolute;
    top: 0;
    width: 100%;
}

</style>