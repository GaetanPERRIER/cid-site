<template>
    <section class="u-flex u-justify-content-center u-mt100 u-mb100 ">
        <form class="form-forgot-pwd u-flex u-flex-direction-column u-align-items-center w40  u-gap20 u-p50" >
            <h2 class="fs30px u-mb15 ">Mot de passe oublié</h2>

            <div class="u-flex u-gap25 w100 u-justify-content-between u-plr50">
                <div class="u-flex u-justify-content-center button-container w100">
                    <input class="bouton-fpwd" type="radio" id="email" value="Adresse Mail" name="radio-button" checked>
                    <label class="w100 u-noselect" for="email">Email</label>
                </div>
                <div class="u-flex u-justify-content-center u-align-items-center button-container w100">
                    <input class="bouton-fpwd" type="radio" id="tel" value="Télephone" name="radio-button">
                    <label class="w100 u-noselect" for="tel">Télephone</label>
                </div>
            </div>

            <div class="u-flex u-flex-direction-column w100 u-plr50 u-mt15">
                <label class="fs20px u-mb5"  id="pwdRequest" for="pwdRequest">{{this.labelContent}} :</label>
                <input :type="inputType" class="inputRequest h40px"  id="pwdRequest" name="pwdRequest"  pattern="[0-9]{10}" required>
            </div>

            <input class="bouton-submit u-plr15 u-pt10 u-pb10" type="submit" value="Changer mon mot de passe">


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
            font-size: 16px;
            padding: 15px 0;
            border: 1px solid black;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
        }
    
        input[type="radio"]:checked+label, input[type="radio"]:hover+label {
            background-color: $color-dusky-blue;
            color: white;
            transition: all ease-in-out 250ms;
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
</style>


<script>
export default{

    data(){
        return{
            inputType: "email",
            labelContent: "Adresse Mail",
        }
    },

    mounted(){
        this.displayLabelContent()
        
    },

    methods: {
        displayLabelContent(){
            const radioButtons = document.querySelectorAll(".bouton-fpwd")
            const input = document.querySelector(".inputRequest") 
            console.log(radioButtons)

            radioButtons.forEach(el => {
                el.addEventListener("change", ()=>{
                    if(el.checked){
                        this.labelContent = el.value
                        this.inputType = el.id
                    }
                    
                })
            })
        }

    }
}

        
</script>