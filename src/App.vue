<template>
  <base-card>
    <div>
      <h1>Online Anime Catalog</h1>
    </div>
  </base-card>
  <base-card>
    <div class="wrapper">
      <base-button :isButton="false" to='/name' >Search</base-button>
      <base-button :isButton="false" to='/aboutus' >About Us</base-button>
      <base-button :isButton="false" to='/contact' >Contact</base-button>
    </div>
  </base-card>
  <base-card>
  <router-view @search="Search"></router-view>
  </base-card>
  <base-card v-if="isVisible">
    <div class="info">
      <img :src="info.image" alt="Poster">
      <div class="right-div">
        <div class="text">
          <h2>{{ info.engTitle }} - {{ info.jpnTitle }}</h2>
          <h3>Episodes: {{ info.episodes }} / Rank: {{ info.rank }} / Rating: {{ info.rating }}</h3>
          <p><b>{{ info.description }}</b></p>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      info: {
        image: '',
        engTitle: '',
        jpnTitle: '',
        episodes: '',
        rank: '',
        rating: '',
        description: ''
      }
    }
  },
  methods: {
    Search(data) {
      this.isVisible = true;
      this.info.image = data[0].image;
      this.info.engTitle = data[0].EngName;
      this.info.jpnTitle = data[0].JpnName;
      this.info.episodes = data[0].episodes;
      this.info.rank = data[0].rank;
      this.info.rating = data[0].rating;
      this.info.description = data[0].description;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #0e0e0d;
  color: white;
  font-family: Monospace;
}

h1 {
  text-align: center;
  font-size: 50px;
  margin: 10px;
}

img {
  height: 300px;
  width: 200px;
  border: 3px solid #0e0e0d;
  border-radius: 5px;
}

h2 {
  font-size: 30px !important;
  margin-top: 0px;
}

.wrapper { 
  display: flex;
  justify-content: space-evenly;
}

.info {
  display: flex;
}

.text {
  text-align: center !important;
}

.right-div {
  width: 100% !important;
}
</style>
