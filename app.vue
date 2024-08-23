<template>
  <div>
    <div class="socials">
      <ul>
        <li><a href="https://www.linkedin.com/in/jonathan-blazquez-36997a142/" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg></a></li>
<li><a href="https://github.com/Jonadb97" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg></a></li>
<li><a href="http://www.wa.link/6essxn" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg></a></li>
      </ul>
    </div>
    <!-- Seccion Inicio FHD -->
    <div v-if="screen.width > 1400" id="seccion-inicio">
      <header>
        <nav>
          <button id="language" class="language" @click="languageButton()">{{ languageIcon }}</button>
          <ul class="flex justify-end mr-12 text-5xl font-light">
            <li class="m-8">{{ webContent.navbarInicio }}</li>
            <li @click="scrollAcerca" class="m-8">{{ webContent.navbarAcerca }}</li>
            <li @click="scrollGaleria" class="m-8">{{ webContent.navbarGaleria }}</li>
            <li @click="scrollContacto" class="m-8">{{ webContent.navbarContacto }}</li>
          </ul>
        </nav>
      </header>
    </div>

    <!-- Seccion Inicio FHD -->

    <!-- Seccion Inicio HD -->
    <div v-if="screen.width < 1400 && screen.width > 800" id="seccion-inicio">
      <header>
        <nav>
          <button id="language" class="language" @click="languageButton()">{{ languageIcon }}</button>
          <ul class="flex justify-end mr-12 text-2xl font-light">
            <li class="m-8">{{ webContent.navbarInicio }}</li>
            <li @click="scrollAcerca" class="m-8">{{ webContent.navbarAcerca }}</li>
            <li @click="scrollGaleria" class="m-8">{{ webContent.navbarGaleria }}</li>
            <li @click="scrollContacto" class="m-8">{{ webContent.navbarContacto }}</li>
          </ul>
        </nav>
      </header>
    </div>
    <!-- Seccion Inicio HD -->

    <!-- Seccion Inicio Phone -->
    <div v-if="screen.width <= 814" id="seccion-inicio">
      <header>
        <nav>
          <button id="language" class="language" @click="languageButton()">{{ languageIcon }}</button>
          <ul
            class="flex justify-center mr-auto ml-auto text-1xl font-light p-4"
          >
            <li class="m-2">{{ webContent.navbarInicio }}</li>
            <li @click="scrollAcerca" class="m-2">{{ webContent.navbarAcerca }}</li>
            <li @click="scrollGaleria" class="m-2">{{ webContent.navbarGaleria }}</li>
            <li @click="scrollContacto" class="m-2">{{ webContent.navbarContacto }}</li>          </ul>
        </nav>
      </header>
    </div>
    <!-- Seccion Inicio Phone -->

    <!-- Zona inicio FHD -->

    <div v-if="screen.width > 1400" class="ml-16 flex" id="inicio">
      <img
        id="logo-img"
        class="animate__animated animate__fadeInLeftBig flex mt-auto mb-auto ha"
        src="./assets/img/LogoSVG.svg"
        alt=""
      />
      <p
        id="inicio-text"
        class="animate__animated animate__fadeInRightBig text-4xl ml-auto mr-auto mt-auto mb-auto"
      >
        {{ webContent.inicioText }}
      </p>
    </div>

    <!-- Zona inicio FHD -->

    <!-- Zona inicio HD -->

    <div
      v-if="screen.width < 1400 && screen.width > 800"
      class="ml-16 flex"
      id="inicio"
    >
      <img
        id="logo-img"
        class="animate__animated animate__fadeInLeftBig flex mt-auto mb-auto ha"
        src="./assets/img/LogoSVG.svg"
        alt=""
      />
      <p
        id="inicio-text"
        class="animate__animated animate__fadeInRightBig text-2xl ml-auto mr-auto mt-auto mb-auto"
      >
      {{ webContent.inicioText }}
      </p>
    </div>
    <!-- Zona inicio HD -->

    <!-- Zona inicio Phone -->

    <div v-if="screen.width <= 814" class="flex-row h-auto pb-20" id="inicio">
      <img
        id="logo-img"
        class="animate__animated animate__fadeInLeftBig flex w-80 m-auto h-100"
        style="transform: translateY(-50px) !important"
        src="./assets/img/LogoSVG.svg"
        alt=""
      />
      <p
        id="inicio-text"
        class="animate__animated animate__fadeInRightBig text-1xl ml-auto mr-auto pl-12 pr-12"
        style="transform: translateY(-64px) !important"
      >
      {{ webContent.inicioText }}
      </p>
    </div>
    <!-- Zona inicio Phone -->

    <!-- Zona acerca FHD -->

    <div v-if="screen.width > 1400" id="acerca" class="">
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVGwhite.svg"
        class="w-32 p-12 absolute"
        alt=""
      />
      <h1 id="title-acerca" class="p-24 text-6xl text-center">{{ webContent.acercaTitle }}</h1>
      <div class="block mt-auto ml-auto mr-auto">
        <p
          id="parrafo-acerca"
          class="ml-auto mr-auto mt-auto mb-auto p-24 text-4xl text-justify flex-row"
        >
        {{ webContent.acercaText }}
        </p>
      </div>
    </div>

    <!-- Zona acerca FHD -->

    <!-- Zona acerca HD -->

    <div v-if="screen.width < 1400 && screen.width > 800" id="acerca" class="">
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVGwhite.svg"
        class="w-32 p-12 absolute"
        alt=""
      />
      <h1 id="title-acerca" class="p-16 text-3xl text-center">{{ webContent.acercaTitle }}</h1>
      <div class="block mt-auto ml-auto mr-auto">
        <p
          id="parrafo-acerca"
          class="ml-auto mr-auto mt-auto mb-auto p-18 text-2xl w-230 text-justify flex-row"
        >
        {{ webContent.acercaText }}
        </p>
      </div>
    </div>

    <!-- Zona acerca HD -->

    <!-- Zona acerca Phone -->

    <div v-if="screen.width <= 814" id="acerca" class="">
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVGwhite.svg"
        class="w-16 pl-6 pt-10 absolute"
        alt=""
      />
      <h1 id="title-acerca" class="p-16 text-2xl text-center">{{ webContent.acercaTitle }}</h1>
      <div class="block mt-auto ml-auto mr-auto">
        <p
          id="parrafo-acerca"
          class="ml-auto mr-auto mt-auto mb-auto text-1xl w-80 text-justify flex-row"
        >
        {{ webContent.acercaText }}
        </p>
      </div>
    </div>

    <!-- Zona acerca Phone -->

    <!-- Zona galería FHD -->

    <div v-if="screen.width > 1400" id="galeria">
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVG.svg"
        class="w-32 p-12 absolute"
        alt=""
      />
      <h1 class="p-24 text-6xl text-center">{{ webContent.galeriaTitle }}</h1>
      <!--
<div id="galeria-container" class="pt-36vh flex">
  <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
</div>
-->
      <el-carousel
        class="pt-12 pb-12"
        :interval="4000"
        type="card"
        height="430px"
      >
        <el-carousel-item>
          <a
            href="https://jonadb97.github.io/calisteniabb-blog-page/"
            target="_blank"
            ><h3>
              <img
                src="./assets/img/demo5-2024-08-20_14calis.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/blog-calistenia/" target="_blank"
            ><h3>
              <img
                src="./assets/img/calisteniaWeb.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/LGWeb/" target="_blank"
            ><h3 justify="center">
              <img src="./assets/img/lgWeb.gif" class="w-full" alt="" /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a
            href="https://jonadb97.github.io/JarrisBarberclubGit/"
            target="_blank"
            ><h3>
              <img src="./assets/img/jarrisWeb.gif" class="w-full" alt="" /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"
            ><h3>
              <img
                src="./assets/img/improntaWeb.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/yblclothing/" target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo2-2024-08-20_11ybl.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/mnmalportfolio/" target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo-2024-08-20_11.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/janaesterkindemo/" target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo3-2024-08-20_11jana.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a
            href="https://jonadb97.github.io/aitemplateportfolio/"
            target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo4-2024-08-20_11amelia.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Zona galería FHD -->

    <!-- Zona galería HD -->

    <div v-if="screen.width < 1400 && screen.width > 800" id="galeria">
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVG.svg"
        class="w-32 p-12 absolute"
        alt=""
      />
      <h1 class="p-12 text-3xl text-center">{{ webContent.galeriaTitle }}</h1>
      <!--
  <div id="galeria-container" class="pt-36vh flex">
    <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
  </div>
  -->
      <el-carousel
        class="pt-8 pb-4"
        :interval="4000"
        type="card"
        height="320px"
      >
        <el-carousel-item>
          <a
            href="https://jonadb97.github.io/calisteniabb-blog-page/"
            target="_blank"
            ><h3>
              <img
                src="./assets/img/demo5-2024-08-20_14calis.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/blog-calistenia/" target="_blank"
            ><h3>
              <img
                src="./assets/img/calisteniaWeb.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/LGWeb/" target="_blank"
            ><h3 justify="center">
              <img src="./assets/img/lgWeb.gif" class="w-full" alt="" /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a
            href="https://jonadb97.github.io/JarrisBarberclubGit/"
            target="_blank"
            ><h3>
              <img src="./assets/img/jarrisWeb.gif" class="w-full" alt="" /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"
            ><h3>
              <img
                src="./assets/img/improntaWeb.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/yblclothing/" target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo2-2024-08-20_11ybl.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/mnmalportfolio/" target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo-2024-08-20_11.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a href="https://jonadb97.github.io/janaesterkindemo/" target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo3-2024-08-20_11jana.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
        <el-carousel-item>
          <a
            href="https://jonadb97.github.io/aitemplateportfolio/"
            target="_blank"
            ><h3 justify="center">
              <img
                src="./assets/img/demo4-2024-08-20_11amelia.gif"
                class="w-full"
                alt=""
              /></h3
          ></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Zona galería HD -->

    <!-- Zona galería Phone -->

    <div
      v-if="screen.width <= 814"
      id="galeria-phone"
      class="justify-center pb-4"
    >
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVG.svg"
        class="w-16 p-6 absolute"
        alt=""
      />
      <h1 class="pt-12 pb-6 text-2xl text-center">{{ webContent.galeriaTitle }}</h1>
      <!--
  <div id="galeria-container" class="pt-36vh flex">
    <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
  </div>
  -->
      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a
          href="https://jonadb97.github.io/calisteniabb-blog-page/"
          target="_blank"
          ><h3>
            <img
              src="./assets/img/demo5-2024-08-20_14calis.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>
      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a href="https://jonadb97.github.io/blog-calistenia/" target="_blank"
          ><h3>
            <img
              src="./assets/img/calisteniaWeb.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>

      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a href="https://jonadb97.github.io/LGWeb/" target="_blank"
          ><h3 class="p-4 flex flex-center justify-center">
            <img
              src="./assets/img/lgWeb.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>

      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a
          href="https://jonadb97.github.io/JarrisBarberclubGit/"
          target="_blank"
          ><h3 class="p-4 flex flex-center justify-center">
            <img
              src="./assets/img/jarrisWeb.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>

      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"
          ><h3 class="p-4 flex flex-center justify-center">
            <img
              src="./assets/img/improntaWeb.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>

      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a href="https://jonadb97.github.io/yblclothing/" target="_blank"
          ><h3 class="p-4 flex flex-center justify-center">
            <img
              src="./assets/img/demo2-2024-08-20_11ybl.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>

      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a href="https://jonadb97.github.io/mnmalportfolio/" target="_blank"
          ><h3 class="p-4 flex flex-center justify-center">
            <img
              src="./assets/img/demo-2024-08-20_11.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>

      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a href="https://jonadb97.github.io/janaesterkindemo/" target="_blank"
          ><h3 class="p-4 flex flex-center justify-center">
            <img
              src="./assets/img/demo3-2024-08-20_11jana.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>

      <button class="p-0 flex flex-center ml-auto mr-auto border-none">
        <a
          href="https://jonadb97.github.io/aitemplateportfolio/"
          target="_blank"
          ><h3 class="p-4 flex flex-center justify-center">
            <img
              src="./assets/img/demo4-2024-08-20_11amelia.gif"
              class="w-46 drop-shadow"
              alt=""
            /></h3
        ></a>
      </button>
    </div>

    <!-- Zona galería Phone -->

    <!-- Zona contacto FHD -->

    <div v-if="screen.width > 1400" id="contacto" class="">
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVGwhite.svg"
        class="w-32 p-12 absolute"
        alt=""
      />
      <h1 id="title-acerca" class="p-24 text-3xl text-center">{{ webContent.contactoTitle }}</h1>
      <button
        id="whapp"
        class="bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6"
      >
        <a href="http://www.wa.link/6essxn" target="__blank"
          ><i class="bi bi-envelope"></i>{{ webContent.contactoText }}</a
        >
      </button>
      <button
        id="gmail"
        class="bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com"
          target="__blank"
          >Gmail</a
        >
      </button>
    </div>

    <!-- Zona contacto FHD -->

    <!-- Zona contacto HD -->

    <div
      v-if="screen.width < 1400 && screen.width > 800"
      id="contacto"
      class=""
    >
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVGwhite.svg"
        class="w-32 p-12 absolute"
        alt=""
      />
      <h1 id="title-acerca" class="p-24 text-3xl text-center">{{ webContent.contactoTitle }}</h1>
      <button
        id="whapp"
        class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6"
      >
        <a href="http://www.wa.link/6essxn" target="__blank"
          ><i class="bi bi-envelope"></i>{{ webContent.contactoText }}</a
        >
      </button>
      <button
        id="gmail"
        class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com"
          target="__blank"
          >Gmail</a
        >
      </button>
    </div>

    <!-- Zona contacto HD -->

    <!-- Zona contacto Phone -->

    <div v-if="screen.width <= 814" id="contacto" class="">
      <img
        id="jdb-icon1"
        src="./assets/img/LogoSVGwhite.svg"
        class="w-16 pt-18 pl-4 absolute"
        alt=""
      />
      <h1 id="title-acerca" class="p-24 text-3xl text-center">{{ webContent.contactoTitle }}</h1>
      <button
        id="whapp"
        class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6"
      >
        <a href="http://www.wa.link/6essxn" target="__blank">{{ webContent.contactoText }}</a>
      </button>
      <button
        id="gmail"
        class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com"
          >Gmail</a
        >
      </button>
    </div>

    <!-- Zona contacto Phone -->
  </div>
</template>

<style>
@import "./assets/main.css";
</style>

<script setup lang="ts">
import { DiffieHellmanGroup } from "crypto";
import { imageProps } from "element-plus";
import { useScreen, useGrid } from "vue-screen";
import { ref, onMounted } from "vue";

onMounted(() => {
  languageButton();
})

let localization = 'ES';
let languageIcon = ref('🇦🇷');

const screen = useScreen();
const grid = useGrid("tailwind");

const scrollAcerca = () => {
  document.getElementById("acerca")?.scrollIntoView({
    behavior: "smooth",
  });

  document.getElementById("parrafo-acerca")?.classList.add("animate__animated");
  document.getElementById("parrafo-acerca")?.classList.add("animate__zoomIn");
  document.getElementById("title-acerca")?.classList.add("animate__animated");
  document.getElementById("title-acerca")?.classList.add("animate__zoomIn");
  document.getElementById("arrow-down-2")?.classList.add("animate__animated");
  document.getElementById("arrow-down-2")?.classList.add("animate__fadeIn");
  document.getElementById("arrow-down-2")?.classList.add("arrow-down-2");
  document.getElementById("jdb-icon1")?.classList.add("animate__animated");
  document.getElementById("jdb-icon1")?.classList.add("animate__fadeIn");
};

const scrollGaleria = () => {
  document.getElementById("galeria")?.scrollIntoView({
    behavior: "smooth",
  });
};

const scrollContacto = () => {
  document.getElementById("contacto")?.scrollIntoView({
    behavior: "smooth",
  });
};

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

function languageButton() {
  console.log("click");
  console.log(localization);
  if (localization == 'ES') {
    localization = 'EN';
    languageIcon.value = '🇦🇷';
    changeLanguage();
  } else if (localization == 'EN') {
    localization = 'ES';
    languageIcon.value = '🇺🇸';
    changeLanguage();
  }
}

function changeLanguage() {
  if(localization == 'EN') {
  webContent = ref({
    navbarInicio: "Inicio",
    navbarAcerca: "Acerca",
    navbarGaleria: "Proyectos",
    navbarContacto: "Contacto",

    inicioText: "Desarrollador web front-end y diseñador gráfico Argentino.",
    acercaTitle: "Acerca de mí",
    acercaText: "Hace 4 años que trabajo principalmente como desarrollador freelance con trabajos locales para independientes, pequeños negocios y agencias creativas. He desarrollado muchas landing pages, galerías, portfolios y blogs estáticos. También trabajé como programador dentro de oficina en una empresa local en la que realizaba distintas tareas de mantenimiento e integración de funcionalidades a un amplio repertorio de proyectos hechos con distintos lenguajes como PHP, Python, Dart, Java y TypeScript. El framework que más domino es Vue.js, desde front-end hasta integración de APIs. Sigo estudiando y tengo proyectos personales full-stack en PHP nativo.",

    galeriaTitle: "Proyectos",

    contactoTitle: "Contacto",
    contactoText: "Contactáme"})
} else if (localization == 'ES') {
  webContent = ref({
    navbarInicio: "Home",
    navbarAcerca: "About",
    navbarGaleria: "Projects",
    navbarContacto: "Contact",

    inicioText: "Argentinian front-end developer and graphic designer.",
    acercaTitle: "About myself",
    acercaText: "I've been working as a freelance developer for 4 years, working mainly with local clients, small businesses and creative agencies. I've developed many landing pages, galleries, portfolios and static blogs. I've also worked as a programmer in an office, where I did various maintenance and integration tasks for a wide range of projects made with different languages such as PHP, Python, Dart, Java and TypeScript. The framework I'm most familiar with is Vue.js, from front-end to API integration. I'm still studying and I have full-stack projects in PHP native.",

    galeriaTitle: "Projects",

    contactoTitle: "Contact",
    contactoText: "Contact me"})
}
}

/*
fs.readFile('file.json', 'utf-8', function (err, data) {
    if (err) throw err;

    var obj = JSON.parse(data);

    console.log(obj);
});
*/

let webContent = {
    navbarInicio: "Inicio",
    navbarAcerca: "Acerca",
    navbarGaleria: "Proyectos",
    navbarContacto: "Contacto",

    inicioText: "Desarrollador web front-end y diseñador gráfico Argentino.",
    acercaTitle: "Acerca de mí",
    acercaText: "Hace 4 años que trabajo principalmente como desarrollador freelance con trabajos locales para independientes, pequeños negocios y agencias creativas. He desarrollado muchas landing pages, galerías, portfolios y blogs estáticos. También trabajé como programador dentro de oficina en una empresa local en la que realizaba distintas tareas de mantenimiento e integración de funcionalidades a un amplio repertorio de proyectos hechos con distintos lenguajes como PHP, Python, Dart, Java y TypeScript. El framework que más domino es Vue.js, desde front-end hasta integración de APIs. Sigo estudiando y tengo proyectos personales full-stack en PHP nativo.",

    galeriaTitle: "Proyectos",

    contactoTitle: "Contacto",
    contactoText: "Contactáme"};




</script>
