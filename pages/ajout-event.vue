<template>
    <main>
        <AddEvent :data = "this.dataTheme"/>
    </main>
</template>


<script>
export default{
    data() {
        return {
            dataTheme : {}
        }
    },

    components:{
        AddEvent:() => import('@/components/blocs/galerie/AddEvent.vue')
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