<template>
  <q-layout view="lHh Lpr lFf" class="bg-dark">


    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"

      :width="200"
      :breakpoint="500"

      class="bg-dark"
    >
      <q-scroll-area class="fit">
        <q-list class="absolute-top z-top">

          <div class="q-my-xl" />

          <!--       홈-->
          <q-item class="q-ma-md text-white row items-center" clickable :to="'home'">
              <q-icon name="home" class="col" size="sm" :to="'home'" />
              <div v-text="'HOME'" class="col" v-show="!miniState" />
          </q-item>

          <div class="q-my-xl" />

          <!--캐릭터-->
          <q-item class="q-ma-md text-white row items-center" clickable :to="'character'">
            <q-icon name="auto_awesome" class="col" size="sm" />
            <div v-text="'CHARACTERS'" class="col" v-show="!miniState" />
          </q-item>

          <!--        커미션-->
          <q-item class="q-ma-md text-white row items-center" clickable :to="'works'">
            <q-icon name="highlight" class="col" size="sm" />
            <div v-text="'WORKS'" class="col" v-show="!miniState" />
          </q-item>

          <!--        로그-->
          <q-item class="q-ma-md text-white row items-center" clickable :to="'log'">
            <q-icon name="filter_vintage" class="col" size="sm" />
            <div v-text="'LOG'" class="col" v-show="!miniState" />
          </q-item>

          <q-separator class="bg-white q-my-lg" inset />

          <!--        TRPG 백업-->
          <q-item class="q-ma-md text-white row items-center" clickable :to="'trpg'">
            <q-icon name="topic" class="col" size="sm" />
            <div v-text="'TRPG'" class="col" v-show="!miniState" />
          </q-item>

          <!--        로드비-->
          <q-item class="q-ma-md text-white row items-center" clickable :to="'load'">
            <q-icon name="photo_library" class="col" size="sm" />
            <div v-text="'LOAD BI'" class="col" v-show="!miniState" />
          </q-item>


        </q-list>
      </q-scroll-area>
    </q-drawer>


    <q-page-container class="flex flex-center" style="height: 100vh; width: 100vw;">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(false);
const miniState = ref(true);


</script>
