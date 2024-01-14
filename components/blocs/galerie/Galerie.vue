<template>
    <section class="galerie-container u-flex u-flex-direction-column u-gap25 u-mt25">
        <div class="title-galerie">
                <h2>Galerie</h2>
            </div>
        <div class="u-flex u-justify-content-center u-align-items-center u-gap50">
            <label>
                <input type="checkbox" name="galerie" class="inputGalerie" checked>
                Images
            </label>
            <label>
                <input type="checkbox" name="galerie" class="inputGalerie" checked>
                Evenement
            </label>
            
            <div class="filtres">Filtres</div>
        </div>
        
        <div class="galerie u-mb25">
            <div v-for="item in data.results" :key="item.ID_Photo">
                <NuxtLink to="/">
                    <img v-if="item.Type === 'event'" :src="item.Image" :id="item.Eve" alt="image-evenement" class="image-galerie" name="">
                    <img v-if="item.Type === 'photo'" :src="item.Photo" :id="item.ID_Photo" alt="image-evenement" class="image-galerie" name="">

                </NuxtLink>
            </div>
        </div>
        <div class="filtres-container">
            <div class="filtres-popup u-flex u-flex-direction-column u-align-items-center">
                <img class="cross" src="../../../static/images/cross.png" alt="">
                <h3>Filtres</h3>
                <form class="form-filtres u-flex u-flex-direction-column u-align-items-center" action="">
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
                        <label class="tri croissant">
                            Date croissante
                            <input type="radio" name="Tri" checked>
                        </label>
                        <label class="tri decroissant">
                            Date décroissante
                            <input type="radio" name="Tri">
                        </label>
                    </div>
                    <input type="submit" class="bouton-publier">
                </form>
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
                Event: "",
                Photo:"",
                Titre:"",
                Lieu:"",
                Date:"",
                Tri:"",
            }
        }
    },
    mounted() {
       this.DisplayFiltres()
    },

    updated(){
        this.ClickImages(); 
        
    },

    methods: {
        ClickImages(){
            const Images = document.querySelectorAll(".image-galerie")
            Images.forEach((img) => {
                img.addEventListener('click', () => {
                    
                })
            })

        },

        changePage(newPage) {
            this.$emit("change-page", newPage);
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
            console.log(visiblePages)
            console.log(visiblePages.slice(0, totalButtons))
            return visiblePages.slice(0, totalButtons);
        },

        DisplayFiltres(){
            const InputsCheckboxs = document.querySelectorAll(".inputGalerie")
            const tri = document.querySelector(".tri")
            console.log(InputsCheckboxs)
            InputsCheckboxs.forEach(button => {
                button.addEventListener("change", () => {
                    
                })
            })


            
            const buttonFiltres = document.querySelector(".filtres")
            buttonFiltres.addEventListener("click", () => {
                this.displayPopUp()

            })
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