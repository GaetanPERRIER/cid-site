<template>
    <main>
        <Connexion />
        <button class="logout">Deco toi zebi</button>
    </main>
</template>


<script>
import Connexion from "@/components/blocs/connexion_inscription/Connexion.vue";


export default{

    data(){
        return{
        }
    },
    components:{
        Connexion,
    },

    mounted(){

    },

    methods:{
        Logout(){
            const btnLogout = document.querySelector(".logout")
            btnLogout.addEventListener("click", () => {
                
            })
        }
    }
}
</script>