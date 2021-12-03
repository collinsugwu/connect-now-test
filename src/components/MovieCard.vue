<script lang="ts">
import { defineComponent, ref, toRefs } from 'vue'
import { sanitizeDate, sanitizeRate } from '../helpers/sanitize'

export default {
  components: {},
  props: {
    moviesData: Array
  },

  setup(props: any['moviesData']) {
    const cleanRate = (rate: number) => {
      return sanitizeRate(rate)
    }

    const cleanDate = (date: Date) => {
      return sanitizeDate(date)
    }

    return {
      cleanRate,
      cleanDate,
    }
  }
}
</script>
<template>
  <div class="container">
    <div
      v-for="movie in moviesData"
      :key="movie.id"
      class="row movie-detail-section"
    >
      <div class="col-12 col-sm-2 screen">
        <span class="d-block d-sm-none screen-rate">{{
          cleanRate(movie.rating)
        }}</span>
      </div>
      <div class="col-12 col-sm-10 details">
        <div class="row">
          <div class="col-xs-12 col-sm-10">
            <p class="details-title">{{ movie.name }}</p>
            <p class="details-sub-title details-group">
              Release Date: {{ cleanDate(movie.first_release_date) }}
            </p>
            <p class="details-content details-group">
              {{ movie.summary }}
            </p>
          </div>
          <div class="d-none d-sm-block col-sm-2 details-rate">
            <span class="screen-rate">{{ cleanRate(movie.rating) }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>defineComponent</div>
  </div>
</template>

<style scoped>
.movie-detail-section {
  margin-top: 2rem;
}
@media screen and (min-width: 992px) {
  .movie-detail-section:first-of-type {
    margin-top: 0%;
  }
  .movie-detail-section:last-of-type {
    margin-bottom: 3rem;
  }
}
.screen {
  height: 7rem;
  background: black;
  padding: 1rem;
}
@media screen and (min-width: 576px) {
  .screen {
    height: inherit;
  }
}
.screen-rate {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background: #5692e8;
  text-align: center;
  float: right;
}
.details {
  background: #0e1a2b;
  padding-top: 1rem;
}
.details-title {
  font-weight: bold;
  margin-bottom: 0px;
}
.details-group {
  font-size: 0.6rem;
  color: #c1d1e8;
}
.details-sub-title {
  margin-bottom: 14px;
}
.details-rate {
  padding: 1.5rem;
}
</style>
