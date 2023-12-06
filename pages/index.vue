<template>
    <main>
        <header class="u-overflow-hidden">
            <Navbar />
            <div class="u-flex u-pt200 u-pb200">
                <div class="u-m50">
                    <div class="cercle w20px h20px u-m5 u-noselect visible ">
                        <img class="image-slider-navbar" src="../assets/imgs/imgs-accueil/img1.jpg" alt="">
                    </div>
                    <div class="cercle w20px h20px u-m5 u-noselect">
                        <img class="image-slider-navbar" src="../assets/imgs/imgs-accueil/img2.jpg" alt="">
                    </div>
                    <div class="cercle w20px h20px u-m5 u-noselect">
                        <img class="image-slider-navbar" src="../assets/imgs/imgs-accueil/img3.jpg" alt="">
                    </div>
                    <div class="cercle w20px h20px u-m5 u-noselect">
                        <img class="image-slider-navbar" src="../assets/imgs/imgs-accueil/img4.png" alt="">
                    </div>
                </div>
                <div class="carroussel-content u-flex u-flex-direction-column u-justify-content-between u-gap50">
                    <h1 class="w750px fs40px">Cercle des informaticiens disperses</h1>
                    <p class="fs20px">Retrouvez vos anciens camarades de classe</p>
                    <button class="fs15px u-p10">En savoir plus</button>
                </div>
            </div>
        </header>
        <Cards />
        <h2 class="fs30px u-m20">Actualités</h2>
        <Actu />
        

        <NuxtLink to="galerie/ajout-image">UWU-Itadakimas</NuxtLink>
        <Footer />
    </main>
</template>


<script >
import Navbar from "@/components/blocs/Navbar.vue";
import Cards from "@/components/blocs/accueil/Cards.vue";
import Footer from "@/components/blocs/Footer.vue";
import Actu from "@/components/blocs/accueil/Actu.vue";


export default {
    data(){
        return {
            dataApi: {}
        }
    },

    components: {
        Navbar,
        Cards,
        Footer,
        Actu
    },

    mounted() {
        this.attachClickEvent();
    },
    methods: {
        // swiper header
        
        attachClickEvent() {
            const cercles = document.querySelectorAll(".cercle");
            const cerclesArray = Array.from(cercles); // Convert NodeList to Array

            cercles.forEach(cercle => {
                cercle.addEventListener('click', () => {
                    cercle.classList.add('visible');
                    const index = cerclesArray.indexOf(cercle);
                    cercles.forEach(element => {
                        if (cerclesArray.indexOf(element) !== index) {
                            element.classList.remove('visible');
                        }
                    });
                });
            });
        },        
    },
}
</script>

<style lang="scss">
header {
    position: relative;
    border-bottom: 10px solid $color-yellow-sand;

    nav {
        background-color: transparent;
    }

    .cercle {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        border: 1px solid gray;
        cursor: pointer;

        .image-slider-navbar {
            opacity: 0;
            transition: $easeInOutSine 1000ms;
            position: absolute;
            background-size: cover;
            top: -200px;
            left: 0;
            z-index: -1;
        }
    }

    .visible {
        background-color: white;

        .image-slider-navbar {
            opacity: 1;
        }
    }

    .carroussel-content {
        color: white;

        h1 {
            text-transform: uppercase;
            text-shadow: black 5px 5px 25px;
        }

        p {
            text-shadow: black 5px 5px 15px;
        }

        button {
            width: 130px;
            background-color: $color-yellow-sand;
            border-radius: 10px;
            border: none;
            cursor: pointer;
        }
    }
}

h2 {
    text-align: center;
}
</style>
