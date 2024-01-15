<template>
    <Comptes :compteData ="this.apiData" @boutonClicked="RefetchOnClick"/>
</template>

<script>
export default{
    data(){
        return {
            apiData :{},
            token:""
        }
    },

    components:{
        Comptes:() => import('@/components/blocs/comptes/Comptes.vue'),
    },


    mounted(){
        this.fetchCookie()
        this.FetchAllAccounts()
    },

    methods:{
        async FetchAllAccounts(){
            const url = "https://cidapi.alwaysdata.net/get_etudiants/"
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
                console.log(this.apiData)
            } catch (error) {
                console.error('Erreur de récupération des données :', error);

            }            
        },

        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },

        RefetchOnClick(){
            this.FetchAllAccounts()
        },
    }
    
}
</script>

<style lang="scss">

</style>