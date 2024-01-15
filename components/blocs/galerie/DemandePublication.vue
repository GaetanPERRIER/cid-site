<template>
    <section class="demandes-publication u-m50 u-mb750">
        <div v-if="Object.keys(data).length === 0 ">AUCUNE DEMANDES </div>
        <div v-if="Object.keys(data).length > 0" class="test u-flex u-flex-direction-column u-noselect u-gap20">
            <div v-for="item in data.results" :key="item.ID_Etud" class="liste-container">
                <div v-if="item.Type === 'photo'">
                    <div class="u-flex u-justify-content-between u-align-items-center u-plr15 top-side">
                        <p>{{item.Etudiant}}</p>
                        <img class="triangle" src="../../../static/images/triangle.png" alt="">
                    </div>
                    <div class="u-flex u-flex-direction-column bottom-side">
                        <div class="u-flex w100 u-p15">
                            <img class="w50" :src="item.Photo" alt="">
                            <div class="u-flex u-flex-direction-column u-justify-content-center u-align-items-center u-gap50 u-ml15 w50">
                                <h3 class="fs30px">Nom : {{ item.Titre }}</h3>
                                <div class="u-flex u-flex-direction-column u-gap15 fs20px">
                                    <p>Personnes sur l'image : {{ item.Personnes }}</p>
                                    <p>Photographe : {{ item.Photographe }}</p>
                                    <p>Date : {{ item.Date_Photo }}</p>
                                    <p>Lieu : {{ item.Lieu_Photo }}</p>
                                    <p>Theme : {{ item.Theme }}</p>
                                    <p>Type de publication : Photo</p>
                                </div>
                                
                            </div>
                        </div>
                        <div class="u-flex u-justify-content-end container-bouton-compte u-mb15 u-mr15">
                            <div class="bouton-compte reject photos" :id="item.ID_Photo">Rejeter</div>
                            <div class="bouton-compte accept photos" :id="item.ID_Photo">Accepter</div>
                        </div>
                    </div>
                </div>
                <div v-if="item.Type === 'event'">
                    <div class="u-flex u-justify-content-between u-align-items-center u-plr15 top-side">
                        <p>{{item.Etudiant}}</p>
                        <img class="triangle" src="../../../static/images/triangle.png" alt="">
                    </div>
                    <div class="u-flex u-flex-direction-column bottom-side">
                        <div class="u-flex w100 u-p15">
                            <img class="w50" :src="item.Image" alt="">
                            <div class="u-flex u-flex-direction-column u-justify-content-center u-align-items-center u-gap50 u-ml15 w50">
                                <h3 class="fs30px">Nom : {{ item.Titre }}</h3>
                                <div class="u-flex u-flex-direction-column u-gap15 fs20px">
                                    <p>Description : {{ item.Texte }}</p>
                                    <p>Date : {{ item.Date_Eve }}</p>
                                    <p>Lieu : {{ item.Lieu_Eve }}</p>
                                    <p>Theme : {{ item.Theme }}</p>
                                    <p>Type de publication : Evenement</p>
                                </div>
                                
                            </div>
                        </div>
                        <div class="u-flex u-justify-content-end container-bouton-compte u-mb15 u-mr15">
                            <div class="bouton-compte reject events" :id="item.ID_Eve">Rejeter</div>
                            <div class="bouton-compte accept events" :id="item.ID_Eve">Accepter</div>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>
        </div>
    </section>
</template>
    
    
<style lang="scss">
.demandes-publication{
    .liste-container{
        box-shadow: 5px 5px 10px $color-dusky-blue;
        border-radius: 10px;
        .top-side{
        cursor: pointer;
        height: 35px;
        border-radius: 5px;

        p{
            font-size: 20px;
        }
        img{
            width: 15px;
            z-index: -1;
            transition: all ease-in-out 200ms;
        }
    }
    .bottom-side{
        position: relative;
        border-radius: 5px;
        margin-top : 0 15px 15px 15px;
        display: none;
        div{
            div{
                padding-left: 5px;
            }
        }
        .container-bouton-compte{
            position: absolute;
            bottom: 0;
            right: 0;
            border: none;
            .bouton-compte{
                border: none;
                margin: 5px;
                padding: 10px;
                border-radius: 10px;
                cursor: pointer;
            }
            .reject{
                transition: all ease-in-out 200ms;
                color: red;
            }
            .reject:hover{
                color: white;
                background-color: red;
            }
            .accept{
                transition: all ease-in-out 200ms;
                background-color: green;
                color: white;
            }
            .accept:hover{
                background-color: rgb(3, 98, 3);
            }
        }
        img{
            border-radius: 15px;
        }
    }
    .active{
        display: flex;
    }

    }
   
}
</style>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            token : ""
        }
    },
    props: {
        data:{
            type : Object
        }
    },

    updated(){
        this.displayListes()
        this.clickValider()
    },

    mounted() {
        this.fetchCookie()
    },

    methods: {
        displayListes(){
            const listes = document.querySelectorAll(".top-side")
            const arrayListes = Array.from(listes)
            const listesButtons = document.querySelectorAll(".triangle")
            const listesContent = document.querySelectorAll('.bottom-side')

            listes.forEach(el => {
                el.addEventListener('click', () => {
                    const index = arrayListes.indexOf(el)
                    listesContent[index].classList.toggle("active")
                    if (listesContent[index].classList.contains("active")) {
                        listesButtons[index].style.transform = "rotate(-90deg)"
                    }
                    else {
                        listesButtons[index].style.transform = "rotate(0)"
                    }
                })
            })
        },


        clickValider(){
            const decision = document.querySelectorAll(".bouton-compte")
            decision.forEach(button => {
                button.addEventListener('click', () =>{
                    if(button.classList.contains("accept")){
                        if(button.classList.contains("photos")){
                            this.postValiderPublicationPhoto(button.id, 1)
                        }
                        else{
                            this.postValiderPublicationEvent(button.id, 1)
                        }
                    }
                    else{
                        if(button.classList.contains("photos")){
                            this.postValiderPublicationPhoto(button.id, 0)
                        }
                        else{
                            this.postValiderPublicationEvent(button.id, 0)
                        }
                    }
                    this.handleClick()
                    this.displayListes()
                })
            })


        },

        async postValiderPublicationPhoto(ID, choix){
            const urlA = "https://cidapi.alwaysdata.net/valider_photo/";
            const urlR = "https://cidapi.alwaysdata.net/rejeter_photo/";
            const dataToSend = {
                "ID_Photo" : ID 
            }
            if(choix == 0){
                try {
                    const response = await axios.post(urlR, dataToSend, {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${this.token}`
                        },
                        withCredentials: true
                    }, {

                    });
                    console.log(response)
                } catch (error) {
                    console.error("Erreur dans l'envoi des données :", error);
                }
            }
            else{
                try {
                    const response = await axios.post(urlA, dataToSend, {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${this.token}`
                        },
                        withCredentials: true
                    }, {

                    });
                    console.log(response)
                } catch (error) {
                    console.error("Erreur dans l'envoi des données :", error);
                }
            }
        },


        async postValiderPublicationEvent(ID, choix){
            const urlA = "https://cidapi.alwaysdata.net/valider_event/";
            const urlR = "https://cidapi.alwaysdata.net/rejeter_event/";
            const dataToSend = {
                "ID_Eve" : ID 
            }
            if(choix == 0){
                try {
                    const response = await axios.post(urlR, dataToSend, {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${this.token}`
                        },
                        withCredentials: true
                    }, {

                    });
                    console.log(response)
                } catch (error) {
                    console.error("Erreur dans l'envoi des données :", error);
                }
            }
            else{
                try {
                    const response = await axios.post(urlA, dataToSend, {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${this.token}`
                        },
                        withCredentials: true
                    }, {

                    });
                    console.log(response)
                } catch (error) {
                    console.error("Erreur dans l'envoi des données :", error);
                }
            }
        },



        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },

        handleClick() {
            this.$emit('boutonClicked');
        },

        
    },
};
</script>