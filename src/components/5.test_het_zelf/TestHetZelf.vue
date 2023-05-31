<template>
  <!--  <div id="testHetZelf_wave"></div>-->
  <div id="test-het-zelf">


    <div class="container-xl py-xl-5 py-lg-5 pt-md-0 pb-md-5 py-sm-5 py-5">
      <div class="row">
        <div
            class="offset-xl-0 col-xl-10 offset-lg-0 col-lg-10 offset-md-0 col-md-9 offset-sm-0 col-sm-12 offset-0 col-12">
          <h2>Ervaar het verzenden van een <span>test SMS</span></h2>
        </div>
        <div
            class="col-xl-2 col-lg-2 offset-md-0 col-md-3 offset-sm-0 col-sm-3  d-xl-block d-lg-block d-md-block d-sm-none d-none">
          <!--          <a href="https://optin.social/graduaatsproef" target="_blank">-->
          <img src="src/assets/TestHetZelf/qrcode_test.png" id="qr" alt="QR-code">
          <!--          </a>-->
        </div>
        <div
            class="col-xl-2 col-lg-2 offset-md-0 col-md-3 offset-sm-0 offset-sm-1 col-sm-10 offset-1 col-10  d-xl-none d-lg-none d-md-none d-sm-block d-block mt-3 mb-0">
          <a href="https://optin.social/graduaatsproef" target="_blank">
            <button type="button" class="py-sm-2 px-sm-2 px-3 py-2 mb-4 font-weight-bold w-100" id="test_button">Test
              het zelf
            </button>
          </a>
        </div>
      </div>
      <div class="row my-xl-4 my-lg-4 my-md-4 my-sm-0 my-0" id="steps">
        <div
            class="offset-xl-0 col-xl-7 offset-lg-0 col-lg-7 offset-md-0 col-md-10 offset-sm-0 col-sm-12 offset-0 col-12  order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2">
          <div class="container">
            <div v-for="(step, index) in steps" :key="index" :class="{ step: true, active: index === activeStep }"
                 @click="changeStep(index); selectStep(index)">
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <!--                <div class="step-text">{{ step.title }}</div>-->
                <div class="step-description">{{ step.description }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
            class="offset-xl-0 col-xl-5 offset-lg-0 col-lg-5 offset-md-2 col-md-8 offset-sm-1 col-sm-10   my-xl-4 my-lg-4 my-md-4 my-sm-5 mt-4 mb-5  order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1">
          <img :src="currentImage" alt="Step Image">
        </div>
      </div>
    </div>

        <PriceCalc/>
  </div>
</template>

<script>
import PriceCalc from "../5.test_het_zelf/priceCalc.vue";

export default {
  data() {
    return {
      currentStep: 0,
      images: [
        'src/assets/TestHetZelf/Icon_awesome-image.png',
        'src/assets/5.-thewitchcollector.gif',
        'src/assets/Contact/Contact_img.png',
        'src/assets/TestHetZelf/Icon_awesome-image.png',
        'src/assets/Contact/Contact_img.png'
      ],
      activeStep: 0,
      // imagePath: "src/assets/TestHetZelf/",
      steps: [
        // {title: 'Stap 1', description: 'Scan QR-code (desktop) of druk op de knop (mobile)', image: 'qrcode_test.png'},
        {title: 'Stap 1', description: 'Scan QR-code (desktop) of druk op de knop (mobile)'},
        // {title: 'Stap 2', description: 'Open WhatsApp desktop of mobile', image: 'Icon_awesome-image.png'},
        {title: 'Stap 2', description: 'Open WhatsApp desktop of mobile'},
        // {title: 'Stap 3', description: 'Wijzig optioneel de tekst na de  "|" of verstuur de voor gedefinieerde tekst (incl. de prefix)', image: 'qrcode_test.png'},
        {
          title: 'Stap 3',
          description: 'U kunt ervoor kiezen om de tekst na de | aan te passen of om de vooraf gedefinieerde tekst (inclusief de prefix) te verzenden'
        },
        // {title: 'Stap 4', description: 'Verstuur het bericht', image: 'Icon_awesome-image.png'},
        {title: 'Stap 4', description: 'Verstuur het bericht'},
        // {title: 'Stap 5', description: 'Ontvang de gewenste response', image: 'Icon_awesome-image.png'}
        {title: 'Stap 5', description: 'Ontvang de gewenste respons'}
      ],
    };
  },
  components: {
    PriceCalc
  },
  computed: {
    currentImage() {
      return this.images[this.currentStep];
      // return this.steps.image[this.currentStep];
    }
  },
  methods: {
    changeStep(index) {
      this.activeStep = index;
      this.changeImage(this.steps[index].image);
    },
    selectStep(index) {
      this.currentStep = index;
    },
    changeImage() {
      // Perform additional logic or image rotation if needed
      // You can modify this method as per your specific requirements
      // +1 omdat het index 0 is
      this.currentStep = (this.currentStep + 1) % this.images.length;
    }
  }
};
</script>

<style lang="scss">
@import "src/scss/base";

#testHetZelf_wave {
  background: url("src/assets/TestHetZelf/TestHetZelf_wave.png") no-repeat;
  //background-size: cover;
  margin: 0;
  padding: 0;
  //height: 210px;
  height: 120px;
  z-index: 98;
  position: relative;
  //background-position-x: 25%;
}

#test-het-zelf {
  background: $greyBackground;

  h2 {
    font-size: 2.5rem;

    span {
      color: $colorSecondary;
    }
  }

  #test_button {
    color: #ffffff;
    background-color: #dc3545;
    border: none;
    border-radius: 10px;
    //padding: 10%;
  }


  #qr {
    width: 75%;
    padding: 1%;
    border: 5px solid transparent;
    border-radius: 10px;
    background: #ffffff;

    transition: $transitionOnHover;

    &:hover {
      transform: scale(1.05);
      box-shadow: $boxShadow;

      cursor: default;
    }
  }

  #steps {
    /* Stijl voor het containerblok */
    .container {
      //max-width: 800px;
      //margin: 20px auto;
      //background-color: #F3F6FA;
      //border: 1px solid #ccc;
      //border-radius: 5px;
      //padding: 20px;
    }

    img {
      width: 100%;
    }

    /* Stijl voor de stappen */
    .step {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    /* Stijl voor het stapnummer */
    .step .step-number {
      padding: 18px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: $colorInactive;
      color: #fff;
      font-weight: bold;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 5px solid $colorTertiary;

      transition: transform .2s ease-in-out;

      &:hover {
        transform: scale(1.15);
      }
    }

    /* Stijl voor de stapinhoud */
    .step .step-content {
      margin-left: 20px;
      font-size: 1.15rem;

      //.active {
      //  margin-left: 20px;
      //}
    }

    /* Stijl voor de staptekst */
    .step .step-text {
      font-weight: bold;
      font-size: 18px;
    }

    /* Stijl voor de stapbeschrijving */
    .step .step-description {
      color: $colorPrimary
    }

    /* Stijl voor de actieve stap */
    .step.active .step-number {
      background-color: $colorSecondary;
      padding: 23px;
      border: 5px solid $colorTertiary;
      color: $colorTertiary;
      font-size: 1.5rem;
    }

    ///* Stijl voor de verticale lijnen */
    //  .step:not(:last-child)::after {
    //    content: '';
    //    position: absolute;
    //    top: 30px;
    //    left: 15px;
    //    width: 2px;
    //    height: calc(100% - 30px);
    //    background-color: #ccc;
    //  }
  }

  //#pricecalc {
  //  #wave {
  //    background: url("src/assets/TestHetZelf/TestHetZelf_wave.png") no-repeat;
  //    background-size: cover;
  //    margin: 0;
  //    padding: 0;
  //    height: 120px;
  //    width: 100%;
  //    z-index: 98;
  //    position: relative;
  //    top: -900px;
  //  }
  //
  //  overflow: hidden;
  //  height: 80vh;
  //  background-color: $colorTertiary;
  //
  //  svg {
  //    //display: none;
  //    position: relative;
  //    right: -10%;
  //    top: -32%;
  //    z-index: -1;
  //  }
  //
  //  #pricecalc_section {
  //    hr {
  //      height: 5px;
  //      background: $colorTertiary;
  //      border-radius: 40px;
  //      width: 90%;
  //    }
  //
  //    #calc {
  //      margin-top: -10%;
  //      margin-left: 48%;
  //      width: 80%;
  //    }
  //
  //    position: relative;
  //    z-index: 1;
  //
  //    label[for=country] {
  //      font-size: 30px;
  //      color: $colorTertiary;
  //      font-weight: bold;
  //      margin-left: 2.5%;
  //    }
  //
  //    label[for=aantal], label[for=select] {
  //      font-size: 20px;
  //      font-weight: bold;
  //      color: $colorTertiary;
  //    }
  //
  //    input {
  //      border: none;
  //      padding: 5% 0;
  //      border-radius: 10px;
  //      width: 80%;
  //      text-indent: 10px;
  //    }
  //
  //    select.btn {
  //      width: 80%;
  //      padding: 5% 0 5% 5%;
  //      border-radius: 10px;
  //    }
  //
  //    option {
  //      background: $colorTertiary;
  //      color:$colorPrimary;
  //      text-align: left;
  //    }
  //
  //    #calculated p {
  //      color: #ffffff;
  //      margin: 0;
  //      padding: 0;
  //    }
  //
  //    ::-webkit-scrollbar-thumb {
  //      background: $colorSecondary;
  //      border-radius: 10px;
  //    }
  //  }
  //}
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #test-het-zelf {
    overflow: hidden;
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
}

@media screen and (min-width: 577px) and (max-width: 768px) {
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #test-het-zelf {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }
  }
}

@media screen and (max-width: 415px) {
  #test-het-zelf {
    h2 {
      font-size: $FontSizeH2_BreakMobile;
    }
  }
}

@media screen and (max-width: 320px) {
  #test-het-zelf {
    #steps {
      .step-content {
        .step-description {
          font-size: $FontSizeParagraphMobile;
        }
      }
    }
  }
}


//#test-het-zelf {
//  #pricecalc {
//    height: 80vh;
//  }
//}

//#testHetZelf_wave {
//  background: url("src/assets/TestHetZelf/TestHetZelf_wave.png") no-repeat;
//  //background-size: cover;
//  margin: 0;
//  padding: 0;
//  //height: 210px;
//  height: 120px;
//  z-index: 98;
//  position: relative;
//  //background-position-x: 25%;
//}
//
//#test-het-zelf {
//  background: #F3F6FA;
//
//  h2 {
//    font-size: 2.5rem;
//    font-weight: bold;
//
//    span {
//      color: #dc3545;
//    }
//  }
//
//
//  #qr {
//    width: 75%;
//    padding: 1%;
//    border: 5px solid transparent;
//    border-radius: 10px;
//    background: #ffffff;
//
//    transition: all .2s ease-in-out;
//
//    &:hover {
//      transform: scale(1.05);
//      box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
//    }
//  }
//
//  #steps {
//    /* Stijl voor het containerblok */
//    .container {
//      //max-width: 800px;
//      //margin: 20px auto;
//      //background-color: #F3F6FA;
//      //border: 1px solid #ccc;
//      //border-radius: 5px;
//      //padding: 20px;
//    }
//
//    img {
//      width: 100%;
//    }
//
//    /* Stijl voor de stappen */
//    .step {
//      display: flex;
//      align-items: center;
//      margin-bottom: 20px;
//    }
//
//    /* Stijl voor het stapnummer */
//    .step .step-number {
//      padding: 18px;
//      width: 30px;
//      height: 30px;
//      border-radius: 50%;
//      background-color: #CCCCCC;
//      color: #fff;
//      font-weight: bold;
//      font-size: 1.5rem;
//      display: flex;
//      align-items: center;
//      justify-content: center;
//      border: 5px solid #ffffff;
//
//      transition: transform .2s ease-in-out;
//
//      &:hover {
//        transform: scale(1.15);
//      }
//    }
//
//    /* Stijl voor de stapinhoud */
//    .step .step-content {
//      margin-left: 20px;
//      font-size: 1.15rem;
//
//      .active {
//        margin-left: 20px;
//      }
//    }
//
//    /* Stijl voor de staptekst */
//    .step .step-text {
//      font-weight: bold;
//      font-size: 18px;
//    }
//
//    /* Stijl voor de stapbeschrijving */
//    .step .step-description {
//      color: #666;
//    }
//
//    /* Stijl voor de actieve stap */
//    .step.active .step-number {
//      background-color: #dc3545;
//      padding: 23px;
//      border: 5px solid #ffffff;
//      color: #ffffff;
//      font-size: 1.5rem;
//      //border: 2px solid #333;
//    }
//
//    ///* Stijl voor de verticale lijnen */
//    //  .step:not(:last-child)::after {
//    //    content: '';
//    //    position: absolute;
//    //    top: 30px;
//    //    left: 15px;
//    //    width: 2px;
//    //    height: calc(100% - 30px);
//    //    background-color: #ccc;
//    //  }
//  }
//}
</style>