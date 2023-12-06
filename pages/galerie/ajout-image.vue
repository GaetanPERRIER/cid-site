<template>
    <main>
        <Navbar/>
        <Adding/>
        <Footer/>
    </main>
</template>


<script>
import Navbar from "@/components/blocs/Navbar.vue";
import Adding from "@/components/blocs/galerie/AddImg.vue";
import Footer from "@/components/blocs/Footer.vue";



export default{
    components:{
        Navbar,
        Adding,
        Footer
    },

    mounted(){

    },

    methods:{
        
    }
}
</script>