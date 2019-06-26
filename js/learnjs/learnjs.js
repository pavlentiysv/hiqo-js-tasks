function ljs2_2() {
  alert('Minecraft - это моя жизнь!');
}

function ljs2_5() {
  var admin, name;
  name = 'Василий';
  admin = name;
  alert(admin);
}

function ljs2_12_1() {
  var answer;
  answer = prompt('Каково «официальное» название JavaScript?');

  if (answer == 'ECMAScript') {
    alert('Верно!');
  } else {
    alert('Не знаете? «ECMAScript»!');
  }
}

function ljs2_12_2() {
  var value;
  value = prompt('Введите любое число');

  if (value > 0) {
    alert(1);
  } else if (value < 0) {
    alert(-1);
  } else {
    alert(0);
  }
}

function ljs2_12_3() {
  var login;
  login = prompt('Кто пришел?');

  if (login == 'Админ') {
    var password;
    password = prompt('Пароль?');

    if (password == 'Черный Властелин') {
      alert('Добро пожаловать!');
    } else if (password == null) {
      alert('Вход отменен');
    } else {
      alert('Пароль неверен');
    }
  } else if (login == null) {
    alert('Вход отменен');
  } else {
    alert('Я вас не знаю');
  }
}
