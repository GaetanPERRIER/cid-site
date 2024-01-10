<template>
    <section class="u-flex u-justify-content-center u-mt100 u-mb100 ">
        <form class="form-forgot-pwd u-flex u-flex-direction-column u-align-items-center w40  u-gap20 u-p50" >
            <h2 class="fs30px u-mb15 u-mt15">Mot de passe oublié</h2>

            <div class="u-flex u-gap25">
                <div class="button-container">
                    <input class="bouton-contact" type="radio" id="email" value="email" name="radio-button-contact" checked>
                    <label for="email">Email</label>
                </div>
                <div class="button-container">
                    <input class="bouton-contact" type="radio" id="tel" value="tel" name="radio-button-contact">
                    <label for="tel">Télephone</label>
                </div>
            </div>

            <div>
                <label for="pwdRequest"></label>
                <input type="text" name="pwdRequest" id="pwdRequest">
            </div>
           

            

        </form>
    </section>
</template>

<style lang="scss">

.form-forgot-pwd{
        box-shadow: 0 0 15px $color-dusky-blue;
        border-radius: 10px;
        
        input[type="radio"] {
            display: none;
        }
    
        input[type="radio"]+label {
            color: black;
            padding: 15px;
            font-size: 16px;
            border: 1px solid black;
            border-radius: 2px;
            cursor: pointer;
        }
    
        input[type="radio"]:checked+label, input[type="radio"]:hover+label {
            background-color: $color-dusky-blue;
            color: white;
            transition: all ease-in-out 250ms;

        }


        .input-message{
            text-align: start;
        }



    }
    
</style>


<script>
export default{

    mounted(){

       
    },

    methods: {
        
    }
}

        
</script>