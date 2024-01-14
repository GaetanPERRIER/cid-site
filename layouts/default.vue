<template>
    <div>
        <Navbar :isTranparent="isHomePage"/>
        <nuxt>
        </nuxt>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/blocs/Navbar.vue";
import Footer from "@/components/blocs/Footer.vue";

export default {
    components:{
        Navbar,
        Footer,
    },

    computed:{
        isHomePage(){
            return this.$route.path === '/';
        },
    },
    mounted() {
        
    }
}
</script>


<style lang="scss">

</style>
