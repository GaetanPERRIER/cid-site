<template>
    <form action="https://cidapi.alwaysdata.net/post_image/" method="post" enctype="multipart/form-data"> 
        <section class="u-flex u-justify-content-center u-mt100 u-mb100">
            <div class="u-flex u-flex-direction-column w50">
                <label for="Titre">Nom de l'évenement</label>
                <input type="text" id="Titre" name="Titre" required>

                <label for="Personnes">Description</label>
                <input type="text" id="Texte" name="Texte" required>

                <label for="Photographe">Date</label>
                <input type="date" id="Date_Eve" name="Date_Eve" required>

                <label for="Lieu_photo">Lieu</label>
                <input type="text" id="Lieu_Eve" name="Lieu_Eve" required>

                <label for="">Themes</label>
                <select name="ID_Theme" id="ID_Theme"></select>

                <label for="Photo">Image</label>
                <input type="file" id="Photo" name="Photo"  required>

                <input type="submit" name="submit-button" value="Envoyer">
            </div>
        </section>



        <!--
            
        -->
    </form>
</template>


<style>
.image-input{
    width: 200px;
    height: 200px;
}
</style>