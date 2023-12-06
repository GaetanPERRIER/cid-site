<script>

export default {
    name: 'Navbar',
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
    <nav class="u-flex u-justify-content-between u-p20">
        <div class="u-flex u-align-items-center u-gap50 fs18px">
            <NuxtLink to="/"><img class="w35px " src="../../assets/imgs/imgs-navbars/logo_CID.png" alt="Logo CID"></NuxtLink>
           
            <NuxtLink to="/contact">Nous contacter</NuxtLink>
            <NuxtLink to="/about">A propos</NuxtLink>
            <NuxtLink to="/galerie/galerie">Galerie</NuxtLink>  
        </div>
        <div class="u-flex u-align-items-center u-gap50">
            <div></div> 
            <a href="#"><img class="w35px" src="../../assets/imgs/imgs-navbars/logo_compte.png" alt="Logo mon compte"></a>
        </div>
    </nav>
</template>

<style lang="scss">
nav{
    z-index: 2;
    background-color: $color-dusky-blue;
    backdrop-filter: blur(2px);
    border-bottom: 1px solid white;
    a{
        color:white;
        text-transform: uppercase;
        text-decoration: none;
    }
    }

</style>