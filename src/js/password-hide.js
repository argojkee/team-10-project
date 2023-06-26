$('body').on('click', '.reg-password-control', function () {
  if ($('#reg-user-password').attr('type') == 'password') {
    $(this).addClass('view');
    $('#reg-user-password').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#reg-user-password').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.reg-password-control-confirm', function () {
  if ($('#reg-user-password-confirm').attr('type') == 'password') {
    $(this).addClass('view');
    $('#reg-user-password-confirm').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#reg-user-password-confirm').attr('type', 'password');
  }
  return false;
});

$('body').on('click', '.log-password-control', function () {
  if ($('#log-user-password').attr('type') == 'password') {
    $(this).addClass('view');
    $('#log-user-password').attr('type', 'text');
  } else {
    $(this).removeClass('view');
    $('#log-user-password').attr('type', 'password');
  }
  return false;
});
