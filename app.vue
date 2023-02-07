

<template>
  <div>
    <div id="seccion-inicio">
      <header>
        <nav>
          <ul class="flex justify-end mr-12 text-5xl font-light">
            <li class="m-8">Inicio</li>
            <li @click="scrollAcerca" class="m-8">Acerca</li>
            <li class="m-8">Proyectos</li>
            <li class="m-8">Contacto</li>
          </ul>
        </nav>
      </header>






      <!-- Zona inicio -->
      <div class="ml-16 flex" id="inicio">
        <img id="logo-img" class="animate__animated animate__fadeInLeftBig flex mt-auto mb-auto ha"
          src="./assets/img/LogoSVG.svg" alt="">
        <p id="inicio-text" class="animate__animated animate__fadeInRightBig text-4xl ml-auto mr-auto mt-auto mb-auto">
          Diseñador gráfico y desarrollador web front-end Argentino.</p>

      </div>
      <img id="arrow-down" class="animate__animated animate__bounce block mt-auto ml-auto mr-auto"
        src="./assets/img/arrowdown.svg" alt="" @click="scrollAcerca">
    </div>
    <!-- Zona inicio -->







    <!-- Zona acerca -->

    <div id="acerca" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-6xl text-center">Acerca</h1>
      <div  class="block mt-auto ml-auto mr-auto">
      <p id="parrafo-acerca" class="ml-auto mr-auto mt-auto mb-auto p-24 text-4xl w-180 text-center flex-row">Me gusta diseñar logos, ilustraciones, posteos
        para redes sociales
        y también hacer edición de video.
        Como desarrollador me gusta utilizar <em>Vue</em> para
        crear sitios minimalistas y responsive.
        Siempre que puedo utilizo herramientas de
        código abierto pero siempre estoy dispuesto
        a probar nuevas tecnologías, ya sea software,
        frameworks o librerías.</p>
        <img id="arrow-down-2" class="block mt-auto ml-auto mr-auto pt-42"
        src="./assets/img/arrowdownwhite.svg" alt="" @click="scrollGaleria">
      </div>
    </div>

  <!-- Zona galería -->
<div id="galeria">
  
<img id="jdb-icon1" src="./assets/img/LogoSVG.svg" class="w-32 p-12 absolute" alt="">
<h1  class="p-24 text-6xl text-center">Proyectos</h1>
<!--
<div id="galeria-container" class="pt-36vh flex">
  <img id="left-gallery-arrow" class="absolute position-left" src="./assets/img/arrowleft.svg"  alt=""><div class="absolute ml-28vw " id="selectable-container"><img id="calistenia-web-img" src="./assets/img/calisteniaWeb.gif" class="translate-y--24" alt=""></div><img id="right-gallery-arrow" src="./assets/img/arrowright.svg" class="ml-auto" alt="">
</div>
-->
<el-carousel class="pt-12 pb-12" :interval="4000" type="card" height="430px">
    <el-carousel-item>
      <a href="https://jonadb97.github.io/blog-calistenia-public/" target="_blank"><h3 text="" justify="center"><img src="./assets/img/calisteniaWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/LGWeb/" target="_blank"><h3 text="" justify="center"><img src="./assets/img/lgWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/JarrisBarberclubGit/" target="_blank"><h3 text="" justify="center"><img src="./assets/img/jarrisWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/ImprontaPeluGit/" target="_blank"><h3 text="" justify="center"><img src="./assets/img/improntaWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>
    <el-carousel-item>
      <a href="https://jonadb97.github.io/odin-landing/" target="_blank"><h3 text="" justify="center"><img src="./assets/img/odinWeb.gif" class="w-full" alt=""></h3></a>
    </el-carousel-item>

  </el-carousel>
  <img id="arrow-down" class="animate__animated animate__bounce block mt-auto ml-auto mr-auto"
        src="./assets/img/arrowdown.svg" alt="" @click="scrollContacto">
</div>

  <!-- Zona galería -->
    
  <!-- Zona contacto -->
  <div id="contacto" class="">
      <img id="jdb-icon1" src="./assets/img/LogoSVGwhite.svg" class="w-32 p-12 absolute" alt="">
      <h1 id="title-acerca" class="p-24 text-6xl text-center">Contacto</h1>
      <form class="text-center block" action="">
        <input class="text-2xl p-6 m-6" type="text" placeholder="Nombre"><br>
        <input class="text-2xl p-6 m-6" type="text" placeholder="Mail"><br>
        <textarea class="text-2xl p-6 m-6" name="Carta" id="carta" cols="30" rows="10" placeholder="Escriba su carta acá"></textarea>
      </form>
      <div>
        <img src="" alt=""> 
        <img src="" alt="">
        <img src="" alt="">
      </div>
      </div>
  </div>

  <!-- Zona contacto -->
</template>

<style>
@import "./assets/main.css";
</style>

<script setup lang="ts">
import { DiffieHellmanGroup } from 'crypto';
import { imageProps } from 'element-plus';

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