
<template>
    <section class="test u-flex u-justify-content-center u-plr200">
        <div class="swiper mySwiper u-mb250">
            <div class="swiper-wrapper">
                <div v-for="item in items" :key="item.id" class="swiper-slide u-noselect">
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


export default {
    data() {
        return {
            items: [
                // item.title = titre stcocké dans l'api rest
                // RECUP DE L'API REST ICI POUR LES EVENT
                { id: 1, title: 'Slide 1', content: "1bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdsssssssssssssssss" },
                { id: 2, title: 'Slide 2', content: "2bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
                { id: 3, title: 'Slide 3', content: "3bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
                { id: 4, title: 'Slide 4', content: "4bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
                { id: 5, title: 'Slide 5', content: "5bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
                { id: 6, title: 'Slide 6', content: "6bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
                { id: 7, title: 'Slide 7', content: "7bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
                { id: 8, title: 'Slide 8', content: "8bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
                { id: 9, title: 'Slide 9', content: "9bafzafzalfzfzlfqlfzqoksokfozqofskfzfqdpkqpksld,csq,kczoq" },
            ],
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
    
    },

    methods: {

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
  