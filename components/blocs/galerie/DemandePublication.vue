<template>
    <section class=" demandes-comptes u-m50">
        <div v-if="Object.keys(data).length === 0 ">AUCUNE DEMANDES {{ Object.keys(data).length}}</div>
        <div v-if="Object.keys(data).length > 0" class="test u-flex u-flex-direction-column u-noselect u-gap20">
            <div v-for="item in data" :key="item.ID_Etud" class="liste-container">
                <div class="u-flex u-justify-content-between u-align-items-center u-plr15 top-side">
                    <p>{{item.Nom }} {{ item.Prenom }}</p>
                    <img class="triangle" src="../../../static/images/triangle.png" alt="">
                </div>
                <div class="u-flex u-flex-direction-column bottom-side">
                    <div class="u-flex w100 u-p15">
                        <div class="u-flex u-flex-direction-column u-gap15 w50">
                            <p>Adresse Mail : {{ item.Email }}</p>
                            <p>Numéro de téléphone : {{ item.Tel }}</p>
                            <p>Date de naissance : {{ item.Date_Naiss }}</p>
                        </div>
                        <div class="u-flex u-flex-direction-column u-gap15 w50">
                            <p>Année de début d'étude : {{ item.Deb_Etude }}</p>
                            <p>Année de fin d'étude : {{ item.Fin_Etude }}</p>
                        </div>
                    </div>
                    <div class="u-flex u-justify-content-end container-bouton-compte u-mb15 u-mr15">
                        <div class="bouton-compte reject" :id="item.ID_Etud">Rejeter</div>
                        <div class="bouton-compte accept" :id="item.ID_Etud">Accepter</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
    
<style lang="scss">
.demandes-comptes{
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
                border-left: 2px solid black;
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
                        console.log('acc')
                        this.postValiderPublication(button.id, 1)
                    }
                    else{
                        this.postValiderPublication(button.id,0)
                    }
                    this.handleClick()
                })
            })


        },

        async postValiderPublication(ID, choix){
            const urlA = "https://cidapi.alwaysdata.net/valider_etudiant/";
            const urlR = "https://cidapi.alwaysdata.net/rejeter_compte/";
            const dataToSend = {
                "ID_Etud" : ID 
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