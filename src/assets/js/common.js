import $ from 'jquery'

export default {
  toAnchor (anchor) {
    var ele = $(`#${anchor}`)
    var top = ele.offset().top
    $('body').animate({
      scrollTop: top
    }, 500, 'easeInOutExpo')
  }
}
