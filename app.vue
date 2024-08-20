

<template>
  <div>

    <!-- Seccion Inicio FHD -->
    <div v-if="screen.width > 1400" id="seccion-inicio">
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
   <div v-if="screen.width < 1400 && screen.width > 800" id="seccion-inicio">
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
<div v-if="screen.width <= 814" id="seccion-inicio">
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

      <div v-if="screen.width > 1400" class="ml-16 flex" id="inicio">
        <img id="logo-img" class="animate__animated animate__fadeInLeftBig flex mt-auto mb-auto ha"
          src="./assets/img/LogoSVG.svg" alt="">
        <p id="inicio-text" class="animate__animated animate__fadeInRightBig text-4xl ml-auto mr-auto mt-auto mb-auto">
          Diseñador gráfico y desarrollador web front-end Argentino.</p>

      </div>


<!-- Zona inicio FHD -->

<!-- Zona inicio HD -->

      <div v-if="screen.width < 1400 && screen.width > 800" class="ml-16 flex" id="inicio">
        <img id="logo-img" class="animate__animated animate__fadeInLeftBig flex mt-auto mb-auto ha"
          src="./assets/img/LogoSVG.svg" alt="">
        <p id="inicio-text" class="animate__animated animate__fadeInRightBig text-2xl ml-auto mr-auto mt-auto mb-auto">
          Diseñador gráfico y desarrollador web front-end Argentino.</p>

      </div>
<!-- Zona inicio HD -->

<!-- Zona inicio Phone -->

      <div v-if="screen.width <= 814" class="flex-row h-auto pb-20" id="inicio">
        <img id="logo-img" class="animate__animated animate__fadeInLeftBig flex w-80 m-auto h-100" style="transform: translateY(-50px) !important;"
          src="./assets/img/LogoSVG.svg" alt="">
        <p id="inicio-text" class="animate__animated animate__fadeInRightBig text-1xl ml-auto mr-auto pl-12 pr-12" style="transform: translateY(-64px) !important;">
          Diseñador gráfico y desarrollador web front-end Argentino.</p>
      </div>
<!-- Zona inicio Phone -->


<!-- Zona acerca FHD -->

    <div v-if="screen.width > 1400" id="acerca" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-6xl text-center">Acerca</h1>
      <div  class="block mt-auto ml-auto mr-auto">
      <p id="parrafo-acerca" class="ml-auto mr-auto mt-auto mb-auto p-24 text-4xl w-400 text-justify flex-row">Hace 4 años que trabajo principalmente como desarrollador freelance con trabajos locales para independientes, pequeños negocios y agencias creativas.<br>
        <br>He desarrollado muchas landing pages, galerías, portfolios y blogs estáticos.
        <br><br> También trabajé como programador dentro de oficina en una empresa local en la que realizaba distintas tareas de mantenimiento e integración de funcionalidades a un amplio repertorio de proyectos hechos con distintos lenguajes como PHP, Python, Dart, Java y TypeScript.<br><br>
      El framework que más domino es VueJS, desde front-end hasta integración de APIs.
      Personalmente sigo estudiando y tengo proyectos personales full-stack en PHP nativo.
      </p>
      </div>
    </div>

  <!-- Zona acerca FHD -->

<!-- Zona acerca HD -->

<div v-if="screen.width < 1400 && screen.width > 800" id="acerca" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-16 text-3xl text-center">Acerca</h1>
      <div  class="block mt-auto ml-auto mr-auto">
      <p id="parrafo-acerca" class="ml-auto mr-auto mt-auto mb-auto p-18 text-2xl w-230 text-justify flex-row">Hace 4 años que trabajo principalmente como desarrollador freelance con trabajos locales para independientes, pequeños negocios y agencias creativas.<br>
        <br>He desarrollado muchas landing pages, galerías, portfolios y blogs estáticos.
        <br><br> También trabajé como programador dentro de oficina en una empresa local en la que realizaba distintas tareas de mantenimiento e integración de funcionalidades a un amplio repertorio de proyectos hechos con distintos lenguajes como PHP, Python, Dart, Java y TypeScript.<br><br>
      El framework que más domino es VueJS, desde front-end hasta integración de APIs.
      Personalmente sigo estudiando y tengo proyectos personales full-stack en PHP nativo.</p>
      </div>
    </div>

<!-- Zona acerca HD -->

<!-- Zona acerca Phone -->

<div v-if="screen.width <= 814" id="acerca" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-16 pl-6 pt-10 absolute" alt="">
      <h1 id="title-acerca" class="p-16 text-2xl text-center">Acerca</h1>
      <div  class="block mt-auto ml-auto mr-auto">
      <p id="parrafo-acerca" class="ml-auto mr-auto mt-auto mb-auto text-1xl w-80 text-justify flex-row">Hace 4 años que trabajo principalmente como desarrollador freelance con trabajos locales para independientes, pequeños negocios y agencias creativas.<br>
        <br>He desarrollado muchas landing pages, galerías, portfolios y blogs estáticos.
        <br><br> También trabajé como programador dentro de oficina en una empresa local en la que realizaba distintas tareas de mantenimiento e integración de funcionalidades a un amplio repertorio de proyectos hechos con distintos lenguajes como PHP, Python, Dart, Java y TypeScript.<br><br>
      El framework que más domino es VueJS, desde front-end hasta integración de APIs.
      Personalmente sigo estudiando y tengo proyectos personales full-stack en PHP nativo.</p>
      </div>
    </div>

<!-- Zona acerca Phone -->




<!-- Zona galería FHD -->

<div v-if="screen.width > 1400" id="galeria">
  
<img id="jdb-icon1" src="./assets/img/LogoSVG.svg" class="w-32 p-12 absolute" alt="">
<h1  class="p-24 text-6xl text-center">Proyectos</h1>
<!--
<div id="galeria-container" class="pt-36vh flex">
  <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
</div>
-->
<el-carousel class="pt-12 pb-12" :interval="4000" type="card" height="430px">
  <el-carousel-item>
      <a href="https://jonadb97.github.io/calisteniabb-blog-page/" target="_blank"><h3  ><img src="./assets/img/demo5-2024-08-20_14calis.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
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
      <a href="https://jonadb97.github.io/yblclothing/" target="_blank"><h3 justify="center"><img src="./assets/img/demo2-2024-08-20_11ybl.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/mnmalportfolio/" target="_blank"><h3 justify="center"><img src="./assets/img/demo-2024-08-20_11.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/janaesterkindemo/" target="_blank"><h3 justify="center"><img src="./assets/img/demo3-2024-08-20_11jana.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/aitemplateportfolio/" target="_blank"><h3 justify="center"><img src="./assets/img/demo4-2024-08-20_11amelia.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>

  </el-carousel>
</div>

<!-- Zona galería FHD -->
    
<!-- Zona galería HD -->

<div v-if="screen.width < 1400 && screen.width > 800" id="galeria">
  
  <img id="jdb-icon1" src="./assets/img/LogoSVG.svg" class="w-32 p-12 absolute" alt="">
  <h1  class="p-12 text-3xl text-center">Proyectos</h1>
  <!--
  <div id="galeria-container" class="pt-36vh flex">
    <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
  </div>
  -->
  <el-carousel class="pt-8 pb-4" :interval="4000" type="card" height="320px">
    <el-carousel-item>
      <a href="https://jonadb97.github.io/calisteniabb-blog-page/" target="_blank"><h3  ><img src="./assets/img/demo5-2024-08-20_14calis.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
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
      <a href="https://jonadb97.github.io/yblclothing/" target="_blank"><h3 justify="center"><img src="./assets/img/demo2-2024-08-20_11ybl.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/mnmalportfolio/" target="_blank"><h3 justify="center"><img src="./assets/img/demo-2024-08-20_11.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/janaesterkindemo/" target="_blank"><h3 justify="center"><img src="./assets/img/demo3-2024-08-20_11jana.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/aitemplateportfolio/" target="_blank"><h3 justify="center"><img src="./assets/img/demo4-2024-08-20_11amelia.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    </el-carousel>
  </div>
  
<!-- Zona galería HD -->


<!-- Zona galería Phone -->

<div v-if="screen.width <= 814" id="galeria-phone" class="justify-center pb-4">
  
  <img id="jdb-icon1" src="./assets/img/LogoSVG.svg" class="w-16 p-6 absolute" alt="">
  <h1  class="pt-12 pb-6 text-2xl text-center">Proyectos</h1>
  <!--
  <div id="galeria-container" class="pt-36vh flex">
    <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
  </div>
  -->
  <button class=" p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/calisteniabb-blog-page/" target="_blank"><h3  ><img src="./assets/img/demo5-2024-08-20_14calis.gif" class="w-46 drop-shadow" alt=""></h3></a></button>
    <button class=" p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/blog-calistenia/" target="_blank"><h3  ><img src="./assets/img/calisteniaWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

<button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/LGWeb/" target="_blank"><h3 class=" p-4 flex flex-center justify-center"  ><img src="./assets/img/lgWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

<button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/JarrisBarberclubGit/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/jarrisWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

<button class=" p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/improntaWeb.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

<button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/yblclothing/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/demo2-2024-08-20_11ybl.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

<button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/mnmalportfolio/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/demo-2024-08-20_11.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

<button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/janaesterkindemo/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/demo3-2024-08-20_11jana.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

<button class="p-0 flex flex-center ml-auto mr-auto border-none"><a href="https://jonadb97.github.io/aitemplateportfolio/" target="_blank"><h3 class=" p-4 flex flex-center justify-center" ><img src="./assets/img/demo4-2024-08-20_11amelia.gif" class="w-46 drop-shadow" alt=""></h3></a></button>

  </div>
  
<!-- Zona galería Phone -->



<!-- Zona contacto FHD -->


  <div v-if="screen.width > 1400" id="contacto" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-3xl text-center">Contacto</h1>
      <button id="whapp" class="bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 "><a href="http://www.wa.link/6essxn" target="__blank"><i class="bi bi-envelope"></i>Contactáme</a></button>
      <button id="gmail" class="bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com" target="__blank" >Gmail</a></button>
      </div>
  

<!-- Zona contacto FHD -->

<!-- Zona contacto HD -->


<div v-if="screen.width < 1400 && screen.width > 800" id="contacto" class="">
  <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-3xl text-center">Contacto</h1>
      <button id="whapp" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 "><a href="http://www.wa.link/6essxn" target="__blank"><i class="bi bi-envelope"></i>Contactáme</a></button>
      <button id="gmail" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com" target="__blank" >Gmail</a></button>
</div>
  

<!-- Zona contacto HD -->


<!-- Zona contacto Phone -->


<div v-if="screen.width <= 814" id="contacto" class="">
  <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-16 pt-18 pl-4 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-3xl text-center">Contacto</h1>
      <button id="whapp" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 "><a href="http://www.wa.link/6essxn" target="__blank">Contactáme</a></button>
      <button id="gmail" class="font-bold bg-transparent border-none cursor-pointer block ml-auto mr-auto text-white text-center text-3xl h16 w-auto pl-6 pr-6 mt-16 decoration-none"><a href="https://mail.google.com/mail/?view=cm&source=mailto&to=jonathandb917@gmail.com" >Gmail</a></button>
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
const grid = useGrid('tailwind')

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