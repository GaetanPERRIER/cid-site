<template>
    <main>
        <Navbar/>
        <Galerie/>
        <Footer/>
    </main>
</template>


<script >
import Navbar from "@/components/blocs/Navbar.vue";
import Galerie from "@/components/blocs/galerie/Galerie.vue";
import Footer from "@/components/blocs/Footer.vue";


export default {

    components: {
        Navbar,
        Galerie,
        Footer,
    },

    mounted() {
       
    },
    methods: {
    }  
}
</script>

<style lang="scss">

</style>
