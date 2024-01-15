<template>
    <section class="mon-compte u-flex u-flex-direction-column u-align-items-center">
        <h2 class="infos-perso fs20px w100">Informations personelles</h2>
        <div class="infos-perso u-flex u-flex-direction-column u-align-items-center u-gap25 w100">
            <div class="w100">
                <p>Nom : {{ data.Nom }}</p>
            </div>
            <div class="w100">
                <p>Prenom : {{ data.Prenom }}</p>
            </div>
            <div class="w100">
                <p>Date de naissance : {{ data.Date_Naiss }}</p>
            </div>
            <div class="w100">
                <p>Adresse mail : {{ data.Email }}</p>
            </div>
            <div class="w100">
                <p>Année de début d'étude : {{ data.Deb_Etude }}</p>
            </div>
            <div class="w100">
                <p>Année de fin d'étude : {{ data.Fin_Etude }}</p>
            </div>
            <div class="w100">
                <p>Numéro de télephone : {{ data.Tel }}</p>
            </div>  
            <div>
                <div @click="showFormModif" class="bouton-modifier">Modifier</div>
            </div>
        </div>

        <form @submit.prevent="PostModiferAccount" class="form-modifier-compte u-flex u-flex-direction-column u-align-items-center w40 u-gap20 u-p50" >
            <h2 class="fs30px u-mb15">Modifier un compte</h2>
            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="mail">Adresse mail :</label>
                <input type="email" v-model="apiEtudData.Email" id="mail" name="mail" :placeholder="data.Email" required>
            </div>

            <div class="u-flex u-justify-content-between u-gap50">
                <div class="u-flex u-flex-direction-column">
                    <label for="name">Nom :</label>
                    <input type="text" v-model="apiEtudData.Nom"  id="name" name="name" required>
                </div>

                <div class="u-flex u-flex-direction-column">
                    <label for="surname">Prénom : </label>
                    <input type="text" v-model="apiEtudData.Prenom"  id="surname" name="surname" required>
                </div>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="birth">Date de naissance :</label>
                <input type="date" v-model="apiEtudData.Date_Naiss" id="birth" name="birth" required>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="debEtude">Début d'étude :</label>
                <input type="number" v-model="apiEtudData.Deb_Etude" id="debEtude" name="debEtude" min="1980" max="2024" step="1" required>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="finEtude">Fin d'étude : </label>
                <input type="number" v-model="apiEtudData.Fin_Etude" id="finEtude" name="finEtude"  min="1980" max="2030" step="1" required>
            </div>

            <div class="u-flex u-flex-direction-column u-align-items-center">
                <label for="phone">Numéro de téléphone (falcultatif) :</label>
                <input type="tel" v-model="apiEtudData.Tel" id="phone" name="phone" pattern="[0-9]{10}">
            </div>


            <input class="bouton-submit u-plr15 u-pt10 u-pb10" type="submit" value="Modifier">
        </form>
        
        <div class="publication-perso u-flex u-justify-content-center u-gap50 u-mt50 u-mb100 w100">
            <div class="w50 u-flex u-flex-direction-column u-align-items-center u-gap20">
                <h3>Mes photos</h3>
                <div class="swiper SwiperImages w100 ">
                    <div class="swiper-wrapper">
                        <div v-for="item in data.Photos" class="swiper-slide u-noselect">
                            <img :src="item.Photo" alt="">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div> 
            </div>
            <div class="w50 u-flex u-flex-direction-column u-align-items-center u-gap20">
                <h3>Mes évenements</h3>
                <div class="swiper SwiperEvents w100 ">
                    <div class="swiper-wrapper">
                        <div v-for="item in data.Events" class="swiper-slide u-noselect">
                            <img :src="item.Image" alt="">
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div> 
            </div>
        </div>
        <div class="bouton-compte delete" :id="data.ID_Etud">Supprimer mon compte</div>
    </section>
</template>


<style lang="scss">

.mon-compte{
    margin: 100px 150px;
    h2{
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        margin-bottom: 15px;
    }
    .infos-perso{
        padding-bottom: 25px;
        border-bottom: 2px solid black;
        p{
            width: 100%;
        }
        .bouton-modifier{
            width: fit-content;
            margin: 15px 0;
            height: fit-content;
            color: black;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: $color-yellow-sand;
            transition: all ease-in-out 300ms;
            cursor: pointer;
        }
        .bouton-modifier:hover{
            background-color: $color-yellow-dark;
        }
    }
    h3{
        font-size: 20px;
    }
    .SwiperImages, .SwiperEvents{
        .swiper-slide{
            display: flex;
            justify-content: center;
            color: black;
            img{
                width: 100%;
                aspect-ratio: 1/1;
                object-fit: cover;
            }
        }
        
    }
    
    .form-modifier-compte{
        display: none;
        box-shadow: 0 0 15px $color-dusky-blue;
        border-radius: 10px;
        div{
            width: 100%;
            label{
                margin-bottom: 5px;
                width: inherit;
            }
            input{
                height: 40px;
                width: 100%;
                border-radius: 5px;
                border: 1px solid black;
            }
        }
        .bouton-submit{
            width: fit-content;
            height: fit-content;
            border: none;
            font-size: 15px;
            background-color: $color-dusky-blue;
            color: white;
            border-radius: 10px;
            cursor: pointer;
            transition: all ease-in-out 300ms;
        }

        .bouton-submit:hover{
            background-color: $color-rhino-blue;
        }
    }
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
}


</style>


<script>
import axios  from 'axios'
export default{
    props: {
        data:{
            type : Object
        }
    },

    data(){
        return{
            apiEtudData :{
                Email : "",
                Nom: "",
                Prenom: "",
                Date_Naiss: "",
                Deb_Etude: "",
                Fin_Etude: "",
                Tel:"",
            },
            token:""
        }
    },


    components:{
        
    },
    mounted(){
        this.PostDeleteMyAccount()
        this.fetchCookie()
        
        this.swiper = new this.$swiper('.SwiperImages', {
            loop: true,
            slidesPerView : 3,
            spaceBetween: 20,
            modules: [this.$swiperModules.Navigation],
            navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev'
            },
        })

        this.swiper = new this.$swiper('.SwiperEvents', {
            loop: true,
            slidesPerView : 3,
            spaceBetween: 20,
            modules: [this.$swiperModules.Navigation],
            navigation : {
                nextEl : '.swiper-button-next',
                prevEl : '.swiper-button-prev'
            },
        })
    },

    updated(){

    },

    methods:{
    
        async fetchEtudiant(id){
            const url =`https://cidapi.alwaysdata.net/get_etudiant?ID_Etud=${id}`
            const requestOptions = {
                methods : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    'Authorization' : `Token ${this.token}` 
                },
                credentials : "include"
            }
            try{
                const response = await fetch(url, requestOptions)
                this.apiEtudData = await response.json()
            }catch(error){
                console.error('Erreur de récupération des données :', error);
            }
        },

        async PostModiferAccount(){
            const url = "https://cidapi.alwaysdata.net/modifier_etudiant/";
            const dataToSend = this.apiEtudData;
            try{
                const response = await axios.post(url, dataToSend, {withCredentials : true, headers:{
                    "Content-Type": "application/json",
                    'Authorization': `Token ${this.token}`
                }} );
                this.HideFormModif()
            }catch(error){
                console.error("Erreur lors de la soumission du formulaire :", error);
            }  
       },

        async PostDeleteMyAccount(){
            const url = "https://cidapi.alwaysdata.net/rejeter_compte/";
            const buttonDelete = document.querySelector(".delete")
            
            buttonDelete.addEventListener('click', async () => {
                const dataToSend ={
                "ID_Etud" : buttonDelete.id
            }
                try {
                    console.log(dataToSend)
                    const response = await axios.post(url, dataToSend, {
                        headers: {
                            "Content-Type": "application/json",
                            'Authorization': `Token ${this.token}`
                        },
                        withCredentials: true
                    });
                    this.Logout()
                } catch (error) {
                    
                }
                
            })
       },

       async Logout(){
            const logout = document.querySelector('.logout')
            logout.addEventListener("click", () =>{
                const cookieName = "Token"
                document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                location.reload()
            })
            
        },


        showFormModif(){
            this.fetchEtudiant(this.data.ID_Etud)
            const form = document.querySelector(".form-modifier-compte")
            const infosPerso = document.querySelectorAll(".infos-perso")
            const pubPeros = document.querySelector(".publication-perso")
            infosPerso.forEach(el => {
                el.style.display ="none"
            })
            form.style.display = "flex"
            pubPeros.style.display ="none"
        },
        HideFormModif(){
            location.reload()
        },
        

        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },
    }
}


</script>