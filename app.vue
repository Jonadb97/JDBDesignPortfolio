

<template>
  <div>

    <!-- Seccion Inicio FHD -->
    <div :v-if="$screen.width > 1400" id="seccion-inicio">
      <header>
        <nav>
          <ul class="flex justify-end mr-12 text-5xl font-light">
            <li class="m-8">Inicio</li>
            <li @click="scrollAcerca" class="m-8">Acerca</li>
            <li @click="scrollGaleria" class="m-8">Proyectos</li>
            <li @click="scrollContacto" class="m-8">Contacto</li>
          </ul>
        </nav>
      </header>
   </div>

<!-- Seccion Inicio FHD -->

<!-- Seccion Inicio HD -->
   <div :v-if="$screen.width < 1400 && $screen.width > 800" id="seccion-inicio">
      <header>
        <nav>
          <ul class="flex justify-end mr-12 text-2xl font-light">
            <li class="m-8">Inicio</li>
            <li @click="scrollAcerca" class="m-8">Acerca</li>
            <li @click="scrollGaleria" class="m-8">Proyectos</li>
            <li @click="scrollContacto" class="m-8">Contacto</li>
          </ul>
        </nav>
      </header>
   </div>
<!-- Seccion Inicio HD -->

<!-- Seccion Inicio Phone -->
<div :v-if="$screen.width < 800" id="seccion-inicio">
      <header>
        <nav>
          <ul class="flex justify-center mr-auto ml-auto text-1xl font-light p-4">
            <li class="m-2">Inicio</li>
            <li @click="scrollAcerca" class="m-2">Acerca</li>
            <li @click="scrollGaleria" class="m-2">Proyectos</li>
            <li @click="scrollContacto" class="m-2">Contacto</li>
          </ul>
        </nav>
      </header>
   </div>
<!-- Seccion Inicio Phone -->

<!-- Seccion Inicio Phone MINI -->
<div :v-if="$screen.width < 800" id="seccion-inicio">
      <header>
        <nav>
          <ul class="flex justify-center mr-auto ml-auto text-1xl font-light p-4">
            <li class="m-2">Inicio</li>
            <li @click="scrollAcerca" class="m-2">Acerca</li>
            <li @click="scrollGaleria" class="m-2">Proyectos</li>
            <li @click="scrollContacto" class="m-2">Contacto</li>
          </ul>
        </nav>
      </header>
   </div>
<!-- Seccion Inicio Phone -->


<!-- Zona inicio FHD -->

      <div :v-if="$screen.width > 1400" class="ml-16 flex" id="inicio">
        <img id="logo-img" class="animate__animated animate__fadeInLeftBig flex mt-auto mb-auto ha"
          src="./assets/img/LogoSVG.svg" alt="">
        <p id="inicio-text" class="animate__animated animate__fadeInRightBig text-4xl ml-auto mr-auto mt-auto mb-auto">
          Diseñador gráfico y desarrollador web front-end Argentino.</p>

      </div>


<!-- Zona inicio FHD -->

<!-- Zona inicio HD -->

      <div :v-if="$screen.width < 1400 && $screen.width > 800" class="ml-16 flex" id="inicio">
        <img id="logo-img" class="animate__animated animate__fadeInLeftBig flex mt-auto mb-auto ha"
          src="./assets/img/LogoSVG.svg" alt="">
        <p id="inicio-text" class="animate__animated animate__fadeInRightBig text-2xl ml-auto mr-auto mt-auto mb-auto">
          Diseñador gráfico y desarrollador web front-end Argentino.</p>

      </div>
<!-- Zona inicio HD -->

<!-- Zona inicio Phone -->

<div :v-if="$screen.width < 800" class="flex-row h-auto pb-20" id="inicio">
        <img id="logo-img" class="animate__animated animate__fadeInLeftBig flex ha ml-6"
          src="./assets/img/LogoSVG.svg" alt="">
        <p id="inicio-text" class="animate__animated animate__fadeInRightBig text-1xl ml-auto mr-auto mt-auto mb-auto pt-6 pl-12 pr-12">
          Diseñador gráfico y desarrollador web front-end Argentino.</p>

      </div>
<!-- Zona inicio Phone -->

      <img id="arrow-down" class="animate__animated animate__bounce block mt-auto ml-auto mr-auto"
        src="./assets/img/arrowdown.svg" alt="" @click="scrollAcerca">

<!-- Zona acerca FHD -->

    <div :v-if="$screen.width > 1400" id="acerca" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-6xl text-center">Acerca</h1>
      <div  class="block mt-auto ml-auto mr-auto">
      <p id="parrafo-acerca" class="ml-auto mr-auto mt-auto mb-auto p-24 text-4xl w-180 text-center flex-row">Me gusta diseñar logos, ilustraciones, posteos
        para redes sociales
        y también hago edición de video.
        Como desarrollador me gusta utilizar <em>Vue</em> para
        crear sitios minimalistas y responsive.
        Siempre que puedo utilizo herramientas de
        código abierto pero estoy dispuesto
        a probar nuevas tecnologías, ya sea software,
        frameworks o librerías.</p>
        <img id="arrow-down-2" class="block mt-auto ml-auto mr-auto"
        src="./assets/img/arrowdownwhite.svg" alt="" @click="scrollGaleria">
      </div>
    </div>

  <!-- Zona acerca FHD -->

<!-- Zona acerca HD -->

<div :v-if="$screen.width < 1400 && $screen.width > 800" id="acerca" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-16 text-3xl text-center">Acerca</h1>
      <div  class="block mt-auto ml-auto mr-auto">
      <p id="parrafo-acerca" class="ml-auto mr-auto mt-auto mb-auto p-18 text-2xl w-180 text-center flex-row">Me gusta diseñar logos, ilustraciones, posteos
        para redes sociales
        y también hago edición de video.
        Como desarrollador me gusta utilizar <em>Vue</em> para
        crear sitios minimalistas y responsive.
        Siempre que puedo utilizo herramientas de
        código abierto pero estoy dispuesto
        a probar nuevas tecnologías, ya sea software,
        frameworks o librerías.</p>
        <img id="arrow-down-2" class="block mt-auto ml-auto mr-auto"
        src="./assets/img/arrowdownwhite.svg" alt="" @click="scrollGaleria">
      </div>
    </div>

<!-- Zona acerca HD -->

<!-- Zona acerca Phone -->

<div :v-if="$screen.width < 800" id="acerca" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-16 p-6 absolute" alt="">
      <h1 id="title-acerca" class="p-16 text-2xl text-center">Acerca</h1>
      <div  class="block mt-auto ml-auto mr-auto">
      <p id="parrafo-acerca" class="ml-auto mr-auto mt-auto mb-auto pt-32 text-1xl w-80 text-center flex-row">Me gusta diseñar logos, ilustraciones, posteos
        para redes sociales
        y también hago edición de video.
        Como desarrollador me gusta utilizar <em>Vue</em> para
        crear sitios minimalistas y responsive.
        Siempre que puedo utilizo herramientas de
        código abierto pero estoy dispuesto
        a probar nuevas tecnologías, ya sea software,
        frameworks o librerías.</p>
        <img id="arrow-down-2" class="block mt-auto ml-auto mr-auto pt-32"
        src="./assets/img/arrowdownwhite.svg" alt="" @click="scrollGaleria">
      </div>
    </div>

<!-- Zona acerca Phone -->




<!-- Zona galería FHD -->

<div :v-if="$screen.width > 1400" id="galeria">
  
<img id="jdb-icon1" src="./assets/img/LogoSVG.svg" class="w-32 p-12 absolute" alt="">
<h1  class="p-24 text-6xl text-center">Proyectos</h1>
<!--
<div id="galeria-container" class="pt-36vh flex">
  <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
</div>
-->
<el-carousel class="pt-12 pb-12" :interval="4000" type="card" height="430px">
    <el-carousel-item>
      <a href="https://jonadb97.github.io/blog-calistenia/" target="_blank"><h3  ><img src="./assets/img/calisteniaWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/LGWeb/" target="_blank"><h3  justify="center"><img src="./assets/img/lgWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/JarrisBarberclubGit/" target="_blank"><h3  ><img src="./assets/img/jarrisWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"><h3 ><img src="./assets/img/improntaWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/odin-landing/" target="_blank"><h3 justify="center"><img src="./assets/img/odinWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>

  </el-carousel>
  <img id="arrow-down" class="animate__animated animate__bounce block mt-auto ml-auto mr-auto"
        src="./assets/img/arrowdown.svg" alt="" @click="scrollContacto">
</div>

<!-- Zona galería FHD -->
    
<!-- Zona galería HD -->

<div :v-if="$screen.width < 1400 && $screen.width > 800" id="galeria">
  
  <img id="jdb-icon1" src="./assets/img/LogoSVG.svg" class="w-32 p-12 absolute" alt="">
  <h1  class="p-12 text-3xl text-center">Proyectos</h1>
  <!--
  <div id="galeria-container" class="pt-36vh flex">
    <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
  </div>
  -->
  <el-carousel class="pt-8 pb-4" :interval="4000" type="card" height="320px">
      <el-carousel-item>
        <a href="https://jonadb97.github.io/blog-calistenia/" target="_blank"><h3 ><img src="./assets/img/calisteniaWeb.gif" class="w-full" alt=""></h3></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href="https://jonadb97.github.io/LGWeb/" target="_blank"><h3 ><img src="./assets/img/lgWeb.gif" class="w-full" alt=""></h3></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href="https://jonadb97.github.io/JarrisBarberclubGit/" target="_blank"><h3 ><img src="./assets/img/jarrisWeb.gif" class="w-full" alt=""></h3></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"><h3 ><img src="./assets/img/improntaWeb.gif" class="w-full" alt=""></h3></a>
      </el-carousel-item>
      <el-carousel-item>
        <a href="https://jonadb97.github.io/odin-landing/" target="_blank"><h3 justify="center"><img src="./assets/img/odinWeb.gif" class="w-full" alt=""></h3></a>
      </el-carousel-item>
  
    </el-carousel>
    <img id="arrow-down" class="animate__animated animate__bounce block mt-auto ml-auto mr-auto"
          src="./assets/img/arrowdown.svg" alt="" @click="scrollContacto">
  </div>
  
<!-- Zona galería HD -->


<!-- Zona galería Phone -->

<div :v-if="$screen.width < 800" id="galeria" class="justify-center">
  
  <img id="jdb-icon1" src="./assets/img/LogoSVG.svg" class="w-16 p-6 absolute" alt="">
  <h1  class="pt-12 pb-6 text-2xl text-center">Proyectos</h1>
  <!--
  <div id="galeria-container" class="pt-36vh flex">
    <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
  </div>
  -->
        <button class=" p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/blog-calistenia/" target="_blank"><h3  ><img src="./assets/img/calisteniaWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

        <button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/LGWeb/" target="_blank"><h3 class=" p-4 flex flex-center justify-center"  ><img src="./assets/img/lgWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

        <button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/JarrisBarberclubGit/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/jarrisWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

        <button class=" p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/improntaWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>
        
        <button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/odin-landing/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/odinWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>


    <img id="arrow-down" class="animate__animated animate__bounce block mt-auto ml-auto mr-auto pt-12"
          src="./assets/img/arrowdown.svg" alt="" @click="scrollContacto">
  </div>
  
<!-- Zona galería Phone -->



<!-- Zona contacto FHD -->


  <div :v-if="$screen.width > 1400" id="contacto" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-6xl text-center">Contacto</h1>
      <button id="whapp" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 "><img class="h-16" src="./assets/img/whappwhite.svg"><a href="http://www.wa.link/6essxn" target="__blank">Contactáme</a></button>
      <button id="gmail" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com" target="__blank" ><img class="h-16 text-center vertical-mid" src="./assets/img/gmailcolor.svg">Gmail</a></button>
      </div>
  

<!-- Zona contacto FHD -->

<!-- Zona contacto HD -->


<div :v-if="$screen.width < 1400 && $screen.width > 800" id="contacto" class="">
  <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-6xl text-center">Contacto</h1>
      <button id="whapp" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 "><img class="h-16" src="./assets/img/whappwhite.svg"><a href="http://www.wa.link/6essxn" target="__blank">Contactáme</a></button>
      <button id="gmail" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com" target="__blank" ><img class="h-16 text-center vertical-mid" src="./assets/img/gmailcolor.svg">Gmail</a></button>
</div>
  

<!-- Zona contacto HD -->


<!-- Zona contacto Phone -->


<div :v-if="$screen.width < 800" id="contacto" class="">
  <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-16 p-16 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-3xl text-center">Contacto</h1>
      <button id="whapp" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 "><img class="h-16" src="./assets/img/whappwhite.svg"><a href="http://www.wa.link/6essxn" target="__blank">Contactáme</a></button>
      <button id="gmail" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com" ><img class="h-16 text-center vertical-mid" src="./assets/img/gmailcolor.svg">Gmail</a></button>
</div>
  

<!-- Zona contacto Phone -->


</div>
</template>







<style>
@import "./assets/main.css";
</style>

<script setup lang="ts">
import { DiffieHellmanGroup } from 'crypto';
import { imageProps } from 'element-plus';
import { useScreen, useGrid } from 'vue-screen'

const screen = useScreen()


const scrollAcerca = () => {
  document.getElementById('acerca')?.scrollIntoView({
    behavior: 'smooth'
  })
  
  document.getElementById('parrafo-acerca')?.classList.add("animate__animated")
  document.getElementById('parrafo-acerca')?.classList.add("animate__zoomIn")
  document.getElementById('title-acerca')?.classList.add("animate__animated")
  document.getElementById('title-acerca')?.classList.add("animate__zoomIn")
  document.getElementById('arrow-down-2')?.classList.add("animate__animated")
  document.getElementById('arrow-down-2')?.classList.add("animate__fadeIn")
  document.getElementById('arrow-down-2')?.classList.add("arrow-down-2")
  document.getElementById('jdb-icon1')?.classList.add("animate__animated")
  document.getElementById('jdb-icon1')?.classList.add("animate__fadeIn")
}

const scrollGaleria = () => {
  document.getElementById('galeria')?.scrollIntoView({
    behavior: 'smooth'
  })

}

const scrollContacto = () => {
  document.getElementById('contacto')?.scrollIntoView({
    behavior: 'smooth'
  })

}


const scrollTop = () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

</script>