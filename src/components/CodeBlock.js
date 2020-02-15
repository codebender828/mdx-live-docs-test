import VueLive from 'vue-live'

export default {
  name: 'CodeBlock',
  props: {
    live: Boolean,
    children: [String]
  },
  render (h) {
    return h(VueLive, {
      props: {
        ...this.$props,
        code: this.children || this.$slots.default
      }
    }, this.$slots.default)
  }
}
