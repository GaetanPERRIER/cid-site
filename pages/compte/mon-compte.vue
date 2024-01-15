<template>
        <MonCompte :data = "this.apiData" @modifClicked="ModifCompte"/>
</template>

<style lang="scss">


</style>



<script>
export default{
    data(){
        return {
            apiData: {},
            token: ""
        }
    },

    components:{
        MonCompte:() => import('@/components/blocs/comptes/MonCompte.vue'),
    },


    mounted(){
        this.fetchCookie()
        this.fetchInfos()
    },

    methods:{
        async fetchInfos(){
            const url ="https://cidapi.alwaysdata.net/mon_compte/"
            const requestOptions = {
                methods : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    'Authorization' : `Token ${this.token}` 
                },
                credentials : "include"
            }
            try{
                const response = await fetch(url, requestOptions)
               
                this.apiData = await response.json()
                console.log(this.apiData)
                
            }catch(error){
                console.error('Erreur de récupération des données :', error);
            }
        },

        ModifCompte(apiDataEtud){
            this.dataEtud = apiDataEtud
            console.log(this.dataEtud)
        },
       



        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },
    }
}
</script>