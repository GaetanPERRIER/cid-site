<template>
    <main>
        <About/>
    </main>
</template>


<script>
export default{
    components:{
        About:() => import('@/components/blocs/about/About.vue')
    }
}

</script>



<style lang="scss">

</style>