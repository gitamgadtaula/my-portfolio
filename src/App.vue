/* eslint-disable prettier/prettier */ /* eslint-disable-next-line */

<template>
  <div id="app">
    <section class="particle">
      <vue-particles color="#deaaae" shapeType="cirle"></vue-particles>
      <div id="app-container">
        <nav>
          <el-row type="flex" justify="space-between">
            <el-col :span="3">
              <span class="logo">
                <img
                  width="20"
                  src="https://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png"
                />
              </span>
            </el-col>
            <!-- Right Nav Bar -->
            <el-col>
              <el-row type="flex" justify="end">
                <el-col :span="5">
                  <a href="#">Home</a>
                </el-col>
                <el-col :span="5">
                  <a href="#about">About me</a>
                </el-col>
                <el-col :span="5">
                  <a href="#skill">My skills</a>
                </el-col>
                <el-col :span="5">
                  <a href="#interest">Interests</a>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </nav>
        <header>
          <h1 class="greet">Hello world !</h1>
          <el-row type="flex" justify="center">
            <img src="@/assets/3.jpeg" class="header-img" />
          </el-row>
          <el-row type="flex" justify="center">
            <el-col>
              <h1 class="header-h1">I'm Gitam</h1>
            </el-col>
          </el-row>
          <hr />
          <el-row type="flex" justify="center">
            <span style="color:#fff">
              <typewriter
                :speed="50"
                :full-erase="false"
                :interval="300"
                :words="[
                  'Web developer..',
                  'UI/UX designer..',
                  'Music Freak..',
                  'Football Maniac..',
                ]"
                :cursor="false"
              ></typewriter
              >|
            </span>
          </el-row>
          <!-- Socail links -->
          <el-row
            type="flex"
            justify="center"
            :gutter="24"
            style="margin-top:20px;"
          >
            <el-col :xl="2" :lg="2" :md="2">
              <div class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </div>
            </el-col>
            <el-col :xl="2" :lg="2" :md="2">
              <div class="social-icon">
                <i class="fab fa-twitter"></i>
              </div>
            </el-col>
            <el-col :xl="2" :lg="2" :md="2">
              <div class="social-icon">
                <i class="fab fa-instagram"></i>
              </div>
            </el-col>
            <el-col :xl="2" :lg="2" :md="2">
              <div class="social-icon">
                <i class="fab fa-quora"></i>
              </div>
            </el-col>
            <el-col :xl="2" :lg="2" :md="2">
              <div class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </div>
            </el-col>
          </el-row>
        </header>
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </section>

    <div style="background-color:#00b0dc ;">
      <section class="main hidden-sm-and-down" id="about">
        <el-row type="flex" justify="space-between" direction="column">
          <el-col :span="9" class="">
            <img src="@/assets/me.jpeg" class="main-img" />
          </el-col>
          <el-col :span="15">
            <h1 class="header-h1" style="color:#111110; ">
              About Myself
            </h1>
            <h2 style="margin-top:10px;">
              I'm Gitam Gadtaula.

              <p style="font-size:18px; font-weight:400;">
                A simple, creative and a fun-loving person who always likes to
                create things out of imagination.
              </p>
              <p style="font-size:18px; font-weight:400;">
                I am a fresh computer science graduate who has just stepped a
                foot in the real competetive IT world. Eventhough I'm a newbie
                in this professional IT field, the way I have shaped myself
                during my acadameic spell and then the internship later has me
                helped a lot to quickly grasp the new things floating around the
                air. So I consider myself a progressive programmer since every
                new day is a learning day.
              </p>
            </h2>
          </el-col>
        </el-row>
      </section>

      <section class="main hidden-md-and-up">
        <el-row type="flex" justify="space-between" direction="column">
          <el-col :span="4">
            <img
              src="@/assets/me.jpeg"
              class="main-img"
              style="width:120px;border-radius:50%;"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <h1 class="header-h1" style="color:#111110;">
              Front End Developer
            </h1>
            <h2 style="margin-top:10px;">
              <p style="font-size:15px; font-weight:400;">
                I am a simple, creative and a fun-loving person. I always like
                to create things out of my own imagination.
              </p>
              <p style="font-size:15px; font-weight:400;">
                I am a fresh computer science graduate who has just kick-started
                his career in the real competetive IT world. But eventhough I'm
                a newbie in this professional IT field, the way I have shaped
                myself from my Acadameic spell has me helped a lot to quickly
                grasp the new things around the air. So I consider myself a
                progressive programmer since every new day is a learning day.
              </p>
            </h2>
          </el-col>
        </el-row>
      </section>

      <section class="work">
        <el-row type="flex" justify="space-between">
          <el-col
            :span="12"
            class="animated bounceInRight"
            style="text-align:left;"
          >
            <h1>Education <i class="fas fa-university"></i></h1>
            <h3>Bachleor in Computer science</h3>
            <h2>Kathmandu University</h2>
          </el-col>

          <el-col
            span="12"
            class="animated bounceInLeft"
            style="text-align:right;"
          >
            <h1><i class="far fa-building"></i> Work</h1>
            <h3>Web Developer</h3>
            <h2>Rasello Nepal</h2>
          </el-col>
        </el-row>
      </section>
    </div>
    <section class="skill" id="skill">
      <h1 class="header-h1">MY SKILLS <i class="fas fa-tools"></i></h1>
      <div style="margin-top:20px;">
        I am a fresh computer science graduate who has just stepped a foot in
        the real competetive IT world. Eventhough I'm a newbie in this
        professional IT field, the way I have shaped myself during my acadameic
        spell and then the internship later has me helped a lot to quickly grasp
        the new things floating around the air. So I consider myself a
        progressive programmer since every new day is a learning day.
        <el-row type="flex" justify="space-between" style="margin-bottom:10px;">
          <el-col :span="11">
            <p class="skill-name">HTML5</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:90%;"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <p class="skill-name">CSS3</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:90%;"></div>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" style="margin-bottom:10px;">
          <el-col :span="11">
            <p class="skill-name">Javascript</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:75%;"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <p class="skill-name">PHP</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:80%;"></div>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" style="margin-bottom:10px;">
          <el-col :span="11">
            <p class="skill-name">Vue js</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:70%;"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <p class="skill-name">Laravel</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:65%;"></div>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" justify="space-between" style="margin-bottom:10px;">
          <el-col :span="11">
            <p class="skill-name">Python</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:45%;"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <p class="skill-name">Photoshop</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width:45%;"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <div style="background-color:">
      <section class="interest" style="" id="interest">
        <h1 class="header-h1" style="margin-bottom:10px;">
          MY INTERESTS <i class="fas fa-rocket"></i>
        </h1>
        <el-carousel
          :interval="4000"
          type="card"
          height="540px"
          class="hidden-sm-and-down"
        >
          <el-carousel-item v-for="item in assets" :key="item">
            <img :src="item.img" width="100%" />
            <h3 class="c-caption">{{ item.caption }}</h3>
            <h3 class="c-desc">{{ item.desc }}</h3>
          </el-carousel-item>
        </el-carousel>

        <el-carousel
          :interval="4000"
          type="card"
          height="300px"
          class="hidden-md-and-up"
        >
          <el-carousel-item v-for="item in assets" :key="item">
            <img :src="item.img" width="100%" />
            <h3 class="c-caption">{{ item.caption }}</h3>
            <h3 class="c-desc" style="font-size:12px;">{{ item.desc }}</h3>
          </el-carousel-item>
        </el-carousel>
      </section>
      <section class="footer">
        Made with <i class="fas fa-heart" style="color:red;"></i> in Quarantine.
        <p><i class="fas fa-envelope"></i> gitamgadtaula@gmail.com</p>
        <p><i class="fas fa-map-marker-alt"></i> Kathmandu Nepal</p>
        <div
          style="max-width:50%;margin-left:auto;
          margin-right:auto;display:block;"
        >
          <el-divider>
            <el-col :span="3"><i class="el-icon-star-on"></i> </el-col>
          </el-divider>
        </div>
        <h3>Powered by</h3>
        <img src="@/assets/logo.png" height="40" />
        <img src="@/assets/element.svg" height="40" />
        <img
          src="@/assets/font-awesome.png"
          height="40"
          style="margin-left:5px;"
        />
      </section>
    </div>
    <el-backtop
      target=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
const img1 = require("./assets/football2.jpg");
const img2 = require("./assets/guitar.jpg");
const img3 = require("./assets/travel1.jpg");
// const img4 = require("./assets/wallpaper.jpeg");
export default {
  name: "App",
  components: {},
  data() {
    return {
      assets: [
        {
          img: img1,
          caption: "Football",
          desc:
            "Football has its own language. You don't have to speak or dress a certain way or even know the same language communicate with another football fan or a football player. And that's why I love football because it's a sport made for the whole universe.",
        },
        {
          img: img2,
          caption: "Music",
          desc:
            "Music is far more than just a pleasant sound to the ear. It is loved by people all across the world of different cultures, languages, and lifestyles. The scientific reason why people love music so much is because it causes dopamine to be released from the brain.",
        },
        {
          img: img3,
          caption: "Travelling",
          desc:
            "Travelling helps open my mind. You realize that there's no one way to live life. Meeting people from other places will show you that your world view isn't the same as everyone else's.  By being exposed to new places, people and cultures, you'll develop a wider world view.",
        },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
@import url("./assets/style.css");

.footer {
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
  background-color: white;
  color: black;
}
</style>
