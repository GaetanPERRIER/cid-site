<template>
    <main>
        <Galerie :data = "this.apiData" :pages = "this.nb_pages" :page = "this.page" @change-page="changePage" @boutonClicked="RefetchOnClick" @dataFiltres="RefetchWithFilters"/>
        <div class="pagination-buttons-container u-flex u-justify-content-center u-align-items-center u-gap50 u-mb50">
            <button class="pagination-buttons" @click="changePage(1)">Première page</button>
            <button class="pagination-buttons numero-page" v-for="pageNumber in visiblePageNumbers" :key="pageNumber" :id="pageNumber" @click="changePage(pageNumber)">
            {{ pageNumber }}
            </button>
            <button class="pagination-buttons" @click="changePage(nb_pages)">Dernière page</button>   
        </div>
    </main>
</template>


<script >

export default {

    data(){
        return {
            apiData: {},  
            nb_pages: 0,
            page: 1,

            Filtres: {
                Event: "True",
                Photo:"True",
                Titre:"",
                Lieu:"",
                Date:"",
                Tri:"True",
            }
        }
    },

    components: {
        Galerie:() => import('@/components/blocs/galerie/Galerie.vue'),
    },

    mounted() {
       this.fetchGalerie("True","True" ,"","","","True");
       
    },

    updated(){
        this.ColorPageNumber(this.page)
    },

    methods: {
        async fetchGalerie(event, photo, titre, lieu, date, tri){
            const url = `https://cidapi.alwaysdata.net/get_images_events?event=${event}&photo=${photo}&page=${this.page}&nb_items=16&titre=${titre}&lieu=${lieu}&date=${date}&tri=${tri}`
            try {
                const res = await fetch(url);
                this.apiData = await res.json();
                this.nb_pages = this.apiData.count;
            }catch (error){
                console.error('Erreur de récupération des données :' ,error);
            }
        },

        async changePage(newPage) {
            this.page = newPage;
            this.fetchGalerie(this.Filtres.Event,this.Filtres.Photo,this.Filtres.Titre,this.Filtres.Lieu, this.Filtres.Date, this.Filtres.Tri)
            this.ColorPageNumber(this.page)
        },

        async RefetchOnClick(){
            
        },

        async RefetchWithFilters(dataFiltres){
            this.Filtres = dataFiltres
            this.fetchGalerie(this.Filtres.Event,this.Filtres.Photo,this.Filtres.Titre,this.Filtres.Lieu, this.Filtres.Date, this.Filtres.Tri)
        },

        ColorPageNumber(activePage){
            const numeros = document.querySelectorAll('.numero-page')
            
            numeros.forEach(el => {
                if(el.id === `${activePage}`){
                    el.style.backgroundColor = "#405B8F"
                    el.style.color = "white"
                }
                else{
                    el.style.backgroundColor = "transparent"
                    el.style.color = "black"
                }
            })
    
        
        }

      
    },  

    computed:{
        visiblePageNumbers() {
            const totalButtons = 3; // Adjust this number based on your requirements
            const visiblePages = [];
            let pageIndex = 0;

            if(this.page==1){
                pageIndex = 2;
            }
            else if(this.page==this.nb_pages){
                pageIndex = this.nb_pages-1;
            }
            else{
                pageIndex = this.page;
            }

            for (let i = pageIndex - 1; i <= pageIndex + 1; i++) {
                if (i > 0 && i <= this.nb_pages) {
                    visiblePages.push(i);
                }
            }
            return visiblePages.slice(0, totalButtons);
        },
    }
}
</script>



<style lang="scss">
.pagination-buttons{
    background-color: transparent;
    border-radius: 15px;
    transition: ease-out 100ms;
    cursor: pointer;
    font-size: 17px;
    width: fit-content;
    height: fit-content;
    padding: 15px;
}
.numero-page{
    width: 40px;
    height: 40px;
    padding: 0;
}

.pagination-buttons:hover{
    background-color: $color-dusky-blue;
    color: white;
}


</style>