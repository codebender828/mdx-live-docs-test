export default {
  props: {
    name: String,
    components: {
      type: Object,
      default: () => ({})
    },
    props: {
      type: Object,
      default: () => ({})
    },
    Layout: Object,
    layoutProps: {
      type: Object,
      default: () => ({})
    }
  },
  inject: {
    contextComponents: {
      default: {}
    }
  },
  render (h) {
    if (this.Layout) {
      return h(this.Layout, {
        props: this.$props,
        attrs: this.layoutProps
      }, this.$slots.default)
    }
    const Component =
      this.components[this.name] ||
      this.contextComponents[this.name] ||
      this.name
    const childProps = { ...this.props }
    h(Component, {
      props: childProps
    }, this.$slots.default)
  }
}
