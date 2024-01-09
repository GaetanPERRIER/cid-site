<template>
    <main>
        <Galerie :data = "this.apiData"/>
    </main>
</template>


<script >
export default {

    data(){
        return {
            apiData: {}
        }
    },

    components: {
        Galerie:() => import('@/components/blocs/galerie/Galerie.vue'),
    },

    mounted() {
       this.fetchGalerie();
    },
    methods: {
        async fetchGalerie(){
            const nbImages = 16;
            const url = "https://cidapi.alwaysdata.net/get_images/4";
            try {
                const res = await fetch(url);
                this.apiData = await res.json();
            }catch (error){
                console.error('Erreur de récupération des données :' ,error);
            }
        } 
    }  
}
</script>



<style lang="scss">

</style>
