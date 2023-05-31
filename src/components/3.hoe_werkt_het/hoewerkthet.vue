<template>
  <!--  <div id="hoe-werkt-het" data-spy="scroll" data-target=".navbar" data-offset="50">-->
  <div id="hoe-werkt-het">
    <div class="container-fluid py-3" id="how-it-works">
      <div class="container-xl">
        <div class="row">
          <div class="col-12"><h2 class="mb-5 py-5 text-center">{{ HoeWerktHet.title_combineerWhatsApp }}</h2></div>
        </div>
        <div class="row">
          <div
              class="offset-xl-0 col-xl-5 offset-lg-0 col-lg-5 offset-md-2 col-md-8 offset-sm-1 col-sm-10 offset-1 col-10">
            <h1>TEST</h1>
          </div>
          <div class="col-xl-7 col-lg-7">
            <div class="row py-5">
              <div
                  class="offset-xl-0 col-xl-9 offset-lg-2 col-lg-9 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10 options_software">
                <div class="svg_check">
                  <i :class="HoeWerktHet.combineerSoftware[1].icon"></i>
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="#ffffff" stroke="#F3F6FA" stroke-width="10"></circle>
                  </svg>
                </div>
                <h3 class="pl-xl-4 pl-lg-5 pl-md-4 pb-sm-0 pl-sm-5 ml-sm-0 pl-5 pb-3 pt-2 ml-3 mb-xl-3 mb-lg-3 mb-md-4 mb-sm-3 mb-3">
                  {{ HoeWerktHet.combineerSoftware[1].title }}</h3>
                <p>{{ HoeWerktHet.combineerSoftware[1].description }}</p>
              </div>
            </div>

            <div class="row py-5">
              <div
                  class="offset-xl-5 col-xl-9 offset-lg-2 col-lg-9 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10 options_software">
                <div class="svg_check">
                  <i :class="HoeWerktHet.combineerSoftware[2].icon"></i>
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="#ffffff" stroke="#F3F6FA" stroke-width="10"></circle>
                  </svg>
                </div>
                <h3 class="pl-xl-4 pl-lg-5 pl-md-4 pb-sm-0 pl-sm-5 ml-sm-0 pl-5 pb-3 pt-2 ml-3 mb-xl-3 mb-lg-3 mb-md-4 mb-sm-3 mb-3">
                  {{ HoeWerktHet.combineerSoftware[2].title }}</h3>
                <p>{{ HoeWerktHet.combineerSoftware[2].description }}</p>
              </div>
            </div>

            <div class="row py-5">
              <div
                  class="offset-xl-2 col-xl-9 offset-lg-2 col-lg-9 offset-md-1 col-md-10 offset-sm-1 col-sm-10 offset-1 col-10 options_software">
                <div class="svg_check">
                  <i :class="HoeWerktHet.combineerSoftware[3].icon"></i>
                  <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="#ffffff" stroke="#F3F6FA" stroke-width="10"></circle>
                  </svg>
                </div>
                <h3 class="pl-xl-4 pl-lg-5 pl-md-4 pb-sm-0 pl-sm-5 ml-sm-0 pl-5 pb-3 pt-2 ml-3 mb-xl-3 mb-lg-3 mb-md-4 mb-sm-3 mb-3">
                  {{ HoeWerktHet.combineerSoftware[3].title }}</h3>
                <p>{{ HoeWerktHet.combineerSoftware[3].description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HoeWerktHet from "../../assets/JSON/HoeWerktHet.json";

export default {
  name: "HoeWerktHet",
  data() {
    return {
      HoeWerktHet: HoeWerktHet
    }
  }
}
</script>

<style lang="scss">
@import "src/scss/base";

#hoe-werkt-het {
  #how-it-works {
    background-color: rgba(220, 53, 69, .16);
  }

  h2 {
    font-size: 35px;
  }

  h3 {
    font-size: 24px;
  }

  .options_software {
    position: relative;
    background: $colorTertiary;
    border-radius: 40px;
    padding: 5%;
    box-shadow: $boxShadow;

    transition: all .2s ease-in-out;

    &:hover {
      transform: translateY(-10px);
      box-shadow: $boxShadowHover;
    }

    .svg_check {
      position: absolute;
      top: -15%;
      left: -8%;

      transition: $transitionOnHover;

      &:hover {
        cursor: pointer;
        background-color: transparent;
        text-decoration: none;

        transform: scale(1.1);
      }

      .bi {
        font-size: 2.5rem;
        color: $colorSecondary;
        position: absolute;
      }

      .bi-send-check {
        top: 22%;
        left: 26%;
      }

      .bi-envelope-at {
        top: 20%;
        left: 30%;
      }

      .bi-code-slash {
        top: 20%;
        left: 29%;
      }
    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #hoe-werkt-het {
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

@media screen and (max-width: 320px) {
  #hoe-werkt-het {
    #how-it-works {
      h3 {
        font-size: .75rem;
      }
      p {
        font-size: .75rem;
      }
    }
  }
}
</style>