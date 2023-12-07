<template>
    <form action="https://cidapi.alwaysdata.net/post_image/" method="post" enctype="multipart/form-data"> 
        <section class="u-flex u-flex-direction-column u-align-items-center u-gap30 u-mt100 u-mb100">
            <div class="u-flex u-justify-content-center u-gap25 w80">
                <div class="w50">
                    <label class="label-photo" for="Photo"></label>
                    <input type="file" id="Photo" name="Photo"  required>
                </div>
 
                <div class="input-container u-flex u-flex-direction-column u-justify-content-center w50">

                    <h2 class="w100 fs25px u-mb20">Ajouter une image</h2>
                    
                    <label for="Titre">Titre</label>
                    <input type="text" id="Titre" name="Titre" required>

                    <label for="Personnes">personnes</label>
                    <input type="text" id="Personnes" name="Personnes">

                    <label for="Photographe">Photographe</label>
                    <input type="text" id="Photographe" name="Photographe">

                    <label for="Lieu_photo">Lieu</label>
                    <input type="text" id="Lieu_Photo" name="Lieu_Photo">

                    <label for="Date_Photo">Date</label>
                    <input type="date" id="Date_Photo" name="Date_Photo" required>
                </div>
            </div>
            <input type="submit" name="submit-button" value="Envoyer">
        </section>
    </form>
</template>


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
        margin-bottom: 30px;
        font-size: 15px;
    }
    label{
        margin-bottom: 10px;
    }
}
   
</style>