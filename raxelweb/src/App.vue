<template>
  <b-container fluid="md">
    <div class="navbar">
      <b-nav>
        <h3>
          <b
            >RAXEL
            <div>WEB</div></b
          >
        </h3>
        <b-nav-item active>Home</b-nav-item>
        <b-nav-item>Our Service</b-nav-item>
        <b-nav-item>Our Client</b-nav-item>
        <b-nav-item>Team</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>
      <div class="btn-call-us-now">
        <b-button variant="btn-call-us-now outline-primary"
          >Call Us Now</b-button
        >
      </div>
      <div class="gambarpojok">
        <img
          class="logo"
          style="width: 700px; height: 650px"
          alt="Gambar Pojok"
          src="./assets/Gambar-Pojok.png"
        />
      </div>
    </div>
    <div>
      <b-jumbotron>
        <template #header>Hai, Welcome</template>
        <p>Selamat Datang di RAXEL WEB</p>
        <p>This is my Portofolio Web :)</p>

        <b-button variant="primary" class="btn-start btn-lg"
          >Start Your Project</b-button
        >
        <b-button variant="light" class="btn-learn btn-outline-dark btn-lg"
          >Learn More</b-button
        >
      </b-jumbotron>
    </div>
    <div class="our-service text-center">
      <p class="lead"></p>
      <h1>Our services</h1>
      <p>
        We become part of your team, meeting regularly to plan content,
        facilitate business goals and get creative as a group.
      </p>

      <div class="rectangle1">
        <img
          src="./assets/Rectangle 2.png"
          style="width: 600px; height: 600px"
        />
      </div>
      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-card>

      <v-card class="mx-auto" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Whitehaven Beach</div>

          <div>Whitsunday Island, Whitsunday Islands</div>
        </v-card-text>
      </v-card>
    </div>
  </b-container>
</template>

<script>
</script>

<style>
.nav-item {
  font-size: 16px;
  margin-left: 40px;
  margin-top: 20px;
  color: #000;
}
.btn-call-us-now {
  background-color: white;
  z-index: 1;
  border-radius: 5px;
  padding-right: 35px;
  padding-left: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.gambarpojok {
  position: absolute;
  left: 750px;
  right: -0.1%;
  top: -150px;
  bottom: -0px;
  transform: rotate(-20.43deg);
  opacity: 40%;
  background-color: E0C4FC;
}

.jumbotron {
  font-family: Nunito sans-serif;
  margin-top: 10px;
  background-color: white;
  margin-top: 100px;
}

.btn-start {
  background-color: #744fc6;
  font-family: sans-serif;
  border-radius: 12px;
  margin-top: 30px;
}
.btn-learn {
  border: 1px solid #744fc6;
  font-family: sans-serif;
  border-radius: 12px;
  margin-left: 20px;
  margin-top: 30px;
}
.our-service {
  background-color: #f5f5f5;
  margin-top: 150px;
  border-radius: 16px;
  padding-bottom: 40px;
}
.lead {
  font-family: sans-serif;
  font-size: 28px;
  margin-top: 20px;
}
.rectangle1 {
  margin-left: -400px;
  position: absolute;
  margin-top: -180px;
  transform: rotate(-70deg);
}
</style>