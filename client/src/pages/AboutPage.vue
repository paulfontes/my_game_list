<script setup>

</script>

<template>
  <div class="about">
    <main class="container-fluid background-img">
      <section class="row justify-content-evenly">
        <div class="col-md-5">
          <img class="mt-5 img-fluid" src="../assets/img/Rectangle 83.png" alt="">
        </div>
        <div class="col-md-6 text-white">
          <h1 class=" mt-5">Howdy, we're Paul Fontes and Chase McLain</h1>
          <h2 class="">Software Developers</h2>
          <p class="mt-5">My Game List is a website Developed in Vue. It was created as a practice portfolio piece to
            further develop our coding skills. This website was created on september 29th 2025 and it was develop over
            the course of 2 weeks. We developed our own
            backend server as well as the client and our data is sourced both from our own database on MongoDB and RAWGs
            video game API. Our primary development tool was Visual Studio Code. All of this was done during our time
            interning here at Boise Code Works.</p>
          <h5>Links:</h5>
          <p><a href="https://boisecodeworks.com/" title="https://boisecodeworks.com/" target="_blank">Codeworks <i
                class="mdi mdi-link"></i></a></p>
          <p><a href="https://vuejs.org/" title="https://vuejs.org/" target="_blank">Vue <i
                class="mdi mdi-link"></i></a></p>
          <p><a href="https://rawg.io/apidocs" title="https://rawg.io/apidocs" target="_blank">RAWG <i
                class="mdi mdi-link"></i></a></p>
          <p><a href="https://www.postman.com/" title="https://www.postman.com/" target="_blank">Postman <i
                class="mdi mdi-link"></i></a></p>
          <p><a href="https://www.mongodb.com/products/platform/cloud"
              title="https://www.mongodb.com/products/platform/cloud" target="_blank">MongoDB <i
                class="mdi mdi-link"></i></a></p>
          <p><a href="https://code.visualstudio.com/" title="https://code.visualstudio.com/" target="_blank">Vscode <i
                class="mdi mdi-link"></i></a></p>
          <section class="row">
            <div class="col-md-6 text-center">
              <h5>
                Paul Fontes
              </h5>
              <p><a href="https://github.com/paulfontes" target="_blank" title=" https://github.com/paulfontes"><i
                    class="mdi mdi-github fs-1"></i></a> <a href="https://www.linkedin.com/in/paulfontes22/"
                  title="https://www.linkedin.com/in/paulfontes22/" target="_blank"> <i
                    class="mdi mdi-linkedin fs-1"></i>
                </a>
              </p>
            </div>
            <div class="col-md-3 text-center">
              <h5>
                Chase McLain
              </h5>
              <p><a href="https://github.com/Chase-McLain" target="_blank" title="https://github.com/Chase-McLain"><i
                    class="mdi mdi-github fs-1"></i></a> <a href="https://www.linkedin.com/in/chase-mclain-3067b1383/"
                  title="https://www.linkedin.com/in/chase-mclain-3067b1383//" target="_blank"> <i
                    class="mdi mdi-linkedin fs-1"></i>
                </a></p>
            </div>
          </section>
        </div>
      </section>
      <section class="row justify-content-center ">
        <div class="col-md-5 text-center text-grey mb-1 mt-3 d-flex align-items-end">
          <small>Disclaimer: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta maxime tenetur perspiciatis
            consectetur quos quisquam minima dolore ea necessitatibus doloribus repellendus enim ducimus placeat,
            assumenda laborum tempore quo. Ex, facere.</small>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped lang="scss">
img {
  height: 650px;
  border-radius: 10px;
}

.background-img {
  background-image: url(../assets/img/guillaume-coupy-Zdkn765eMZs-unsplash.png);
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

a {
  text-decoration: unset;
}

.disclaimer {}
</style>