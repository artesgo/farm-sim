<script lang="ts">
  // standard variable
  let fruit = "apple"; // string
  let fruitCount = 5; // number
  let isFruit = false; // boolean;

  // object variable, this is object notation
  let fruitObject = {
    name: "apple",
    color: "red",
    shape: "round",
    taste: "sweet",
  };

  // lists with just strings
  const boxOfFruits = ["apple", "banana", "pineapple", "mango"];

  // lists with objects
  const boxOfFruitObjects = [
    { name: "apple", color: "red" },
    { name: "banana", color: "yellow" },
    { name: "pineapple", color: "yellow" },
    { name: "mango", color: "orange" },
  ];

  // homework question one
  const justApples = boxOfFruits.filter((fruit) => {
    return fruit; // what needs to happen here to return just "apples";
  });
  const allSortsOfApples = boxOfFruits.filter((fruit) => {
    // what needs to happen in the return to return fruits
    // that contain the world "apples"
    // e.g. my list should contain both apple, and pineapple
    // return fruit.indexOf('apple') >= 0;
    // return fruit.indexOf('apple') > -1;
    return fruit.indexOf("apple") !== -1;
  });

  // homework question two
  // should use indexOf to retrieve apple object / pineapple object
  const justAppleObjects = boxOfFruitObjects.filter((fruit) => {
    // filter just needs a condition
    // something === somethingElse
    console.log(fruit.name.indexOf("apple"));
    console.log(fruit);
    return fruit;
  });

  // change the object property
  const turnTheApplesBlue = justAppleObjects.map((fruit) => {
    // returning an object
    return {
      ...fruit,
      // something here to make the apple blue
    };
  });
</script>

<div>All the fruits:</div>

{boxOfFruits}

<!-- question 3: display the blue apples -->
{#each turnTheApplesBlue as fruit}
  <div>{fruit}</div>
  <!-- i should see "blue apple" and "blue pineapple" -->
{/each}
