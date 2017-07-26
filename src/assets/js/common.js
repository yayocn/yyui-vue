import $ from 'jquery'

export default {
  toAnchor (anchor) {
    var ele = $(`#${anchor}`)
    var top = ele.offset().top
    $(window).scrollTop(top-60)
  }
}
