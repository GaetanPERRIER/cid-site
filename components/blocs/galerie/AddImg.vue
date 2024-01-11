<template>
    <form @submit.prevent="postImage" enctype="multipart/form-data"> 
        <section class="u-flex u-flex-direction-column u-align-items-center u-gap30 add-event">
            <h2 class="fs40px">Ajouter une image</h2>
            <div class="u-flex u-justify-content-center u-align-items-center u-gap25 w80">
                <div class="w50">
                    <label class="label-photo" for="Photo">
                        <img class="img-preview" src="" alt="">
                        <div class="img-text u-flex u-flex-direction-column u-align-items-center w100">
                            <p>Déposez une image</p>
                            <p>Format accepté : PNG,JPEG,WEBP (max : 100Ko)</p>
                        </div>
                    </label>
                    <input type="file" id="Photo" name="Photo" @change="handleFileChange" required>
                </div>
 
                <div class="input-container-image u-flex u-flex-direction-column u-justify-content-evenly w50">
                    <div>
                        <label for="Titre">Nom de l'image</label>
                        <input type="text" v-model="formData.Titre" id="Titre" name="Titre" required>
                    </div>

                    <div>
                        <label for="Personnes">Personnes sur l'image (facultatif)</label>
                        <input type="text" v-model="formData.Personnes" id="Personnes" name="Personnes">
                    </div>

                    <div>
                        <label for="Photographe">Photographe</label>
                        <input type="text" v-model="formData.Photographe" id="Photographe" name="Photographe">
                    </div>

                    <div>
                        <label for="Lieu_photo">Lieu</label>
                        <input type="text" v-model="formData.Lieu_Photo" id="Lieu_Photo" name="Lieu_Photo">
                    </div>

                    <div>
                        <label for="Date_Photo">Date</label>
                        <input type="date" v-model="formData.Date_Photo" id="Date_Photo" name="Date_Photo" required>
                    </div>

                    <div>
                        <label for="ID_Theme">Theme</label>
                        <select name="ID_Theme" v-model="formData.ID_Theme" id="ID_Theme">
                            <option v-for="item in data" :key="item.ID_Theme" :value="item.ID_Theme">{{ item.Nom_Theme }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <input class="bouton-publier" type="submit" name="submit-button" value="Publier ">
        </section>
    </form>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            formData:{
                Photo: null,
                Titre: '',
                Personnes:'',
                Photographe:'',
                Lieu_Photo:'',
                Date_Photo: '',
                ID_Theme:'',
            },
            token: null
        }
    },

    props: {
        data:{
            type : Object
        }
    },
    mounted() {
        this.displayImg();
        this.fetchCookie()
    },

    methods: {
        handleFileChange(event) {
            this.formData.Photo = event.target.files[0];
        },

        async postImage() {
            const url ="https://cidapi.alwaysdata.net/post_image/";
            try {
                const response = await axios.post(url, this.formData, {
                    headers: {
                        "Content-Type" : "multipart/form-data",
                        'Authorization' : `Token ${this.token}`
                    },
                });
                console.log('Réponse du serveur :', response.data);
            } catch (error) {
                console.error('Erreur lors de la soumission du formulaire :', error);
            }
        },

        async displayImg(){
            const img = document.querySelector("#Photo");
            img.addEventListener('change', function(){
                let file = this.files[0];
                let reader = new FileReader();

                reader.onload = function(e) {
                    let imagePreview = document.querySelector('.img-preview');
                    const text = document.querySelector('.img-text');
                    text.style.display ='none'
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                };
                reader.readAsDataURL(file);
            })
        },



        async fetchCookie() {
            const cookie = document.cookie.split("=")
            this.token = cookie[1]
        },
    },
};
</script>


<style lang="scss">
.add-event{
    margin: 75px 100px;
    padding: 50px 0;
    border-radius: 10px;
    
    box-shadow: 0 0 15px $color-dusky-blue;

    #Photo{
        display: none;
    }

    .label-photo{
        display: block;
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        cursor: pointer;
        background-image: url("../../../assets/imgs/imgs-events_images/icon-appareil-photo.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 25%;
        .img-preview{
            width: 100%;
            aspect-ratio: 1/1;
            object-fit: cover;
            display: none;
        }
        .img-text{
            position: absolute;
            top: 62%;
            font-style: italic;
            font-size: 15px;
            color: gray;
            text-align: center;
        }
    }

    .input-container-image{
        input{
            width: 100%;
            height: 50px;
            font-size: 15px;
            border: 1px solid gray;
            border-radius: 3px;
            margin: 10px 0;
        }
        select{
            width: 100%;
            height: 50px;
            font-size: 15px;
            background-color: white;
            border: 1px solid gray;
            border-radius: 3px;
            margin-top: 10px;
        }
    }
    .bouton-publier{
            width: fit-content;
            height:fit-content;
            background-color: $color-dusky-blue;
            border: 1px solid white;
            color: white;
            border-radius: 10px;
            padding: 10px 30px;
            font-size: 15px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all ease-in-out 300ms;
        }

    .bouton-publier:hover{
        background-color: $color-rhino-blue;

    }
}

   
</style>