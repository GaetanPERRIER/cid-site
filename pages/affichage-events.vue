<template>
    <main>
        <AffichageEvent :data = "this.data"/>
    </main>
</template>


<script>
export default{
    data() {
        return {
            data : {}
        }
    },

    components:{
        AffichageEvent:() => import('@/components/blocs/galerie/AffichageEvents.vue')
    },

    mounted(){
        this.fetchEvents();
    },

    methods:{
        async fetchEvents(){
            const url = "https://cidapi.alwaysdata.net/get_themes/";
            try {
                const res = await fetch(url);
                this.data = await res.json();
            }catch (error){
                console.error('Erreur de récupération des données :' ,error);
            }
        },
    }
}
</script>