<template>
    <main>
        <DemandesComptes :data="this.apiData" @boutonClicked="RefetchOnClick"/>
    </main>
</template>


<script>



export default{
    data(){
        return {
            apiData: {},
            token: ""
        }
    },
    components:{
        DemandesComptes:() => import('@/components/blocs/comptes/Demandes.vue'),
    },

    mounted(){
        this.fetchCookie()
        this.FetchDemandesComptes()
    },

    methods:{
        async FetchDemandesComptes(){
            const url ="https://cidapi.alwaysdata.net/get_etudiants/?validation=False";
            const requestOptions = {
                methods : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    'Authorization' : `Token ${this.token}` 
                },
                credentials : "include"
            }
            try {
                const response = await fetch(url, requestOptions)
                this.apiData = await response.json();
            } catch (error) {
                console.error('Erreur de récupération des données :', error);

            }            
        },

        RefetchOnClick(){
            this.FetchDemandesComptes()
        },


        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },
    }
}
</script>