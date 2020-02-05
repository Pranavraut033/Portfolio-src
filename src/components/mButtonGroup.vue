<template>
  <perfect-scrollbar class="m-btn-container text-nowrap" v-dragscroll.x="true">
    <div
      v-for="(item, i) in items"
      :key="i"
      :ref="'item-' + i"
      :class="idleClass"
      @click="pushValue(item)"
      v-ripple
    >
      {{ item }}
    </div>
  </perfect-scrollbar>
</template>

<script>
import Utils from "../constants/Utils";

export default {
  props: {
    color: { type: String, default: "primary" },
    value: { type: String, default: "" },
    items: {
      type: Array,
      default: () => {
        return [""];
      },
      required: true
    },
    activeClass: { type: String, default: "m-btn-active" },
    idleClass: { type: String, default: "m-btn" },
    toggle: { type: Boolean, default: true }
  },
  data() {
    return { colors: this.color.split(" ") };
  },

  methods: {
    pushValue(item) {
      if (item != this.value) this.$emit("input", item);
    }
  },
  mounted() {
    Utils.HTML_UTILS.addClass(
      this.$refs["item-" + this.items.indexOf(this.value)][0],
      this.activeClass,
      this.colors[0] + "--text",
      this.colors[1]
    );
  },
  watch: {
    value(a, b) {
      let preEle = this.$refs["item-" + this.items.indexOf(b)][0];
      let newEle = this.$refs["item-" + this.items.indexOf(a)][0];
      Utils.HTML_UTILS.removeClass(
        preEle,
        this.activeClass,
        this.colors[0] + "--text",
        this.colors[1]
      );
      Utils.HTML_UTILS.addClass(
        newEle,
        this.activeClass,
        this.colors[0] + "--text",
        this.colors[1]
      );
    }
  }
};
</script>

<style lang="scss">
$elevation-1: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12) !important;
$b-raduis: 4px;

.m-btn-container {
  display: inline-block;
  border-radius: $b-raduis;
  background: #8c8c8c;
  color: #cacaca;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  box-shadow: $elevation-1;
  transition: 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: auto;
  max-width: 80vw;

  div {
    display: inline-block;
  }
  &.flat {
    box-shadow: none !important;
    background: transparent !important;
    .m-btn {
      &.m-btn-active {
        box-shadow: none !important;
        background: transparent !important;
      }
    }
  }

  &.outline {
    box-shadow: none !important;
    background: transparent !important;

    .m-btn {
      position: relative;
      border: 2px solid hsla(0, 0%, 0%, 0.561);
      z-index: 1;
      margin: 0px -1px;
      border-left-color: rgba(0, 0, 0, 0.2805);
      border-right-color: rgba(0, 0, 0, 0.2805);

      &:first-child {
        border: 2px solid rgba(0, 0, 0, 0.561);
        border-right-color: rgba(0, 0, 0, 0.2805);
      }
      &:last-child {
        border: 2px solid rgba(0, 0, 0, 0.561);
        border-left-color: rgba(0, 0, 0, 0.2805);
      }
      &.m-btn-active {
        box-shadow: none !important;
        background: transparent !important;
        border-color: currentColor;
        z-index: 3;
      }
    }
  }

  .m-btn {
    padding: 0.8rem 1rem;
    min-width: 4rem;
    transition: 350ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:first-child {
      border-radius: $b-raduis 0 0 $b-raduis;
    }
    &:last-child {
      border-radius: 0 $b-raduis $b-raduis 0;
    }

    &.m-btn-active {
      background: white;
      // box-shadow: $elevation-1;
      border-color: currentColor;
    }
  }
}
</style>
