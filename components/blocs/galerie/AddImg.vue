<template>
    <form action="https://cidapi.alwaysdata.net/post_image/" method="post" enctype="multipart/form-data"> 
        <section class="u-flex u-flex-direction-column u-align-items-center u-gap30 u-mt100 u-mb100">
            <div class="u-flex u-justify-content-center u-gap25 w80">
                <div class="w50">
                    <label class="label-photo" for="Photo"></label>
                    <input type="file" id="Photo" name="Photo"  required>
                </div>
 
                <div class="input-container u-flex u-flex-direction-column u-justify-content-evenly w50">
                    <div>
                        <label for="Titre">Nom de l'image</label>
                        <input type="text" id="Titre" name="Titre" required>
                    </div>

                    <div>
                        <label for="Personnes">Personnes sur l'image (facultatif)</label>
                        <input type="text" id="Personnes" name="Personnes">
                    </div>

                    <div>
                        <label for="Photographe">Photographe</label>
                        <input type="text" id="Photographe" name="Photographe">
                    </div>

                    <div>
                        <label for="Lieu_photo">Lieu</label>
                        <input type="text" id="Lieu_Photo" name="Lieu_Photo">
                    </div>

                    <div>
                        <label for="Date_Photo">Date</label>
                        <input type="date" id="Date_Photo" name="Date_Photo" required>
                    </div>

                    <div>
                        <label for="ID_Theme">Theme</label>
                        <select name="ID_Theme" id="ID_Theme">
                            <option v-for="item in dataTheme" :key="item.ID_Theme" :value="item.ID_Theme">{{ item.Nom_Theme }}</option>
                        </select>
                    </div>
                </div>
            </div>
            <button class="bouton-publier" type="submit">Publier</button>
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
        this.fetchTheme()
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
        }
    },
};
</script>


<style>
#Photo{
    display: none;
}

.label-photo{
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
    border: 1px solid black;
}

.input-container{
    input{
        width: 100%;
        height: 50px;
        font-size: 15px;
        border: 1px solid gray;
        border-radius: 3px;
        margin-top: 10px;
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
    .bouton-publier{
        width: 200px;
        height: 50px;
        background-color: $color-blue-dusky;
    }
}
   
</style>