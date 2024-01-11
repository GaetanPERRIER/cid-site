<template>
    <main>
        <Addimg :data = "this.dataTheme"/>
    </main>
</template>


<script>

export default{
    data(){
        return{
            dataTheme : {}
        }
    },
    components:{
        Addimg:() => import('@/components/blocs/galerie/AddImg.vue'),
    },

    mounted(){
        this.fetchTheme();
    },

    methods:{
        async fetchTheme(){
            const url = "https://cidapi.alwaysdata.net/get_themes/";
            try {
                const res = await fetch(url);
                this.dataTheme = await res.json();
            }catch (error){
                console.error('Erreur de récupération des données :' ,error);
            }
        },
    }
}
</script>