<template>
  <div id="pricecalc">
    <div class="container-fluid p-0 w-100">
      <div class="container-xl pt-5">
        <!--      <flagstrap :selected="selectedCountry" @changed="handleCountryChange"></flagstrap>-->

        <div class="row">
          <div class="offset-xl-0 col-xl-12 offset-lg-0 col-lg-7 offset-md-0 col-md-12" id="title">
            <h2>Verstuur online sms'en<br>via onze SMS software en/of API</h2>
          </div>
        </div>
        <div class="row">
          <div
              class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-12 offset-sm-0 col-sm-12 offset-0 col-12">
            <p>Bent u klaar voor het avontuur met Smstools?</p>
            <p>Bereken hier de totale kosten voor het versturen van sms-berichten. Bij ons betaalt u alleen voor wat u
              verbruikt, zonder setup- of maandelijkse kosten.</p>
            <p>Hoe meer sms-berichten u verzendt, hoe voordeliger het tarief per bericht wordt. We bieden een 100%
              garantie op de beste prijs/kwaliteitverhouding. Neem snel contact met ons op voor een offerte op maat of
              voor postpaid-opties!</p>
          </div>
          <div class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-12 col-sm-12 col-12"
               id="pricecalc_section">
            <div id="calc">
              <div class="row p-0">
                <div
                    class="offset-xl-0 col-xl-12 offset-lg-1 col-lg-11 col-md-12 col-sm-12 col-12 mb-sm-4 mb-2 pb-3 ml-xl-0 ml-lg-0 ml-md-5 pl-xl-0 pl-lg-0 pl-md-5 pb-sm-0 pb-0">
                  <label for="country">Sms-berichten versturen</label>
                </div>
              </div>
              <div class="row p-0">
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-1 col-md-5 offset-sm-0 col-sm-7 offset-2 col-8">
                  <label for="aantal">Aantal sms'en versturen:</label>
                </div>
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-5 offset-2 col-8 mb-4">
                  <input id="aantal" type="text" v-model="aantal" min="1" @click="clearInput" @input="enkelNummers"
                         :maxlength="maximaleLengteInput">
                </div>
              </div>
              <div class="row p-0">
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-1 col-md-5 offset-sm-0 col-sm-7 offset-2 col-8">
                  <label for="select" class="mr-4">Land van ontvangst:</label>
                </div>
                <div
                    class="offset-xl-0 col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-5 offset-2 col-8 mb-xl-0 mb-lg-0 mb-md-0 mb-sm-2 mb-2">
                  <select id="select" v-model="selectedProduct"
                          class="btn btn-dark float-start dropdown-toggle dropdown">
                    <option>Verstuur en ontvang berichten in</option>
                    <option v-for="land in prijzen" :key="land.id" :value="land.id">
                      <!--                    <i class="flag flag-united-states"></i>-->
                      {{ land.country }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="row p-0" id="calculated">
                <hr>
                <div class="col p-0 m-0">
                  <p>Kostprijs</p>
                  <p>€ {{ PricePerSms }}</p>
                  <p>per bericht</p>
                </div>
                <div class="pl-4 col-6">
                  <p>TOTAAL</p>
                  <p> Vanaf € {{ totalPrice }}</p>

                </div>

              </div>


            </div>
            <svg width="1000" height="1000">
              <!--            <circle cx="381" cy="381" r="380" fill="#dc3545"/>-->
              <circle cx="405" cy="405" r="405" fill="#dc3545"/>
            </svg>
          </div>
        </div>
      </div>
      <div id="wave"></div>
    </div>
  </div>
</template>

<script>
import landen from "../../assets/JSON/prijzentabel.json";
// import 'vue-flagstrap/dist/vue-flagstrap.css';
// import Flagstrap from 'vue-flagstrap';

export default {
  data() {
    return {
      // selectedCountry: 'be',
      prijzen: landen,
      selectedProduct: "be",
      aantal: "",
      maximaleLengteInput: 7
    };
  },
  // components: {
  //   Flagstrap
  // },
  computed: {
    totalPrice() {
      if (this.selectedProduct !== null) {
        const product = this.prijzen.find(p => p.id === this.selectedProduct);
        // let productFloat = product.price.parseFloat(product.price)
        // return productFloat * this.quantity;
        let totalPrice = product.price_sms * this.aantal;

        return totalPrice.toFixed(2);
      }
      return 0;
    },
    PricePerSms() {
      if (this.selectedProduct !== null) {
        const product = this.prijzen.find(p => p.id === this.selectedProduct);
        // let productFloat = product.price.parseFloat(product.price)
        // return productFloat;
        return product.price_sms;
      }
      return 0;
    }
  },
  methods: {
    clearInput() {
      this.aantal = "";
    },
    enkelNummers(event) {
      this.aantal = event.target.value.replace(/[^0-9]/g, "");
    }
    // handleCountryChange(countryCode) {
    //   console.log('Geselecteerd land:', countryCode);
    // }
  }
};
</script>

<style lang="scss">
@import "src/scss/base";

#pricecalc {
  #wave {
    background: url("src/assets/TestHetZelf/TestHetZelf_wave.png") no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 120px;
    width: 100%;
    z-index: 98;
    position: relative;
    top: -900px;
  }

  overflow: hidden;
  height: 84vh;
  background-color: $colorTertiary;

  svg {
    //display: none;
    position: relative;
    right: -10%;
    top: -32%;
    z-index: -1;
  }

  #pricecalc_section {
    hr {
      height: 5px;
      background: $colorTertiary;
      border-radius: 40px;
      width: 90%;
    }

    #calc {
      margin-top: -10%;
      margin-left: 45%;
      width: 80%;
    }

    position: relative;
    z-index: 1;

    label[for=country] {
      font-size: 30px;
      color: $colorTertiary;
      font-weight: bold;
      margin-left: 2.5%;
    }

    label[for=aantal], label[for=select] {
      font-size: 20px;
      font-weight: bold;
      color: $colorTertiary;
    }

    input {
      margin-top: 4%;
      border: none;
      padding: 5% 0;
      border-radius: 10px;
      width: 80%;
      text-indent: 10px;
    }

    select.btn {
      margin-top: 4%;
      width: 80%;
      padding: 5% 0 5% 5%;
      border-radius: 10px;
    }

    option {
      background: $colorTertiary;
      color: $colorPrimary;
      text-align: left;
    }

    #calculated p {
      color: $colorTertiary;
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: 22px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 20px;
        font-weight: 900;
      }

      &:nth-child(3) {
        font-size: 18px;
      }
    }

    ::-webkit-scrollbar-thumb {
      background: $colorSecondary;
      border-radius: 10px;
    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #pricecalc {
    overflow: hidden;

    h2 {
      font-size: $fontSizeH2;
    }
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #pricecalc {
    height: 90vh;
    h2 {
      font-size: 20px;
    }

    svg {
      //display: none;
      position: relative;
      right: 3.5%;
      top: -35%;
      z-index: -1;
    }

    #pricecalc_section {

      #calc {
        margin-top: -25%;
        margin-left: 25%;
      }

      label[for=country] {
        font-size: 25px;
        margin-left: 12%;
      }

      label[for=aantal], label[for=select] {
        font-size: 16px;
      }

      input {
        margin-top: 2%;
        border: none;
        padding: 5% 0;
        border-radius: 10px;
        width: 80%;
        text-indent: 10px;
      }

      select.btn {
        margin-top: 2%;
        width: 80%;
        padding: 5% 0 5% 5%;
        border-radius: 10px;
      }
    }
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {
  #pricecalc {
    height: 149vh;

    svg {
      position: relative;
      right: 0;
      top: -28%;
      z-index: -1;
    }

    #pricecalc_section {
      #calc {
        margin-top: 5%;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 25px;
        color: $colorTertiary;
        margin-left: 9%;
      }

      label[for=aantal], label[for=select] {
        font-size: 18px;
        margin-top: 9%;
      }
    }
  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  #pricecalc {
    height: 153vh;

    svg {
      position: relative;
      right: 21%;
      top: -27%;
    }

    #pricecalc_section {
      padding: 5% 0;

      #calc {
        margin-top: 2%;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 25px;
        color: $colorTertiary;
        margin-left: 10%;
      }

      label[for=aantal], label[for=select] {
        font-size: 18px;
        margin-left: -5%;
        margin-top: 5%;
      }
    }
  }

  #hoe-werkt-het {
    #how-it-works {
      h3 {
        font-size: $FontSizeH3Mobile;
      }

      p {
        font-size: .75rem;
      }
    }
  }
}

@media screen and (max-width: 415px) {
  #pricecalc {
    height: 165vh;

    svg {
      position: relative;
      right: 46%;
      top: -30%;
    }

    #title h2 {
      color: $FontSizeH2_BreakMobile;
    }

    p {
      font-size: $FontSizeParagraphMobile;
    }

    #pricecalc_section {
      padding: 5% 0;

      #calc {
        margin-top: 0;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 20px;
        color: $colorTertiary;
        margin-left: 8%;
        margin-bottom: 0;
      }

      label[for=aantal], label[for=select] {
        font-size: 15px;
      }
    }

    #calculated p {
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: 20px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 18px;
        font-weight: 900;
      }

      &:nth-child(3) {
        font-size: 16px;
      }
    }
  }

  #hoe-werkt-het {
    #how-it-works {
      h3 {
        font-size: .9rem;
      }

      p {
        font-size: .75rem;
      }
    }
  }
}

@media screen and (max-width: 320px) {
  #pricecalc {
    height: 160vh;

    svg {
      position: relative;
      right: 75%;
      top: -33%;
    }

    #title h2 {
      color: $FontSizeH2_BreakMobile;
    }

    p {
      font-size: $FontSizeParagraphMobile;
    }

    #pricecalc_section {
      padding: 5% 0;

      #calc {
        margin-top: 0;
        margin-left: 15%;
      }

      label[for=country] {
        font-size: 20px;
        color: $colorTertiary;
        margin-left: 8%;
        margin-bottom: 0;
      }

      label[for=aantal], label[for=select] {
        font-size: 15px;
      }
    }

    #calculated p {
      margin: 0;
      padding: 0;

      &:nth-child(1) {
        font-size: 20px;
        font-weight: 600;
      }

      &:nth-child(2) {
        font-size: 18px;
        font-weight: 900;
      }

      &:nth-child(3) {
        font-size: 16px;
      }
    }
  }

  #hoe-werkt-het {
    #how-it-works {
      h3 {
        font-size: .9rem;
      }

      p {
        font-size: .75rem;
      }
    }
  }
}
</style>


<!--<template>-->
<!--  <div id="prices">-->
<!--    <input type="text">-->
<!--    <button type="button" data-bs-toggle="dropdown" id="flagstrap-drop-down-vBSFTikr"-->
<!--            class="btn btn-dark float-start dropdown-toggle" aria-expanded="false"><span-->
<!--        class="flagstrap-selected-vBSFTikr"><i class="flagstrap-icon flagstrap-be" style="margin-right: 10px;"></i>België</span><span-->
<!--        class="caret" style="margin-left: 10px;"></span></button>-->


<!--    <ul id="flagstrap-drop-down-vBSFTikr-list" aria-labelled-by="flagstrap-drop-down-vBSFTikr" class="dropdown-menu"-->
<!--        style="height: auto; max-height: 250px; overflow-x: hidden; margin: 0px;" v-for="countries in prijzen" :key="countries">-->
<!--      <li><a data-val="">Verstuur en ontvang berichten in</a></li>-->

<!--      <li>-->
<!--        <a data-val="AF">-->
<!--          <i class="flagstrap-icon flagstrap-af" style="margin-right: 10px;">-->

<!--          </i>-->
<!--          {{ countries.country }}-->
<!--        </a>-->
<!--      </li>-->


<!--&lt;!&ndash;      <li><a data-val="AF"><i class="flagstrap-icon flagstrap-af" style="margin-right: 10px;"></i>Afghanistan</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AN"><i class="flagstrap-icon flagstrap-an" style="margin-right: 10px;"></i>Albanië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="DZ"><i class="flagstrap-icon flagstrap-dz" style="margin-right: 10px;"></i>Algerije</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AS"><i class="flagstrap-icon flagstrap-as" style="margin-right: 10px;"></i>Amerikaans Samoa</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="VI"><i class="flagstrap-icon flagstrap-vi" style="margin-right: 10px;"></i>Amerikaanse&ndash;&gt;-->
<!--&lt;!&ndash;        Maagdeneilanden</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AD"><i class="flagstrap-icon flagstrap-ad" style="margin-right: 10px;"></i>Andorra</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AO"><i class="flagstrap-icon flagstrap-ao" style="margin-right: 10px;"></i>Angola</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AI"><i class="flagstrap-icon flagstrap-ai" style="margin-right: 10px;"></i>Anguilla</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AG"><i class="flagstrap-icon flagstrap-ag" style="margin-right: 10px;"></i>Antigua en Barbuda</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AR"><i class="flagstrap-icon flagstrap-ar" style="margin-right: 10px;"></i>Argentinië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AM"><i class="flagstrap-icon flagstrap-am" style="margin-right: 10px;"></i>Armenië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AW"><i class="flagstrap-icon flagstrap-aw" style="margin-right: 10px;"></i>Aruba</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AU"><i class="flagstrap-icon flagstrap-au" style="margin-right: 10px;"></i>Australië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BS"><i class="flagstrap-icon flagstrap-bs" style="margin-right: 10px;"></i>Bahamas</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BH"><i class="flagstrap-icon flagstrap-bh" style="margin-right: 10px;"></i>Bahrain</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BD"><i class="flagstrap-icon flagstrap-bd" style="margin-right: 10px;"></i>Bangladesh</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BB"><i class="flagstrap-icon flagstrap-bb" style="margin-right: 10px;"></i>Barbados</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BE"><i class="flagstrap-icon flagstrap-be" style="margin-right: 10px;"></i>België</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BZ"><i class="flagstrap-icon flagstrap-bz" style="margin-right: 10px;"></i>Belize</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BJ"><i class="flagstrap-icon flagstrap-bj" style="margin-right: 10px;"></i>Benin</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BM"><i class="flagstrap-icon flagstrap-bm" style="margin-right: 10px;"></i>Bermuda</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BT"><i class="flagstrap-icon flagstrap-bt" style="margin-right: 10px;"></i>Bhutan</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BO"><i class="flagstrap-icon flagstrap-bo" style="margin-right: 10px;"></i>Bolivië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BA"><i class="flagstrap-icon flagstrap-ba" style="margin-right: 10px;"></i>Bosnië Herzegovina</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BW"><i class="flagstrap-icon flagstrap-bw" style="margin-right: 10px;"></i>Botswana</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BR"><i class="flagstrap-icon flagstrap-br" style="margin-right: 10px;"></i>Brazilië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="VG"><i class="flagstrap-icon flagstrap-vg" style="margin-right: 10px;"></i>Britse Maagdeneilanden</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BG"><i class="flagstrap-icon flagstrap-bg" style="margin-right: 10px;"></i>Bulgarije</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BF"><i class="flagstrap-icon flagstrap-bf" style="margin-right: 10px;"></i>Burkina Faso</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BI"><i class="flagstrap-icon flagstrap-bi" style="margin-right: 10px;"></i>Burundi</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CM"><i class="flagstrap-icon flagstrap-cm" style="margin-right: 10px;"></i>Cameroon</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CA"><i class="flagstrap-icon flagstrap-ca" style="margin-right: 10px;"></i>Canada</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CF"><i class="flagstrap-icon flagstrap-cf" style="margin-right: 10px;"></i>Central Afican&ndash;&gt;-->
<!--&lt;!&ndash;        Republic</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TD"><i class="flagstrap-icon flagstrap-td" style="margin-right: 10px;"></i>Chad</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CI"><i class="flagstrap-icon flagstrap-ci" style="margin-right: 10px;"></i>Ivoorkust</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CO"><i class="flagstrap-icon flagstrap-co" style="margin-right: 10px;"></i>Colombia</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CR"><i class="flagstrap-icon flagstrap-cr" style="margin-right: 10px;"></i>Costa Rica</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CU"><i class="flagstrap-icon flagstrap-cu" style="margin-right: 10px;"></i>Cuba</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CY"><i class="flagstrap-icon flagstrap-cy" style="margin-right: 10px;"></i>Cyprus</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="DK"><i class="flagstrap-icon flagstrap-dk" style="margin-right: 10px;"></i>Denemarken</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="DM"><i class="flagstrap-icon flagstrap-dm" style="margin-right: 10px;"></i>Dominica</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="DO"><i class="flagstrap-icon flagstrap-do" style="margin-right: 10px;"></i>Dominicaanse Republiek</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="DE"><i class="flagstrap-icon flagstrap-de" style="margin-right: 10px;"></i>Duitsland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="EC"><i class="flagstrap-icon flagstrap-ec" style="margin-right: 10px;"></i>Ecuador</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="EG"><i class="flagstrap-icon flagstrap-eg" style="margin-right: 10px;"></i>Egypte</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SV"><i class="flagstrap-icon flagstrap-sv" style="margin-right: 10px;"></i>El Salvador</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GQ"><i class="flagstrap-icon flagstrap-gq" style="margin-right: 10px;"></i>Equatoriaal-Guinea</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="EE"><i class="flagstrap-icon flagstrap-ee" style="margin-right: 10px;"></i>Estland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ET"><i class="flagstrap-icon flagstrap-et" style="margin-right: 10px;"></i>Ethiopië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PH"><i class="flagstrap-icon flagstrap-ph" style="margin-right: 10px;"></i>Filipijnen</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="FI"><i class="flagstrap-icon flagstrap-fi" style="margin-right: 10px;"></i>Finland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="FR"><i class="flagstrap-icon flagstrap-fr" style="margin-right: 10px;"></i>Frankrijk</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GF"><i class="flagstrap-icon flagstrap-gf" style="margin-right: 10px;"></i>Frans-Guyana</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GA"><i class="flagstrap-icon flagstrap-ga" style="margin-right: 10px;"></i>Gabon</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GM"><i class="flagstrap-icon flagstrap-gm" style="margin-right: 10px;"></i>Gambia</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GE"><i class="flagstrap-icon flagstrap-ge" style="margin-right: 10px;"></i>Georgia</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GH"><i class="flagstrap-icon flagstrap-gh" style="margin-right: 10px;"></i>Ghana</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GI"><i class="flagstrap-icon flagstrap-gi" style="margin-right: 10px;"></i>Gibraltar</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GD"><i class="flagstrap-icon flagstrap-gd" style="margin-right: 10px;"></i>Grenada</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GR"><i class="flagstrap-icon flagstrap-gr" style="margin-right: 10px;"></i>Griekenland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GL"><i class="flagstrap-icon flagstrap-gl" style="margin-right: 10px;"></i>Groenland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GP"><i class="flagstrap-icon flagstrap-gp" style="margin-right: 10px;"></i>Guadeloupe</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GU"><i class="flagstrap-icon flagstrap-gu" style="margin-right: 10px;"></i>Guam</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GT"><i class="flagstrap-icon flagstrap-gt" style="margin-right: 10px;"></i>Guatemala</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GN"><i class="flagstrap-icon flagstrap-gn" style="margin-right: 10px;"></i>Guinea</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GW"><i class="flagstrap-icon flagstrap-gw" style="margin-right: 10px;"></i>Guinee-Bissau</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GY"><i class="flagstrap-icon flagstrap-gy" style="margin-right: 10px;"></i>Guyana</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="HT"><i class="flagstrap-icon flagstrap-ht" style="margin-right: 10px;"></i>Haiti</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="HN"><i class="flagstrap-icon flagstrap-hn" style="margin-right: 10px;"></i>Honduras</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="HK"><i class="flagstrap-icon flagstrap-hk" style="margin-right: 10px;"></i>Hong Kong</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="HU"><i class="flagstrap-icon flagstrap-hu" style="margin-right: 10px;"></i>Hongarije</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="IE"><i class="flagstrap-icon flagstrap-ie" style="margin-right: 10px;"></i>Ierland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="IS"><i class="flagstrap-icon flagstrap-is" style="margin-right: 10px;"></i>IJsland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="IN"><i class="flagstrap-icon flagstrap-in" style="margin-right: 10px;"></i>Indië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ID"><i class="flagstrap-icon flagstrap-id" style="margin-right: 10px;"></i>Indonesië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="IQ"><i class="flagstrap-icon flagstrap-iq" style="margin-right: 10px;"></i>Iran</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="IL"><i class="flagstrap-icon flagstrap-il" style="margin-right: 10px;"></i>Israël</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="IT"><i class="flagstrap-icon flagstrap-it" style="margin-right: 10px;"></i>Italië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="JM"><i class="flagstrap-icon flagstrap-jm" style="margin-right: 10px;"></i>Jamaica</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="JP"><i class="flagstrap-icon flagstrap-jp" style="margin-right: 10px;"></i>Japan</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="JO"><i class="flagstrap-icon flagstrap-jo" style="margin-right: 10px;"></i>Jordanië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="KY"><i class="flagstrap-icon flagstrap-ky" style="margin-right: 10px;"></i>Kaaimaneilanden</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CV"><i class="flagstrap-icon flagstrap-cv" style="margin-right: 10px;"></i>Kaapverdië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="KE"><i class="flagstrap-icon flagstrap-ke" style="margin-right: 10px;"></i>Kenia</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="KW"><i class="flagstrap-icon flagstrap-kw" style="margin-right: 10px;"></i>Koeweit</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="HR"><i class="flagstrap-icon flagstrap-hr" style="margin-right: 10px;"></i>Kroatië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="LV"><i class="flagstrap-icon flagstrap-lv" style="margin-right: 10px;"></i>Letland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="LR"><i class="flagstrap-icon flagstrap-lr" style="margin-right: 10px;"></i>Liberia</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="LY"><i class="flagstrap-icon flagstrap-ly" style="margin-right: 10px;"></i>Libië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="LI"><i class="flagstrap-icon flagstrap-li" style="margin-right: 10px;"></i>Liechtenstein</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="LT"><i class="flagstrap-icon flagstrap-lt" style="margin-right: 10px;"></i>Lithouwen</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="LU"><i class="flagstrap-icon flagstrap-lu" style="margin-right: 10px;"></i>Luxemburg</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MK"><i class="flagstrap-icon flagstrap-mk" style="margin-right: 10px;"></i>Macedonië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MG"><i class="flagstrap-icon flagstrap-mg" style="margin-right: 10px;"></i>Madagascar</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MW"><i class="flagstrap-icon flagstrap-mw" style="margin-right: 10px;"></i>Malawi</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MY"><i class="flagstrap-icon flagstrap-my" style="margin-right: 10px;"></i>Maleisië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ML"><i class="flagstrap-icon flagstrap-ml" style="margin-right: 10px;"></i>Mali</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MT"><i class="flagstrap-icon flagstrap-mt" style="margin-right: 10px;"></i>Malta</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MA"><i class="flagstrap-icon flagstrap-ma" style="margin-right: 10px;"></i>Marokko</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MQ"><i class="flagstrap-icon flagstrap-mq" style="margin-right: 10px;"></i>Martinique</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MR"><i class="flagstrap-icon flagstrap-mr" style="margin-right: 10px;"></i>Mauritanië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MU"><i class="flagstrap-icon flagstrap-mu" style="margin-right: 10px;"></i>Mauritius</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MX"><i class="flagstrap-icon flagstrap-mx" style="margin-right: 10px;"></i>Mexico</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MD"><i class="flagstrap-icon flagstrap-md" style="margin-right: 10px;"></i>Moldavië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MC"><i class="flagstrap-icon flagstrap-mc" style="margin-right: 10px;"></i>Monaco</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MN"><i class="flagstrap-icon flagstrap-mn" style="margin-right: 10px;"></i>Mongolië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ME"><i class="flagstrap-icon flagstrap-me" style="margin-right: 10px;"></i>Montenegro</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MS"><i class="flagstrap-icon flagstrap-ms" style="margin-right: 10px;"></i>Montserrat</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MZ"><i class="flagstrap-icon flagstrap-mz" style="margin-right: 10px;"></i>Mozambique</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NA"><i class="flagstrap-icon flagstrap-na" style="margin-right: 10px;"></i>Namibië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NL"><i class="flagstrap-icon flagstrap-nl" style="margin-right: 10px;"></i>Nederland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NP"><i class="flagstrap-icon flagstrap-np" style="margin-right: 10px;"></i>Nepal</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NZ"><i class="flagstrap-icon flagstrap-nz" style="margin-right: 10px;"></i>New Zeeland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NI"><i class="flagstrap-icon flagstrap-ni" style="margin-right: 10px;"></i>Nicaragua</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NE"><i class="flagstrap-icon flagstrap-ne" style="margin-right: 10px;"></i>Niger</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NG"><i class="flagstrap-icon flagstrap-ng" style="margin-right: 10px;"></i>Nigeria</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="MP"><i class="flagstrap-icon flagstrap-mp" style="margin-right: 10px;"></i>Noordelijke&ndash;&gt;-->
<!--&lt;!&ndash;        Marianen</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="NO"><i class="flagstrap-icon flagstrap-no" style="margin-right: 10px;"></i>Noorwegen</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="UA"><i class="flagstrap-icon flagstrap-ua" style="margin-right: 10px;"></i>Oekraine</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="OM"><i class="flagstrap-icon flagstrap-om" style="margin-right: 10px;"></i>Oman</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AT"><i class="flagstrap-icon flagstrap-at" style="margin-right: 10px;"></i>Oostenrijk</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PK"><i class="flagstrap-icon flagstrap-pk" style="margin-right: 10px;"></i>Pakistan</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PA"><i class="flagstrap-icon flagstrap-pa" style="margin-right: 10px;"></i>Panama</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PY"><i class="flagstrap-icon flagstrap-py" style="margin-right: 10px;"></i>Paraguay</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PE"><i class="flagstrap-icon flagstrap-pe" style="margin-right: 10px;"></i>Peru</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PL"><i class="flagstrap-icon flagstrap-pl" style="margin-right: 10px;"></i>Polen</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PT"><i class="flagstrap-icon flagstrap-pt" style="margin-right: 10px;"></i>Portugal</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="PR"><i class="flagstrap-icon flagstrap-pr" style="margin-right: 10px;"></i>Puerto Rico</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="QA"><i class="flagstrap-icon flagstrap-qa" style="margin-right: 10px;"></i>Qatar</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CG"><i class="flagstrap-icon flagstrap-cg" style="margin-right: 10px;"></i>Republiek Congo</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="RO"><i class="flagstrap-icon flagstrap-ro" style="margin-right: 10px;"></i>Roemenië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="RU"><i class="flagstrap-icon flagstrap-ru" style="margin-right: 10px;"></i>Rusland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="RW"><i class="flagstrap-icon flagstrap-rw" style="margin-right: 10px;"></i>Rwanda</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="KN"><i class="flagstrap-icon flagstrap-kn" style="margin-right: 10px;"></i>Saint Kitts en&ndash;&gt;-->
<!--&lt;!&ndash;        Nevis</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="LC"><i class="flagstrap-icon flagstrap-lc" style="margin-right: 10px;"></i>Saint Lucia</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="VC"><i class="flagstrap-icon flagstrap-vc" style="margin-right: 10px;"></i>Saint Vincent en de&ndash;&gt;-->
<!--&lt;!&ndash;        Grenadin</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SM"><i class="flagstrap-icon flagstrap-sm" style="margin-right: 10px;"></i>San Marino</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SA"><i class="flagstrap-icon flagstrap-sa" style="margin-right: 10px;"></i>Saudi Arabië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SN"><i class="flagstrap-icon flagstrap-sn" style="margin-right: 10px;"></i>Senegal</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="RS"><i class="flagstrap-icon flagstrap-rs" style="margin-right: 10px;"></i>Servië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SL"><i class="flagstrap-icon flagstrap-sl" style="margin-right: 10px;"></i>Sierra Leone</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SG"><i class="flagstrap-icon flagstrap-sg" style="margin-right: 10px;"></i>Singapore</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SX"><i class="flagstrap-icon flagstrap-sx" style="margin-right: 10px;"></i>Sint Maarten</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SK"><i class="flagstrap-icon flagstrap-sk" style="margin-right: 10px;"></i>Slovakije</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SO"><i class="flagstrap-icon flagstrap-so" style="margin-right: 10px;"></i>Somalië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ES"><i class="flagstrap-icon flagstrap-es" style="margin-right: 10px;"></i>Spanje</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SD"><i class="flagstrap-icon flagstrap-sd" style="margin-right: 10px;"></i>Sudan</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SR"><i class="flagstrap-icon flagstrap-sr" style="margin-right: 10px;"></i>Suriname</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SZ"><i class="flagstrap-icon flagstrap-sz" style="margin-right: 10px;"></i>Swaziland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SY"><i class="flagstrap-icon flagstrap-sy" style="margin-right: 10px;"></i>Syrië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TW"><i class="flagstrap-icon flagstrap-tw" style="margin-right: 10px;"></i>Taiwan</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TZ"><i class="flagstrap-icon flagstrap-tz" style="margin-right: 10px;"></i>Tanzanië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TH"><i class="flagstrap-icon flagstrap-th" style="margin-right: 10px;"></i>Thailand</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TG"><i class="flagstrap-icon flagstrap-tg" style="margin-right: 10px;"></i>Togo</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TT"><i class="flagstrap-icon flagstrap-tt" style="margin-right: 10px;"></i>Trinidad en Tobago</a>&ndash;&gt;-->
<!--&lt;!&ndash;      </li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CZ"><i class="flagstrap-icon flagstrap-cz" style="margin-right: 10px;"></i>Tsjechië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TN"><i class="flagstrap-icon flagstrap-tn" style="margin-right: 10px;"></i>Tunesië</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TR"><i class="flagstrap-icon flagstrap-tr" style="margin-right: 10px;"></i>Turkije</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="TC"><i class="flagstrap-icon flagstrap-tc" style="margin-right: 10px;"></i>Turks- en&ndash;&gt;-->
<!--&lt;!&ndash;        Caicoseilanden</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="US"><i class="flagstrap-icon flagstrap-us" style="margin-right: 10px;"></i>U.S.A.</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="UG"><i class="flagstrap-icon flagstrap-ug" style="margin-right: 10px;"></i>Uganda</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="UY"><i class="flagstrap-icon flagstrap-uy" style="margin-right: 10px;"></i>Uruguay</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="VE"><i class="flagstrap-icon flagstrap-ve" style="margin-right: 10px;"></i>Venezuela</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="GB"><i class="flagstrap-icon flagstrap-gb" style="margin-right: 10px;"></i>Verenigd&ndash;&gt;-->
<!--&lt;!&ndash;        Koninkrijk</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="AE"><i class="flagstrap-icon flagstrap-ae" style="margin-right: 10px;"></i>Verenigde Arabische&ndash;&gt;-->
<!--&lt;!&ndash;        Emiraten</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="BY"><i class="flagstrap-icon flagstrap-by" style="margin-right: 10px;"></i>Wit-Rusland</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="YE"><i class="flagstrap-icon flagstrap-ye" style="margin-right: 10px;"></i>Yemen</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ZM"><i class="flagstrap-icon flagstrap-zm" style="margin-right: 10px;"></i>Zambia</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ZW"><i class="flagstrap-icon flagstrap-zw" style="margin-right: 10px;"></i>Zimbabwe</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="KR"><i class="flagstrap-icon flagstrap-kr" style="margin-right: 10px;"></i>Zuid Korea</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="ZA"><i class="flagstrap-icon flagstrap-za" style="margin-right: 10px;"></i>Zuid-Afrika</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="SE"><i class="flagstrap-icon flagstrap-se" style="margin-right: 10px;"></i>Zweden</a></li>&ndash;&gt;-->
<!--&lt;!&ndash;      <li><a data-val="CH"><i class="flagstrap-icon flagstrap-ch" style="margin-right: 10px;"></i>Zwitserland</a></li>&ndash;&gt;-->
<!--    </ul>-->


<!--    &lt;!&ndash;    <label>Selecteer een product:</label><br><br>&ndash;&gt;-->
<!--    &lt;!&ndash;    <select v-model="selectedProductId" v-for="prijs in prijzentabel" :key="prijs">&ndash;&gt;-->
<!--    &lt;!&ndash;      <option v-for="country in prijzentabel" :key="country" :value="country.id">{{ prijs.country }}</option>&ndash;&gt;-->
<!--    &lt;!&ndash;    </select><br><br>&ndash;&gt;-->

<!--    &lt;!&ndash;    <label>Aantal:</label><br><br>&ndash;&gt;-->
<!--    &lt;!&ndash;    <input v-model="quantity" type="number"><br><br>&ndash;&gt;-->

<!--    &lt;!&ndash;    <button @click="calculatePrice">Bereken prijs</button>&ndash;&gt;-->

<!--    &lt;!&ndash;    <p v-if="eenheidPrice">Eenheid prijs: {{ eenheidPrice }}</p>&ndash;&gt;-->
<!--    &lt;!&ndash;    <p v-if="totalPrice">Totale prijs: {{ totalPrice }}</p>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->

<!--import prijzentabel from "../../../public/JSON/prijzentabel.json"-->
<!--// import producten from "JSON/prices_test.json";-->

<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      prijzen: prijzentabel-->
<!--      // selectedProductId: null,-->
<!--      // quantity: 1,-->
<!--      // products: [],-->
<!--      // prices: {},-->

<!--      // productList: producten-->
<!--    }-->
<!--  },-->

<!--  mounted() {-->
<!--    this.loadData()-->
<!--  },-->

<!--  methods: {-->
<!--    async loadData() {-->
<!--      // Laad de JSON-data in-->
<!--      const response = await fetch('JSON/prices_test.json')-->
<!--      const data = await response.json()-->
<!--      this.products = data.products-->
<!--      this.prices = data.prices-->
<!--    },-->

<!--    calculatePrice() {-->
<!--      const selectedProduct = this.products.find(p => p.id === this.selectedProductId)-->
<!--      const price = this.prices[selectedProduct.id]-->
<!--      this.totalPrice = price * this.quantity-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss">-->
<!--#prices {-->
<!--  background: green;-->
<!--  padding: 10% 5%;-->
<!--  color: #ffffff;-->
<!--}-->

<!--</style>-->