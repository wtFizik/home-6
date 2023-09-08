const users = {};

for (let i = 1; i <= 5; i++) {
  const name = prompt(`Введите имя пользователя ${i}:`);
  const age = parseInt(prompt(`Введите возраст пользователя ${i}:`));

  if (name && !isNaN(age)) {
    users[`Пользователь - ${i}`] = {
      Имя: name,
      Возраст: age,
    };
  } else {
    alert("Некорректные данные. Пожалуйста, введите имя и возраст.");
    i--;
  }
}

for (const key in users) {
  console.log(key);
  console.log(`Имя - ${users[key].Имя}`);
  console.log(`Возраст - ${users[key].Возраст}`);
}


console.log(users);

