import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
let Highlight = {}
Highlight.install = function () {
  Vue.directive('hljs', function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      Hljs.highlightBlock(block)
    })
  })
}

Vue.use(Highlight)

export default Highlight
