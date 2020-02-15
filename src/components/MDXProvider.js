export default {
  name: 'MDXProvider',
  props: {
    components: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  provide () {
    return {
      $contextComponents: () => this.components
    }
  },
  render () {
    return this.$slots.default
  }
}
