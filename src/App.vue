<template>
  <div id="app" v-cloak>
    <!-- navigation for larger screens -->
    <nav style="width: 100%; position: fixed" class="hidden-sm-and-down">
      <el-row type="flex" justify="space-evenly" :gutter="12">
        <el-col :span="1"></el-col>
        <span class="logo" float="left">
          <img width="30" src="@/assets/gitam.png" />
        </span>

        <el-col :span="5" :offset="5">
          <a href="#" class="nav-link">
            <font-awesome-icon icon="home" />
            <span>&nbsp; Home&nbsp;</span>
          </a>
        </el-col>

        <el-col :span="5">
          <a href="#about" class="nav-link">
            <font-awesome-icon icon="user-alt" />&nbsp; About me
          </a>
        </el-col>
        <el-col :span="5">
          <a href="#skill" class="nav-link">
            <font-awesome-icon icon="tools" />&nbsp; My skills
          </a>
        </el-col>
        <el-col :span="5">
          <a href="#interest" class="nav-link">
            <font-awesome-icon icon="rocket" />&nbsp; Interests
          </a>
        </el-col>
        <el-col :span="5">
          <a href="#contact" class="nav-link">
            <font-awesome-icon icon="phone" />&nbsp; Contact me
          </a>
        </el-col>
      </el-row>
    </nav>
    <!-- navigation for smaller screens -->
    <nav style="width: 100%; position: fixed" class="hidden-md-and-up">
      <el-row type="flex" justify="space-between">
        <el-col :span="1">
          <span class="logo" float="left">
            <img width="40" src="@/assets/gitam.png" />
          </span>
        </el-col>
        <el-col :span="4">
          <font-awesome-icon
            style="color: white; font-size: 32px; margin-right: 8%"
            icon="bars"
            @click="navToggle = !navToggle"
          />
        </el-col>
      </el-row>
      <div class="toggle" v-if="navToggle">
        <a href="#" @click="navToggle = false">
          <el-row class="nav-row" type="flex">
            <font-awesome-icon icon="home" />&nbsp; Home
          </el-row>
        </a>
        <a href="#about" @click="navToggle = false">
          <el-row class="nav-row" type="flex">
            <font-awesome-icon icon="user-alt" />&nbsp; About me
          </el-row>
        </a>
        <a href="#skill" @click="navToggle = false">
          <el-row class="nav-row" type="flex">
            <font-awesome-icon icon="tools" />&nbsp; My skills
          </el-row>
        </a>
        <a href="#interest" @click="navToggle = false">
          <el-row class="nav-row" type="flex">
            <font-awesome-icon icon="rocket" />&nbsp; Interests
          </el-row>
        </a>
        <a href="#contact" @click="navToggle = false">
          <el-row class="nav-row" type="flex">
            <font-awesome-icon icon="phone" />&nbsp; Contact me
          </el-row>
        </a>
      </div>
    </nav>
    <section class="particle">
      <vue-particles
        color="#deaaae"
        shapeType="circle"
        clickMode="repulse"
      ></vue-particles>

      <div id="app-container">
        <!-- break a line if the nav bar is extended for mobile view so it wont cover the header top -->
        <div style="padding-top: 120px" v-if="navToggle"></div>
        <header>
          <h1 class="greet">Hello world !</h1>
          <el-row type="flex" justify="center">
            <img
              src="@/assets/3.jpeg"
              class="header-img"
              alt="gitam gadtaula"
            />
          </el-row>
          <el-row type="flex" justify="center">
            <el-col :span="24">
              <h1 class="header-h1" style="border: none; font-size: 20px">
                I'm Gitam Gadtaula
              </h1>
            </el-col>
          </el-row>
          <hr style="width: 50%" />
          <el-row type="flex" justify="center">
            <span style="color: #fff">
              <typewriter
                :speed="60"
                :full-erase="false"
                :interval="500"
                :words="[
                  'Software Engineer..',
                  'FrontEnd developer..',
                  'Music Freak..',
                  'Football Maniac..',
                  'Tech Enthusiast..',
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
            style="margin-top: 20px"
          >
            <el-col class="social-icon">
              <a href="https://fb.com/giittam">
                <div class="social-ico">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </div>
              </a>
            </el-col>
            <el-col class="social-icon">
              <a href="https://github.com/gitamgadtaula/">
                <div class="social-ico">
                  <font-awesome-icon :icon="['fab', 'github']" />
                </div>
              </a>
            </el-col>
            <el-col class="social-icon">
              <a href="https://twitter.com/gitamgadtaula">
                <div class="social-ico">
                  <font-awesome-icon :icon="['fab', 'twitter']" />
                </div>
              </a>
            </el-col>
            <el-col class="social-icon">
              <a href="https://instagram.com/gitamgadtaula">
                <div class="social-ico">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </div>
              </a>
            </el-col>
            <el-col class="social-icon">
              <a href="https://www.quora.com/profile/Gitam-Gadtaula">
                <div class="social-ico">
                  <font-awesome-icon :icon="['fab', 'quora']" />
                </div>
              </a>
            </el-col>
            <el-col class="social-icon">
              <a href="https://www.linkedin.com/in/gitamgadtaula/">
                <div class="social-ico">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </div>
              </a>
            </el-col>
          </el-row>
        </header>
        <div class="mousey">
          <div class="scroller"></div>
        </div>
      </div>
    </section>
    <!-- div for curved border -->
    <!-- <div style="background-color:#0;"> -->
    <section class="main hidden-sm-and-down" id="about">
      <el-row type="flex" justify="space-between" direction="column">
        <el-col :span="9">
          <img src="@/assets/me.jpeg" class="main-img" alt="gitam gadtaula" />
        </el-col>
        <el-col :span="15">
          <h1 class="header-h1">About Myself</h1>
          <!-- <h2 style="margin-top:10px;font-weight: 200;" class="cursive">
							I'm gitam gadtaula.
          </h2>-->
          <p class="main-desc cursive">
            A simple, creative and a fun-loving person who likes to create
            things out of imagination.
          </p>

          <p class="main-desc cursive">{{ aboutMe }}</p>
        </el-col>
      </el-row>
    </section>

    <section class="main hidden-md-and-up">
      <!-- <div class="main-sm-header">
				<h1 class="header-h1" style="font-size:22px;">About myself</h1>
      </div>-->

      <el-row type="flex" justify="space-between" direction="column">
        <el-col :span="10">
          <img
            src="@/assets/me.jpeg"
            class="main-img"
            style="width: 120px; border-radius: 50%"
          />
        </el-col>
        <el-col :span="14" style="margin-top: 0px">
          <p class="main-desc cursive">
            A simple, creative and a fun-loving person who likes to create
            things out of imagination.
          </p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <p class="main-desc cursive">{{ aboutMe }}</p>
        </el-col>
      </el-row>
    </section>

    <section class="work">
      <h1 class="header-h1" style="color: black">
        Education
        <font-awesome-icon icon="university" />
      </h1>
      <h3>
        Computer Science
        <font-awesome-icon icon="graduation-cap" />
      </h3>
      <h2>Kathmandu University</h2>
      <!-- </el-col> -->
      <el-divider>
        <el-col :span="3">
          <i class="el-icon-star-off"></i>
        </el-col>
      </el-divider>
      <!-- <el-col :span="12" class="animated bounceInLeft" style="text-align:right;"> -->
      <h1 class="header-h1" style="color: black">
        Profession
        <font-awesome-icon icon="industry" />
      </h1>
      <h3><font-awesome-icon icon="terminal" />&nbsp;Software Engineer</h3>
      <h2>Rasello Nepal</h2>
    </section>
    <!-- </div> -->
    <section class="skill" id="skill">
      <h1 class="header-h1">
        MY SKILLS
        <font-awesome-icon icon="tools" />
      </h1>
      <div style="margin-top: 20px; color: white">
        <p class="skill-desc">
          <!-- <i> -->
          I'm a fresh computer science graduate and a junior software engineer
          by profession. I have been doing computer programming since way back
          in school. For me, its another way of me expressing things and I am
          more than delighted to actually make a living out of it. I'm a
          progressive and a stoic learner. I like being acquainted with new
          technologies, solving problems, designing responsive UI with a good
          user experience, automating things on web and so on. I'm also a very
          keen enthusiast of Machine learning and Data science. In addition to
          my knowledge base, I actively seek out new technologies and stay
          up-to-date on industry trends and advancements to keep myself ahead of
          the curve.
          <br />Honestly, most of the time I am not the smartest person in the
          room when it is filled with Developers and I am totally okay with
          that. What I lack in sheer intellect, I make up for in my willingness
          to absorb and learn as much as I can from the others. Listed below are
          some of my skills but just not limited to :
          <!-- </i> -->
        </p>
        <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'html5']" class="skills-icon" />
            <p class="skill-name">HTML5</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 90%"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'sass']" class="skills-icon" />
            <p class="skill-name">CSS3/Sass</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 90%"></div>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
          <el-col :span="11">
            <font-awesome-icon
              :icon="['fab', 'js-square']"
              class="skills-icon"
            />
            <p class="skill-name">Javascript</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 75%"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'php']" class="skills-icon" />
            <p class="skill-name">PHP</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 80%"></div>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'vuejs']" class="skills-icon" />
            <p class="skill-name">Vue js</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 85%"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'laravel']" class="skills-icon" />
            <p class="skill-name">Laravel</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 75%"></div>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'node-js']" class="skills-icon" />
            <p class="skill-name">Node JS</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 80%"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'git-alt']" class="skills-icon" />
            <p class="skill-name">Git</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 90%"></div>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
          <el-col :span="11">
            <font-awesome-icon :icon="['fas', 'mobile-alt']" class="skills-icon" />
            <p class="skill-name">Flutter</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 70%"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <font-awesome-icon
              :icon="['fas', 'database']"
              class="skills-icon"
            />
            <p class="skill-name">Mongo DB</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 70%"></div>
            </div>
          </el-col>
        </el-row>

        <el-row type="flex" justify="space-between" style="margin-bottom: 10px">
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'python']" class="skills-icon" />
            <p class="skill-name">Python</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 65%"></div>
            </div>
          </el-col>
          <el-col :span="11">
            <font-awesome-icon :icon="['fab', 'adobe']" class="skills-icon" />
            <p class="skill-name">Photoshop</p>
            <div class="skill-container">
              <div class="skill-container-child" style="width: 65%"></div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>

    <div style>
      <section class="interest" id="interest">
        <h1 class="header-h1" style="margin-bottom: 10px">
          MY INTERESTS
          <font-awesome-icon icon="rocket" />
        </h1>
        <carousel-3d
          style="border: none"
          :width="620"
          :height="560"
          :autoplay="true"
          :autoplay-timeout="5000"
          :controls-visible="true"
        >
          <slide v-for="(slide, i) in assets" :index="i" :key="i">
            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
              <img
                :data-index="index"
                :class="{
                  current: isCurrent,
                  onLeft: leftIndex >= 0,
                  onRight: rightIndex >= 0,
                }"
                :src="slide.img"
                :alt="slide.alt"
              />
              <h3 class="c-caption">{{ slide.caption }}</h3>
              <h3 class="c-desc">{{ slide.desc }}</h3>
            </template>
          </slide>
        </carousel-3d>
      </section>
      <section class="footer" id="contact">
        <h2 style="font-weight: 100" class="cursive">
          Made with
          <span style="color: red">
            <!-- <font-awesome-icon icon="heart" /> -->
            ❤️
          </span>
          in Quarantine.
        </h2>
        <p class>
          <font-awesome-icon icon="envelope" />&nbsp;gitamgadtaula@gmail.com
        </p>
        <!-- <p>
					<font-awesome-icon icon="briefcase" />&nbsp;gitam@rasello.com
        </p>-->
        <p><font-awesome-icon icon="map-marker-alt" />&nbsp;Kathmandu Nepal</p>
        <div
          style="
            max-width: 50%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          "
        >
          <el-divider>
            <el-col :span="3">
              <i class="el-icon-star-on"></i>
            </el-col>
          </el-divider>
        </div>
        <!-- <h3 style="margin-bottom:10px;">Powered by</h3>
        <img src="@/assets/logo.png" height="40" />-->
      </section>
    </div>
  </div>
</template>
<style scoped>
.nav-link:hover {
  background-color: #451c46;
  padding: 8px;
  border-radius: 24px;
}
.nav-row {
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 4px;
  background: black;
}
.nav-row:hover {
  background-color: #00adfc;
  /* width: 100%; */
}
.carousel-3d-slide {
  background: linear-gradient(
    30deg,
    rgb(255, 255, 255) 00%,
    rgb(105, 163, 221) 80%,
    rgb(30, 25, 66) 100%
  );
  border: none;
  position: absolute;
}
.c-desc {
  font-size: 18px;
  font-family: "Rajdhani", sans-serif;
  padding: 5px;
  padding-bottom: 80px;
  position: relative;
  top: -12px;
}

@media only screen and (max-width: 580px) {
  .c-desc {
    font-size: 12px;
  }
}
</style>

<script>
const img1 = require("@/assets/football2.jpg");
const img2 = require("@/assets/guitar.jpg");
const img3 = require("@/assets/travel1.jpg");
// const img4 = require("@/assets/meme.jpg");
const about_myself = `I am just among any other sapiens who is strolling around with some purpose and
						  ambition in their life. But in the meantime I find
						  myself to be carefree because I've read somewhere that worry only empties today of its strength but does not empty tomorrow of its sorrow. 
						  I enjoy nature, adventure, art, literature, philosophy, sports, music, science and whatnot.
						  I'm a star gazer and I always prefer watching sunsets over Netflix. I love fantasies and fiction. 
						  Sometimes I keep fantasizing myself in places god only know exists. And sometimes when I look
						  at people I make myself try and feel them as more than just
						  a random person walking by. `;

export default {
  name: "App",
  data() {
    return {
      navToggle: false,
      aboutMe: about_myself,
      assets: [
        {
          img: img1,
          alt: "gitam gadtaula",
          caption: "Football",
          desc:
            "Football is not just another game, it's emotion. We don't have to speak or dress a certain way or even know the same language to communicate with another football fan or a player. It's a sport for the whole universe.",
        },
        {
          img: img2,
          alt: "gitam gadtaula",
          caption: "Music",
          desc:
            "Music is far more than just a pleasant sound to the ear. I never find myself alone cause wherever I go music goes along with me. I love playing guitar, its therapeutic and releases a hepty amount of dopamine in my brains.",
        },
        {
          img: img3,
          alt: "gitamgadtaula",
          caption: "Travelling",
          desc:
            "Travelling helps open my mind and makes me realize that there's no one way to live life. By being exposed to new places, people and cultures, it helps me develop a wider world view.",
        },
        // {
        // 	img: img4,
        // 	caption: "Humor",
        // 	desc : "Humor brings smile on the face even on the saddest souls. Humor makes people happy even if its momentary. I like humor, comics, jokes and memes.  I like creating memes sometimes to make fun out of my friends. It keeps me pyschologically happy and mentally active. "
        // }
      ],
    };
  },
};
</script>
