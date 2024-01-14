<template>
    <section class="mon-compte">
        <h2 class="fs20px">Informations personelles</h2>
        <div class="infos-perso u-flex u-flex-direction-column u-align-items-center u-gap25">
            <div class="w100">
                <p>Nom : {{ data.Nom }}</p>
            </div>
            <div class="w100">
                <p>Prenom : {{ data.Prenom }}</p>
            </div>
            <div class="w100">
                <p>Date de naissance : {{ data.Date_Naiss }}</p>
            </div>
            <div class="w100">
                <p>Adresse mail : {{ data.Email }}</p>
            </div>
            <div class="w100">
                <p>Année de début d'étude : {{ data.Deb_Etude }}</p>
            </div>
            <div class="w100">
                <p>Année de fin d'étude : {{ data.Fin_Etude }}</p>
            </div>
            <div class="w100">
                <p>Numéro de télephone : {{ data.Tel }}</p>
            </div>  
            <div>
                <div class="bouton-modifier">Modifier</div>
            </div>
        </div>
        <div class="u-flex u-justify-content-center u-gap50 u-mt50">
            <div class="w50 u-flex u-flex-direction-column u-align-items-center u-gap20">
                <h3>Mes photos</h3>
                <div class="swiper SwiperImages w100 ">
                    <div class="swiper-wrapper">
                        <div v-for="item in data.Photos" class="swiper-slide u-noselect">
                            <img :src="item.Photo" alt="">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div> 
            </div>
            <div class="w50 u-flex u-flex-direction-column u-align-items-center u-gap20">
                <h3>Mes évenements</h3>
                <div class="swiper SwiperEvents w100 ">
                    <div class="swiper-wrapper">
                        <div v-for="item in data.Events" class="swiper-slide u-noselect">
                            <img :src="item.Image" alt="">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div> 
            </div>
        </div>
        
            

    </section>
</template>


<style lang="scss">

.mon-compte{
    margin: 100px 150px;
    h2{
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        margin-bottom: 15px;
    }
    .infos-perso{
        padding-bottom: 25px;
        border-bottom: 2px solid black;
        p{
            width: 100%;
        }
        .bouton-modifier{
            width: fit-content;
            margin: 5px 0;
            height: fit-content;
            color: black;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: $color-yellow-sand;
            transition: all ease-in-out 300ms;
            cursor: pointer;
        }
        .bouton-modifier:hover{
            background-color: $color-yellow-dark;
        }
    }
    h3{
        font-size: 20px;
    }
    .SwiperImages, .SwiperEvents{
        .swiper-slide{
            display: flex;
            justify-content: center;
            color: black;
            img{
                width: 100%;
                aspect-ratio: 1/1;
                object-fit: cover;
            }
        }
        
    }
    
    
}
</style>


<script>

export default{
    props: {
        data:{
            type : Object
        }
    },
    components:{
        
    },
    mounted(){
        this.swiper = new this.$swiper('.SwiperImages', {
            loop: true,
            slidesPerView : 3,
            spaceBetween: 20,
            modules: [this.$swiperModules.Navigation],
            navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev'
            },
        })

        this.swiper = new this.$swiper('.SwiperEvents', {
            loop: true,
            slidesPerView : 3,
            spaceBetween: 20,
            modules: [this.$swiperModules.Navigation],
            navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev'
            },
        })
    }
}


</script>