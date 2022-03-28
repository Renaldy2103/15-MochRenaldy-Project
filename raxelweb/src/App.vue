<template>
  <div class="container">
    <div class="navbar">
      <b-nav>
        <h3>
          <b
            >RAXEL
            <div>WEB</div></b
          >
        </h3>
        <b-nav-item>Home</b-nav-item>
        <b-nav-item>Our Service</b-nav-item>
        <b-nav-item>Our Client</b-nav-item>
        <b-nav-item>Team</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>
      <div class="btn-call-us-now">
        <button type="button" class="btn-call-us-now btn-outline-primary">
          Call Us Now
        </button>
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

        <button type="button" class="btn-start btn-outline-light btn-lg">
          Start Your Project
        </button>
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
        <div class="col">
          <div class="card h-100">
            <center>
              <img
                src="./assets/ourservice1.png"
                style="width: 250px; height: 180px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title"><b>Website & Mobile App Design</b></h5>
              <p class="card-text">
                Our team work with you to develop a user experience that engages
                your audience, promotes your brand and gets results.
              </p>
              <button type="button" class="btn-our-service btn-outline-light">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <center>
              <img
                src="./assets/ourservice2.png"
                style="width: 250px; height: 160px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title">
                <b>Blog & Artikel</b>
              </h5>
              <p class="card-text">
                Provide reading articles or blogs about the website.
              </p>
              <button type="button" class="btn-our-service btn-outline-light">
                Explore More
              </button>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card h-100">
            <center>
              <img
                src="./assets/ourservice3.png"
                style="width: 250px; height: 180px"
              />
            </center>
            <div class="card-body">
              <h5 class="card-title"><b>Web Analytics Audit</b></h5>
              <p class="card-text">
                Detailed understanding of your web analytics are the essential
                keys to driving intelligent decisions for your brand.
              </p>
              <button type="button" class="btn-our-service btn-outline-light">
                Explore More
              </button>
            </div>
          </div>
        </div>
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
      <button type="button" class="btn-our-client btn-outline-light btn-lg">
        Lets Work Together
      </button>
    </div>
    <div class="meet">
      <p class="lead1 text-center"></p>
      <center>
        <h1><b>Meet Our Team</b></h1>
        <div class="card-meet" style="width: 180px; height: 150px">
          <img src="./assets/Profile1.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Moch Renaldy Syaputra</h5>
            <p class="card-text">Desaigner</p>
          </div>
        </div>
      </center>
    </div>

    <div class="form">
      <div class="judul-form">
        <h1>
          <b><center>Get In Touch</center></b>
        </h1>
        <p><center>Contact Us :)</center></p>
        <form>
          <div class="gambarpojok3">
            <img
              src="./assets/GambarPojok2.png"
              style="width: 300px; height: 360px"
            />
          </div>
          <div class="form-row">
            <div class="col">
              <center>
                <input type="text" class="username" placeholder="Your Name" />
              </center>
            </div>
            <div class="col">
              <center>
                <input type="text" class="email" placeholder="Your Email" />
              </center>
            </div>
          </div>
          <div class="col">
            <center>
              <input type="text" class="Message" placeholder="Message" />
            </center>
            <a class="btn-form btn-outline-light btn-lg" href="#" role="button"
              >Send Message</a
            >
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <h2 class="mt-5">
        <b
          >RAXEL <br />
          WEB</b
        >

        <h6 class="mt-3">
          Smart Move to build your brand and engage <br />more customer
        </h6>
      </h2>
      <h6 class="teks2"><b>Company</b></h6>
      <h6 class="teks2">Add: 123 xxx - xxx - xxx</h6>
      <h6 class="teks3">Tel: 0821 3259 6643</h6>
      <h6 class="teks4">Email: renaldy.syaputra2103@gmail.com</h6>
    </div>
    <v-btn class="btn-footer" x-large color="dark" block elevation="4">
      2022 - Moch Renaldy Syaputra</v-btn
    >
  </div>
</template>

<script>
</script>

<style>
.navbar {
  color: #000;
}
.nav-item {
  font-size: 16px;
  margin-left: 40px;
  margin-top: 20px;
  color: black;
}
.btn-call-us-now {
  background-color: white;
  color: black;
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
  color: white;
  font-family: sans-serif;
  margin-top: 30px;
}
.btn-learn {
  border: 1px solid #744fc6;
  font-family: sans-serif;
  border-radius: 12px;
  margin-left: 20px;
  margin-top: -5px;
}
.our-service {
  background-color: #f5f5f5;
  margin-top: 150px;
  border-radius: 16px;
  padding-bottom: 40px;
}
.btn-our-service {
  background-color: #744fc6;
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
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
  margin-top: 200px;
  background: url(https://i.ibb.co/8dFTtF0/Background.png);
}
.lead1 {
  font-family: sans-serif;
  font-size: 28px;
  margin-top: 50px;
}

.card-meet {
  border-radius: 20px;
  text-align: center;
  color: black;
  border: 10px solid rgb(245, 245, 245);
  background-color: rgb(255, 255, 255);
  padding-top: 10px;
  box-shadow: 1px 1px solid grey;
}

.card-text {
  color: grey;
  border-radius: 10px;
}

.form {
  background-color: #f3f3f3;
  font-family: "Times New Roman", Times, serif;
  margin-top: 300px;
  border-radius: 10px;
}

.email {
  font-size: 20px;
  padding-left: 50px;
  padding-right: 10px;
  margin-right: -350px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
}

.username {
  font-size: 20px;
  padding-left: 30px;
  padding-right: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  margin-left: -330px;
  position: absolute;
}

.Message {
  font-size: 20px;
  padding-left: 20px;
  padding-right: 400px;
  padding-top: 5px;
  padding-bottom: 100px;
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 30px;
}

.btn-form {
  background-color: #744fc6;
  font-family: sans-serif;
  border-radius: 8px;
  font-family: Nunito Sans;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;
  margin-left: 480px;
}

.gambarpojok3 {
  margin-left: -120px;
  margin-top: -100px;
  opacity: 100%;
  position: absolute;
}

.teks2 {
  position: relative;
  font-size: 16px;
  top: -140px;
  left: 450px;
}

.teks3 {
  position: relative;
  font-size: 16px;
  top: -130px;
  left: 450px;
}

.teks4 {
  position: relative;
  font-size: 16px;
  top: -120px;
  left: 450px;
}

.btn-footer {
  margin-top: -50px;
}
</style>