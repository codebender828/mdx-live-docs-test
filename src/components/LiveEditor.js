import 'prism-theme-night-owl'
import 'vue-prism-editor/dist/VuePrismEditor.css'
import LiveEditorLayout from '@/components/LiveEditorLayout'

const LiveEditor = {
  name: 'LiveEditor',
  computed: {
    components () {
      return this.$contextComponents()
    }
  },
  render (h) {
    const children = this.$slots.default[0]
    const innerText = children.text
    return h('VueLive', {
      props: {
        code: innerText,
        layout: LiveEditorLayout
      }
    })
  }
}

export default LiveEditor
