<template>
    <section class="galerie-container u-flex u-flex-direction-column u-gap25 u-mt25 u-mb100">
        <div class="title-galerie">
            <h2>Galerie</h2>
        </div>
        
        <div class="galerie">
            
                <div v-for="item in data.results" :key="item.id">
                    <NuxtLink class="events-link" to="/">
                        <img :src="item.image" alt="image-evenement">
                    </NuxtLink>
                </div>
            
        </div>
        <div class="pagination-galerie">
        

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
    mounted() {
    },
    methods: {
        
    },
};
</script>


<style lang="scss">
    .galerie-container{
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
    }

    
</style>