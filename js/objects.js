 const user = {
    firstName: "Nikita",
    lastName: "Khaitul",
    age: 15,
    height: 181,
    weight: 64,
    hobby: ["football", "programming"],
    doHomework: function(subject) {
        console.log(`Зараз роблю домашку з ${subject}.`);
 },
 takeWalk: function(weather) {
    if (weather === "сонячно") {
      console.log("Дуже гарний день для прогулянки. Піду погуляю.");
    } else {
      console.log("Сьогодні залишусь вдома.");
    }
  }};
  console.log(user);
  

  function convertToMiles(kilometers) {
    const miles = kilometers * 0.6214;
    return miles;
  }
  const distanceInKilometers = 5;
const distanceInMiles = convertToMiles(distanceInKilometers);
console.log(distanceInMiles);


function spliceArr(array) {
    const start = array.indexOf("Orange");
    array.splice(start, 1, "Grapefruit");
    return array;
}
    const fruits = spliceArr (["Apple", "Orange", "Plum"]);
    console.log(fruits);
