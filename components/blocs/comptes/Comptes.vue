<template>
    <section class=" demandes-comptes u-m50 u-flex u-flex-direction-column u-noselect u-gap15 u-mb750">
        <h2 class="fs25px">TOUT LES COMPTES</h2>
        <div v-for="item in compteData" :key="item.ID_Etud" class="liste-container">
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
                    <div class="bouton-compte delete" :id="item.ID_Etud">Supprimer</div>
                    <div class="bouton-compte modify" :id="item.ID_Etud">Modifier</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default{
    props: {
        compteData:{
            type : Object
        }
    },
    data(){
        return {
            token:""
        }
    },


    mounted(){
        this.fetchCookie()
    },

    updated(){
        this.displayListes()
        this.ModifyOrDelete()
    },

    methods:{
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

        ModifyOrDelete(){
            const boutons = document.querySelectorAll(".bouton-compte")
            boutons.forEach(el => {
                el.addEventListener('click', () => {
                    if(el.classList.contains("delete")){
                        this.PostModifyOrDelete(el.id, 1)
                    }
                    else{

                    }
                    this.handleClick()
                    this.displayListes()
                })
            })
        },

        async PostModifyOrDelete(ID, choix){
            const urlA = `https://cidapi.alwaysdata.net/modifier_etudiant?ID_Etud=${ID}`;
            const urlR = "https://cidapi.alwaysdata.net/rejeter_compte/";
            const dataToSend = {
                "ID_Etud" : ID 
            }
            if(choix == 1){
                try {
                    const response = await axios.post(urlR, dataToSend, {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${this.token}`

                        },
                        withCredentials: true
                    });
                    console.log(response)
                } catch (error) {
                    console.error("Erreur dans l'envoi des données :", error);
                }
            }
            // MODIFY ACCOUNT
        },

        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },

        handleClick() {
            this.$emit('boutonClicked');
        },



    }
}
</script>

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
            .delete{
                transition: all ease-in-out 200ms;
                color: red;
            }
            .delete:hover{
                color: white;
                background-color: red;
            }
            .modify{
                transition: all ease-in-out 200ms;
                background-color: green;
                color: white;
            }
            .modify:hover{
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