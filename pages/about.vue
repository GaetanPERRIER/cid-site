<template>
    <main>
        <Navbar/>
        <About/>
        <Footer/>
    </main>

</template>


<script>
import Navbar from "@/components/blocs/Navbar.vue";
import Footer from "@/components/blocs/Footer.vue";
import About from "@/components/blocs/about/About.vue";



export default{
    components:{
        Navbar,
        About,
        Footer
    },

    mounted(){

    },

    methods:{
        
    }
}
</script>