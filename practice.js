// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit) {
    results.push(fruit);
  });

  return results;
};

var multiplesOfFive = function (numbers) {
  var multiplesOfFive = 0;
  _.each(numbers, function(num) {
    if (num % 5 === 0) {
      multiplesOfFive++;
    }
  });

  return multiplesOfFive;
};

var getUserTweets = function(tweets, user) {
  var usersTweets = [];

  _.each(tweets, function(tweet) {
    if (tweet.user === user) {
      usersTweets.push(tweet);
    }
  });
  return usersTweets;
};

var onlyOneFruit = function (fruits, targetFruit) {
  return _.filter(fruits, function(fruit) {
    if (fruit === targetFruit) {
      return fruit;
    }
  });
};

var startsWith = function (fruits, letter) {
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

var cookiesOnly = function (desserts) {
  return _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
};

var filterUserTweets = function(tweets, user) {
  return _.filter(tweets, function(tweet) {
    return tweet.user === user;
  });
};

var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

var glutenFree = function (desserts) {
  return _.map(desserts, function(dessert) {
    dessert['glutenFree'] = true;
    if (dessert['ingredients'].includes('flour')) {
      dessert['glutenFree'] = false;
    }
    return dessert;
  });
};

var allUserMessages = function(tweets) {
  return _.map(tweets, function(tweet) {
    return tweet.message;
  });
};

var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(grocery) {
    grocery['salePrice'] = '$';
    var groceryPrice = parseFloat(grocery.price.slice(1));
    grocery['salePrice'] += String((groceryPrice * (1 - coupon)).toFixed(2));
    return grocery;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {

};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {

};
