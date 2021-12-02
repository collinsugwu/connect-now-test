<script lang="ts">
  import { defineComponent } from 'vue'
  import MovieCard from '../components/MovieCard.vue'

  export default defineComponent({
    components: { MovieCard }
  })
</script>

<template>
  <div class="row">
    <div class="col-sm-12 col-md-12 col-lg-3">
        <div class="card">
          <div class="card-body">
            <p>Filter Results</p>
            <form>
                <div class="form-group">
                  <label for="name">Name (contains)</label>
                  <input type="text" class="form-control" id="name" placeholder="Text string">
                </div>
                <div class="row">
                  <div class="col-xs-12 col-sm-4 col-lg-12 min-score">
                    <div class="form-group">
                      <label for="number">Minimum Score</label>
                      <input type="number" class="form-control" id="number" placeholder="1-10">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-8 col-lg-12">
                    <label id="order" for="orderby">Order By</label>
                    <div class="row order-section">
                      <div class="col-1 col-sm-1 col-md-1 arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                        </svg>
                      </div>
                      <div class="col-11 col-sm-7 col-lg-11 select">
                        <div class="form-group">
                          <select class="form-control" id="orderby">
                            <option>Release Date</option>
                            <option>Score</option>
                            <option>Name</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12 col-sm-4 col-lg-5 btn-div">
                        <button type="button" class="btn">Clear</button>
                      </div>
                    </div>
                  </div>
                </div>
            </form>
          </div>
        </div>
    </div>
    <div class="col-sm-12 col-lg-9">
      <movie-card />
    </div>
  </div>
</template>

<style scoped>
  .card {
    background: #0e1a2b;
    border-radius: 0%;
  }
  .form-group {
    font-size: 0.7rem;
    padding-bottom: 1.3rem;
  }
  @media screen and (min-width: 576px) {
    .min-score {
      margin-top: 8px;
    }
  }
  input, select {
    border-radius: 0%;
    background: #182c47;
    border-color: #182c47;
    color: #c1d1e8;
    padding: 0px 2.5px;
    font-size: 0.8rem;
  }

  input::placeholder {
    color: #c1d1e8;
  }

  input:focus, select:focus {
    background: #182c47;
    border-color: #182c47;
    color: #c1d1e8;
  }

  #order {
    font-size: 0.7rem;
  }

  .order-section {
    padding-left: 0.7rem;
  }

  .arrow {
    background: #5692e8;
    height: 2rem;
    border-right: 0px;
    padding-right: 0%;
    padding-left: 4px;
    padding-top: 2px;
  }

  .select {
    padding-left: 0%;
  }

  .btn-div{
    padding-left: 0%;
  }

  .btn {
    color: #fff;
    background: #5692e8;
    width: 100%;
    padding-left: 0%;
    border-radius: 0%;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 992px) {
    .btn-div {
      float: right;
      margin-left: 58%;
    }
  }

</style>
