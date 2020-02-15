
<template>
  <div id="app">
    <h1>Hello MDX</h1>
    <Test />
  </div>
</template>

<script>
import Test from './test.mdx'

export default {
  name: 'app',
  components: {
    Test
  }
}
</script>

<style>
/* .vuep {
  display: grid !important;
  grid-template-rows: auto auto !important;
  border-radius: 5px !important;
  overflow: hidden !important;
  height: 400px !important;
}

.vuep-editor,
.vuep-preview {
  width: 100% !important;
}

.vuep-editor {
  grid-row: 2 !important;
  height: auto;
}

.vuep-preview {
  grid-row: 1 !important;
} */

.CodeMirror {
  font-family: 'Menlo', monospace !important;
  font-size: 0.85em !important;
}
</style>
