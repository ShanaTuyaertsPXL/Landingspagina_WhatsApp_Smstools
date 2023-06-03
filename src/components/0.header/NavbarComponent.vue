<template>
<!--  <nav class="navbar navbar-expand-lg navbar-light bg-light">-->
<!--    <div class="container-fluid">-->
<!--      <a class="navbar-brand" href="#">Navbar</a>-->
<!--      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">-->
<!--        <span class="navbar-toggler-icon"></span>-->
<!--      </button>-->
<!--      <div class="collapse navbar-collapse" id="navbarNav">-->
<!--        <ul class="navbar-nav">-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link active" aria-current="page" href="#">Home</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#">Features</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link" href="#">Pricing</a>-->
<!--          </li>-->
<!--          <li class="nav-item">-->
<!--            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->



  <nav class="navbar navbar-expand-lg justify-content-center" id="navbar_styling">
    <a class="navbar-brand mr-auto" :href="navbar.linkBrand"><img :src="imagePath + navbar.brand" :alt="navbar.alt"></a>
    <button class="navbar-toggler" @click="toggleMenu" :class="{ 'collapsed': menuCollapsed }" type="button"
            data-toggle="collapse" data-target="#navbarText" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
      <i class="fa-solid fa-bars hamburgermenu"></i>
<!--      <span class="navbar-toggler-icon"></span>-->
    </button>

    <!--    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar"-->
    <!--                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">-->
    <!--          <span class="navbar-toggler-icon"></span>-->
    <!--        </button>-->
    <!--    <div class="hamburger-menu" data-toggle="collapse" data-target="#collapsingNavbar"  aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" :class="{ active: navbarCollapsed }" @click="toggleMenu">-->
    <!--      <span class="line line-1"></span>-->
    <!--      <span class="line line-2"></span>-->
    <!--      <span class="line line-3"></span>-->
    <!--    </div>-->
    <div class="collapse navbar-collapse w-auto" id="collapsingNavbar" :class="{ 'show': menuCollapsed }">
      <ul class="navbar-nav w-75 justify-content-center mx-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            {{ navbar.dropdownHead }}
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item link" v-for="item in navbar.dropdown" :key="item" :href="item.link">{{
                item.tab
              }}</a>
          </div>
        </li>


        <li class="nav-item" v-for="tab in navbar.tabs" :key="tab">
          <a class="nav-link link" :href="tab.link">{{ tab.tab }}</a>
        </li>
      </ul>
      <span class="nav-item ml-0 justify-content-end">
        <a :href="navbar.register.link" target="_blank">
          <button class="btn-register">{{ navbar.register.text }}</button>
        </a>
    </span>
    </div>
    <div class="progress-container">
      <div class="progress-bar" id="indicatorBar"></div>
    </div>
  </nav>













  <!--        <nav class="navbar navbar-expand-lg bg-faded justify-content-center">-->
  <!--          <a href="#" class="navbar-brand d-flex w-15 mr-auto"><img src="../../assets/Smstools-Dark.png"-->
  <!--                                                                    alt="Smstools logo"></a>-->
  <!--          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">-->
  <!--            <span class="navbar-toggler-icon"></span>-->
  <!--          </button>-->
  <!--          <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">-->
  <!--            <ul class="navbar-nav w-100 justify-content-center">-->

  <!--              <li class="nav-item dropdown">-->
  <!--                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
  <!--                  Over WhatsApp-->
  <!--                </a>-->
  <!--                <div class="dropdown-menu" aria-labelledby="navbarDropdown">-->
  <!--                  <a class="dropdown-item link" href="#wat-is-het">Wat is WhatsApp?</a>-->
  <!--                  <a class="dropdown-item link" href="#wat-doet-het">Wat doet WhatsApp?</a>-->
  <!--    &lt;!&ndash;              <div class="dropdown-divider"></div>&ndash;&gt;-->
  <!--                  <a class="dropdown-item link" href="#hoe-werkt-het">Hoe werkt WhatsApp?</a>-->
  <!--                </div>-->
  <!--              </li>-->


  <!--              <li class="nav-item">-->
  <!--                <a class="nav-link link" href="#voorwaarden">Voorwaarden</a>-->
  <!--                &lt;!&ndash;          <a class="nav-link" @click="scrollToAnchorPoint('voorwaarden')">Voorwaarden</a>&ndash;&gt;-->
  <!--              </li>-->
  <!--              <li class="nav-item">-->
  <!--                <a class="nav-link link" href="#test-het-zelf">Test het zelf</a>-->
  <!--              </li>-->
  <!--              <li class="nav-item">-->
  <!--                <a class="nav-link link" href="#use-cases">Use Cases</a>-->
  <!--              </li>-->
  <!--              <li class="nav-item">-->
  <!--                <a class="nav-link link" href="#contact">Contact</a>-->
  <!--              </li>-->
  <!--            </ul>-->
  <!--            <ul class="nav navbar-nav ml-auto w-25 justify-content-end">-->
  <!--              <li class="nav-item">-->
  <!--                <a href="https://www.smstools.be/nl/register" target="_blank">-->
  <!--                  <button class="btn-register">Register</button>-->
  <!--                </a></li>-->
  <!--            </ul>-->
  <!--          </div>-->
  <!--          <div class="progress-container">-->
  <!--            <div class="progress-bar" id="indicatorBar"></div>-->
  <!--          </div>-->
  <!--        </nav>-->


  <!--  <nav class="navbar navbar-expand-lg fixed-top bg-white" :class="{ 'navbar-scrolled': isScrolled }">-->
  <!--    <a class="navbar-brand" href="#"><img src="../bootstrap/assets/homepagina/originele_logo_xis.webp" alt="foto_logo" width="225px"></a>-->
  <!--    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">-->
  <!--      <span class="navbar-toggler-icon"></span>-->
  <!--    </button>-->
  <!--    <div class="collapse navbar-collapse" id="navbarNavDropdown">-->
  <!--      <ul class="navbar-nav ml-auto">-->
  <!--        <li class="nav-item">-->
  <!--          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <a class="nav-link" href="#">Features</a>-->
  <!--        </li>-->
  <!--        <li class="nav-item">-->
  <!--          <a class="nav-link" href="#">Pricing</a>-->
  <!--        </li>-->
  <!--        <li class="nav-item dropdown">-->
  <!--          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="Toggle navigation">-->
  <!--            Dropdown link-->
  <!--          </a>-->
  <!--          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">-->
  <!--            <a class="dropdown-item" href="#">Action</a>-->
  <!--            <a class="dropdown-item" href="#">Another action</a>-->
  <!--            <a class="dropdown-item" href="#">Something else here</a>-->
  <!--          </div>-->
  <!--        </li>-->
  <!--      </ul>-->
  <!--    </div>-->
  <!--  </nav>-->
</template>

<script>
import navbar from "../../assets/JSON/navbar.json"

export default {
  data() {
    return {
      isScrolled: false,
      menuCollapsed: false,
      navbar: navbar,
      imagePath: "src/assets/"
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 100;
    },
    toggleMenu() {
      this.menuCollapsed = !this.menuCollapsed;
    }
  }
};
</script>

<style lang="scss">
@import "src/scss/base";


.navbar, #collapsingNavbar, .navbar-nav, .nav-link.active {
  color: $colorSecondary;
  font-weight: 700;

  transition: $transitionOnHover;
}

.navbar {
  z-index: 100;
  //padding: 1% 5%;
  padding: 1.5% 8%;
  position: fixed;
  width: 100%;
  scroll-behavior: smooth;
  top: 0;

  transition: $transitionOnHover;
  -webkit-transition: $transitionOnHover;
  -moz-transition: $transitionOnHover;
  color: $colorPrimary;

  .hamburgermenu {
    color: $colorSecondary;
    font-size: 1.8rem;
  }

  .nav-link.active {
    color: $colorSecondary;
    font-weight: 700;
  }

  .navbar-brand {
    width: 15%;
  }

  .navbar-brand img {
    width: 100%;
  }

  #collapsingNavbar {
    //padding-top: 1%;
    font-size: 17px;
    font-weight: 600;
    //background: $colorTertiary;

    .nav-item {
      padding: 0 1.5%;
    }

    .link:after {
      display: block;
      content: '';
      border-bottom: 3px solid $colorSecondary;
      border-radius: 100px;
      transform: scaleX(0);
      transform-origin: 100% 50%;
      transition: transform 250ms ease-in-out;
    }

    .link:hover:after {
      color: $colorSecondary;
      transform: scaleX(1);
      transform-origin: 0 50%;
    }

    .navbar-nav .nav-link {
      color: $colorPrimary;
      font-weight: 600;
      display: inline-block;
      margin: 0;
      transition: $transitionOnHover;

      &:hover {
        color: $colorSecondary;
      }

      &.active {
        color: $colorSecondary;
        font-weight: 700;
      }
    }

    span {
      width: 15%;

      .btn-register {
        transform: translate(0, 0);
        border-radius: 40px;
        background: #dc3545;
        border: none;
        padding: .5rem 1.5rem;
        color: #ffffff;
        font-weight: 600;
        margin: 0;

        transition: All 0.2s ease-in-out;

        &::after {
          font-family: "Font Awesome 5 Free";
          font-weight: 600;
          content: "\f0a9";
          font-size: 20px;
          font: var(--fa-font-solid);
          position: absolute;
          left: 73%;
          top: 30%;
          right: 5%;
          bottom: 0;
          opacity: 0;
          color: #ffffff;

          transition: $transitionOnHover;
        }

        &:hover {
          transition: $transitionOnHover;
          box-shadow: 0 6px 15px rgba(220, 53, 69, 0.5);
          padding-right: 2.8rem;
          //transform: translateY(-5px);

          &::after {
            opacity: 1;
            transition: all 0.5s;
            transform: translateX(0);
          }
        }
      }
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown {
      font-weight: 600;
      color: $colorPrimary;

      transition: $transitionOnHover;

      &:hover {
        color: $colorPrimary-hover;
      }

      .dropdown-menu {
        border: none;
        background: $colorTertiary;
      }
    }

    .dropdown-item {
      color: $colorPrimary;
      font-weight: 600;

      transition: $transitionOnHover;

      &.active {
        color: $colorSecondary;
        font-weight: 700;
        background: none;
      }

      &:hover {
        transform: translateX(10px);
        background: none;
        color: $colorSecondary;
      }
    }
  }


  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    background: $colorTertiary;
  }

  .dropdown-content a {
    color: black;
    //padding: 16px 0 16px 10%;
    padding: 12px 16px 0 0;
    text-decoration: none;
    display: block;

    transition: $transitionOnHover;

    &:hover {
      transform: translateX(10px);
      text-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropbtn {
    padding-top: 8px;
    font-size: 17px;
    border: none;
    background: transparent;
  }

  .progress-container {
    background-color: transparent;

    .progress-bar {
      color: $colorSecondary;
    }
  }
}

//----------------------------------------------------------------------------------------------------------------------
//RESPONSIVE

@media screen and (max-width: 1200px) {
  #navbar_styling {
    overflow: hidden;
  }
  .navbar-nav {
    width: 75%!important;
  }
}

@media screen and (min-width: 993px) and (max-width: 1199px) {
  .navbar-nav {
    width: 75%!important;
  }

}

@media screen and (min-width: 769px) and (max-width: 992px) {
  #navbar_styling {
    .navbar-nav .nav-link {
      font-size: .92rem;
    }
    .navbar-nav {
      width: 100%!important;
    }
  }
}

@media screen and (min-width: 577px) and (max-width: 768px) {

  #navbar_styling {
    .navbar-nav {
      width: 100%!important;
    }

    .navbar-brand {
      width: 25%;
    }

    background-color: $colorTertiary;
    //background-color: red;

    .navbar-collapse {
      //background-color: green;
      padding-bottom: 1%;

      a {
        //background-color: blue;
      }

      .nav-item {
        //background-color: yellow;
        padding: 0;
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 415px) and (max-width: 576px) {
  .navbar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);

    .navbar-nav {
      width: 100%!important;
    }

    .navbar-brand {
      width: 25%;
    }

    .navbar-brand img {
      width: 100%;
    }

    //#navbar_styling {

      background-color: $colorTertiary;
      //background-color: red;

      .navbar-collapse {
        //background-color: green;
        padding-bottom: 2%;

        a {
          //background-color: blue;
        }

        .nav-item {
          //background-color: yellow;
          padding: 0;
          width: 100%;
        }
      }
    //}
  }
}

@media screen and (max-width: 415px) {
  .navbar {
    .navbar-nav {
      width: 100%!important;
    }

    background-color: $colorTertiary;
    #collapsingNavbar {
      padding-bottom: 3%;
    }

    .navbar-brand {
      width: 40%;
    }
  }
}

@media screen and (max-width: 320px) {
  .navbar {
    .navbar-nav {
      width: 100%!important;
    }

    #collapsingNavbar {
      padding-bottom: 4%;
    }

    .navbar-brand {
      width: 40%;
    }
  }
}
</style>