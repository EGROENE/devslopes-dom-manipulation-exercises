# Sorting Nodes inside a DOM Element #

Sorting something requires the sorting method with a callback of a sorting function to be applied to an array. As far as you remember form the SelectNodes.md file the structures returned from the DOM methods are not JavaScript types of structures, but a part of the DOM API, which means that some of the array methods will not work until we crate an array from the Node list / node children list.

```HTML
<!-- body contents -->
<div id="container" class="items-container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

The logic of sorting the nodes in the list by the id attribute value or the innerText/innerHTML value is the following:

* Grab all the items
* Create an array from the list of items grabbed
* Create a sorting function
* Sort the array applying the sort method with the sorting function as a callback
* Append every child of the sorted array back to the parent Node.

You will need:
* ``Array.from()`` method, which creates a new, shallow-copied Array instance from an iterable or array-like object.
* ``Array.sort()`` method, that sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```JS
// Get the node of the parent container
const parentContainer = document.getElementById('container');

// Get the NodeList of items to sort
const nodeList = document.querySelectorAll('.item');

// Create an array from the list
const newArr = Array.from(nodeList);

// Create a sorting function ('desc' || 'Z-A')
const sortCB = (a, b) => {
  if (a.innerHtml < b.innerHtml) return 1;
  else if (a.innerHtml > b.innerHtml) return -1;
  else return 0;
}

// Sort the array
newArr.sort(sortCB);

// Append every child of the sorted array back to the parent Node of the nodeList.
newArr.forEach((item) => {
  container.append(item);
});
```

## Sources ##
* [Array.from](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
* [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
