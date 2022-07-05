<template>
    <base-dialog :show="isVisible" @close=close><h2>Please Enter a valid Anime Name and try again.</h2></base-dialog>
    <div class="wrapper">
        <input type="text" height="1000px" v-model="AnimeName">
        <base-button class="btn" @click="search" :isButton="true">Search by Name</base-button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    emits: ['search'],
    data() {
        return {
            AnimeName: '',
            animeInfo: [],
            isVisible: false
        }
    },
    methods: {
        search() {
            this.animeInfo = [];
            const name = this.AnimeName;

            if (name === '') {
                this.isVisible = true
            }

            this.$router.push(`/name/${name}`)
            axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${name}`).then((responseData) => {
                console.log(responseData);

                const animeInfoDetails = {
                    EngName: responseData.data.data[0].attributes.titles.en_jp,
                    JpnName: responseData.data.data[0].attributes.titles.ja_jp,
                    episodes: responseData.data.data[0].attributes.episodeCount,
                    rank: responseData.data.data[0].attributes.popularityRank,
                    rating: responseData.data.data[0].attributes.averageRating,
                    description: responseData.data.data[0].attributes.description,
                    image: responseData.data.data[0].attributes.posterImage.original,
                };
                this.animeInfo.push(animeInfoDetails);
                this.$emit('search', this.animeInfo)
            });
        },
        close() {
            this.isVisible = false;
        }
    }
}
</script>t

<style scoped>
input {
    width: 50%;
    height: 38.5px;
}

.wrapper {
    display: flex;
}

input[type=text]{
    width:50%;
    border:2px solid #aaa;
    border-radius:4px;
    margin:8px 10px;
    outline:none;
    padding:8px;
    box-sizing:border-box;
    transition:.3s;

}
  
input[type=text]:focus{
    border-color: #0e0e0d;
    box-shadow:0 0 8px 0 #0e0e0d;
}

.btn {
    height: 40px !important;
    width: auto !important;
    margin-top: 7px;
}
</style>