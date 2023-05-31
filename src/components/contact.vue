<template>
  <!--  <div id="contact" data-spy="scroll" data-target=".navbar" data-offset="50">-->
  <div id="background_contact">
    <div id="wave_contact"></div>
    <div id="contact">
      <div class="container-xl pb-5">
        <div class="row">
          <div class="col-12 mb-xl-5 mb-lg-4 mb-md-3 mb-sm-3 mb-3 mt-4 text-center">
            <h2>Contacteer ons</h2>
          </div>
        </div>
        <div class="row">
          <div
              class="offset-xl-0 col-xl-7 offset-lg-2 col-lg-8 offset-md-2 col-md-8  order-xl-1 order-lg-2 order-md-2 order-sm-2 order-2">
            <form @submit="submitForm" method="POST" action="mailto: shana.tuyaerts@student.pxl.be"
                  enctype="text/plain">
              <div class="row  text-xl-left text-lg-left text-md-left text-sm-left text-center">
                <div class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10">
                  <!--                <div class="form-control">-->
                  <div :class="{ invalid: nameValid === 'invalid' }">
                    <label>Naam *</label><br>
                    <input id="name" name="name" type="text" @blur="validateName" v-model.trim="name">
                    <p v-if="nameValid === 'invalid'">Gelieve uw naam in te geven</p>
                  </div>
                </div>
                <div
                    class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10 mt-xl-0 mt-lg-0 mt-md-0 mt-sm-0 mt-4">
                  <!--                <div class="form-control">-->
                  <div>
                    <label>Naam bedrijf *</label><br>
                    <input id="company" name="company" type="text" @blur="validateCompany" v-model.trim="company">
                    <p v-if="companyValid === 'invalid'">Gelieve uw bedrijfsnaam in te geven</p>
                  </div>
                </div>
              </div>
              <div class="row mt-xl-4 mt-lg-4  text-xl-left text-lg-left text-md-left text-sm-left text-center">
                <div
                    class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                  <!--                <div class="form-control">-->
                  <label>E-mailadres *</label><br>
                  <input id="email" name="email" type="email" @blur="validateEmail" v-model.trim="email">
                  <p v-if="emailValid === 'invalid'">Gelieve een geldig e-mailadres in te geven</p>
                  <!--                </div>-->
                </div>
                <div
                    class="col-xl-6 offset-lg-0 col-lg-6 offset-md-0 col-md-6 offset-sm-0 col-sm-6 offset-1 col-10 mt-xl-0 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                  <!--                <div class="form-control">-->
                  <label>Telefoon *</label><br>
                  <input id="telephone" name="telephone" type="text" @blur="validateTel" v-model.trim="telephone">
                  <p v-if="telValid === 'invalid'">Gelieve een geldig telefoonnummer in te geven</p>
                  <!--                </div>-->
                </div>
              </div>
              <div
                  class="row mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4  text-xl-left text-lg-left text-md-left text-sm-left text-center">
                <div
                    class="offset-xl-0 col-xl-12 offset-lg-0 col-lg-12 offset-md-0 col-md-12 offset-sm-0 col-sm-12 offset-1 col-10">
                  <label>Uw bericht *</label><br>
                  <textarea id="message" name="message" @blur="validateMsg" v-model.trim="message"></textarea>
                  <p v-if="msgValid === 'invalid'" id="textarea">Gelieve uw bericht in te geven</p>
                </div>
              </div>
              <div class="row text-xl-left text-lg-center text-md-center text-sm-center text-center">
                <!--              <div class="offset-xl-0 col-xl-12 offset-lg-4 col-lg-4 offset-md-4 col-md-4 offset-sm-4 col-sm-3 mt-4">-->
                <div class="offset-0 col-12 mt-4">
                  <button class="px-5 py-2 border-0 g-recaptcha" type="submit">Verzenden</button>
                </div>
              </div>
            </form>
          </div>
          <div
              class="offset-xl-0 col-xl-5 offset-lg-3 col-lg-6 offset-md-3 col-md-6 offset-sm-2 col-sm-8 offset-2 col-8  order-xl-2 order-lg-1 order-md-1 order-sm-1 order-1 pl-xl-5 pl-lg-0 pl-md-0 pl-sm-0 pl-0">
            <img src="src/assets/Contact/Sevinç_contact.png" class="mb-xl-0 mb-lg-4 mb-md-4 mb-sm-4 mb-4" id="contact_img" alt="contact image">
            <div v-if="showSuccessMessage" id="succes">
              <p>Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.</p>
            </div>
          </div>
        </div>
        <!--            <div class="row text-xl-left text-lg-left text-md-center text-sm-center text-center">-->
        <!--              <div-->
        <!--                  class="offset-xl-0 col-xl-7 offset-lg-1 col-lg-10 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10 py-xl-0 my-xl-0 py-lg-0 my-lg-0 order-xl-1 order-lg-2 order-md-2 order-sm-2 order-2">-->
        <!--                <form @submit.prevent="submitForm" method="POST" action="mailto: shana.tuyaerts@student.pxl.be"-->
        <!--                      enctype="text/plain">-->
        <!--                  &lt;!&ndash;      NAAM&ndash;&gt;-->
        <!--                  <div class="row">-->
        <!--                    <div class="col-xl-6 col-lg-6 col-md-6">-->
        <!--                      <div class="form-control" :class="{ invalid: nameValid }">-->
        <!--                        <label for="name">Naam *</label>-->
        <!--                        <input id="name" name="name" type="text" @blur="validateName" required v-model.trim="name">-->
        <!--                        <p v-if="nameValid === 'invalid'">Gelieve een naam in te geven</p>-->
        <!--                      </div>-->
        <!--                    </div>-->

        <!--                    <div class="col-xl-6 col-lg-6 col-md-6">-->
        <!--                      &lt;!&ndash;      NAAM BEDRIJF&ndash;&gt;-->
        <!--                      <div class="form-control" :class="{ invalid: companyValid }">-->
        <!--                        <label for="company">Naam bedrijf *</label>-->
        <!--                        <input id="company" name="company" type="text" @blur="validateCompany" v-model.trim="company">-->
        <!--                        <p v-if="companyValid === 'invalid'">Gelieve een bedrijfsnaam in te geven</p>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </div>-->

        <!--                  <div class="row">-->
        <!--                    <div class="col-xl-6 col-lg-6 col-md-6">-->
        <!--                      &lt;!&ndash;      E-MAIL&ndash;&gt;-->
        <!--                      <div class="form-control" :class="{ invalid: emailValid }">-->
        <!--                        <label class="mt-3" for="mail">E-mailadres *</label>-->
        <!--                        <input id="mail" name="mail" type="text" @blur="validateEmail" v-model.trim="email">-->
        <!--                        <p v-if="emailValid === 'invalid'">Gelieve een geldig e-mailadres in te geven</p>-->
        <!--                      </div>-->
        <!--                    </div>-->

        <!--                    <div class="col-xl-6 col-lg-6 col-md-6">-->
        <!--                      &lt;!&ndash;      TEL&ndash;&gt;-->
        <!--                      <div class="form-control" :class="{ invalid: telValid }">-->
        <!--                        <label class="mt-3" for="telephone">Telefoon *</label>-->
        <!--                        <input id="telephone" name="telephone" type="tel" @blur="validateTel" v-model.trim="telephone">-->
        <!--                        <p v-if="telValid === 'invalid'">Gelieve een geldig telefoonnummer in te geven</p>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </div>-->

        <!--                  <div class="row">-->
        <!--                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">-->

        <!--                      &lt;!&ndash;      UW BERICHT&ndash;&gt;-->
        <!--                      <div class="form-control mb-xl-0 pb-xl-0 mb-lg-0 pb-ld-0 mb-md-5 pb-md-5"-->
        <!--                           :class="{ invalid: msgValid }">-->
        <!--                        <label class="mt-3 pt-3" for="message">Uw-bericht *</label><br>-->
        <!--                        <textarea id="message" name="message" @blur="validateinput" v-model.trim="message"></textarea>-->
        <!--                        <p v-if="msgValid === 'invalid'">Gelieve een bericht mee te geven</p>-->
        <!--                      </div>-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--            <div class="row">-->
        <!--              <div class="offset-xl-0 col-xl-12 offset-lg-4 col-lg-6 col-md-10">-->

        <!--      SEND BUTTON-->
        <!--                <div class="form-control mt-xl-5 mt-lg-5 mt-md-5 pt-xl-5 pt-lg-5 pt-md-5 mt-md-5 pt-md-5">-->
        <!--                  <button class="px-5 py-2 border-0 g-recaptcha"-->
        <!--                          data-sitekey="???"-->
        <!--                          data-callback='onSubmit'-->
        <!--                          data-action='submit'-->
        <!--                  >Verzenden-->
        <!--                  </button>-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->

        <!--                </form>-->
        <!--              </div>-->
        <!--            </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "contact",
  data() {
    return {
      name: '',
      nameValid: 'pending',
      company: '',
      companyValid: 'pending',
      email: '',
      emailValid: 'pending',
      telephone: null,
      telValid: 'pending',
      message: '',
      msgValid: 'pending',
      showSuccesMessage: false,
      // mailBody: {
      //   name: "test naam",
      //   company: "test bedrijf",
      //   email: "test email",
      //   telephone: "test telefoon",
      //   message: "test bericht"
      // }
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault();


      axios.post('https://mailqueue-d3bed9d20554.victhorious.com/api/mail/send', {
        from_email: 'noreply@smstools.be',
        from_name: 'Smstools WhatsApp Contactform',
        to_email: this.email,
        cc: [],
        bcc: [],
        body: "<h1>Test</h1>",
        subject: 'Smstools WhatsApp Contactform',
        tags: ['Graduaatsproef'],
        format: 'html',
        // date: '2023-06-20 hh:mm:ss'
      }, {
        headers: {
          'X-Authorization': '7BZk3b7Krd956RSIwiP18NUVojXgEYpMFUu5IBqB9MRBSnBfy9I3GiXB9C84tGCZ',
        }
      })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

      // Verstuur het formulier naar de API
      //   fetch('https://mailqueue-d3bed9d20554.victhorious.com/api/mail/send', {
      //     // mode: 'no-cors',
      //     method: 'POST',
      //     headers: {
      //       // 'Content-Type': 'application/json',
      //       'Content-Type': 'text/html; charset=utf-8',
      //       'X-Authorization': '7BZk3b7Krd956RSIwiP18NUVojXgEYpMFUu5IBqB9MRBSnBfy9I3GiXB9C84tGCZ',
      //       'Accept': '*/*'
      //     },
      //     body: JSON.stringify({
      //       from_email: 'noreply@smstools.be',
      //       from_name: 'Smstools WhatsApp Contactform',
      //       to_email: this.email,
      //       cc: [],
      //       bcc: [],
      //       body: {
      //         name: this.name,
      //         company: this.company,
      //         email: this.email,
      //         telephone: this.telephone,
      //         message: this.message
      //       },
      //       subject: 'Smstools WhatsApp Contactform',
      //       tags: 'Graduaatsproef',
      //       format: 'html'
      //     })
      //   })
      //       .then(response => {
      //         console.log(response)
      //         if (response.ok) {
      //           alert('Bedankt voor je bericht!');
      //           this.name = '';
      //           this.company = '';
      //           this.email = '';
      //           this.telephone = '';
      //           this.message = '';
      //         } else {
      //           alert('Er is een probleem opgetreden bij het verzenden van het formulier. Probeer het later opnieuw.');
      //         }
      //       })
      //       .catch(error => {
      //         alert('Er is een fout opgetreden bij het verzenden van het formulier. Probeer het later opnieuw.');
      //         console.error(error);
      //       });
    },


    // submitForm() {
    //   console.log(this.name);
    //   this.name = '';
    //
    //   console.log(this.company);
    //   this.company = '';
    //
    //   console.log(this.email);
    //   this.email = '';
    //
    //   console.log(this.telephone);
    //   this.telephone = null;
    //
    //   console.log(this.message);
    //   this.message = '';
    // },

    validateName() {
      if (this.name.trim() === '') {
        this.nameValid = 'invalid'

      } else {
        this.nameValid = 'valid'

      }
    },
    validateCompany() {
      if (this.company.trim() === '') {
        this.companyValid = 'invalid'

      } else {
        this.companyValid = 'valid'

      }
    },
    validateEmail() {
      if (this.email.trim() === '') {
        this.emailValid = 'invalid'

      } else {
        this.emailValid = 'valid'

      }
    },
    validateTel() {
      if (this.telephone.trim() === '') {
        this.telValid = 'invalid'

      } else {
        this.telValid = 'valid'

      }
    },
    validateMsg() {
      if (this.message.trim() === '') {
        this.msgValid = 'invalid'

      } else {
        this.msgValid = 'valid'

      }
    },
  }
}
</script>

<style lang="scss">
@import "src/scss/base";

#background_contact {
  background: $greyBackground;
  #contact {
    background: $colorSecondary;
    top: -100px;

    //#succes {
    //  width: 100%;
    //
    //  p {
    //    color: #ffffff;
    //    padding: 5% 2.5%;
    //    background: green;
    //    position: absolute;
    //    top: 0;
    //    right: 0;
    //  }
    //}

    #contact_img {
      width: 100%;
      transition: $transitionOnHover;
      border-radius: 1000px;
      box-shadow: $boxShadow;

      &:hover {
        transform: scale(1.05);
        box-shadow: $boxShadowHover;
      }
    }

    h2 {
      font-size: 2.5rem;
      color: $colorTertiary;
      font-weight: 700;
    }

    form {
      //padding: 5%;

      //.form-control {
      //margin: 0 5% 15% 0;
      //background: transparent;
      //border: none;
      //position: relative;

      p {
        color: $colorTertiary;
        //background: $colorTertiary;
        //border-radius: 10px;
        //margin: 0 5% 0 0;
        padding: 3.5% 0 2.5% 1%;
        margin-bottom: 0;
        //position: absolute;
        //bottom: -175%;

        //bottom: -225%;
        //width: 92%;
        font-size: .85rem;
        font-weight: bold;
      }
      p#textarea {
        padding: 1% 0;
      }

      label {
        color: $colorTertiary;
        font-size: 1.05rem;
        font-weight: normal;
        background: transparent;
        border: none;
      }

      input, textarea {
        border: none;
        border-radius: 10px;
        padding: 3%;
        text-indent: 5px;
        box-shadow: $boxShadow;
        width: 100%;

        moz-user-select: text;
        -webkit-user-select: text;
        -ms-user-select: text;
      }

      textarea {
        height: 10rem;
      }

      //}

      button {
        background: #ffffff;
        //padding: 2.5%;
        border-radius: 10px;
        color: #000000;
        font-size: 1rem;
        //margin-top: 33%;
        //margin-top: 20%;
        font-weight: 700;

        transition: $transitionOnHover;

        &:hover {
          transform: scale(1.05);
          box-shadow: $boxShadow;
        }
      }
    }
  }

  #wave_contact {
    background: url("src/assets/Contact/Wave_contact.png") no-repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    height: 35px;
    z-index: 98;
    position: relative;
    background-position-x: 25%;
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #contact {
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