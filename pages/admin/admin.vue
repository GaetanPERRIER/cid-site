<template>
    <main>
        <section class="section-admin u-flex u-justify-content-center  u-align-items-center u-gap50">
            <NuxtLink to="/admin/demande-publication" class="bouton-menu admin link-button">Demandes de publication</NuxtLink>
            <NuxtLink to="/admin/demandes-comptes" class="bouton-menu admin link-button">Demandes de comptes</NuxtLink>
            <NuxtLink to="/admin/comptes" class="bouton-menu admin link-button">Comptes</NuxtLink>
        </section>
    </main>
</template>


<style lang="scss">
.section-admin{
    height: 440px;
    .bouton-menu{
            width: 100%;
            margin: 5px 0;
            height: fit-content;
            color: black;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: $color-yellow-sand;
            text-align: center;
    }
    .link-button{
        width: fit-content;
        height: fit-content;
    }
    
}
</style>

<script>

export default{
    mounted(){

    },

    methods(){
        
    }
}
</script>