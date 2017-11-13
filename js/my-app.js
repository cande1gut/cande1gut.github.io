// Initialize app
var myApp = new Framework7({
  tapHold: true,
  material: true,
});


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
});

var first = 0;

var planView = myApp.addView('.view-plan', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  console.log("Device is ready!");
});

$$(document).on("taphold", ".mealPlan", function() {
  myApp.sortableToggle('.sortable');
});

$$('#save-button').on('click', function() {
  var formData = myApp.formToJSON('#newPlan');
  var newPlanName = formData.planName;
  var gender = formData.gender;
  var weight = parseInt(formData.weight);
  var height = parseInt(formData.height);
  var age = parseInt(formData.age);
  var exQuantity = formData.exercise;
  var tmb = 0;
  var kcalRequired = 0;

  if ($$("#planName").val() == "" || $$("#weight").val() == "" || $$("#height").val() == "" || $$("#age").val() == "") {
    myApp.alert("Pleas fill up all the input fields", "Not all fields have data");
  } else {
    if (!first) {
      first = 1;
      $$(".startingText").remove();
    }
    if (gender == "male") {
      tmb = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      tmb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    if (exQuantity == "none") {
      kcalRequired = tmb * 1.2;
    } else if (exQuantity == "light") {
      kcalRequired = tmb * 1.375;
    } else if (exQuantity == "moderate") {
      kcalRequired = tmb * 1.55;
    } else if (exQuantity == "strong") {
      kcalRequired = tmb * 1.725;
    } else {
      kcalRequired = tmb * 1.9;
    }
    var newPlan = '<li class="swipeout">' +
      '<div class="swipeout-content">' +
      '<a href="meals.html" class="item-link item-content mealPlan">' +
      '<div class="item-media"><i class="f7-icons">heart_fill<sup>info<sup></i></div>' +
      '<div class="item-inner">' +
      '<div class="item-title">' + newPlanName + '</div>' +
      '<div class="item-after"><span class="badge">' + Math.round(kcalRequired) + " Kcal" + '</span></div>' +
      '</div>' +
      '</a>' +
      '</div>' +
      '<div class="swipeout-actions-left">' +
      '<a href="#" class="swipeout-delete" data-confirm="Are you sure want to delete this plan?" data-confirm-title="Delete ' + newPlanName + '">Delete</a>' +
      '</div>' +
      '<div class="sortable-handler"></div>' +
      '</li>';
    $$("#plans").append(newPlan);
    //$$(".deleteData").val('');
    //planView.router.refreshPage();
    //mainView.router.refreshPage();
    myApp.closeModal(".popup-data");
  }
});

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('meals', function(page) {
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationHide: false,
    paginationClickable: true,
  });

  mySwiper.on('onTransitionEnd', function() {
    if (mySwiper.activeIndex == 0) {
      $$(".chip-label").html("Breakfast");
    } else if (mySwiper.activeIndex == 1) {
      $$(".chip-label").html("Lunch");
    } else if (mySwiper.activeIndex == 2) {
      $$(".chip-label").html("Collation 1");
    } else if (mySwiper.activeIndex == 3) {
      $$(".chip-label").html("Collation 2");
    } else {
      $$(".chip-label").html("Dinner");
    }
  });

  var breakfkastNo;
  var lunchNo;
  var collation1No;
  var collation2No;
  var dinnerNo;

  function getBreakfast() {
    breakfkastNo = Math.floor(Math.random() * 35170);
    breakFast = $$.getJSON("http://food2fork.com/api/get?key=8d7291d7890c53db59b0e9d94a84cb9a&rId=" + breakfkastNo, function(e) {
      $$("#breakfastImage").attr("src", e.recipe.image_url);
      $$("#breakfastTitle").html(e.recipe.title);
      for (var i = 0; i < e.recipe.ingredients.length; i++) {
        $$("#dishInfoBreakfast").append("<p>" + e.recipe.ingredients[i] + "</p>");
      }
    });
  }

  function getLunch() {
    lunchNo = Math.floor(Math.random() * 35170);
    lunch = $$.getJSON("http://food2fork.com/api/get?key=8d7291d7890c53db59b0e9d94a84cb9a&rId=" + lunchNo, function(e) {
      $$("#lunchImage").attr("src", e.recipe.image_url);
      $$("#lunchTitle").html(e.recipe.title);
      for (var i = 0; i < e.recipe.ingredients.length; i++) {
        $$("#dishInfoLunch").append("<p>" + e.recipe.ingredients[i] + "</p>");
      }
    });
  }

  function getCollation1() {
    collation1No = Math.floor(Math.random() * 35170);
    collation1 = $$.getJSON("http://food2fork.com/api/get?key=8d7291d7890c53db59b0e9d94a84cb9a&rId=" + collation1No, function(e) {
      $$("#collation1Image").attr("src", e.recipe.image_url);
      $$("#collation1Title").html(e.recipe.title);
      for (var i = 0; i < e.recipe.ingredients.length; i++) {
        $$("#dishInfoCollation1").append("<p>" + e.recipe.ingredients[i] + "</p>");
      }
    });
  }

  function getCollation2() {
    collation2No = Math.floor(Math.random() * 35170);
    collation2 = $$.getJSON("http://food2fork.com/api/get?key=8d7291d7890c53db59b0e9d94a84cb9a&rId=" + collation2No, function(e) {
      $$("#collation2Image").attr("src", e.recipe.image_url);
      $$("#collation2Title").html(e.recipe.title);
      for (var i = 0; i < e.recipe.ingredients.length; i++) {
        $$("#dishInfoCollation2").append("<p>" + e.recipe.ingredients[i] + "</p>");
      }
    });
  }

  function getDinner() {
    dinnerNo = Math.floor(Math.random() * 35170);
    dinner = $$.getJSON("http://food2fork.com/api/get?key=8d7291d7890c53db59b0e9d94a84cb9a&rId=" + dinnerNo, function(e) {
      $$("#dinnerImage").attr("src", e.recipe.image_url);
      $$("#dinnerTitle").html(e.recipe.title);
      for (var i = 0; i < e.recipe.ingredients.length; i++) {
        $$("#dishInfoDinner").append("<p>" + e.recipe.ingredients[i] + "</p>");
      }
    });
  }

  getBreakfast();
  getLunch();
  getCollation1();
  getCollation2();
  getDinner();

  function eraseBreakfast() {
    $$("#breakfastImage").attr("src", "");
    $$("#breakfastTitle").html("");
    $$("#dishInfoBreakfast").html("");
  }

  function eraseLunch() {
    $$("#lunchImage").attr("src", "");
    $$("#lunchTitle").html("");
    $$("#dishInfoLunch").html("");
  }

  function eraseCollation1() {
    $$("#collation1Image").attr("src", "");
    $$("#collation1Title").html("");
    $$("#dishInfoCollation1").html("");
  }

  function eraseCollation2() {
    $$("#collation2Image").attr("src", "");
    $$("#collation2Title").html("");
    $$("#dishInfoCollation2").html("");
  }

  function eraseDinner() {
    $$("#dinnerImage").attr("src", "");
    $$("#dinnerTitle").html("");
    $$("#dishInfoDinner").html("");
  }

  $$(".new-dish1").on("click", function() {
    eraseBreakfast();
    getBreakfast();
  });

  $$(".new-dish2").on("click", function() {
    eraseLunch();
    getLunch();
  });

  $$(".new-dish3").on("click", function() {
    eraseCollation1();
    getCollation1();
  });

  $$(".new-dish4").on("click", function() {
    eraseCollation2();
    getCollation2();
  });

  $$(".new-dish5").on("click", function() {
    eraseDinner();
    getDinner();
  });

})
