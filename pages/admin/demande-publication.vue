<template>
    <main>
        <DemandesPublication :data="this.apiData" @boutonClicked="RefetchOnClick"/>
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
        DemandesPublication:() => import('@/components/blocs/galerie/DemandePublication.vue'),
    },

    mounted(){
        this.fetchCookie()
        this.FetchDemandesPublication()
    },

    methods:{
        async FetchDemandesPublication(){
            const url ="https://cidapi.alwaysdata.net/get_images_events?nb_items=6&validation=True&event=True&photo=False";
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
                console.log(response)
            } catch (error) {
                console.error('Erreur de récupération des données :', error);

            }            
        },

        RefetchOnClick(){
            this.FetchDemandesPublication()
        },


        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },
    }
}
</script>