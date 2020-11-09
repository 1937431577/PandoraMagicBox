<template>
  <div id="all">
    <div class="warp">
      <div class="hander"></div>
      <div class="center">
        <div class="left"></div>
        <div class="main">
          <div class="hander1">
            <Search></Search>
          </div>
          <div class="center1">
            <Aside></Aside>
            <Center></Center>
            <Artical></Artical>
          </div>
          <div class="footer1">
            <Audios></Audios>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="footer"></div>
    </div>
    <div class="imgs">
      <img src="@/assets/img/windows.jpg" />
    </div>
  </div>
</template>

<script>
import Search from "components/search";
import Audios from "components/audios";
import Center from "components/center";
import Aside from "components/aside";
import Artical from "components/artical";
export default {
  components: { Search, Audios, Artical, Aside, Center },
};
</script>

<style>
</style>