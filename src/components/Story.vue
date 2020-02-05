<template>
  <b-container class="h-100">
    <h1 class="section-title col-12">My Story</h1>
    <b-row align-h="center" align-v="center" class="h-100 pb-5">
      <b-col cols="12" md="4" class="pb-5">
        <v-avatar size="256">
          <v-img src="/img/me.jpeg"> </v-img>
        </v-avatar>
      </b-col>
      <b-col md="5" class="pb-5">
        <p>I am a geeky programmer</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.m-avatar {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 2%;
    z-index: -1;
    left: -10px;
    right: -10px;
    border-radius: 200px 200px 300px 300px;
    height: 80px;
    background: gray;
  }
}
</style>
