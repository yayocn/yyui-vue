import $ from 'jquery'

export default {
  toAnchor (anchor) {
    var ele = $(`#${anchor}`)
    var top = ele.offset().top
    $('body').animate({
      scrollTop: top - 60
    }, 500, 'easeInOutExpo')
  }
}
