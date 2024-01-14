<template>
    <nav :class="{'transparent-navbar' : isTranparent}">
        <div class="u-flex u-align-items-center u-gap50 fs18px">
            <NuxtLink to="/"><img class="w35px " src="../../assets/imgs/imgs-navbars/logo_CID.png" alt="Logo CID"></NuxtLink>
            <NuxtLink to="/contact">Nous contacter</NuxtLink>
            <NuxtLink to="/about">A propos</NuxtLink>
            <NuxtLink to="/galerie/galerie">Galerie</NuxtLink>  
        </div>
        <div class="u-flex u-align-items-center u-gap50">
            <NuxtLink  to="/compte/connexion" class="connexion">Connexion / Inscription</NuxtLink>
            <a href="#"><img class="icon-profil w40px" src="../../assets/imgs/imgs-navbars/logo_compte.png" alt="Logo mon compte"></a>
        </div>
        <div class="menu-profil u-flex u-flex-direction-column">
            <NuxtLink to="/compte/mon-compte" class="bouton-menu">Mon compte</NuxtLink>
            <NuxtLink to="/galerie/ajout-image" class="bouton-menu" @click="this.RedirectToConnexion()">Publier une image</NuxtLink>
            <NuxtLink to="/galerie/ajout-event" class="bouton-menu">Publier un évenement</NuxtLink>
            <NuxtLink to="/" class="bouton-menu logout" >Deconnexion</NuxtLink>

            <NuxtLink to="/admin/admin" class="bouton-menu admin">Admin</NuxtLink>
            <NuxtLink to="/admin/admin" class="bouton-menu admin">Comptes</NuxtLink>
        </div> 
    </nav>
</template>


<script>
export default {
    name: 'Navbar',
    components: {},
    props:{
        isTranparent:{
            type:Boolean,
            default:false,
        },
    },
    data() {
        return {
            isClicked: false,
            token: null
        }
    },



    
    mounted() {
        const iconProfil = document.querySelector(".icon-profil");
        const menu = document.querySelector(".menu-profil");
        iconProfil.addEventListener('mouseover',  () =>{
            menu.classList.add("menu-visible");
        })
    
        document.addEventListener('click', () => {
            menu.classList.remove("menu-visible")
        })
        this.fetchCookie()
        this.RedirectToConnexion()
        this.ToggleConnexion()
        this.Logout()
        this.isAdmin()
    },

    updated(){
        this.ToggleConnexion()
        this.isAdmin()
        
    },

    methods: {
        ToggleConnexion(){
            const buttonConnexion = document.querySelector(".connexion")
            if(this.isConnected()){
                buttonConnexion.style.display = "none"
            }
            else{
                buttonConnexion.style.display = "block"
            }
        },


        RedirectToConnexion(){
            const links = document.querySelectorAll(".bouton-menu")
            links.forEach(el => {
                el.addEventListener('click', () => {
                    if(!this.isConnected()){
                        this.$router.push('/compte/connexion')
                    }
                })
            })
            
        },

        isConnected(){
            const cookies = document.cookie
            if(cookies == ""){
                return false
            }
            else{
                return true
            }
        },

        async isAdmin(){
            const adminButtons = document.querySelectorAll(".admin")
            const url = "https://cidapi.alwaysdata.net/est_admin/"
            const requestOptions = {
                methods : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    'Authorization' : `Token ${this.token}` 
                },
                credentials : "include"
            }
            try {
                const response = await fetch(url, requestOptions)
                const data = await response.json()
                if(data.Admin == "True"){
                    adminButtons.forEach(el => {
                        el.style.display = "block"
                    })
                    console.log("admin")
                }
                else{
                    adminButtons.forEach(el => {
                        el.style.display = "none"
                    })
                    console.log("pas admin")
                }
            } catch (error) {
                console.error('Erreur de récupération des données :', error);
                
            }         
        },

        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },

        async Logout(){
            const logout = document.querySelector('.logout')
            logout.addEventListener("click", () =>{
                const cookieName = "Token"
                document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                location.reload()
            })
            
        },

        

    }
}
</script>

<style lang="scss">

nav{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    z-index: 2;
    background-color: $color-dusky-blue;
    backdrop-filter: blur(2px);
    border-bottom: 1px solid white;
    a{
        color:white;
        text-transform: uppercase;
        text-decoration: none;
    }
    .bouton-menu{
            width: 100%;
            margin: 5px 0;
            height: fit-content;
            color: black;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: $color-yellow-sand;
        }
    .connexion{
        width: 100%;
            margin: 5px 0;
            height: fit-content;
            color: black;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: $color-yellow-sand;
    }
    .menu-profil{
        display: none;
        position: absolute;
        z-index: 10;
        top: 100%;
        right: 0;
        width: 20%;
        height: fit-content;
        background-color: $color-dusky-blue;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 10px 15px;
        .admin{
            display: none;
        }
    }
    .menu-visible{
        display: flex;
    }
    
}
.transparent-navbar{
    background-color: transparent;
    position: absolute;
    top: 0;
    width: 100%;
}

</style>