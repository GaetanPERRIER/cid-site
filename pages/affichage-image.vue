<template>
    <main>
        <AffichageImage :data = "this.data"/>
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
        AffichageImage:() => import('@/components/blocs/galerie/AffichageImage.vue')
    },

    mounted(){
        this.fetchImages();
    },

    methods:{
        async fetchImages(){
            const url = "https://cidapi.alwaysdata.net/get_image/";
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