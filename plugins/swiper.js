import Vue from 'vue'
import Swiper from 'swiper'
import {Navigation} from 'swiper/modules'
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';

const swiper = {
    install(Vue, options) {
        Vue.prototype.$swiper = Swiper;
        Vue.prototype.$swiperModules = {
            Navigation,
        };
    }
};

Vue.use(swiper);

