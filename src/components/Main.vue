<template>
  <main
    id="main"
    ref="main"
    v-bind:class="{ 'scrollbar-hidden': !startAnimation }"
    style="height: 100vh;"
    v-on:scroll="handleScroll"
  >
    <b-container class="py-0">
      <b-row>
        <div
          v-ripple
          v-bind:class="[
            lastScroll < 400 ? 'scroll-indicator' : 'scroll-to-top',
            { 'start-animation': !startAnimation }
          ]"
          @click="scroll()"
          v-bind:title="lastScroll < 400 ? 'Expore' : 'Scroll to top'"
        >
          <img class="img-fluid" src="img/arrow.png" />
        </div>
        <section id="landing" ref="landing">
          <Landing></Landing>
        </section>
        <section id="story" ref="story">
          <Story></Story>
        </section>
        <section id="skill" ref="skill">
          <Skills :active="value == 'skill'" />
        </section>
        <section id="project" ref="project">
          <Projects :active="value == 'project'" />
        </section>
        <!-- <section id="achivement" ref="achivement">
					<b-container>
						<h1 class="section-title">Achivement</h1>
						<img class="img-fluid p-5" src="img/working.gif" alt />
					</b-container>
				</section>-->
        <section id="social" ref="social">
          <b-container>
            <h1 class="section-title">Contact</h1>
            <img class="img-fluid p-5" src="img/working.gif" alt />
          </b-container>
        </section>
      </b-row>
    </b-container>
  </main>
</template>

<script>
import Landing from "@/components/Landing";
import Story from "@/components/Story";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default {
  components: { Landing, Story, Skills, Projects },
  props: { links: { type: Array }, value: { type: String } },
  data() {
    return {
      lastScroll: 0,
      lastRef: this.value,
      i: 0,
      animateLanding: false
    };
  },
  methods: {
    handleScroll(a) {
      let newScroll = Math.floor(a.target.scrollTop);
      let b;
      this.links.every(link => {
        var a = this.$refs[link.ref];
        if (a) {
          if (newScroll >= this.lastScroll) {
            if (a.offsetTop >= newScroll - window.innerHeight * 0.9) {
              b = link.ref;
              return false;
            }
          } else if (a.offsetTop <= newScroll + window.innerHeight * 0.5)
            b = link.ref;
        }
        return true;
      });
      this.lastScroll = Math.floor(a.target.scrollTop);

      this.$emit("input", (this.lastRef = b));
    },
    scroll() {
      this.$vuetify.goTo(
        "#" + (this.lastScroll >= 100 ? this.links[0].ref : this.links[1].ref),
        { container: "#main" }
      );
    }
  },
  watch: {
    value(a, b) {
      if (this.lastRef == b) {
        this.$vuetify.goTo("#" + a, { container: "#main" });
        this.lastRef = a;
      }
    }
  },
  mounted() {
    this.$refs.main.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
@import "@/assets/init.scss";
main {
  overflow-y: auto;
  @media (min-width: $md) {
    &::-webkit-scrollbar {
      width: 12px;

      &-track {
        background: transparent;
        border-radius: 2px;
      }
      &-thumb {
        border-radius: 2px;
        background: rgba(#676767, 0.56);
        &:hover {
          background: rgba(#676767, 0.78);
        }
      }
    }
  }

  &.scrollbar-hidden {
    overflow: hidden;
  }
}
section {
  min-height: 100vh;
  flex: 0 0 100%;
  max-width: 100%;
  // border: 1px solid red;
  .section-title {
    color: $primary-color;
  }
}
.scroll-indicator,
.scroll-to-top {
  position: absolute;
  bottom: 0;
  opacity: 0.6;
  right: 10%;
  z-index: 77;
  transition: 800ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    opacity: 1;
  }
}
.scroll-indicator {
  background-color: $secondary-color;
  padding-bottom: 1.3rem;
  border-radius: 16px 16px 0px 0px;
  padding: 1rem;

  img {
    transform: scale(0.6) rotate(180deg);
  }
}

.scroll-to-top {
  bottom: 4rem !important;
  padding: 1.2rem !important;
  background-color: $primary-color !important;
  border-radius: 50% !important;
  height: 64px !important;
  width: 64px !important;
  text-align: center !important;

  img {
    height: 100%;
    transform: scale(1) rotate(0deg);
  }
}
</style>
