<template>
    <main>
        <ForgotPassword/>
    </main>
</template>


<script>


export default{

    data(){
        return{
        }
    },
    components:{
        ForgotPassword:() => import("@/components/blocs/connexion_inscription/ForgotPassword.vue"),
    },

    mounted(){

    },

    methods:{
        
    }
}
</script>