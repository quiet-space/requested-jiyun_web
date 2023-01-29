<template>
  <div class="q-gutter-y-xl flex- flex-center">

    <div class="menu_title">CHARACTER</div>


    <div id="entire_container">

      <q-scroll-area style="max-height: 60vh;
                   height: 60vh;
                   min-height: 60vh;
                   width: 70vw;
                   min-width: 70vw;
                   max-width: 70vw;
"
                     visible
                     bar-style="background-color:white; borderRadius: 5px;"
      >

        <div class="row q-gutter-md character_card_div">
          <q-card class="character_card flex justify-center items-end bg-dark"
                  v-for="i of 13" :key="i"
                  @click="loadCharacterDetail(i)"
          >

            <q-img :src="shortImage" class="fit"
                   style="position: absolute;" />

            <div class="z-top flex flex-center q-mb-md">
              <div v-text="`무라사키 아이미`"
                   class="character_card_name text-center"
              />

              <div v-text="`紫 愛美`"
                   class="character_card_sub_name text-center"
              />
            </div>


            <div class="character_card character_card_gradient"
            />
          </q-card>
        </div>

      </q-scroll-area>

    </div>

  </div>


</template>

<script setup>

import { ref } from "vue";

const shortImage = ref("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzUA5K%2FbtrXm8VKDW5%2FAaKR0buvpCLxqoWVz6eoTk%2Fimg.png");

const loadCharacterDetail = () => {

}

</script>

<style scoped>

.character_card_gradient {
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(0, 0, 0, 0));
  position: absolute;
}

.character_card_gradient:hover {
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(0, 0, 0, 0));
  position: absolute;
  height: 110%;
}


</style>
