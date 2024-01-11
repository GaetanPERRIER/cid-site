<template>
    <section class="demandes-comptes u-m50">
        <div v-if="Object.keys(data).length === 0 ">AUCUNE DEMANDES {{ Object.keys(data).length}}</div>
        <div v-if="Object.keys(data).length > 0" class="u-flex u-flex-direction-column u-gap5">
            <div v-for="item in data" :key="item.ID_Etud" class="">
                <div class="u-flex u-justify-content-between u-align-items-center u-plr15 top-side">
                    <p>{{item.Nom }} {{ item.Prenom }}</p>
                    <img src="../../../static/images/triangle.png" alt="">
                </div>
                <div class="bottom-side"></div>
            </div>
        </div>
    </section>
</template>
    
    
<style lang="scss">
.demandes-comptes{

    .top-side{
        height: 35px;
        box-shadow: 5px 5px 10px $color-dusky-blue;
        border-radius: 5px;

        p{
            font-size: 20px;
        }
        img{
            width: 15px;
        }
    }

}

    
</style>


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