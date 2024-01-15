<template>
    <section class="galerie-container u-flex u-flex-direction-column u-gap25 u-mt25">
        <div class="title-galerie">
                <h2>Galerie</h2>
            </div>
        <div class="u-flex u-justify-content-center u-align-items-center u-gap50">
            <label>
                <input type="checkbox" name="galerie" class="inputGalerie photo" checked>
                Images
            </label>
            <label>
                <input type="checkbox" name="galerie" class="inputGalerie event" checked>
                Evenement
            </label>
            
            <div class="filtres">Filtres</div>
        </div>
        
        <div class="galerie u-mb25">
            <div v-for="item in data.results" :key="item.ID_Photo">
                <NuxtLink to="">
                    <img v-if="item.Type === 'event'" :src="item.Image" :id="item.ID_Eve" alt="image-evenement" class="image-galerie" :name="item.Type">
                    <img v-if="item.Type === 'photo'" :src="item.Photo" :id="item.ID_Photo" alt="image-evenement" class="image-galerie" :name="item.Type">
                </NuxtLink>
            </div>
        </div>
        <div class="filtres-container">
            <div class="filtres-popup u-flex u-flex-direction-column u-align-items-center">
                <img class="cross" src="../../../static/images/cross.png" alt="">
                <h3>Filtres</h3>
                <div class="form-filtres u-flex u-flex-direction-column u-align-items-center">
                    <label for="">
                        Titre
                        <input v-model="FormData.Titre" type="text" name="Titre" id="Titre">
                    </label>
                    <label for="">
                        Lieu
                        <input v-model="FormData.Lieu"  type="text" name="Lieu" id="Titre">
                    </label>
                    <label for="">
                        Date
                        <input v-model="FormData.Date" type="date" name="Date" id="Titre">
                    </label>
                    <div class="u-flex u-flex-direction-rows w100">
                        <label class="tri ">
                            Date croissante
                            <input type="radio" name="Tri" class="button-tri croissant" checked>
                        </label>
                        <label class="tri ">
                            Date décroissante
                            <input type="radio" name="Tri" class="button-tri decroissant">
                        </label>
                    </div>
                    <button @click="SendData" class="bouton-publier">Filtrer</button>
                </div>
            </div>
        </div>  
    </section>
</template>
    
    
<script>
export default {
    props: {
        data:{
            type : Object
        },
        page:{
            type: Number
        },
        pages:{
            type: Number
        }
    },
    data(){
        return{
            FormData :{
                Event: "True",
                Photo:"True",
                Titre:"",
                Lieu:"",
                Date:"",
                Tri:"True",
            }
        }
    },
    mounted() {
       this.DisplayFiltres()
       this.SendData()
    },

    updated(){

        
    },

    methods: {
        


        changePage(newPage) {
            this.$emit("change-page", newPage, this.FormData);
        },

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

        DisplayFiltres(){
            const InputsCheckboxs = document.querySelectorAll(".inputGalerie")
            const tri = document.querySelectorAll(".button-tri")
            InputsCheckboxs.forEach(button => {
                button.addEventListener("change", () => {
                    if(button.checked){
                        if(button.classList.contains("event")){
                            this.FormData.Event ="True"
                        }
                        else{
                            this.FormData.Photo = "True"
                        }
                    }
                    else{
                        if(button.classList.contains("event")){
                            this.FormData.Event ="False"
                        }
                        else{
                            this.FormData.Photo = "False"
                        }
                    }
                    this.SendData()
                })

                tri.forEach(el => {
                    el.addEventListener('change' , () => {
                        if(el.checked){
                            if(el.classList.contains("croissant")){
                                this.FormData.Tri ="False"
                            }
                            else{
                                this.FormData.Tri ="True"
                            }
                        }
                    })
                })
            })

            const buttonFiltres = document.querySelector(".filtres")
            buttonFiltres.addEventListener("click", () => {
                this.displayPopUp()
            })
        },

        SendData(){
            const popup = document.querySelector(".filtres-container")
            popup.style.opacity = 0
            popup.style.zIndex = -1
            this.$emit("dataFiltres", this.FormData) 
        },

        

        displayPopUp(){
            const popup = document.querySelector(".filtres-container")
            const cross = document.querySelector(".cross")

            popup.style.opacity = "100%"
            popup.style.zIndex = 10
            cross.addEventListener("click", () => {
                popup.style.opacity = 0
                popup.style.zIndex = -1
            })
        },
    },

    computed: {
        
    },
};
</script>


<style lang="scss">
    .galerie-container{
        input{
            cursor: pointer;
        }
        .galerie{
            display: grid;
            justify-content: center;
            gap: 25px;
            grid-template-columns: 20% 20% 20% 20%;
            
        }
        h2{
            font-size: 40px;
        }
        img{
            width: 100%;
            border: 1px solid black;
            aspect-ratio: 1/1;
            object-fit: cover;
        }
        .filtres{
            cursor: pointer;

        }
        .affichage-image-indiv{
            z-index: 10;
            transition: all ease-in-out 200ms;
            position: fixed;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.571);
            opacity: 100%;
            .indiv-popup{
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50% ,-50%);
                width: 500px;
                height: fit-content;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 0 15px gray;
                h3{
                    margin-top: 20px;
                    font-size: 20px;
                }
                
            }
            .cross{
                    width: 30px;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    cursor: pointer;
                    border: none;
                }
        } 
        .filtres-container{
            z-index: -1;
            transition: all ease-in-out 200ms;
            position: fixed;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.571);
            opacity: 0;
            .filtres-popup{
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50% ,-50%);
                width: 500px;
                height: fit-content;
                background-color: white;
                border-radius: 10px;
                box-shadow: 0 0 15px gray;
                h3{
                    margin-top: 20px;
                    font-size: 20px;
                }
                .cross{
                    width: 30px;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    cursor: pointer;
                    border: none;
                }

            .form-filtres{
                width: 100%;
                padding:  25px 75px;
                label{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin: 10px 0;
                    
                    input{
                        height: 35px;
                        margin-top: 5px;
                        cursor: text;
                    }
                    input[type="radio"]{
                        cursor: pointer;
                    }
                }
                .tri{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }
                .bouton-publier{
                    width: fit-content;
                    height:fit-content;
                    background-color: $color-dusky-blue;
                    border: 1px solid white;
                    color: white;
                    border-radius: 10px;
                    padding: 10px 30px;
                    font-size: 15px;
                    text-transform: uppercase;
                    cursor: pointer;
                    transition: all ease-in-out 300ms;
                }
            }
        }
    }
}

    
</style>