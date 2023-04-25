# Local and Session Storage

The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin. The stored data is saved across browser sessions.

localStorage is similar to **sessionStorage**, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. localStorage data for a document loaded in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.

The keys and the values stored with localStorage are always in the UTF-16 string format, which uses two bytes per character. As with objects, integer keys are automatically converted to strings.

The actions with local storage you need to know to have the exercise solved are:

- How to add a storage key and value
- How to retrieve data from LS by a property name
- How to update a storage property value (add/delete)

To find the local/session storage data you need to:

- Run the project with Live Server ('Go Live' button in the bottom right panel of VSCode)
- Start the Google Chrome browser in case it was not triggered by the Live Server
- Open the 127.0.0.1:5500 page (the port number will be shown on the 'Go Live' button)
- Open Chrome developer tools
- Go to the "Application" tab
- Unfold the "Local Storage" / "Session Storage" item
- Find the website URL and click on it (for the live server in VSCode the website is http://127.0.0.1:5500 by default, unless you have specified other settings for the Live Server in VSCode extension settings or you are running more than one project Live at the same time. In this case every next project gets the next number value of the port: 5501, 5502... etc).

**\*NOTE**: Make sure to play around with the code beneath. Copy it and paste into your favorite IDE to see how it works.\*

```JS
// Create a localStorage property key and set the value
localStorage.setItem("MyList", "Tom");

// Get the string value of a localStorage item by a key
const list = localStorage.getItem("MyList");

// Remove the property and the value from localStorage
localStorage.removeItem("MyList");

// Wipe out the current localStorage contents
localStorage.clear();

// Update the property of a localStorage item
// lets say we want to add "Jerry" to the
// lonely "Tom" in the MyList localStorage property
// Set the item of 'favorites' with a value of 'Tom' in the localStorage
localStorage.setItem("MyList", "Tom");

// Declare the value we are going to add to the localStorage 'favorites' property
const newItem = 'Jerry';

// Get the value of a current localStorage property
let storageData = localStorage.getItem("MyList");

// Add the desired new value separated by a comma
storageData += `,${newItem}`;

// Update the value of the property with a new value.
localStorage.setItem("MyList", storageData);

// Let's now delete 'Tom' from that storage value
// Jerry wants to stay.
// We will store tom's name in a constant first
const itemToDelete = "Tom";

// Get all the string value of the storage property, create an array
// of items right away with a split method with a comma-separator
const storageArr = localStorage.getItem("MyList").split(',');

// Delete tom from the array
storageArr.splice(storageArr.indexOf(itemToDelete), 1).join(',');

// Set the new value of the storage property
localStorage.setItem("MyList", storageArr);
```

## JSON stringify() and parse() methods with Local/Session Storage

In the previous example you've learned how to manipulate a storage property value of a simple string. Keeping complex data structures requires creating a valid JSON string from data and parsing it when retrieving the data from the local/session storage.

**\*NOTE**: Make sure to play around with the code beneath. Copy it and paste into your favorite IDE to see how it works.\*

```JS
// Create an object that keeps the data we want to store in localStorage
const data = {
  items: [1, 2, 3];
}

// Store data in the 'favorites' property of localStorage
localStorage.setItem("favorites", JSON.stringify(data));

// Retrieve favorites property value from localStorage as a valid JSON string
const storageFavsDataRaw = localStorage.getItem("favorites");

// Parse the data into an object and log the object in console output
const updatedData = JSON.parse(storageFavsDataRaw);
console.log(updatedData);

/**
 * OUTPUT:
 * { items: [1, 2, 3] }
*/

// Add a new value to the items array and store updated data in the localStorage
updatedData.items.push(4);
localStorage.setItem("favorites", JSON.stringify(updatedData));
```

## Sources

- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) \*[JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
