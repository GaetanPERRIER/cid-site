<template>
    <MonCompte :data = "this.apiData"/>
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
                console.log(response)
                this.apiData = await response.json()
                
            }catch(error){
                console.error('Erreur de récupération des données :', error);
            }
        },

        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },
    }
}
</script>