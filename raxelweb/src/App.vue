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

        <p>Selamat Datang di RAXEL WEB, This is my Portofolio Web :)</p>

        <b-button variant="primary" class="btn-start" href="#"
          >Start Your Project</b-button
        >
        <b-button variant="success" class="btn-learn" href="#"
          >Learn More</b-button
        >
      </b-jumbotron>
    </div>
  </b-container>
</template>

<script>
</script>

<style>
.nav-item {
  font-size: 14px;
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
  top: -50px;
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
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 12px;
}
.btn-learn {
  background-color: #744fc6;
  font-family: sans-serif;
  padding-bottom: 20px;
  padding-top: 20px;
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 12px;
  margin-left: 10px;
}
</style>