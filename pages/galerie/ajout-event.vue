<template>
    <main>
        <Navbar/>
        <AddEvent/>
        <Footer/>
    </main>
</template>


<script>
import Navbar from "@/components/blocs/Navbar.vue";
import AddEvent from "@/components/blocs/galerie/AddEvent.vue";
import Footer from "@/components/blocs/Footer.vue";



export default{
    components:{
        Navbar,
        AddEvent,
        Footer
    },

    mounted(){

    },

    methods:{
        
    }
}
</script>