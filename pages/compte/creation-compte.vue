<template>
    <main>
        <CreationCompte/>
    </main>
</template>


<script>

export default{

    data(){
        return{
        }
    },
    components:{
        CreationCompte:() => import('@/components/blocs/connexion_inscription/CreationCompte.vue'),

    },

    mounted(){

    },

    methods:{
        
    }
}
</script>