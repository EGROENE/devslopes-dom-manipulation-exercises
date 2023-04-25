# EVENT DELEGATION

When looping through the NodeList of nodes and adding the Event Listener to each element you create as many listeners in the DOM as many items you have in the NodeList. Imagine a NodeList of 1000 items -> it means you will have 1000 listeners which doesn't seem to be super efficient, right?

The way to decrease the number of listeners is to apply a single event listener to the container that holds all those nodes and then detect the item clicked inside of this container, calling the single listener callback.

## Example

Imagine this HTML body content with some tiny piece od CSS

```HTML
<body>
  <style>
    .container {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .item {
      width: 100%;
      background: orange;
      min-height: 50px;
    }
  </style>
  <div id="parent" class="container">
      <div id="1" class="item">1</div>
      <div id="2" class="item">2</div>
      <div id="3" class="item">3</div>
      <div id="4" class="item">4</div>
      <div id="5" class="item">5</div>
    </div>
</body>
```

Let's implement the onClick event listener through event delegation in the code that changes the color of the clicked element:

```JS
// Create a function that changes the color of a specific target
// element if it has a specific class attribute value of 'item'
const callbackFn = (e) => {
  const item = e.target;
  if (Array.from(item.classList).includes('item')) {
    if (item.style.backgroundColor === 'orange') {
      item.style.backgroundColor = 'red';
    } else {
      item.style.backgroundColor = 'orange';
    }
  }
};

// Grab the container Node by id
const container = document.getElementById('parent');

// add the eventListener to the container Node
container.addEventListener('click', callbackFn);
```
