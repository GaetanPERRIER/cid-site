<template>
    <section class="section-about u-flex u-flex-direction-column u-p50 w100">
        <div class="u-flex u-flex-direction-column u-align-items-center u-mb30 w100">
            <h2>Le CID en quelques mots</h2>
            <p>Découvrez notre histoire & nos engagements</p>
        </div>
        <div class="content-about u-flex u-flex-direction-column u-align-items-start u-gap10 w100 u-mb100">
            <h2>À propos de l'association CID</h2>
            <p>Notre association à but non lucratif a été créée en 1995 dans le but de rassembler et de maintenir des liens forts entre les anciens étudiants du département informatique de l’UPJV, l’université de picardie de jules verne.</p>

            <h2>Notre mission</h2>
            <p>L'Association CID a pour mission de créer une communauté dynamique et engagée regroupant les talents et les expériences des anciens étudiants en informatique depuis 1989. Nous nous efforçons de favoriser l'échange de connaissances, de promouvoir le réseautage professionnel et de soutenir le développement continu de nos membres.</p>

            <h2>Nos objectifs</h2>
            <p>Réunir les Anciens Étudiants : Faciliter les retrouvailles entre anciens camarades, créer des opportunités de réseautage et renforcer les liens amicaux et professionnels au sein de la communauté.</p>

            <p>Partager l'Expertise : Encourager le partage de connaissances, d'expériences et de compétences entre les membres afin de promouvoir le développement professionnel et personnel de chacun.</p>

            <p>Soutenir la Formation Continue : Faciliter l'accès à des ressources éducatives, des ateliers et des événements qui favorisent la formation continue et le perfectionnement des compétences.</p>

            <p>Promouvoir l'Innovation : Encourager la créativité et l'innovation en favorisant la collaboration entre les membres et en mettant en avant les réussites et les projets novateurs.</p>

            <h2>Nos activités</h2>
            <p>L'Association CID organise régulièrement des événements tels que des conférences, des ateliers, des meet-ups et des webinaires. Ces occasions offrent aux membres l'opportunité de rester informés sur les dernières tendances de l'industrie, d'élargir leur réseau professionnel et de contribuer à la croissance de la communauté.</p>

            <h2>Comment nous rejoindre ?</h2>
            <p>Si vous êtes un ancien étudiant du département informatique, nous vous invitons à rejoindre notre association et à participer activement à nos activités. Ensemble, nous pouvons continuer à créer un réseau solide et à contribuer au succès professionnel de chacun.</p>
        </div>
    </section>
</template>
    
    
<script>
export default {
    mounted() {
    },

    methods: {
        
    },
};
</script>


<style lang="scss">
.section-about{
    h2{
        font-size: 40px;
        text-transform: uppercase;
        font-weight: 700;
    }
    p{
        margin-top: 5px;
        font-size: 18px;
        font-weight: lighter;
    }
    .content-about{
        h2{
            margin-top: 40px;
            text-align: left;
            width: 100%;
            font-size: 20px;
        }
        p{
            margin-left:15px;

        };
    }
}

    
</style>