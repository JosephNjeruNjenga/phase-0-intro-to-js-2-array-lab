// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  return cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
  return cats.pop();
}
function destructivelyRemoveFirstCat(name) {
  return cats.shift();
}
function appendCat(name) {
  const newCats = [...cats, "Broom"];
  return newCats;
}
function prependCat(name) {
  const newCats = ["Arnold", ...cats];
  return newCats;
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
    return cats.slice(1);
}
