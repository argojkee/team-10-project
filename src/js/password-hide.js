$('body').on('click', '.password-control', function () {
  if ($('#password-input').attr('type') == 'password') {
    $(this).addClass('view');
    $('#password-input').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.password-control-repit', function () {
  if ($('#password-input-repit').attr('type') == 'password') {
    $(this).addClass('view');
    $('#password-input-repit').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input-repit').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.password-control-login', function () {
  if ($('#password-input-login').attr('type') == 'password') {
    $(this).addClass('view');
    $('#password-input-login').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#password-input-login').attr('type', 'password');
  }
  return false;
});
