const user = (name = "człowieku", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    console.log(
      `Cześć ${userName}, ${userAge >= 18 ? "możesz kupić piwo." : "nie możesz kupić piwa."}`
    );
  }

  return showName;
};

const mieszko = user("Mieszko", 20);
const jagienka = user("Jagienka", 16);
mieszko();
jagienka();

const noName = user();
noName();
