<template>
    <form action="https://cidapi.alwaysdata.net/post_evenement/" method="post" enctype="multipart/form-data"> 
        <section class="u-flex u-flex-direction-column u-align-items-center u-gap30 u-mt50 u-mb100">
            <h2 class="fs40px">Ajouter un évenement</h2>
            <div class="u-flex u-justify-content-center u-align-items-center u-gap25 w80">
                <div class="w50">
                    <label class="label-photo" for="Photo">
                        <img class="img-preview" src="" alt="">
                        <div class="img-text u-flex u-flex-direction-column u-align-items-center w100">
                            <p>Déposez une image</p>
                            <p>Format accepté : PNG,JPEG,WEBP (max : 100Ko)</p>
                        </div>
                    </label>
                    <input type="file" id="Photo" name="Photo"  required>
                </div>
 
                <div class="input-container-event u-flex u-flex-direction-column u-justify-content-evenly w50">
                    <div>
                        <label for="Titre">Nom de l'évenement</label>
                        <input type="text" id="Titre" name="Titre" required>
                    </div>

                    <div class="u-flex u-flex-direction-column">
                        <label for="Texte">Description</label>
                        <textarea name="Texte" id="Texte"></textarea>
                    </div>

                    <div>
                        <label for="Date_Eve">Date</label>
                        <input type="date" id="Date_Eve" name="Date_Eve">
                    </div>

                    <div>
                        <label for="Lieu_Eve">Lieu</label>
                        <input type="text" id="Lieu_Eve" name="Lieu_Eve">
                    </div>

                    <div>
                        <label for="ID_Theme">Theme</label>
                        <select name="ID_Theme" id="ID_Theme">
                            <option v-for="item in dataTheme" :key="item.ID_Theme" :value="item.ID_Theme">{{ item.Nom_Theme }}</option>
                        </select>
                    </div>
                </div>
            </div>

            <input class="bouton-publier" type="submit" name="submit-button" value="Publier ">
        </section>
    </form>
</template>

<script>
export default {
    data() {
        return {
            dataTheme: [],
        }
    },
    mounted() {
        this.fetchTheme();
        this.displayImg();
    },

    methods: {
        async fetchTheme(){
            const url = "https://cidapi.alwaysdata.net/get_themes/";
            try {
                const res = await fetch(url);
                this.dataTheme = await res.json();
                return {dataTheme};
            }catch (error){
                console.error('Erreur de récupération des données :' ,error);
                return {dataTheme:[]};
            }
        },

        async displayImg(){
            const img = document.querySelector("#Photo");
            img.addEventListener('change', function(){
                var file = this.files[0];
                var reader = new FileReader();

                reader.onload = function(e) {
                    var imagePreview = document.querySelector('.img-preview');
                    const text = document.querySelector('.img-text');
                    text.style.display ='none';
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'block';
                };

                reader.readAsDataURL(file);
            })
        }
    },
};
</script>

<style lang="scss">

#Photo{
    display: none;
}

.label-photo{
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
    border: 1px solid black;
    background-image: url("../../../assets/imgs/imgs-events_images/icon-appareil-photo.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 25%;
}

.input-container-event{
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
    #Texte{
        resize: none;
        height: 150px;
        margin: 10px 0;
        font-size: 15px;
    }
}

.bouton-publier{
        width: fit-content;
        height:fit-content;
        background-color: $color-dusky-blue;
        border: 1px solid white;
        color: white;
        border-radius: 20px;
        padding: 10px 30px;
        font-size: 20px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all ease-in-out 300ms;
    }

.bouton-publier:hover{
    background-color: $color-rhino-blue;
}

</style>