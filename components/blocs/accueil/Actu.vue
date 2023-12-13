
<template>
    <section class="test u-flex u-justify-content-center u-plr200 u-mb200">
        <div class="swiper mySwiper ">
            <div class="swiper-wrapper">
                <div v-for="item in data" :key="item.id" :id="item.id" class="swiper-slide u-noselect">
                    <img class="img-swiper w100" :src="item.image" alt="image-evenement">
                    <div class="actu-content-container u-flex u-flex-direction-column u-align-items-end u-gap10 u-p10 h150px">
                        <h3 class="w100"> {{ item.title }}</h3>
                        <p class="actu-content  w100"> {{ item.texte }}</p>
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
export default {

    props: {
        data:{
            type : Object
        }
    },

    data() {
        return {
    
        }
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
    },

    methods: {
        
    },

    
    destroyed() {
        if (this.swiper) {
            this.swiper.destroy();
        }
    },
}

</script>
  
<style lang="scss">



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
        aspect-ratio: 1/1;
        object-fit: cover;
       
        
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
  