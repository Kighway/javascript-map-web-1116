const app = "I don't do much."

// In case we ever need the index of the item or the full list of items in our callback function, let's add these as arguments to our callback. The callback doesn't have to use these values, but they're there if we ever need them.

function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }

  return result;
}
