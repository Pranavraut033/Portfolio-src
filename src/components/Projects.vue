<template>
  <!-- <b-container style="display:flex" class="flex-column h-100"> -->
  <b-container class="w-100 h-100 overflow-hidden">
    <b-row align-h="between" class="pb-1 ">
      <b-col>
        <h1 class="section-title text-nowrap">Some of my work...</h1>
        &emsp;
      </b-col>
      <b-col class="text-md-right">
        <mButtonGroup
          v-model="platformFilter"
          :items="platforms"
          color="orange darken-2"
        ></mButtonGroup>
      </b-col>
    </b-row>
    <!-- <b-row class="flex-grow-1"> -->
    <perfect-scrollbar v-dragscroll.x="true" class="w-100">
      <b-row class="flex-nowrap w-100 py-5 " align-v="center">
        <v-slide-y-transition
          v-for="(project, index) in filteredProjects"
          :key="project.title"
        >
          <b-col class="flex-grow-0">
            <v-card :ref="'item-' + index" class="project-card" flat>
              <v-img
                class="item-img"
                :src="project.banner && '/img/' + project.banner"
                lazy-src="primary"
              ></v-img>
              <v-card class="project-card-content">
                <h5>{{ project.title }}</h5>
                <p>{{ project.description }}</p>
                <v-btn
                  class="project-btn"
                  outline
                  color="gray lighten-2"
                  :to="'projects/' + index"
                >
                  Know more...
                </v-btn>
              </v-card>
            </v-card>
          </b-col>
        </v-slide-y-transition>
      </b-row>
    </perfect-scrollbar>
  </b-container>
</template>

<script>
import Utils from "../constants/Utils.js";
import mButtonGroup from "../components/mButtonGroup";
import { projects } from "@/data.json";

export default {
  props: { active: { type: Boolean, default: false } },
  components: { mButtonGroup },
  data() {
    return {
      platformFilter: "all",
      animated: false,
      platforms: ["all", "android", "web", "tools & libaries"],
      projects,
      filteredProjects: []
    };
  },
  mounted() {},
  watch: {
    filteredProjects(a) {
      for (let i = 0; i < a.length; i++) {
        setTimeout(() => {
          let ele = this.$refs["item-" + i][0].$el;
          Utils.HTML_UTILS.addClass(ele, "animate");
        }, i * 70);
      }
    },
    active(a) {
      if (a && !this.animated) {
        this.animated = true;

        setTimeout(() => {
          this.filteredProjects = this.projects.slice();
        }, 150);
      }
    },
    platformFilter(a) {
      if (a == "all") this.filteredProjects = this.projects.slice();
      else
        this.filteredProjects = this.projects.filter(
          project => project.platform == a
        );
      // this.filteredProjects = this.filteredProjects.slice(0, 3);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/init.scss";
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap");

.project-card {
  position: relative;
  height: 60vh;
  width: 60vh;
  opacity: 0;
  background: red;
  margin-bottom: 1rem;
  border-radius: 4px !important;
  transform: translateY(80%) rotate(12deg) translateX(-20%);

  &.animate {
    opacity: 1;
    transform: translateY(0%) rotate(0deg) translateX(0%);
  }
  &.change .project-card-content {
    h1,
    p {
      animation: "animate-change" 1000ms linear 400ms;
      opacity: 1;
    }
    @keyframes animate-change {
      0% {
        opacity: 1;
      }
      60% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    right: 0;
    left: 0;
    height: 40%;
    opacity: 0;
    z-index: 2;
    border-radius: 4px;
    background-color: $primary-color;
    visibility: hidden;
  }

  .project-card-content {
    border-radius: 4px !important;
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 38%;
    padding: 1rem 1.8rem;
    opacity: 1;
    background: #d1d1d1;
    transition: 300ms ease 400ms;

    .project-btn {
      visibility: hidden;
      margin: 0;
      max-height: 0px;
      opacity: 0;
      flex: 0;
      width: 100%;
      text-transform: capitalize;
      text-align: center;
    }
    h5 {
      display: flex;
      &:before,
      &:after {
        content: "";
        transition: 300ms ease 300ms;
      }
      &:before {
        flex: 1;
      }
    }
    h5 {
      font-size: 13pt;
      color: #4787db;
      line-height: 18pt;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      font-family: "Share Tech Mono", monospace;
    }
    p {
      flex: 1;
      font-size: 11pt;
      color: rgba(0, 0, 0, 0.67);
      text-align: right;
      overflow: hidden;

      -webkit-line-clamp: 2; /* number of lines to show */
      line-height: 18px; /* fallback */
      max-height: 18px * 2; /* fallback */

      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;

      transition: 300ms ease 300ms;
    }
  }
  .item-img {
    top: 0%;
    height: 75%;
    opacity: 1;
    transition: 400ms ease 300ms;
  }
  &:hover {
    .item-img {
      top: +20%;
      opacity: 0;
      transition: 400ms ease 300ms;
    }
    &:after {
      top: -1px;
      height: 38%;
      animation: close 600ms ease 300ms;
    }

    @keyframes close {
      0% {
        top: 60%;
        height: 45%;
        opacity: 0;
        visibility: visible;
      }
      65% {
        top: -1px;
        height: 100%;
        opacity: 1;
      }
      100% {
        opacity: 0;
        height: 38%;
      }
    }
    .project-card-content {
      height: 100%;
      opacity: 1;
      text-align: center;

      .project-btn {
        max-height: 48px;
        opacity: 1;
        visibility: visible;
        flex: unset;
      }

      h5::after {
        flex: 1;
      }

      p {
        font-size: 13pt;
        text-align: center;
        line-height: 26px;
        color: rgba(0, 0, 0, 0.74);
        overflow: hidden;
        -webkit-line-clamp: unset; /* number of lines to show */
        text-overflow: ellipsis;
        max-height: 100%; /* fallback */
        display: unset;
        -webkit-box-orient: unset;
      }
    }
  }
}
</style>
