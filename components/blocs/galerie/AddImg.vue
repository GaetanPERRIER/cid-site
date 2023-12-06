<template>
    <form action="http://cidapi.alwaysdata.net/post_image/" method="post" enctype="multipart/form-data"> 
        <section class="u-flex u-justify-content-center u-mt100 u-mb100">
            <div class="u-flex u-flex-direction-column w50">
                <label for="Titre">Titre</label>
                <input type="text" id="Titre" name="Titre" required>

                <label for="Personnes">personnes</label>
                <input type="text" id="Personnes" name="Personnes">

                <label for="Photographe">Photographe</label>
                <input type="text" id="Photographe" name="Photographe">

                <label for="Lieu_photo">Lieu</label>
                <input type="text" id="Lieu_Photo" name="Lieu_Photo">

                <label for="Date_Photo">Date</label>
                <input type="date" id="Date_Photo" name="Date_Photo">

                <label for="Photo">Image</label>
                <input type="file" id="Photo" name="Photo"  required>

                <input type="submit" name="submit-button" value="Envoyer">
            </div>
        </section>



        <!--
            titre : text
            persoonne sur photos : text
            photographe : text
            lieu : text
            date photo : date
            fichier photo : fichier (png,jped,webp)



            Lieu_Photo = models.CharField(max_length=150)
    Date_Photo = models.DateField()
    Personnes = models.CharField(max_length=200)
    Photographe = models.CharField(max_length=50)
    Titre = models.CharField(max_length=50)
    Photo = models.BinaryField()
        -->
    </form>
</template>