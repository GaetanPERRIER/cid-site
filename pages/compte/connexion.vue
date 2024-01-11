<template>
    <main>
        <Connexion />
    </main>
</template>


<script>

export default{

    data(){
        return{
        }
    },
    components:{
        Connexion:() => import('@/components/blocs/connexion_inscription/Connexion.vue'),
    },

    mounted(){

    },

    methods:{
        
    }
}
</script>