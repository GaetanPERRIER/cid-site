
<template>
    <section class="test u-flex u-justify-content-center u-plr200 u-mb200">
        <div class="swiper mySwiper ">
            <div class="swiper-wrapper">
                <div v-for="item in dataApiSwiper" :key="item.id" class="swiper-slide u-noselect">
                    <img class="w100" src="../../../assets/imgs/imgs-accueil/president.png">
                    <div class="actu-content-container u-flex u-flex-direction-column u-align-items-end u-gap10 u-p10 h150px">
                        <h3 class="w100"> {{ item.title }}</h3>
                        <p class="actu-content  w100"> {{ item.content }}</p>
                        <button class="u-p8"> En savoir plus</button>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios';




export default {
    
    data() {
        return {
            dataApiSwiper: [],
        };
    },
    mounted() {
        this.swiper = new this.$swiper('.mySwiper', {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            parallax: true,
            navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
        });

        this.fetchDataFromAPI();
    },

    methods: {
        async fetchDataFromAPI() {
            const apiURL = "https://cidapi.alwaysdata.net/api/";
            try {
                const response= await axios.get(apiURL);
                console.log(response.data); 
                this.dataApiSwiper = response.data;
            } catch (error) {
                console.error('Une erreur s\'est produite :', error);
            }
        }
    },


    destroyed() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    },
};
</script>
  
<style lang="scss">
/* Vos styles CSS personnalisés pour le swiper */


.swiper-slide {
    color: white;

    button {
        width: fit-content;
        background-color: $color-yellow-sand;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    h3 {
        text-align: center;
        font-weight: 600;
    }

    img {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
}

.swiper-button-prev{
    position: absolute;
    left: 0px;
}

.actu-content-container {
    transform: translateY(-3px);
    background-color: $color-dusky-blue;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.actu-content {
    overflow-wrap: break-word;
}
</style>
  