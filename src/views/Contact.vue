

<template>
  <div class="contact">
    <p class="contact-header">GET IN TOUCH</p>
    <P class="contact-detail">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
       eaque ipsa quae ab illo inventore veritatis et quasi architecto 
       beatae vitae dicta sunt explicabo.
    </P>
    <div class="contact-card">
      <p class="card-title"> Contact Form</p>
      <form>
        <div class="row">
          <div class="form-group col-sm-12 col-md-6">
            <label for="exampleInputEmail1">Name <span class="aterisks"> * </span></label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group col-sm-12 col-md-6">
            <label for="exampleInputEmail1">Email Address<span class="aterisks"> * </span></label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="form-group col-sm-12 col-md-12">
              <label for="exampleInputPassword1">Message<span class="aterisks"> * </span></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
        <button type="submit" class="btn">Send</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .contact {
    color: #c1d1e8;
    height: 100vh;
  }
  .contact-header {
    font-weight: bold;
    margin-bottom: 12px;
  }
  .contact-detail {
    font-size: 0.7rem;
  }
  .contact-card {
    font-size: 0.7rem;
    background: #0e1a2b;
    padding: 1rem;
  }
  input, textarea {
    border-radius: 0%;
    margin-bottom: 1rem;
    background: #182c47;
    border-color: #182c47;
  }
  .btn {
    border-radius: 0%;
    background: #5692e8;
    color: #ffffff;
    font-size: 0.8rem;
    /* float: right; */
    width: 5rem;
  }
  @media screen and (min-width: 992px) {
    .contact {
      width: 40%;
      margin: 0 auto;
    }

    .btn {
      margin-left: 80%;
    }
  }
</style>