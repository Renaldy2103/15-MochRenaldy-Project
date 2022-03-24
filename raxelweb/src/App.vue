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
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <b-card
          title="Website & Mobile App Design"
          img-src="https://i.ibb.co/B4HynHQ/ourservice1.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
        >
          <b-card-text>
            Our team work with you to develop a user experience that engages
            your audience, promotes your brand and gets results.

            <b-button variant="primary" class="btn-start"
              >Explore More</b-button
            >
          </b-card-text>
        </b-card>
        <b-card
          title="Blog & Artikel"
          img-src="https://i.ibb.co/y44qxmp/ourservice2.png"
          img-alt="Images"
          img-top
          tag="article"
          style="max-width: 30rem"
        >
          <b-card-text>
            Provide reading articles or blogs about the website.
          </b-card-text>
          <b-button variant="primary" class="btn-start">Explore More</b-button>
        </b-card>
        <b-card
          title="Web Analystic Audit"
          img-src="https://i.ibb.co/4VKx0QB/ourservice3.png"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 30rem"
        >
          <b-card-text>
            Detailed understanding of your web analytics are the essential keys
            to driving intelligent decisions for your brand.
          </b-card-text>
          <b-button variant="primary" class="btn-start">Explore More</b-button>
        </b-card>
      </div>
    </div>
    <div class="ourclient">
      <h1 class="judul"><b>Our Client</b></h1>
      <div class="logo1">
        <img
          src="./assets/ourclient1.png"
          style="width: 150px; height: 120px"
        />
        <img
          src="./assets/ourclient2.png"
          style="width: 150px; height: 120px"
        />
        <img
          src="./assets/ourclient3.png"
          style="width: 150px; height: 120px"
        />
        <img
          src="./assets/ourclient4.png"
          style="width: 150px; height: 120px"
        />
        <div class="logo2">
          <img
            src="./assets/ourclient1.png"
            style="width: 150px; height: 120px"
          />
          <img
            src="./assets/ourclient2.png"
            style="width: 150px; height: 120px"
          />
          <img
            src="./assets/ourclient3.png"
            style="width: 150px; height: 120px"
          />
          <img
            src="./assets/ourclient4.png"
            style="width: 150px; height: 120px"
          />
        </div>
      </div>
      <div class="gambarpojok2">
        <img
          src="./assets/Rectangle 1.svg"
          style="width: 500px; height: 500px"
        />
      </div>
      <div class="rectangle2">
        <img
          src="./assets/Rectangle 2.png"
          style="width: 400px; height: 400px"
        />
      </div>
      <div class="rectangle3">
        <img
          src="./assets/Rectangle 2.png"
          style="width: 350px; height: 350px"
        />
      </div>
      <div class="rectangle4">
        <img
          src="./assets/Rectangle 2.png"
          style="width: 350px; height: 350px"
        />
      </div>
      <b-button variant="primary" class="btn-our-client"
        >Lets Work Together</b-button
      >
    </div>
    <div class="meet">
      <p class="lead1 text-center"></p>
      <center>
        <h1><b>Meet Our Team</b></h1>
      </center>
    </div>
    <center>
      <div class="card-meet">
        <b-card
          title="Moch Renaldy S"
          img-src="https://i.ibb.co/RhhWp2S/Profile1.jpg"
          img-alt="Image"
          img-top
          tag="article"
          img-height="300px"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text> Desaign </b-card-text>
        </b-card>
      </div>
    </center>
    <div class="form">
      <center>
        <h1>Get In Touch</h1>
        <p>Contact Us :)</p>
        <b-form inline>
          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Your Name"
          ></b-form-input>

          >
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input
              id="inline-form-input-username"
              placeholder="Your Email"
            ></b-form-input>
          </b-input-group>

          <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Message"
          ></b-form-input>

          <b-button variant="primary" class="btn-start">Send Message</b-button>
        </b-form>
      </center>
    </div>
    <center>
      <div class="footer2">
        <b-button block>2022 - Moch Renaldy Syaputra</b-button>
      </div>
    </center>
  </b-container>
</template>

<script>
</script>

<style>
.nav-item {
  font-size: 16px;
  margin-left: 40px;
  margin-top: 20px;
  color: black;
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
  margin-top: 100px;
  background-color: white;
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
.row {
  margin-top: 20px;
}
.ourclient {
  font-family: Nunito sans-serif;
  background-color: white;
  margin-top: 100px;
}
.logo1 {
  margin-top: 10px;
  position: absolute;
}
.logo2 {
  position: absolute;
}
.gambarpojok2 {
  margin-left: 700px;
  position: absolute;
  margin-top: -100px;
}
.rectangle1 {
  position: absolute;
  transform: rotate(-70deg);
}

.rectangle2 {
  margin-left: 720px;
  position: absolute;
  margin-top: -50px;
  transform: rotate(-1deg);
}

.rectangle3 {
  margin-left: 1000px;
  position: absolute;
  margin-top: -220px;
  transform: rotate(-3deg);
  opacity: 50%;
}

.rectangle4 {
  margin-left: 1110px;
  position: absolute;
  margin-top: 100px;
  transform: rotate(-3deg);
  opacity: 30%;
}
.btn-our-client {
  background-color: #744fc6;
  font-family: sans-serif;
  border-radius: 5px;
  margin-top: 300px;
}
.meet {
  margin-top: 120px;
  background: url(https://i.ibb.co/JKPqvpg/background-meet.jpg);
  position: relative;
}
.lead1 {
  font-family: sans-serif;
  font-size: 28px;
  margin-top: 50px;
}

.card-meet {
  margin-top: 20px;
}
.form {
  background-color: #f3f3f3;
  font-family: "Times New Roman", Times, serif;
  margin-top: 80px;
}
.footer2 {
  margin-top: 20px;
}
</style>