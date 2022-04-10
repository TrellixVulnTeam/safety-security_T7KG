/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}


$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  $('input[type=radio]').on('change', function () {
    var dataValue = $(this).attr('data-value')
    $('input[type=hidden]').val(dataValue)
  })
})

$('.hmrc-account-menu__link--home').attr('href','index.html');
