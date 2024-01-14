<template>
    <main>
        <section class="section-admin u-flex u-mt100 u-mb100 u-gap100">
            <NuxtLink to="/" class="bouton-menu admin">Demandes de publication</NuxtLink>
            <NuxtLink to="/admin/demandes-comptes" class="bouton-menu admin">Demandes de comptes</NuxtLink>
            <NuxtLink to="" class="bouton-menu admin">Comptes</NuxtLink>
        </section>
    </main>
</template>


<style lang="scss">
.section-admin{
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