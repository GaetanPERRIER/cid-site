<template>
    <div>
        <Navbar/>
        <nuxt>
        </nuxt>
        <Footer/>
    </div>
</template>

<script>
import Navbar from "@/components/blocs/Navbar.vue";
import Footer from "@/components/blocs/Footer.vue";

export default {
    components:{
        Navbar,
        Footer,
    },
    mounted() {
        this.$nextTick(async () => {

        })
    }
}
</script>


<style lang="scss">

</style>
