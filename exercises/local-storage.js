/**
 * LOCAL STORAGE AND DOM MANIPULATION
 * In this task you will write some functions to let the browser save
 * some of your actions results and retrieve them when the page is reloaded.
 * You will be working with the localStorage.
 * Make sure to read the following exercise-info file/files before you start
 * * 03 LocalStorage.md
 * * 04 EventDelegation.md
 * Local Storage might be shortened to "LS" in the comments beneath.
 * @requirement
 * Event delegation MUST be used
 */

/**
 * @task
 * Implement the 'click' event that solves several tasks by the item click:
 * * If the item is NOT in favorites LS and has white background color
 * * * Changes the color of the box to red
 * * * Add the item's id to the local storage
 * * Else if the box is in favorites LS and has red color
 * * * Changes the color of the box to white
 * * * Add the item's id to the local storage
 * * Make all the items that are listed in the favorites LS save the red background color when the page is reloaded
 */

/**
 * @hint
 * Here is a plan of how you can structure your code. You can follow it or choose your own way to go
 * * Select the container that holds all the items
 * * Create a function that sets the background to be red for the item with an id listed in favorites LS
 * * Run this function
 * * Create a function that adds an id to favorites LS by id passed as an argument
 * * Create a function that deletes an id from favorites LS by id passed as an argument
 * * Create a callback function that updates the element background color and does the
 * * /~/ action with the item's id depending on if it is in LS or not. The function should
 * * /~/ do that to a specific item that has a specific class value
 * * add the event listener to the container, pass the callback.
 */

// Your code goes here...

// If localStorage.favs doesn't exist, give init it w/ a blank value (done on initial loading of page, as long as localStorage.favs was previously nonexistent):
if (!localStorage.favs) {
  localStorage.setItem("favs", " ");
}
const cardsContainer = document.getElementsByClassName("cardsContainer");
const allCards = document.getElementsByClassName("card");

const addToFavs = (id) => {
  let favsStorageData = localStorage.getItem("favs");
  favsStorageData === " " ? (favsStorageData = id) : (favsStorageData += id);
  localStorage.setItem("favs", favsStorageData);
  let item = document.getElementById(id);
  // Only set background color of cards (only elems in & including their container that have id) to red:
  if (item) {
    item.style.backgroundColor = "red";
  }
};

const delFromFavs = (id) => {
  // Remove id from localStorage.favs (must convert to array first so .splice() can be used):
  let localStorageFavsArray = Array.from(localStorage.favs);
  localStorageFavsArray.splice(localStorageFavsArray.indexOf(id), 1);
  // Convert items in updated array into a string:
  let favsStorageData = localStorageFavsArray.join("");
  // ...and set favs to this string:
  localStorage.setItem("favs", favsStorageData);
  let item = document.getElementById(id);
  // Only set background color of cards (only elems in & including their container that have id) to red:
  if (item) {
    item.style.backgroundColor = "white";
  }
};

const callback = (e) => {
  let item = e.target;
  if (!item.classList.contains("cardsContainer")) {
    if (!localStorage.favs.includes(item.id)) {
      item.style.backgroundColor = "white";
      addToFavs(item.id);
    } else if (localStorage.favs.includes(item.id)) {
      item.style.backgroundColor = "red";
      delFromFavs(item.id);
    }
  }
};

for (let container of cardsContainer) {
  container.addEventListener("click", callback);
}

for (let card of allCards) {
  if (!localStorage.favs.includes(card.id)) {
    card.style.backgroundColor = "white";
  } else {
    card.style.backgroundColor = "red";
  }
}
