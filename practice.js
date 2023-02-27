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

var sumTotal = function (products) {
  return _.reduce(products, function(total, product) {
    return total += parseFloat(product.price.slice(1));
  }, 0);
};

var dessertCategories = function (desserts) {
  return _.reduce(desserts, function(result, dessert) {
    if (result[dessert.type]) {
      result[dessert.type]++;
    } else {
      result[dessert.type] = 1;
    }
    return result;
  }, {});
};

var countMessagesPerUser = function(tweets) {
  return _.reduce(tweets, function(totals, tweet) {
    if (totals[tweet.user]) {
      totals[tweet.user]++;
    } else {
      totals[tweet.user] = 1;
    }
    return totals;
  }, {});
};

var ninetiesKid = function (movies) {
  return _.reduce(movies, function (movies, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      movies.push(movie.title);
    }
    return movies;
  }, []);
};

var movieNight = function (movies, timeLimit) {
  return _.reduce(movies, function(result, movie) {
    return result || (movie.runtime < timeLimit);
  }, false);
};