const recipeDB = [
  {
    "name": "Baked Anchovy",
    "ingredients": [
      "water",
      "sugar",
      "oil",
      "salt"
    ],
    "steps": "Prepare the baked anchovy using water, sugar, oil, and finish with salt."
  },
  {
    "name": "Baked Avocado",
    "ingredients": [
      "cheese",
      "water",
      "ginger",
      "garlic",
      "onion",
      "cream"
    ],
    "steps": "Prepare the baked avocado using cheese, water, ginger, garlic, onion, and finish with cream."
  },
  {
    "name": "Baked Banana",
    "ingredients": [
      "ginger",
      "cream",
      "sugar",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the baked banana using ginger, cream, sugar, garlic, and finish with chili."
  },
  {
    "name": "Baked Barfi",
    "ingredients": [
      "spices",
      "garlic",
      "milk",
      "butter",
      "pepper",
      "sugar"
    ],
    "steps": "Prepare the baked barfi using spices, garlic, milk, butter, pepper, and finish with sugar."
  },
  {
    "name": "Baked Beans",
    "ingredients": [
      "oil",
      "salt",
      "tomato",
      "ginger",
      "water"
    ],
    "steps": "Prepare the baked beans using oil, salt, tomato, ginger, and finish with water."
  },
  {
    "name": "Baked Bibimbap",
    "ingredients": [
      "onion",
      "cream",
      "tomato"
    ],
    "steps": "Prepare the baked bibimbap using onion, cream, and finish with tomato."
  },
  {
    "name": "Baked Broccoli",
    "ingredients": [
      "chili",
      "ginger",
      "egg",
      "milk",
      "vinegar"
    ],
    "steps": "Prepare the baked broccoli using chili, ginger, egg, milk, and finish with vinegar."
  },
  {
    "name": "Baked Brownie",
    "ingredients": [
      "cheese",
      "water",
      "tomato",
      "chili"
    ],
    "steps": "Prepare the baked brownie using cheese, water, tomato, and finish with chili."
  },
  {
    "name": "Baked Burger",
    "ingredients": [
      "egg",
      "tomato",
      "water"
    ],
    "steps": "Prepare the baked burger using egg, tomato, and finish with water."
  },
  {
    "name": "Baked Burrito",
    "ingredients": [
      "onion",
      "flour",
      "sugar"
    ],
    "steps": "Prepare the baked burrito using onion, flour, and finish with sugar."
  },
  {
    "name": "Baked Cauliflower",
    "ingredients": [
      "onion",
      "herbs",
      "milk",
      "egg",
      "flour"
    ],
    "steps": "Prepare the baked cauliflower using onion, herbs, milk, egg, and finish with flour."
  },
  {
    "name": "Baked Chicken",
    "ingredients": [
      "ginger",
      "egg",
      "vinegar",
      "butter",
      "onion"
    ],
    "steps": "Prepare the baked chicken using ginger, egg, vinegar, butter, and finish with onion."
  },
  {
    "name": "Baked Chili",
    "ingredients": [
      "milk",
      "tomato",
      "salt",
      "ginger",
      "onion",
      "flour"
    ],
    "steps": "Prepare the baked chili using milk, tomato, salt, ginger, onion, and finish with flour."
  },
  {
    "name": "Baked Chocolate",
    "ingredients": [
      "oil",
      "salt",
      "flour",
      "cheese"
    ],
    "steps": "Prepare the baked chocolate using oil, salt, flour, and finish with cheese."
  },
  {
    "name": "Baked Clove",
    "ingredients": [
      "onion",
      "oil",
      "cream"
    ],
    "steps": "Prepare the baked clove using onion, oil, and finish with cream."
  },
  {
    "name": "Baked Coconut",
    "ingredients": [
      "chili",
      "egg",
      "butter"
    ],
    "steps": "Prepare the baked coconut using chili, egg, and finish with butter."
  },
  {
    "name": "Baked Corn",
    "ingredients": [
      "vinegar",
      "egg",
      "cheese"
    ],
    "steps": "Prepare the baked corn using vinegar, egg, and finish with cheese."
  },
  {
    "name": "Baked Crab",
    "ingredients": [
      "spices",
      "chili",
      "garlic",
      "salt",
      "egg",
      "onion"
    ],
    "steps": "Prepare the baked crab using spices, chili, garlic, salt, egg, and finish with onion."
  },
  {
    "name": "Baked Cucumber",
    "ingredients": [
      "pepper",
      "chili",
      "water",
      "cheese",
      "oil"
    ],
    "steps": "Prepare the baked cucumber using pepper, chili, water, cheese, and finish with oil."
  },
  {
    "name": "Baked Donut",
    "ingredients": [
      "onion",
      "butter",
      "milk"
    ],
    "steps": "Prepare the baked donut using onion, butter, and finish with milk."
  },
  {
    "name": "Baked Duck",
    "ingredients": [
      "salt",
      "butter",
      "spices"
    ],
    "steps": "Prepare the baked duck using salt, butter, and finish with spices."
  },
  {
    "name": "Baked Eggplant",
    "ingredients": [
      "ginger",
      "flour",
      "herbs",
      "pepper"
    ],
    "steps": "Prepare the baked eggplant using ginger, flour, herbs, and finish with pepper."
  },
  {
    "name": "Baked Fig",
    "ingredients": [
      "tomato",
      "butter",
      "chili"
    ],
    "steps": "Prepare the baked fig using tomato, butter, and finish with chili."
  },
  {
    "name": "Baked Flour",
    "ingredients": [
      "garlic",
      "water",
      "milk",
      "flour",
      "ginger",
      "tomato"
    ],
    "steps": "Prepare the baked flour using garlic, water, milk, flour, ginger, and finish with tomato."
  },
  {
    "name": "Baked Garlic",
    "ingredients": [
      "chili",
      "cheese",
      "flour",
      "salt",
      "butter",
      "ginger"
    ],
    "steps": "Prepare the baked garlic using chili, cheese, flour, salt, butter, and finish with ginger."
  },
  {
    "name": "Baked Ginger",
    "ingredients": [
      "herbs",
      "tomato",
      "sugar",
      "spices",
      "flour",
      "milk"
    ],
    "steps": "Prepare the baked ginger using herbs, tomato, sugar, spices, flour, and finish with milk."
  },
  {
    "name": "Baked Gnocchi",
    "ingredients": [
      "ginger",
      "milk",
      "herbs",
      "onion",
      "garlic",
      "flour"
    ],
    "steps": "Prepare the baked gnocchi using ginger, milk, herbs, onion, garlic, and finish with flour."
  },
  {
    "name": "Baked Gulab Jamun",
    "ingredients": [
      "cream",
      "oil",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the baked gulab jamun using cream, oil, garlic, and finish with chili."
  },
  {
    "name": "Baked Hazelnut",
    "ingredients": [
      "cheese",
      "salt",
      "pepper",
      "cream",
      "ginger"
    ],
    "steps": "Prepare the baked hazelnut using cheese, salt, pepper, cream, and finish with ginger."
  },
  {
    "name": "Baked Hotdog",
    "ingredients": [
      "oil",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the baked hotdog using oil, sugar, and finish with onion."
  },
  {
    "name": "Baked Ice Cream",
    "ingredients": [
      "egg",
      "chili",
      "oil",
      "spices",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the baked ice cream using egg, chili, oil, spices, cheese, and finish with sugar."
  },
  {
    "name": "Baked Kebab",
    "ingredients": [
      "salt",
      "vinegar",
      "oil"
    ],
    "steps": "Prepare the baked kebab using salt, vinegar, and finish with oil."
  },
  {
    "name": "Baked Kheer",
    "ingredients": [
      "flour",
      "chili",
      "ginger",
      "herbs",
      "oil",
      "sugar"
    ],
    "steps": "Prepare the baked kheer using flour, chili, ginger, herbs, oil, and finish with sugar."
  },
  {
    "name": "Baked Kimchi",
    "ingredients": [
      "milk",
      "sugar",
      "chili",
      "flour"
    ],
    "steps": "Prepare the baked kimchi using milk, sugar, chili, and finish with flour."
  },
  {
    "name": "Baked Lemon",
    "ingredients": [
      "chili",
      "cheese",
      "egg"
    ],
    "steps": "Prepare the baked lemon using chili, cheese, and finish with egg."
  },
  {
    "name": "Baked Lettuce",
    "ingredients": [
      "flour",
      "cream",
      "water",
      "salt",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the baked lettuce using flour, cream, water, salt, garlic, and finish with chili."
  },
  {
    "name": "Baked Lime",
    "ingredients": [
      "herbs",
      "egg",
      "oil",
      "ginger"
    ],
    "steps": "Prepare the baked lime using herbs, egg, oil, and finish with ginger."
  },
  {
    "name": "Baked Lobster",
    "ingredients": [
      "butter",
      "onion",
      "tomato",
      "spices",
      "pepper"
    ],
    "steps": "Prepare the baked lobster using butter, onion, tomato, spices, and finish with pepper."
  },
  {
    "name": "Baked Mackerel",
    "ingredients": [
      "pepper",
      "tomato",
      "butter",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the baked mackerel using pepper, tomato, butter, cheese, and finish with sugar."
  },
  {
    "name": "Baked Mango",
    "ingredients": [
      "butter",
      "egg",
      "cream"
    ],
    "steps": "Prepare the baked mango using butter, egg, and finish with cream."
  },
  {
    "name": "Baked Milk",
    "ingredients": [
      "herbs",
      "spices",
      "ginger",
      "sugar",
      "garlic"
    ],
    "steps": "Prepare the baked milk using herbs, spices, ginger, sugar, and finish with garlic."
  },
  {
    "name": "Baked Naan",
    "ingredients": [
      "cheese",
      "pepper",
      "spices"
    ],
    "steps": "Prepare the baked naan using cheese, pepper, and finish with spices."
  },
  {
    "name": "Baked Nutmeg",
    "ingredients": [
      "flour",
      "herbs",
      "onion",
      "oil",
      "sugar",
      "butter"
    ],
    "steps": "Prepare the baked nutmeg using flour, herbs, onion, oil, sugar, and finish with butter."
  },
  {
    "name": "Baked Oats",
    "ingredients": [
      "onion",
      "garlic",
      "oil",
      "herbs",
      "pepper"
    ],
    "steps": "Prepare the baked oats using onion, garlic, oil, herbs, and finish with pepper."
  },
  {
    "name": "Baked Oil",
    "ingredients": [
      "herbs",
      "cheese",
      "oil",
      "water",
      "butter",
      "cream"
    ],
    "steps": "Prepare the baked oil using herbs, cheese, oil, water, butter, and finish with cream."
  },
  {
    "name": "Baked Onion",
    "ingredients": [
      "cheese",
      "herbs",
      "egg",
      "milk",
      "onion"
    ],
    "steps": "Prepare the baked onion using cheese, herbs, egg, milk, and finish with onion."
  },
  {
    "name": "Baked Parsley",
    "ingredients": [
      "spices",
      "oil",
      "onion",
      "herbs",
      "egg"
    ],
    "steps": "Prepare the baked parsley using spices, oil, onion, herbs, and finish with egg."
  },
  {
    "name": "Baked Peanut",
    "ingredients": [
      "pepper",
      "onion",
      "sugar",
      "vinegar",
      "tomato",
      "flour"
    ],
    "steps": "Prepare the baked peanut using pepper, onion, sugar, vinegar, tomato, and finish with flour."
  },
  {
    "name": "Baked Peas",
    "ingredients": [
      "tomato",
      "garlic",
      "vinegar"
    ],
    "steps": "Prepare the baked peas using tomato, garlic, and finish with vinegar."
  },
  {
    "name": "Baked Pepper",
    "ingredients": [
      "onion",
      "spices",
      "water",
      "cheese"
    ],
    "steps": "Prepare the baked pepper using onion, spices, water, and finish with cheese."
  },
  {
    "name": "Baked Pho",
    "ingredients": [
      "vinegar",
      "pepper",
      "onion"
    ],
    "steps": "Prepare the baked pho using vinegar, pepper, and finish with onion."
  },
  {
    "name": "Baked Pickles",
    "ingredients": [
      "cheese",
      "ginger",
      "milk",
      "oil",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the baked pickles using cheese, ginger, milk, oil, pepper, and finish with egg."
  },
  {
    "name": "Baked Pie",
    "ingredients": [
      "chili",
      "milk",
      "salt"
    ],
    "steps": "Prepare the baked pie using chili, milk, and finish with salt."
  },
  {
    "name": "Baked Pizza",
    "ingredients": [
      "water",
      "cream",
      "flour",
      "cheese",
      "butter"
    ],
    "steps": "Prepare the baked pizza using water, cream, flour, cheese, and finish with butter."
  },
  {
    "name": "Baked Popsicle",
    "ingredients": [
      "spices",
      "cream",
      "ginger",
      "water",
      "milk",
      "egg"
    ],
    "steps": "Prepare the baked popsicle using spices, cream, ginger, water, milk, and finish with egg."
  },
  {
    "name": "Baked Potato",
    "ingredients": [
      "vinegar",
      "spices",
      "cream",
      "water"
    ],
    "steps": "Prepare the baked potato using vinegar, spices, cream, and finish with water."
  },
  {
    "name": "Baked Pudding",
    "ingredients": [
      "flour",
      "onion",
      "water"
    ],
    "steps": "Prepare the baked pudding using flour, onion, and finish with water."
  },
  {
    "name": "Baked Pumpkin",
    "ingredients": [
      "egg",
      "garlic",
      "water"
    ],
    "steps": "Prepare the baked pumpkin using egg, garlic, and finish with water."
  },
  {
    "name": "Baked Quesadilla",
    "ingredients": [
      "salt",
      "ginger",
      "tomato",
      "sugar",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the baked quesadilla using salt, ginger, tomato, sugar, garlic, and finish with chili."
  },
  {
    "name": "Baked Raspberry",
    "ingredients": [
      "flour",
      "garlic",
      "herbs",
      "cheese",
      "tomato"
    ],
    "steps": "Prepare the baked raspberry using flour, garlic, herbs, cheese, and finish with tomato."
  },
  {
    "name": "Baked Rice",
    "ingredients": [
      "flour",
      "pepper",
      "milk"
    ],
    "steps": "Prepare the baked rice using flour, pepper, and finish with milk."
  },
  {
    "name": "Baked Roti",
    "ingredients": [
      "water",
      "vinegar",
      "butter",
      "egg",
      "cream"
    ],
    "steps": "Prepare the baked roti using water, vinegar, butter, egg, and finish with cream."
  },
  {
    "name": "Baked Salmon",
    "ingredients": [
      "sugar",
      "cheese",
      "oil",
      "egg",
      "water",
      "ginger"
    ],
    "steps": "Prepare the baked salmon using sugar, cheese, oil, egg, water, and finish with ginger."
  },
  {
    "name": "Baked Samosa",
    "ingredients": [
      "milk",
      "cheese",
      "cream"
    ],
    "steps": "Prepare the baked samosa using milk, cheese, and finish with cream."
  },
  {
    "name": "Baked Sandwich",
    "ingredients": [
      "vinegar",
      "pepper",
      "onion",
      "egg",
      "salt",
      "spices"
    ],
    "steps": "Prepare the baked sandwich using vinegar, pepper, onion, egg, salt, and finish with spices."
  },
  {
    "name": "Baked Sausage",
    "ingredients": [
      "salt",
      "egg",
      "herbs"
    ],
    "steps": "Prepare the baked sausage using salt, egg, and finish with herbs."
  },
  {
    "name": "Baked Shawarma",
    "ingredients": [
      "vinegar",
      "sugar",
      "ginger"
    ],
    "steps": "Prepare the baked shawarma using vinegar, sugar, and finish with ginger."
  },
  {
    "name": "Baked Shrimp",
    "ingredients": [
      "flour",
      "chili",
      "egg",
      "ginger",
      "cream"
    ],
    "steps": "Prepare the baked shrimp using flour, chili, egg, ginger, and finish with cream."
  },
  {
    "name": "Baked Soup",
    "ingredients": [
      "salt",
      "water",
      "cheese",
      "herbs",
      "sugar",
      "flour"
    ],
    "steps": "Prepare the baked soup using salt, water, cheese, herbs, sugar, and finish with flour."
  },
  {
    "name": "Baked Spring Roll",
    "ingredients": [
      "chili",
      "ginger",
      "sugar",
      "cream",
      "herbs"
    ],
    "steps": "Prepare the baked spring roll using chili, ginger, sugar, cream, and finish with herbs."
  },
  {
    "name": "Baked Tabbouleh",
    "ingredients": [
      "cream",
      "flour",
      "tomato",
      "milk",
      "spices",
      "water"
    ],
    "steps": "Prepare the baked tabbouleh using cream, flour, tomato, milk, spices, and finish with water."
  },
  {
    "name": "Baked Tempura",
    "ingredients": [
      "milk",
      "pepper",
      "oil",
      "spices",
      "tomato"
    ],
    "steps": "Prepare the baked tempura using milk, pepper, oil, spices, and finish with tomato."
  },
  {
    "name": "Baked Tofu",
    "ingredients": [
      "oil",
      "water",
      "chili",
      "garlic",
      "butter",
      "vinegar"
    ],
    "steps": "Prepare the baked tofu using oil, water, chili, garlic, butter, and finish with vinegar."
  },
  {
    "name": "Baked Turnip",
    "ingredients": [
      "butter",
      "sugar",
      "water",
      "cream"
    ],
    "steps": "Prepare the baked turnip using butter, sugar, water, and finish with cream."
  },
  {
    "name": "Baked Udon",
    "ingredients": [
      "garlic",
      "egg",
      "herbs",
      "vinegar",
      "milk"
    ],
    "steps": "Prepare the baked udon using garlic, egg, herbs, vinegar, and finish with milk."
  },
  {
    "name": "Baked Vinegar",
    "ingredients": [
      "cream",
      "vinegar",
      "flour",
      "oil",
      "salt",
      "ginger"
    ],
    "steps": "Prepare the baked vinegar using cream, vinegar, flour, oil, salt, and finish with ginger."
  },
  {
    "name": "Baked Waffle",
    "ingredients": [
      "egg",
      "cream",
      "onion",
      "flour",
      "pepper",
      "water"
    ],
    "steps": "Prepare the baked waffle using egg, cream, onion, flour, pepper, and finish with water."
  },
  {
    "name": "Baked Walnut",
    "ingredients": [
      "herbs",
      "flour",
      "spices",
      "egg"
    ],
    "steps": "Prepare the baked walnut using herbs, flour, spices, and finish with egg."
  },
  {
    "name": "Baked Watermelon",
    "ingredients": [
      "onion",
      "sugar",
      "vinegar",
      "ginger"
    ],
    "steps": "Prepare the baked watermelon using onion, sugar, vinegar, and finish with ginger."
  },
  {
    "name": "Baked Yogurt",
    "ingredients": [
      "ginger",
      "egg",
      "cheese",
      "vinegar",
      "tomato"
    ],
    "steps": "Prepare the baked yogurt using ginger, egg, cheese, vinegar, and finish with tomato."
  },
  {
    "name": "Baked Zucchini",
    "ingredients": [
      "butter",
      "egg",
      "tomato",
      "chili",
      "flour"
    ],
    "steps": "Prepare the baked zucchini using butter, egg, tomato, chili, and finish with flour."
  },
  {
    "name": "Boiled Avocado",
    "ingredients": [
      "garlic",
      "butter",
      "oil",
      "water",
      "egg"
    ],
    "steps": "Prepare the boiled avocado using garlic, butter, oil, water, and finish with egg."
  },
  {
    "name": "Boiled Bagel",
    "ingredients": [
      "chili",
      "egg",
      "flour"
    ],
    "steps": "Prepare the boiled bagel using chili, egg, and finish with flour."
  },
  {
    "name": "Boiled Barfi",
    "ingredients": [
      "oil",
      "egg",
      "spices",
      "ginger"
    ],
    "steps": "Prepare the boiled barfi using oil, egg, spices, and finish with ginger."
  },
  {
    "name": "Boiled Barley",
    "ingredients": [
      "sugar",
      "egg",
      "ginger",
      "vinegar",
      "tomato",
      "chili"
    ],
    "steps": "Prepare the boiled barley using sugar, egg, ginger, vinegar, tomato, and finish with chili."
  },
  {
    "name": "Boiled Basil",
    "ingredients": [
      "salt",
      "water",
      "sugar",
      "cream",
      "chili"
    ],
    "steps": "Prepare the boiled basil using salt, water, sugar, cream, and finish with chili."
  },
  {
    "name": "Boiled Beans",
    "ingredients": [
      "pepper",
      "cream",
      "egg"
    ],
    "steps": "Prepare the boiled beans using pepper, cream, and finish with egg."
  },
  {
    "name": "Boiled Blueberry",
    "ingredients": [
      "milk",
      "chili",
      "water",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the boiled blueberry using milk, chili, water, sugar, and finish with onion."
  },
  {
    "name": "Boiled Brownie",
    "ingredients": [
      "vinegar",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the boiled brownie using vinegar, pepper, and finish with egg."
  },
  {
    "name": "Boiled Butter",
    "ingredients": [
      "flour",
      "ginger",
      "onion"
    ],
    "steps": "Prepare the boiled butter using flour, ginger, and finish with onion."
  },
  {
    "name": "Boiled Cake",
    "ingredients": [
      "spices",
      "flour",
      "ginger",
      "egg",
      "vinegar"
    ],
    "steps": "Prepare the boiled cake using spices, flour, ginger, egg, and finish with vinegar."
  },
  {
    "name": "Boiled Carrot",
    "ingredients": [
      "onion",
      "egg",
      "cream",
      "vinegar"
    ],
    "steps": "Prepare the boiled carrot using onion, egg, cream, and finish with vinegar."
  },
  {
    "name": "Boiled Casserole",
    "ingredients": [
      "egg",
      "cheese",
      "chili",
      "pepper",
      "onion"
    ],
    "steps": "Prepare the boiled casserole using egg, cheese, chili, pepper, and finish with onion."
  },
  {
    "name": "Boiled Celery",
    "ingredients": [
      "egg",
      "garlic",
      "water",
      "flour"
    ],
    "steps": "Prepare the boiled celery using egg, garlic, water, and finish with flour."
  },
  {
    "name": "Boiled Cheese",
    "ingredients": [
      "oil",
      "egg",
      "milk"
    ],
    "steps": "Prepare the boiled cheese using oil, egg, and finish with milk."
  },
  {
    "name": "Boiled Chow Mein",
    "ingredients": [
      "pepper",
      "garlic",
      "cream"
    ],
    "steps": "Prepare the boiled chow mein using pepper, garlic, and finish with cream."
  },
  {
    "name": "Boiled Chutney",
    "ingredients": [
      "garlic",
      "herbs",
      "water",
      "pepper"
    ],
    "steps": "Prepare the boiled chutney using garlic, herbs, water, and finish with pepper."
  },
  {
    "name": "Boiled Crepe",
    "ingredients": [
      "egg",
      "water",
      "spices",
      "butter",
      "milk"
    ],
    "steps": "Prepare the boiled crepe using egg, water, spices, butter, and finish with milk."
  },
  {
    "name": "Boiled Cucumber",
    "ingredients": [
      "spices",
      "salt",
      "chili",
      "butter"
    ],
    "steps": "Prepare the boiled cucumber using spices, salt, chili, and finish with butter."
  },
  {
    "name": "Boiled Curry",
    "ingredients": [
      "milk",
      "vinegar",
      "egg",
      "cream",
      "pepper"
    ],
    "steps": "Prepare the boiled curry using milk, vinegar, egg, cream, and finish with pepper."
  },
  {
    "name": "Boiled Date",
    "ingredients": [
      "spices",
      "garlic",
      "vinegar",
      "oil",
      "butter"
    ],
    "steps": "Prepare the boiled date using spices, garlic, vinegar, oil, and finish with butter."
  },
  {
    "name": "Boiled Donut",
    "ingredients": [
      "herbs",
      "cream",
      "onion",
      "garlic"
    ],
    "steps": "Prepare the boiled donut using herbs, cream, onion, and finish with garlic."
  },
  {
    "name": "Boiled Dosa",
    "ingredients": [
      "water",
      "milk",
      "vinegar"
    ],
    "steps": "Prepare the boiled dosa using water, milk, and finish with vinegar."
  },
  {
    "name": "Boiled Duck",
    "ingredients": [
      "onion",
      "tomato",
      "ginger",
      "milk",
      "flour",
      "sugar"
    ],
    "steps": "Prepare the boiled duck using onion, tomato, ginger, milk, flour, and finish with sugar."
  },
  {
    "name": "Boiled Dumpling",
    "ingredients": [
      "salt",
      "garlic",
      "cheese",
      "ginger"
    ],
    "steps": "Prepare the boiled dumpling using salt, garlic, cheese, and finish with ginger."
  },
  {
    "name": "Boiled Eggplant",
    "ingredients": [
      "butter",
      "egg",
      "milk"
    ],
    "steps": "Prepare the boiled eggplant using butter, egg, and finish with milk."
  },
  {
    "name": "Boiled Falafel",
    "ingredients": [
      "onion",
      "butter",
      "chili"
    ],
    "steps": "Prepare the boiled falafel using onion, butter, and finish with chili."
  },
  {
    "name": "Boiled Fish",
    "ingredients": [
      "flour",
      "water",
      "butter",
      "vinegar"
    ],
    "steps": "Prepare the boiled fish using flour, water, butter, and finish with vinegar."
  },
  {
    "name": "Boiled Gelato",
    "ingredients": [
      "garlic",
      "milk",
      "egg",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the boiled gelato using garlic, milk, egg, cheese, and finish with sugar."
  },
  {
    "name": "Boiled Ginger",
    "ingredients": [
      "vinegar",
      "garlic",
      "salt",
      "onion",
      "tomato",
      "cream"
    ],
    "steps": "Prepare the boiled ginger using vinegar, garlic, salt, onion, tomato, and finish with cream."
  },
  {
    "name": "Boiled Goose",
    "ingredients": [
      "egg",
      "oil",
      "pepper",
      "onion",
      "garlic"
    ],
    "steps": "Prepare the boiled goose using egg, oil, pepper, onion, and finish with garlic."
  },
  {
    "name": "Boiled Granola",
    "ingredients": [
      "spices",
      "ginger",
      "water",
      "butter",
      "milk"
    ],
    "steps": "Prepare the boiled granola using spices, ginger, water, butter, and finish with milk."
  },
  {
    "name": "Boiled Grape",
    "ingredients": [
      "chili",
      "garlic",
      "tomato",
      "ginger",
      "pepper",
      "milk"
    ],
    "steps": "Prepare the boiled grape using chili, garlic, tomato, ginger, pepper, and finish with milk."
  },
  {
    "name": "Boiled Halwa",
    "ingredients": [
      "oil",
      "flour",
      "chili",
      "vinegar",
      "garlic"
    ],
    "steps": "Prepare the boiled halwa using oil, flour, chili, vinegar, and finish with garlic."
  },
  {
    "name": "Boiled Honey",
    "ingredients": [
      "oil",
      "milk",
      "water",
      "cream",
      "salt",
      "spices"
    ],
    "steps": "Prepare the boiled honey using oil, milk, water, cream, salt, and finish with spices."
  },
  {
    "name": "Boiled Jam",
    "ingredients": [
      "spices",
      "herbs",
      "flour"
    ],
    "steps": "Prepare the boiled jam using spices, herbs, and finish with flour."
  },
  {
    "name": "Boiled Kimchi",
    "ingredients": [
      "egg",
      "vinegar",
      "sugar"
    ],
    "steps": "Prepare the boiled kimchi using egg, vinegar, and finish with sugar."
  },
  {
    "name": "Boiled Laddu",
    "ingredients": [
      "chili",
      "spices",
      "tomato",
      "oil"
    ],
    "steps": "Prepare the boiled laddu using chili, spices, tomato, and finish with oil."
  },
  {
    "name": "Boiled Lasagna",
    "ingredients": [
      "pepper",
      "flour",
      "herbs",
      "vinegar",
      "ginger"
    ],
    "steps": "Prepare the boiled lasagna using pepper, flour, herbs, vinegar, and finish with ginger."
  },
  {
    "name": "Boiled Lemon",
    "ingredients": [
      "ginger",
      "egg",
      "salt"
    ],
    "steps": "Prepare the boiled lemon using ginger, egg, and finish with salt."
  },
  {
    "name": "Boiled Lentils",
    "ingredients": [
      "spices",
      "herbs",
      "egg"
    ],
    "steps": "Prepare the boiled lentils using spices, herbs, and finish with egg."
  },
  {
    "name": "Boiled Mango",
    "ingredients": [
      "butter",
      "flour",
      "garlic"
    ],
    "steps": "Prepare the boiled mango using butter, flour, and finish with garlic."
  },
  {
    "name": "Boiled Marshmallow",
    "ingredients": [
      "sugar",
      "ginger",
      "chili"
    ],
    "steps": "Prepare the boiled marshmallow using sugar, ginger, and finish with chili."
  },
  {
    "name": "Boiled Mayonnaise",
    "ingredients": [
      "egg",
      "cream",
      "tomato"
    ],
    "steps": "Prepare the boiled mayonnaise using egg, cream, and finish with tomato."
  },
  {
    "name": "Boiled Meatball",
    "ingredients": [
      "spices",
      "tomato",
      "garlic"
    ],
    "steps": "Prepare the boiled meatball using spices, tomato, and finish with garlic."
  },
  {
    "name": "Boiled Milk",
    "ingredients": [
      "cheese",
      "pepper",
      "vinegar",
      "oil",
      "ginger"
    ],
    "steps": "Prepare the boiled milk using cheese, pepper, vinegar, oil, and finish with ginger."
  },
  {
    "name": "Boiled Miso",
    "ingredients": [
      "flour",
      "salt",
      "spices"
    ],
    "steps": "Prepare the boiled miso using flour, salt, and finish with spices."
  },
  {
    "name": "Boiled Mushroom",
    "ingredients": [
      "vinegar",
      "spices",
      "pepper",
      "oil",
      "ginger",
      "egg"
    ],
    "steps": "Prepare the boiled mushroom using vinegar, spices, pepper, oil, ginger, and finish with egg."
  },
  {
    "name": "Boiled Naan",
    "ingredients": [
      "water",
      "onion",
      "ginger",
      "sugar"
    ],
    "steps": "Prepare the boiled naan using water, onion, ginger, and finish with sugar."
  },
  {
    "name": "Boiled Noodles",
    "ingredients": [
      "ginger",
      "herbs",
      "egg",
      "flour"
    ],
    "steps": "Prepare the boiled noodles using ginger, herbs, egg, and finish with flour."
  },
  {
    "name": "Boiled Oats",
    "ingredients": [
      "ginger",
      "cream",
      "pepper"
    ],
    "steps": "Prepare the boiled oats using ginger, cream, and finish with pepper."
  },
  {
    "name": "Boiled Onion",
    "ingredients": [
      "herbs",
      "milk",
      "garlic",
      "oil",
      "sugar",
      "vinegar"
    ],
    "steps": "Prepare the boiled onion using herbs, milk, garlic, oil, sugar, and finish with vinegar."
  },
  {
    "name": "Boiled Oregano",
    "ingredients": [
      "ginger",
      "pepper",
      "vinegar",
      "salt",
      "sugar"
    ],
    "steps": "Prepare the boiled oregano using ginger, pepper, vinegar, salt, and finish with sugar."
  },
  {
    "name": "Boiled Pancake",
    "ingredients": [
      "spices",
      "milk",
      "water",
      "cream",
      "ginger",
      "butter"
    ],
    "steps": "Prepare the boiled pancake using spices, milk, water, cream, ginger, and finish with butter."
  },
  {
    "name": "Boiled Papaya",
    "ingredients": [
      "onion",
      "egg",
      "chili"
    ],
    "steps": "Prepare the boiled papaya using onion, egg, and finish with chili."
  },
  {
    "name": "Boiled Pasta",
    "ingredients": [
      "tomato",
      "pepper",
      "salt"
    ],
    "steps": "Prepare the boiled pasta using tomato, pepper, and finish with salt."
  },
  {
    "name": "Boiled Peanut",
    "ingredients": [
      "water",
      "ginger",
      "oil"
    ],
    "steps": "Prepare the boiled peanut using water, ginger, and finish with oil."
  },
  {
    "name": "Boiled Pickles",
    "ingredients": [
      "egg",
      "ginger",
      "vinegar",
      "garlic",
      "onion"
    ],
    "steps": "Prepare the boiled pickles using egg, ginger, vinegar, garlic, and finish with onion."
  },
  {
    "name": "Boiled Pie",
    "ingredients": [
      "milk",
      "vinegar",
      "salt",
      "sugar"
    ],
    "steps": "Prepare the boiled pie using milk, vinegar, salt, and finish with sugar."
  },
  {
    "name": "Boiled Pineapple",
    "ingredients": [
      "pepper",
      "spices",
      "herbs",
      "butter"
    ],
    "steps": "Prepare the boiled pineapple using pepper, spices, herbs, and finish with butter."
  },
  {
    "name": "Boiled Pizza",
    "ingredients": [
      "vinegar",
      "garlic",
      "cream",
      "pepper",
      "oil"
    ],
    "steps": "Prepare the boiled pizza using vinegar, garlic, cream, pepper, and finish with oil."
  },
  {
    "name": "Boiled Pork",
    "ingredients": [
      "tomato",
      "milk",
      "chili",
      "cheese",
      "spices",
      "herbs"
    ],
    "steps": "Prepare the boiled pork using tomato, milk, chili, cheese, spices, and finish with herbs."
  },
  {
    "name": "Boiled Potato",
    "ingredients": [
      "salt",
      "cream",
      "tomato"
    ],
    "steps": "Prepare the boiled potato using salt, cream, and finish with tomato."
  },
  {
    "name": "Boiled Pudding",
    "ingredients": [
      "butter",
      "milk",
      "spices"
    ],
    "steps": "Prepare the boiled pudding using butter, milk, and finish with spices."
  },
  {
    "name": "Boiled Quesadilla",
    "ingredients": [
      "egg",
      "sugar",
      "milk",
      "ginger",
      "spices"
    ],
    "steps": "Prepare the boiled quesadilla using egg, sugar, milk, ginger, and finish with spices."
  },
  {
    "name": "Boiled Quinoa",
    "ingredients": [
      "vinegar",
      "water",
      "milk",
      "egg",
      "cheese",
      "oil"
    ],
    "steps": "Prepare the boiled quinoa using vinegar, water, milk, egg, cheese, and finish with oil."
  },
  {
    "name": "Boiled Radish",
    "ingredients": [
      "salt",
      "cheese",
      "vinegar",
      "egg"
    ],
    "steps": "Prepare the boiled radish using salt, cheese, vinegar, and finish with egg."
  },
  {
    "name": "Boiled Rice",
    "ingredients": [
      "butter",
      "cream",
      "milk",
      "oil",
      "salt"
    ],
    "steps": "Prepare the boiled rice using butter, cream, milk, oil, and finish with salt."
  },
  {
    "name": "Boiled Roti",
    "ingredients": [
      "onion",
      "pepper",
      "water",
      "oil"
    ],
    "steps": "Prepare the boiled roti using onion, pepper, water, and finish with oil."
  },
  {
    "name": "Boiled Sardine",
    "ingredients": [
      "ginger",
      "milk",
      "butter"
    ],
    "steps": "Prepare the boiled sardine using ginger, milk, and finish with butter."
  },
  {
    "name": "Boiled Sauce",
    "ingredients": [
      "milk",
      "pepper",
      "egg",
      "cheese",
      "vinegar",
      "flour"
    ],
    "steps": "Prepare the boiled sauce using milk, pepper, egg, cheese, vinegar, and finish with flour."
  },
  {
    "name": "Boiled Shrimp",
    "ingredients": [
      "butter",
      "herbs",
      "water",
      "cheese",
      "sugar",
      "ginger"
    ],
    "steps": "Prepare the boiled shrimp using butter, herbs, water, cheese, sugar, and finish with ginger."
  },
  {
    "name": "Boiled Soup",
    "ingredients": [
      "tomato",
      "pepper",
      "onion",
      "herbs"
    ],
    "steps": "Prepare the boiled soup using tomato, pepper, onion, and finish with herbs."
  },
  {
    "name": "Boiled Spaghetti",
    "ingredients": [
      "milk",
      "tomato",
      "water"
    ],
    "steps": "Prepare the boiled spaghetti using milk, tomato, and finish with water."
  },
  {
    "name": "Boiled Strawberry",
    "ingredients": [
      "onion",
      "tomato",
      "ginger",
      "cream",
      "garlic"
    ],
    "steps": "Prepare the boiled strawberry using onion, tomato, ginger, cream, and finish with garlic."
  },
  {
    "name": "Boiled Sugar",
    "ingredients": [
      "sugar",
      "cheese",
      "cream"
    ],
    "steps": "Prepare the boiled sugar using sugar, cheese, and finish with cream."
  },
  {
    "name": "Boiled Tabbouleh",
    "ingredients": [
      "spices",
      "egg",
      "ginger"
    ],
    "steps": "Prepare the boiled tabbouleh using spices, egg, and finish with ginger."
  },
  {
    "name": "Boiled Tea",
    "ingredients": [
      "garlic",
      "ginger",
      "oil"
    ],
    "steps": "Prepare the boiled tea using garlic, ginger, and finish with oil."
  },
  {
    "name": "Boiled Toffee",
    "ingredients": [
      "tomato",
      "vinegar",
      "ginger",
      "cream",
      "garlic",
      "sugar"
    ],
    "steps": "Prepare the boiled toffee using tomato, vinegar, ginger, cream, garlic, and finish with sugar."
  },
  {
    "name": "Boiled Trout",
    "ingredients": [
      "pepper",
      "flour",
      "herbs",
      "milk",
      "salt",
      "egg"
    ],
    "steps": "Prepare the boiled trout using pepper, flour, herbs, milk, salt, and finish with egg."
  },
  {
    "name": "Boiled Waffle",
    "ingredients": [
      "tomato",
      "cheese",
      "onion",
      "salt"
    ],
    "steps": "Prepare the boiled waffle using tomato, cheese, onion, and finish with salt."
  },
  {
    "name": "Boiled Watermelon",
    "ingredients": [
      "water",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the boiled watermelon using water, pepper, and finish with egg."
  },
  {
    "name": "Boiled Yakitori",
    "ingredients": [
      "oil",
      "cheese",
      "pepper",
      "herbs",
      "sugar",
      "milk"
    ],
    "steps": "Prepare the boiled yakitori using oil, cheese, pepper, herbs, sugar, and finish with milk."
  },
  {
    "name": "Boiled Yogurt",
    "ingredients": [
      "milk",
      "cream",
      "chili",
      "pepper",
      "sugar",
      "oil"
    ],
    "steps": "Prepare the boiled yogurt using milk, cream, chili, pepper, sugar, and finish with oil."
  },
  {
    "name": "Dried Almond",
    "ingredients": [
      "herbs",
      "water",
      "tomato",
      "ginger"
    ],
    "steps": "Prepare the dried almond using herbs, water, tomato, and finish with ginger."
  },
  {
    "name": "Dried Anchovy",
    "ingredients": [
      "cream",
      "tomato",
      "milk",
      "salt",
      "pepper"
    ],
    "steps": "Prepare the dried anchovy using cream, tomato, milk, salt, and finish with pepper."
  },
  {
    "name": "Dried Apple",
    "ingredients": [
      "ginger",
      "herbs",
      "oil"
    ],
    "steps": "Prepare the dried apple using ginger, herbs, and finish with oil."
  },
  {
    "name": "Dried Bacon",
    "ingredients": [
      "vinegar",
      "ginger",
      "water",
      "tomato",
      "butter",
      "flour"
    ],
    "steps": "Prepare the dried bacon using vinegar, ginger, water, tomato, butter, and finish with flour."
  },
  {
    "name": "Dried Bagel",
    "ingredients": [
      "sugar",
      "butter",
      "cheese",
      "oil",
      "onion"
    ],
    "steps": "Prepare the dried bagel using sugar, butter, cheese, oil, and finish with onion."
  },
  {
    "name": "Dried Barfi",
    "ingredients": [
      "milk",
      "spices",
      "garlic",
      "vinegar",
      "egg"
    ],
    "steps": "Prepare the dried barfi using milk, spices, garlic, vinegar, and finish with egg."
  },
  {
    "name": "Dried Barley",
    "ingredients": [
      "garlic",
      "tomato",
      "butter",
      "milk",
      "pepper"
    ],
    "steps": "Prepare the dried barley using garlic, tomato, butter, milk, and finish with pepper."
  },
  {
    "name": "Dried Basil",
    "ingredients": [
      "tomato",
      "flour",
      "ginger",
      "garlic"
    ],
    "steps": "Prepare the dried basil using tomato, flour, ginger, and finish with garlic."
  },
  {
    "name": "Dried Beans",
    "ingredients": [
      "salt",
      "onion",
      "sugar",
      "cream",
      "garlic",
      "butter"
    ],
    "steps": "Prepare the dried beans using salt, onion, sugar, cream, garlic, and finish with butter."
  },
  {
    "name": "Dried Beetroot",
    "ingredients": [
      "salt",
      "onion",
      "milk",
      "butter",
      "water"
    ],
    "steps": "Prepare the dried beetroot using salt, onion, milk, butter, and finish with water."
  },
  {
    "name": "Dried Biryani",
    "ingredients": [
      "butter",
      "cream",
      "flour"
    ],
    "steps": "Prepare the dried biryani using butter, cream, and finish with flour."
  },
  {
    "name": "Dried Brownie",
    "ingredients": [
      "chili",
      "salt",
      "herbs",
      "onion",
      "water"
    ],
    "steps": "Prepare the dried brownie using chili, salt, herbs, onion, and finish with water."
  },
  {
    "name": "Dried Butter",
    "ingredients": [
      "onion",
      "vinegar",
      "sugar",
      "tomato",
      "herbs",
      "egg"
    ],
    "steps": "Prepare the dried butter using onion, vinegar, sugar, tomato, herbs, and finish with egg."
  },
  {
    "name": "Dried Cake",
    "ingredients": [
      "onion",
      "herbs",
      "flour",
      "oil",
      "tomato"
    ],
    "steps": "Prepare the dried cake using onion, herbs, flour, oil, and finish with tomato."
  },
  {
    "name": "Dried Cashew",
    "ingredients": [
      "milk",
      "salt",
      "water"
    ],
    "steps": "Prepare the dried cashew using milk, salt, and finish with water."
  },
  {
    "name": "Dried Cauliflower",
    "ingredients": [
      "garlic",
      "vinegar",
      "sugar",
      "flour",
      "salt"
    ],
    "steps": "Prepare the dried cauliflower using garlic, vinegar, sugar, flour, and finish with salt."
  },
  {
    "name": "Dried Cheese",
    "ingredients": [
      "pepper",
      "sugar",
      "herbs",
      "water"
    ],
    "steps": "Prepare the dried cheese using pepper, sugar, herbs, and finish with water."
  },
  {
    "name": "Dried Chow Mein",
    "ingredients": [
      "spices",
      "salt",
      "flour"
    ],
    "steps": "Prepare the dried chow mein using spices, salt, and finish with flour."
  },
  {
    "name": "Dried Chutney",
    "ingredients": [
      "cream",
      "spices",
      "cheese"
    ],
    "steps": "Prepare the dried chutney using cream, spices, and finish with cheese."
  },
  {
    "name": "Dried Cinnamon",
    "ingredients": [
      "salt",
      "sugar",
      "butter",
      "onion"
    ],
    "steps": "Prepare the dried cinnamon using salt, sugar, butter, and finish with onion."
  },
  {
    "name": "Dried Clam",
    "ingredients": [
      "egg",
      "salt",
      "herbs"
    ],
    "steps": "Prepare the dried clam using egg, salt, and finish with herbs."
  },
  {
    "name": "Dried Crab",
    "ingredients": [
      "water",
      "pepper",
      "egg",
      "cheese",
      "salt",
      "spices"
    ],
    "steps": "Prepare the dried crab using water, pepper, egg, cheese, salt, and finish with spices."
  },
  {
    "name": "Dried Crepe",
    "ingredients": [
      "chili",
      "oil",
      "garlic",
      "onion"
    ],
    "steps": "Prepare the dried crepe using chili, oil, garlic, and finish with onion."
  },
  {
    "name": "Dried Dosa",
    "ingredients": [
      "ginger",
      "water",
      "egg",
      "garlic",
      "flour",
      "spices"
    ],
    "steps": "Prepare the dried dosa using ginger, water, egg, garlic, flour, and finish with spices."
  },
  {
    "name": "Dried Eggplant",
    "ingredients": [
      "salt",
      "tomato",
      "cream"
    ],
    "steps": "Prepare the dried eggplant using salt, tomato, and finish with cream."
  },
  {
    "name": "Dried Garlic",
    "ingredients": [
      "herbs",
      "tomato",
      "chili",
      "pepper",
      "salt",
      "sugar"
    ],
    "steps": "Prepare the dried garlic using herbs, tomato, chili, pepper, salt, and finish with sugar."
  },
  {
    "name": "Dried Gelato",
    "ingredients": [
      "salt",
      "chili",
      "herbs"
    ],
    "steps": "Prepare the dried gelato using salt, chili, and finish with herbs."
  },
  {
    "name": "Dried Ginger",
    "ingredients": [
      "salt",
      "water",
      "herbs"
    ],
    "steps": "Prepare the dried ginger using salt, water, and finish with herbs."
  },
  {
    "name": "Dried Gnocchi",
    "ingredients": [
      "spices",
      "water",
      "onion"
    ],
    "steps": "Prepare the dried gnocchi using spices, water, and finish with onion."
  },
  {
    "name": "Dried Grape",
    "ingredients": [
      "pepper",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the dried grape using pepper, garlic, and finish with chili."
  },
  {
    "name": "Dried Gulab Jamun",
    "ingredients": [
      "salt",
      "herbs",
      "pepper"
    ],
    "steps": "Prepare the dried gulab jamun using salt, herbs, and finish with pepper."
  },
  {
    "name": "Dried Ham",
    "ingredients": [
      "cream",
      "oil",
      "spices",
      "milk"
    ],
    "steps": "Prepare the dried ham using cream, oil, spices, and finish with milk."
  },
  {
    "name": "Dried Honey",
    "ingredients": [
      "egg",
      "oil",
      "ginger",
      "water",
      "cream",
      "pepper"
    ],
    "steps": "Prepare the dried honey using egg, oil, ginger, water, cream, and finish with pepper."
  },
  {
    "name": "Dried Hotdog",
    "ingredients": [
      "pepper",
      "cheese",
      "spices"
    ],
    "steps": "Prepare the dried hotdog using pepper, cheese, and finish with spices."
  },
  {
    "name": "Dried Hummus",
    "ingredients": [
      "salt",
      "milk",
      "tomato"
    ],
    "steps": "Prepare the dried hummus using salt, milk, and finish with tomato."
  },
  {
    "name": "Dried Idli",
    "ingredients": [
      "butter",
      "garlic",
      "salt",
      "oil",
      "flour",
      "vinegar"
    ],
    "steps": "Prepare the dried idli using butter, garlic, salt, oil, flour, and finish with vinegar."
  },
  {
    "name": "Dried Jalebi",
    "ingredients": [
      "sugar",
      "cream",
      "spices",
      "salt",
      "chili",
      "water"
    ],
    "steps": "Prepare the dried jalebi using sugar, cream, spices, salt, chili, and finish with water."
  },
  {
    "name": "Dried Juice",
    "ingredients": [
      "herbs",
      "oil",
      "salt",
      "water"
    ],
    "steps": "Prepare the dried juice using herbs, oil, salt, and finish with water."
  },
  {
    "name": "Dried Kheer",
    "ingredients": [
      "flour",
      "vinegar",
      "sugar",
      "butter",
      "cheese"
    ],
    "steps": "Prepare the dried kheer using flour, vinegar, sugar, butter, and finish with cheese."
  },
  {
    "name": "Dried Kimchi",
    "ingredients": [
      "garlic",
      "herbs",
      "tomato",
      "flour",
      "milk",
      "chili"
    ],
    "steps": "Prepare the dried kimchi using garlic, herbs, tomato, flour, milk, and finish with chili."
  },
  {
    "name": "Dried Lasagna",
    "ingredients": [
      "cheese",
      "salt",
      "vinegar",
      "butter",
      "ginger"
    ],
    "steps": "Prepare the dried lasagna using cheese, salt, vinegar, butter, and finish with ginger."
  },
  {
    "name": "Dried Leek",
    "ingredients": [
      "flour",
      "vinegar",
      "spices"
    ],
    "steps": "Prepare the dried leek using flour, vinegar, and finish with spices."
  },
  {
    "name": "Dried Lentils",
    "ingredients": [
      "cream",
      "pepper",
      "onion",
      "milk",
      "flour"
    ],
    "steps": "Prepare the dried lentils using cream, pepper, onion, milk, and finish with flour."
  },
  {
    "name": "Dried Lettuce",
    "ingredients": [
      "sugar",
      "water",
      "ginger",
      "butter"
    ],
    "steps": "Prepare the dried lettuce using sugar, water, ginger, and finish with butter."
  },
  {
    "name": "Dried Mayonnaise",
    "ingredients": [
      "milk",
      "vinegar",
      "egg",
      "oil",
      "cheese",
      "water"
    ],
    "steps": "Prepare the dried mayonnaise using milk, vinegar, egg, oil, cheese, and finish with water."
  },
  {
    "name": "Dried Milk",
    "ingredients": [
      "milk",
      "egg",
      "onion",
      "salt"
    ],
    "steps": "Prepare the dried milk using milk, egg, onion, and finish with salt."
  },
  {
    "name": "Dried Mochi",
    "ingredients": [
      "milk",
      "water",
      "chili",
      "onion"
    ],
    "steps": "Prepare the dried mochi using milk, water, chili, and finish with onion."
  },
  {
    "name": "Dried Mustard",
    "ingredients": [
      "vinegar",
      "garlic",
      "salt",
      "chili",
      "water",
      "oil"
    ],
    "steps": "Prepare the dried mustard using vinegar, garlic, salt, chili, water, and finish with oil."
  },
  {
    "name": "Dried Naan",
    "ingredients": [
      "milk",
      "cheese",
      "chili",
      "oil"
    ],
    "steps": "Prepare the dried naan using milk, cheese, chili, and finish with oil."
  },
  {
    "name": "Dried Oats",
    "ingredients": [
      "flour",
      "garlic",
      "salt"
    ],
    "steps": "Prepare the dried oats using flour, garlic, and finish with salt."
  },
  {
    "name": "Dried Olive",
    "ingredients": [
      "pepper",
      "flour",
      "milk",
      "cheese"
    ],
    "steps": "Prepare the dried olive using pepper, flour, milk, and finish with cheese."
  },
  {
    "name": "Dried Onion",
    "ingredients": [
      "vinegar",
      "cream",
      "egg",
      "tomato",
      "oil"
    ],
    "steps": "Prepare the dried onion using vinegar, cream, egg, tomato, and finish with oil."
  },
  {
    "name": "Dried Orange",
    "ingredients": [
      "milk",
      "flour",
      "garlic",
      "herbs",
      "butter",
      "salt"
    ],
    "steps": "Prepare the dried orange using milk, flour, garlic, herbs, butter, and finish with salt."
  },
  {
    "name": "Dried Oregano",
    "ingredients": [
      "cheese",
      "ginger",
      "tomato",
      "garlic"
    ],
    "steps": "Prepare the dried oregano using cheese, ginger, tomato, and finish with garlic."
  },
  {
    "name": "Dried Paella",
    "ingredients": [
      "sugar",
      "cheese",
      "egg",
      "pepper"
    ],
    "steps": "Prepare the dried paella using sugar, cheese, egg, and finish with pepper."
  },
  {
    "name": "Dried Papaya",
    "ingredients": [
      "oil",
      "cheese",
      "tomato",
      "onion",
      "pepper"
    ],
    "steps": "Prepare the dried papaya using oil, cheese, tomato, onion, and finish with pepper."
  },
  {
    "name": "Dried Parsley",
    "ingredients": [
      "salt",
      "oil",
      "water",
      "sugar",
      "garlic",
      "cream"
    ],
    "steps": "Prepare the dried parsley using salt, oil, water, sugar, garlic, and finish with cream."
  },
  {
    "name": "Dried Peanut",
    "ingredients": [
      "spices",
      "chili",
      "flour",
      "salt",
      "herbs",
      "ginger"
    ],
    "steps": "Prepare the dried peanut using spices, chili, flour, salt, herbs, and finish with ginger."
  },
  {
    "name": "Dried Peas",
    "ingredients": [
      "tomato",
      "pepper",
      "cream",
      "cheese",
      "salt"
    ],
    "steps": "Prepare the dried peas using tomato, pepper, cream, cheese, and finish with salt."
  },
  {
    "name": "Dried Pork",
    "ingredients": [
      "butter",
      "herbs",
      "spices",
      "sugar"
    ],
    "steps": "Prepare the dried pork using butter, herbs, spices, and finish with sugar."
  },
  {
    "name": "Dried Radish",
    "ingredients": [
      "herbs",
      "chili",
      "salt",
      "pepper"
    ],
    "steps": "Prepare the dried radish using herbs, chili, salt, and finish with pepper."
  },
  {
    "name": "Dried Ramen",
    "ingredients": [
      "vinegar",
      "cream",
      "ginger"
    ],
    "steps": "Prepare the dried ramen using vinegar, cream, and finish with ginger."
  },
  {
    "name": "Dried Rasgulla",
    "ingredients": [
      "cream",
      "flour",
      "egg",
      "tomato",
      "ginger"
    ],
    "steps": "Prepare the dried rasgulla using cream, flour, egg, tomato, and finish with ginger."
  },
  {
    "name": "Dried Rice",
    "ingredients": [
      "flour",
      "chili",
      "water",
      "tomato",
      "cheese",
      "oil"
    ],
    "steps": "Prepare the dried rice using flour, chili, water, tomato, cheese, and finish with oil."
  },
  {
    "name": "Dried Sake",
    "ingredients": [
      "salt",
      "spices",
      "garlic",
      "oil"
    ],
    "steps": "Prepare the dried sake using salt, spices, garlic, and finish with oil."
  },
  {
    "name": "Dried Salmon",
    "ingredients": [
      "cheese",
      "sugar",
      "herbs"
    ],
    "steps": "Prepare the dried salmon using cheese, sugar, and finish with herbs."
  },
  {
    "name": "Dried Salt",
    "ingredients": [
      "salt",
      "sugar",
      "egg",
      "flour"
    ],
    "steps": "Prepare the dried salt using salt, sugar, egg, and finish with flour."
  },
  {
    "name": "Dried Sardine",
    "ingredients": [
      "egg",
      "spices",
      "herbs",
      "garlic",
      "ginger"
    ],
    "steps": "Prepare the dried sardine using egg, spices, herbs, garlic, and finish with ginger."
  },
  {
    "name": "Dried Sauce",
    "ingredients": [
      "spices",
      "water",
      "pepper",
      "flour",
      "tomato",
      "cream"
    ],
    "steps": "Prepare the dried sauce using spices, water, pepper, flour, tomato, and finish with cream."
  },
  {
    "name": "Dried Shawarma",
    "ingredients": [
      "vinegar",
      "water",
      "garlic",
      "milk"
    ],
    "steps": "Prepare the dried shawarma using vinegar, water, garlic, and finish with milk."
  },
  {
    "name": "Dried Shrimp",
    "ingredients": [
      "spices",
      "herbs",
      "egg",
      "cream",
      "salt",
      "milk"
    ],
    "steps": "Prepare the dried shrimp using spices, herbs, egg, cream, salt, and finish with milk."
  },
  {
    "name": "Dried Soup",
    "ingredients": [
      "tomato",
      "milk",
      "salt"
    ],
    "steps": "Prepare the dried soup using tomato, milk, and finish with salt."
  },
  {
    "name": "Dried Spinach",
    "ingredients": [
      "butter",
      "cheese",
      "salt",
      "oil"
    ],
    "steps": "Prepare the dried spinach using butter, cheese, salt, and finish with oil."
  },
  {
    "name": "Dried Taco",
    "ingredients": [
      "herbs",
      "milk",
      "egg",
      "chili",
      "butter"
    ],
    "steps": "Prepare the dried taco using herbs, milk, egg, chili, and finish with butter."
  },
  {
    "name": "Dried Tea",
    "ingredients": [
      "butter",
      "garlic",
      "spices",
      "egg",
      "water",
      "salt"
    ],
    "steps": "Prepare the dried tea using butter, garlic, spices, egg, water, and finish with salt."
  },
  {
    "name": "Dried Thyme",
    "ingredients": [
      "water",
      "onion",
      "sugar",
      "ginger",
      "chili",
      "egg"
    ],
    "steps": "Prepare the dried thyme using water, onion, sugar, ginger, chili, and finish with egg."
  },
  {
    "name": "Dried Toffee",
    "ingredients": [
      "pepper",
      "garlic",
      "sugar",
      "milk",
      "oil"
    ],
    "steps": "Prepare the dried toffee using pepper, garlic, sugar, milk, and finish with oil."
  },
  {
    "name": "Dried Trout",
    "ingredients": [
      "oil",
      "pepper",
      "sugar",
      "cream",
      "onion"
    ],
    "steps": "Prepare the dried trout using oil, pepper, sugar, cream, and finish with onion."
  },
  {
    "name": "Dried Turkey",
    "ingredients": [
      "water",
      "pepper",
      "ginger",
      "salt"
    ],
    "steps": "Prepare the dried turkey using water, pepper, ginger, and finish with salt."
  },
  {
    "name": "Dried Udon",
    "ingredients": [
      "butter",
      "herbs",
      "onion",
      "flour",
      "oil",
      "milk"
    ],
    "steps": "Prepare the dried udon using butter, herbs, onion, flour, oil, and finish with milk."
  },
  {
    "name": "Dried Vinegar",
    "ingredients": [
      "cream",
      "butter",
      "egg",
      "flour",
      "onion",
      "herbs"
    ],
    "steps": "Prepare the dried vinegar using cream, butter, egg, flour, onion, and finish with herbs."
  },
  {
    "name": "Dried Walnut",
    "ingredients": [
      "salt",
      "water",
      "butter",
      "spices",
      "ginger"
    ],
    "steps": "Prepare the dried walnut using salt, water, butter, spices, and finish with ginger."
  },
  {
    "name": "Dried Yakitori",
    "ingredients": [
      "salt",
      "flour",
      "herbs",
      "cream"
    ],
    "steps": "Prepare the dried yakitori using salt, flour, herbs, and finish with cream."
  },
  {
    "name": "Dried Yogurt",
    "ingredients": [
      "milk",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the dried yogurt using milk, sugar, and finish with onion."
  },
  {
    "name": "Fresh Artichoke",
    "ingredients": [
      "vinegar",
      "oil",
      "cheese"
    ],
    "steps": "Prepare the fresh artichoke using vinegar, oil, and finish with cheese."
  },
  {
    "name": "Fresh Beef",
    "ingredients": [
      "oil",
      "spices",
      "sugar"
    ],
    "steps": "Prepare the fresh beef using oil, spices, and finish with sugar."
  },
  {
    "name": "Fresh Beetroot",
    "ingredients": [
      "ginger",
      "onion",
      "oil"
    ],
    "steps": "Prepare the fresh beetroot using ginger, onion, and finish with oil."
  },
  {
    "name": "Fresh Biryani",
    "ingredients": [
      "egg",
      "chili",
      "flour",
      "spices",
      "herbs"
    ],
    "steps": "Prepare the fresh biryani using egg, chili, flour, spices, and finish with herbs."
  },
  {
    "name": "Fresh Burger",
    "ingredients": [
      "ginger",
      "butter",
      "cream",
      "herbs",
      "garlic",
      "egg"
    ],
    "steps": "Prepare the fresh burger using ginger, butter, cream, herbs, garlic, and finish with egg."
  },
  {
    "name": "Fresh Burrito",
    "ingredients": [
      "salt",
      "sugar",
      "water"
    ],
    "steps": "Prepare the fresh burrito using salt, sugar, and finish with water."
  },
  {
    "name": "Fresh Cake",
    "ingredients": [
      "spices",
      "chili",
      "herbs",
      "ginger"
    ],
    "steps": "Prepare the fresh cake using spices, chili, herbs, and finish with ginger."
  },
  {
    "name": "Fresh Cheese",
    "ingredients": [
      "spices",
      "oil",
      "egg"
    ],
    "steps": "Prepare the fresh cheese using spices, oil, and finish with egg."
  },
  {
    "name": "Fresh Chicken",
    "ingredients": [
      "flour",
      "egg",
      "tomato",
      "herbs",
      "pepper",
      "cheese"
    ],
    "steps": "Prepare the fresh chicken using flour, egg, tomato, herbs, pepper, and finish with cheese."
  },
  {
    "name": "Fresh Chutney",
    "ingredients": [
      "pepper",
      "butter",
      "chili",
      "herbs",
      "vinegar",
      "sugar"
    ],
    "steps": "Prepare the fresh chutney using pepper, butter, chili, herbs, vinegar, and finish with sugar."
  },
  {
    "name": "Fresh Coffee",
    "ingredients": [
      "oil",
      "butter",
      "pepper",
      "sugar",
      "milk"
    ],
    "steps": "Prepare the fresh coffee using oil, butter, pepper, sugar, and finish with milk."
  },
  {
    "name": "Fresh Croissant",
    "ingredients": [
      "water",
      "garlic",
      "milk",
      "onion",
      "flour"
    ],
    "steps": "Prepare the fresh croissant using water, garlic, milk, onion, and finish with flour."
  },
  {
    "name": "Fresh Curry",
    "ingredients": [
      "vinegar",
      "pepper",
      "water",
      "spices"
    ],
    "steps": "Prepare the fresh curry using vinegar, pepper, water, and finish with spices."
  },
  {
    "name": "Fresh Dosa",
    "ingredients": [
      "sugar",
      "tomato",
      "salt",
      "chili",
      "egg"
    ],
    "steps": "Prepare the fresh dosa using sugar, tomato, salt, chili, and finish with egg."
  },
  {
    "name": "Fresh Egg",
    "ingredients": [
      "cheese",
      "onion",
      "egg",
      "pepper",
      "herbs"
    ],
    "steps": "Prepare the fresh egg using cheese, onion, egg, pepper, and finish with herbs."
  },
  {
    "name": "Fresh Falafel",
    "ingredients": [
      "egg",
      "ginger",
      "water"
    ],
    "steps": "Prepare the fresh falafel using egg, ginger, and finish with water."
  },
  {
    "name": "Fresh Fettuccine",
    "ingredients": [
      "oil",
      "flour",
      "chili",
      "egg",
      "spices"
    ],
    "steps": "Prepare the fresh fettuccine using oil, flour, chili, egg, and finish with spices."
  },
  {
    "name": "Fresh Fig",
    "ingredients": [
      "sugar",
      "cream",
      "salt",
      "garlic"
    ],
    "steps": "Prepare the fresh fig using sugar, cream, salt, and finish with garlic."
  },
  {
    "name": "Fresh Ginger",
    "ingredients": [
      "tomato",
      "pepper",
      "cheese",
      "flour"
    ],
    "steps": "Prepare the fresh ginger using tomato, pepper, cheese, and finish with flour."
  },
  {
    "name": "Fresh Gnocchi",
    "ingredients": [
      "flour",
      "onion",
      "garlic",
      "water",
      "tomato",
      "pepper"
    ],
    "steps": "Prepare the fresh gnocchi using flour, onion, garlic, water, tomato, and finish with pepper."
  },
  {
    "name": "Fresh Goose",
    "ingredients": [
      "chili",
      "oil",
      "vinegar",
      "ginger",
      "onion",
      "pepper"
    ],
    "steps": "Prepare the fresh goose using chili, oil, vinegar, ginger, onion, and finish with pepper."
  },
  {
    "name": "Fresh Gulab Jamun",
    "ingredients": [
      "egg",
      "cream",
      "salt",
      "pepper"
    ],
    "steps": "Prepare the fresh gulab jamun using egg, cream, salt, and finish with pepper."
  },
  {
    "name": "Fresh Ham",
    "ingredients": [
      "cream",
      "egg",
      "water",
      "tomato",
      "vinegar"
    ],
    "steps": "Prepare the fresh ham using cream, egg, water, tomato, and finish with vinegar."
  },
  {
    "name": "Fresh Ice Cream",
    "ingredients": [
      "chili",
      "tomato",
      "cheese",
      "flour",
      "herbs"
    ],
    "steps": "Prepare the fresh ice cream using chili, tomato, cheese, flour, and finish with herbs."
  },
  {
    "name": "Fresh Idli",
    "ingredients": [
      "milk",
      "tomato",
      "salt",
      "cheese",
      "ginger",
      "chili"
    ],
    "steps": "Prepare the fresh idli using milk, tomato, salt, cheese, ginger, and finish with chili."
  },
  {
    "name": "Fresh Jalebi",
    "ingredients": [
      "egg",
      "oil",
      "cream",
      "tomato",
      "vinegar",
      "herbs"
    ],
    "steps": "Prepare the fresh jalebi using egg, oil, cream, tomato, vinegar, and finish with herbs."
  },
  {
    "name": "Fresh Juice",
    "ingredients": [
      "oil",
      "cream",
      "flour"
    ],
    "steps": "Prepare the fresh juice using oil, cream, and finish with flour."
  },
  {
    "name": "Fresh Kebab",
    "ingredients": [
      "garlic",
      "tomato",
      "pepper",
      "cream",
      "water",
      "salt"
    ],
    "steps": "Prepare the fresh kebab using garlic, tomato, pepper, cream, water, and finish with salt."
  },
  {
    "name": "Fresh Ketchup",
    "ingredients": [
      "chili",
      "pepper",
      "sugar",
      "spices",
      "tomato"
    ],
    "steps": "Prepare the fresh ketchup using chili, pepper, sugar, spices, and finish with tomato."
  },
  {
    "name": "Fresh Kheer",
    "ingredients": [
      "garlic",
      "butter",
      "salt"
    ],
    "steps": "Prepare the fresh kheer using garlic, butter, and finish with salt."
  },
  {
    "name": "Fresh Kimchi",
    "ingredients": [
      "water",
      "oil",
      "egg"
    ],
    "steps": "Prepare the fresh kimchi using water, oil, and finish with egg."
  },
  {
    "name": "Fresh Leek",
    "ingredients": [
      "oil",
      "cheese",
      "herbs",
      "spices",
      "butter",
      "sugar"
    ],
    "steps": "Prepare the fresh leek using oil, cheese, herbs, spices, butter, and finish with sugar."
  },
  {
    "name": "Fresh Lettuce",
    "ingredients": [
      "salt",
      "sugar",
      "spices",
      "cheese",
      "tomato",
      "pepper"
    ],
    "steps": "Prepare the fresh lettuce using salt, sugar, spices, cheese, tomato, and finish with pepper."
  },
  {
    "name": "Fresh Lime",
    "ingredients": [
      "cream",
      "water",
      "sugar",
      "ginger",
      "salt",
      "egg"
    ],
    "steps": "Prepare the fresh lime using cream, water, sugar, ginger, salt, and finish with egg."
  },
  {
    "name": "Fresh Lobster",
    "ingredients": [
      "water",
      "butter",
      "ginger",
      "vinegar",
      "cream",
      "tomato"
    ],
    "steps": "Prepare the fresh lobster using water, butter, ginger, vinegar, cream, and finish with tomato."
  },
  {
    "name": "Fresh Macaroni",
    "ingredients": [
      "garlic",
      "egg",
      "cream"
    ],
    "steps": "Prepare the fresh macaroni using garlic, egg, and finish with cream."
  },
  {
    "name": "Fresh Marshmallow",
    "ingredients": [
      "cheese",
      "cream",
      "chili"
    ],
    "steps": "Prepare the fresh marshmallow using cheese, cream, and finish with chili."
  },
  {
    "name": "Fresh Mayonnaise",
    "ingredients": [
      "oil",
      "salt",
      "pepper",
      "cheese",
      "butter"
    ],
    "steps": "Prepare the fresh mayonnaise using oil, salt, pepper, cheese, and finish with butter."
  },
  {
    "name": "Fresh Meatball",
    "ingredients": [
      "herbs",
      "pepper",
      "salt",
      "cheese"
    ],
    "steps": "Prepare the fresh meatball using herbs, pepper, salt, and finish with cheese."
  },
  {
    "name": "Fresh Miso",
    "ingredients": [
      "herbs",
      "butter",
      "spices"
    ],
    "steps": "Prepare the fresh miso using herbs, butter, and finish with spices."
  },
  {
    "name": "Fresh Mushroom",
    "ingredients": [
      "chili",
      "butter",
      "garlic",
      "sugar"
    ],
    "steps": "Prepare the fresh mushroom using chili, butter, garlic, and finish with sugar."
  },
  {
    "name": "Fresh Noodles",
    "ingredients": [
      "egg",
      "milk",
      "onion"
    ],
    "steps": "Prepare the fresh noodles using egg, milk, and finish with onion."
  },
  {
    "name": "Fresh Nori",
    "ingredients": [
      "cheese",
      "flour",
      "onion",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the fresh nori using cheese, flour, onion, pepper, and finish with egg."
  },
  {
    "name": "Fresh Oats",
    "ingredients": [
      "cheese",
      "tomato",
      "water",
      "sugar",
      "milk"
    ],
    "steps": "Prepare the fresh oats using cheese, tomato, water, sugar, and finish with milk."
  },
  {
    "name": "Fresh Paratha",
    "ingredients": [
      "pepper",
      "cream",
      "chili",
      "herbs",
      "water"
    ],
    "steps": "Prepare the fresh paratha using pepper, cream, chili, herbs, and finish with water."
  },
  {
    "name": "Fresh Parsley",
    "ingredients": [
      "cream",
      "tomato",
      "pepper",
      "oil",
      "onion",
      "sugar"
    ],
    "steps": "Prepare the fresh parsley using cream, tomato, pepper, oil, onion, and finish with sugar."
  },
  {
    "name": "Fresh Pineapple",
    "ingredients": [
      "sugar",
      "vinegar",
      "oil"
    ],
    "steps": "Prepare the fresh pineapple using sugar, vinegar, and finish with oil."
  },
  {
    "name": "Fresh Pudding",
    "ingredients": [
      "milk",
      "pepper",
      "oil",
      "garlic",
      "spices"
    ],
    "steps": "Prepare the fresh pudding using milk, pepper, oil, garlic, and finish with spices."
  },
  {
    "name": "Fresh Pumpkin",
    "ingredients": [
      "chili",
      "onion",
      "tomato",
      "cheese"
    ],
    "steps": "Prepare the fresh pumpkin using chili, onion, tomato, and finish with cheese."
  },
  {
    "name": "Fresh Quinoa",
    "ingredients": [
      "vinegar",
      "onion",
      "butter",
      "sugar"
    ],
    "steps": "Prepare the fresh quinoa using vinegar, onion, butter, and finish with sugar."
  },
  {
    "name": "Fresh Raspberry",
    "ingredients": [
      "oil",
      "salt",
      "egg",
      "pepper",
      "water",
      "vinegar"
    ],
    "steps": "Prepare the fresh raspberry using oil, salt, egg, pepper, water, and finish with vinegar."
  },
  {
    "name": "Fresh Rice",
    "ingredients": [
      "cream",
      "butter",
      "milk"
    ],
    "steps": "Prepare the fresh rice using cream, butter, and finish with milk."
  },
  {
    "name": "Fresh Risotto",
    "ingredients": [
      "salt",
      "water",
      "vinegar",
      "chili"
    ],
    "steps": "Prepare the fresh risotto using salt, water, vinegar, and finish with chili."
  },
  {
    "name": "Fresh Sake",
    "ingredients": [
      "onion",
      "flour",
      "butter",
      "spices",
      "milk"
    ],
    "steps": "Prepare the fresh sake using onion, flour, butter, spices, and finish with milk."
  },
  {
    "name": "Fresh Salt",
    "ingredients": [
      "oil",
      "onion",
      "herbs",
      "sugar"
    ],
    "steps": "Prepare the fresh salt using oil, onion, herbs, and finish with sugar."
  },
  {
    "name": "Fresh Sauce",
    "ingredients": [
      "milk",
      "sugar",
      "onion",
      "water",
      "herbs",
      "oil"
    ],
    "steps": "Prepare the fresh sauce using milk, sugar, onion, water, herbs, and finish with oil."
  },
  {
    "name": "Fresh Sausage",
    "ingredients": [
      "cream",
      "spices",
      "garlic",
      "tomato",
      "pepper"
    ],
    "steps": "Prepare the fresh sausage using cream, spices, garlic, tomato, and finish with pepper."
  },
  {
    "name": "Fresh Sorbet",
    "ingredients": [
      "water",
      "salt",
      "vinegar"
    ],
    "steps": "Prepare the fresh sorbet using water, salt, and finish with vinegar."
  },
  {
    "name": "Fresh Spaghetti",
    "ingredients": [
      "pepper",
      "tomato",
      "sugar",
      "salt"
    ],
    "steps": "Prepare the fresh spaghetti using pepper, tomato, sugar, and finish with salt."
  },
  {
    "name": "Fresh Spinach",
    "ingredients": [
      "cream",
      "vinegar",
      "herbs",
      "milk",
      "flour"
    ],
    "steps": "Prepare the fresh spinach using cream, vinegar, herbs, milk, and finish with flour."
  },
  {
    "name": "Fresh Spring Roll",
    "ingredients": [
      "tomato",
      "cheese",
      "spices"
    ],
    "steps": "Prepare the fresh spring roll using tomato, cheese, and finish with spices."
  },
  {
    "name": "Fresh Squash",
    "ingredients": [
      "tomato",
      "garlic",
      "sugar"
    ],
    "steps": "Prepare the fresh squash using tomato, garlic, and finish with sugar."
  },
  {
    "name": "Fresh Stew",
    "ingredients": [
      "egg",
      "salt",
      "spices"
    ],
    "steps": "Prepare the fresh stew using egg, salt, and finish with spices."
  },
  {
    "name": "Fresh Sushi",
    "ingredients": [
      "tomato",
      "sugar",
      "garlic",
      "egg"
    ],
    "steps": "Prepare the fresh sushi using tomato, sugar, garlic, and finish with egg."
  },
  {
    "name": "Fresh Tabbouleh",
    "ingredients": [
      "milk",
      "onion",
      "garlic"
    ],
    "steps": "Prepare the fresh tabbouleh using milk, onion, and finish with garlic."
  },
  {
    "name": "Fresh Tandoori",
    "ingredients": [
      "ginger",
      "cheese",
      "vinegar",
      "pepper",
      "oil"
    ],
    "steps": "Prepare the fresh tandoori using ginger, cheese, vinegar, pepper, and finish with oil."
  },
  {
    "name": "Fresh Tempura",
    "ingredients": [
      "garlic",
      "ginger",
      "spices",
      "egg",
      "chili",
      "pepper"
    ],
    "steps": "Prepare the fresh tempura using garlic, ginger, spices, egg, chili, and finish with pepper."
  },
  {
    "name": "Fresh Tomato",
    "ingredients": [
      "cream",
      "chili",
      "spices",
      "garlic",
      "onion"
    ],
    "steps": "Prepare the fresh tomato using cream, chili, spices, garlic, and finish with onion."
  },
  {
    "name": "Fresh Turnip",
    "ingredients": [
      "ginger",
      "spices",
      "vinegar",
      "salt",
      "flour"
    ],
    "steps": "Prepare the fresh turnip using ginger, spices, vinegar, salt, and finish with flour."
  },
  {
    "name": "Fresh Udon",
    "ingredients": [
      "flour",
      "pepper",
      "tomato",
      "egg"
    ],
    "steps": "Prepare the fresh udon using flour, pepper, tomato, and finish with egg."
  },
  {
    "name": "Fresh Waffle",
    "ingredients": [
      "chili",
      "flour",
      "tomato",
      "cream",
      "garlic",
      "herbs"
    ],
    "steps": "Prepare the fresh waffle using chili, flour, tomato, cream, garlic, and finish with herbs."
  },
  {
    "name": "Fresh Walnut",
    "ingredients": [
      "flour",
      "butter",
      "sugar",
      "egg",
      "cream"
    ],
    "steps": "Prepare the fresh walnut using flour, butter, sugar, egg, and finish with cream."
  },
  {
    "name": "Fresh Yakitori",
    "ingredients": [
      "ginger",
      "cheese",
      "spices",
      "water"
    ],
    "steps": "Prepare the fresh yakitori using ginger, cheese, spices, and finish with water."
  },
  {
    "name": "Fresh Yogurt",
    "ingredients": [
      "cheese",
      "sugar",
      "ginger",
      "salt"
    ],
    "steps": "Prepare the fresh yogurt using cheese, sugar, ginger, and finish with salt."
  },
  {
    "name": "Grilled Anchovy",
    "ingredients": [
      "garlic",
      "flour",
      "ginger",
      "vinegar",
      "tomato",
      "cheese"
    ],
    "steps": "Prepare the grilled anchovy using garlic, flour, ginger, vinegar, tomato, and finish with cheese."
  },
  {
    "name": "Grilled Apple",
    "ingredients": [
      "chili",
      "cream",
      "vinegar",
      "cheese"
    ],
    "steps": "Prepare the grilled apple using chili, cream, vinegar, and finish with cheese."
  },
  {
    "name": "Grilled Artichoke",
    "ingredients": [
      "flour",
      "chili",
      "milk"
    ],
    "steps": "Prepare the grilled artichoke using flour, chili, and finish with milk."
  },
  {
    "name": "Grilled Avocado",
    "ingredients": [
      "garlic",
      "water",
      "cheese",
      "ginger",
      "onion"
    ],
    "steps": "Prepare the grilled avocado using garlic, water, cheese, ginger, and finish with onion."
  },
  {
    "name": "Grilled Bacon",
    "ingredients": [
      "onion",
      "cheese",
      "milk"
    ],
    "steps": "Prepare the grilled bacon using onion, cheese, and finish with milk."
  },
  {
    "name": "Grilled Bagel",
    "ingredients": [
      "sugar",
      "chili",
      "garlic",
      "oil"
    ],
    "steps": "Prepare the grilled bagel using sugar, chili, garlic, and finish with oil."
  },
  {
    "name": "Grilled Banana",
    "ingredients": [
      "vinegar",
      "milk",
      "water",
      "tomato",
      "onion",
      "garlic"
    ],
    "steps": "Prepare the grilled banana using vinegar, milk, water, tomato, onion, and finish with garlic."
  },
  {
    "name": "Grilled Barfi",
    "ingredients": [
      "pepper",
      "onion",
      "vinegar",
      "milk"
    ],
    "steps": "Prepare the grilled barfi using pepper, onion, vinegar, and finish with milk."
  },
  {
    "name": "Grilled Beans",
    "ingredients": [
      "herbs",
      "vinegar",
      "oil",
      "tomato",
      "flour",
      "onion"
    ],
    "steps": "Prepare the grilled beans using herbs, vinegar, oil, tomato, flour, and finish with onion."
  },
  {
    "name": "Grilled Beetroot",
    "ingredients": [
      "butter",
      "sugar",
      "herbs",
      "vinegar"
    ],
    "steps": "Prepare the grilled beetroot using butter, sugar, herbs, and finish with vinegar."
  },
  {
    "name": "Grilled Blueberry",
    "ingredients": [
      "cheese",
      "flour",
      "tomato",
      "vinegar",
      "water"
    ],
    "steps": "Prepare the grilled blueberry using cheese, flour, tomato, vinegar, and finish with water."
  },
  {
    "name": "Grilled Cashew",
    "ingredients": [
      "flour",
      "oil",
      "garlic",
      "cheese",
      "milk"
    ],
    "steps": "Prepare the grilled cashew using flour, oil, garlic, cheese, and finish with milk."
  },
  {
    "name": "Grilled Casserole",
    "ingredients": [
      "egg",
      "vinegar",
      "cream",
      "salt",
      "chili",
      "water"
    ],
    "steps": "Prepare the grilled casserole using egg, vinegar, cream, salt, chili, and finish with water."
  },
  {
    "name": "Grilled Celery",
    "ingredients": [
      "butter",
      "ginger",
      "garlic",
      "flour",
      "cheese",
      "salt"
    ],
    "steps": "Prepare the grilled celery using butter, ginger, garlic, flour, cheese, and finish with salt."
  },
  {
    "name": "Grilled Cereal",
    "ingredients": [
      "chili",
      "garlic",
      "milk"
    ],
    "steps": "Prepare the grilled cereal using chili, garlic, and finish with milk."
  },
  {
    "name": "Grilled Chili",
    "ingredients": [
      "cream",
      "vinegar",
      "spices",
      "milk",
      "water",
      "tomato"
    ],
    "steps": "Prepare the grilled chili using cream, vinegar, spices, milk, water, and finish with tomato."
  },
  {
    "name": "Grilled Chocolate",
    "ingredients": [
      "spices",
      "butter",
      "cheese"
    ],
    "steps": "Prepare the grilled chocolate using spices, butter, and finish with cheese."
  },
  {
    "name": "Grilled Coconut",
    "ingredients": [
      "vinegar",
      "flour",
      "spices",
      "sugar"
    ],
    "steps": "Prepare the grilled coconut using vinegar, flour, spices, and finish with sugar."
  },
  {
    "name": "Grilled Coffee",
    "ingredients": [
      "oil",
      "butter",
      "spices",
      "flour",
      "cheese"
    ],
    "steps": "Prepare the grilled coffee using oil, butter, spices, flour, and finish with cheese."
  },
  {
    "name": "Grilled Cookie",
    "ingredients": [
      "flour",
      "spices",
      "sugar",
      "cream",
      "butter"
    ],
    "steps": "Prepare the grilled cookie using flour, spices, sugar, cream, and finish with butter."
  },
  {
    "name": "Grilled Crepe",
    "ingredients": [
      "water",
      "chili",
      "ginger",
      "salt",
      "vinegar"
    ],
    "steps": "Prepare the grilled crepe using water, chili, ginger, salt, and finish with vinegar."
  },
  {
    "name": "Grilled Cucumber",
    "ingredients": [
      "chili",
      "water",
      "sugar",
      "ginger",
      "spices",
      "onion"
    ],
    "steps": "Prepare the grilled cucumber using chili, water, sugar, ginger, spices, and finish with onion."
  },
  {
    "name": "Grilled Curry",
    "ingredients": [
      "egg",
      "herbs",
      "cream",
      "sugar",
      "chili"
    ],
    "steps": "Prepare the grilled curry using egg, herbs, cream, sugar, and finish with chili."
  },
  {
    "name": "Grilled Date",
    "ingredients": [
      "flour",
      "egg",
      "cheese",
      "oil",
      "salt"
    ],
    "steps": "Prepare the grilled date using flour, egg, cheese, oil, and finish with salt."
  },
  {
    "name": "Grilled Donut",
    "ingredients": [
      "milk",
      "salt",
      "pepper"
    ],
    "steps": "Prepare the grilled donut using milk, salt, and finish with pepper."
  },
  {
    "name": "Grilled Duck",
    "ingredients": [
      "chili",
      "milk",
      "oil",
      "butter",
      "sugar",
      "egg"
    ],
    "steps": "Prepare the grilled duck using chili, milk, oil, butter, sugar, and finish with egg."
  },
  {
    "name": "Grilled Egg",
    "ingredients": [
      "ginger",
      "salt",
      "butter"
    ],
    "steps": "Prepare the grilled egg using ginger, salt, and finish with butter."
  },
  {
    "name": "Grilled Flour",
    "ingredients": [
      "onion",
      "salt",
      "vinegar",
      "chili",
      "pepper",
      "cream"
    ],
    "steps": "Prepare the grilled flour using onion, salt, vinegar, chili, pepper, and finish with cream."
  },
  {
    "name": "Grilled Granola",
    "ingredients": [
      "cheese",
      "sugar",
      "oil",
      "herbs"
    ],
    "steps": "Prepare the grilled granola using cheese, sugar, oil, and finish with herbs."
  },
  {
    "name": "Grilled Halwa",
    "ingredients": [
      "vinegar",
      "milk",
      "egg",
      "salt",
      "garlic",
      "cream"
    ],
    "steps": "Prepare the grilled halwa using vinegar, milk, egg, salt, garlic, and finish with cream."
  },
  {
    "name": "Grilled Hotdog",
    "ingredients": [
      "chili",
      "cheese",
      "herbs",
      "cream",
      "oil"
    ],
    "steps": "Prepare the grilled hotdog using chili, cheese, herbs, cream, and finish with oil."
  },
  {
    "name": "Grilled Idli",
    "ingredients": [
      "oil",
      "tomato",
      "chili",
      "onion",
      "water",
      "flour"
    ],
    "steps": "Prepare the grilled idli using oil, tomato, chili, onion, water, and finish with flour."
  },
  {
    "name": "Grilled Jam",
    "ingredients": [
      "spices",
      "water",
      "egg",
      "garlic"
    ],
    "steps": "Prepare the grilled jam using spices, water, egg, and finish with garlic."
  },
  {
    "name": "Grilled Juice",
    "ingredients": [
      "pepper",
      "oil",
      "egg"
    ],
    "steps": "Prepare the grilled juice using pepper, oil, and finish with egg."
  },
  {
    "name": "Grilled Kebab",
    "ingredients": [
      "butter",
      "pepper",
      "tomato"
    ],
    "steps": "Prepare the grilled kebab using butter, pepper, and finish with tomato."
  },
  {
    "name": "Grilled Kimchi",
    "ingredients": [
      "oil",
      "water",
      "milk",
      "cheese",
      "flour"
    ],
    "steps": "Prepare the grilled kimchi using oil, water, milk, cheese, and finish with flour."
  },
  {
    "name": "Grilled Laddu",
    "ingredients": [
      "water",
      "cheese",
      "oil"
    ],
    "steps": "Prepare the grilled laddu using water, cheese, and finish with oil."
  },
  {
    "name": "Grilled Leek",
    "ingredients": [
      "cream",
      "cheese",
      "pepper",
      "egg",
      "chili"
    ],
    "steps": "Prepare the grilled leek using cream, cheese, pepper, egg, and finish with chili."
  },
  {
    "name": "Grilled Lemon",
    "ingredients": [
      "onion",
      "tomato",
      "salt",
      "sugar",
      "butter",
      "water"
    ],
    "steps": "Prepare the grilled lemon using onion, tomato, salt, sugar, butter, and finish with water."
  },
  {
    "name": "Grilled Lime",
    "ingredients": [
      "chili",
      "pepper",
      "cream",
      "onion",
      "oil"
    ],
    "steps": "Prepare the grilled lime using chili, pepper, cream, onion, and finish with oil."
  },
  {
    "name": "Grilled Lobster",
    "ingredients": [
      "spices",
      "pepper",
      "vinegar",
      "milk",
      "flour",
      "cream"
    ],
    "steps": "Prepare the grilled lobster using spices, pepper, vinegar, milk, flour, and finish with cream."
  },
  {
    "name": "Grilled Mackerel",
    "ingredients": [
      "salt",
      "spices",
      "chili",
      "water"
    ],
    "steps": "Prepare the grilled mackerel using salt, spices, chili, and finish with water."
  },
  {
    "name": "Grilled Mango",
    "ingredients": [
      "spices",
      "tomato",
      "water",
      "cream"
    ],
    "steps": "Prepare the grilled mango using spices, tomato, water, and finish with cream."
  },
  {
    "name": "Grilled Milk",
    "ingredients": [
      "sugar",
      "butter",
      "milk"
    ],
    "steps": "Prepare the grilled milk using sugar, butter, and finish with milk."
  },
  {
    "name": "Grilled Miso",
    "ingredients": [
      "ginger",
      "vinegar",
      "cheese",
      "onion",
      "butter",
      "milk"
    ],
    "steps": "Prepare the grilled miso using ginger, vinegar, cheese, onion, butter, and finish with milk."
  },
  {
    "name": "Grilled Muffin",
    "ingredients": [
      "ginger",
      "spices",
      "oil",
      "water",
      "milk",
      "cheese"
    ],
    "steps": "Prepare the grilled muffin using ginger, spices, oil, water, milk, and finish with cheese."
  },
  {
    "name": "Grilled Mushroom",
    "ingredients": [
      "spices",
      "herbs",
      "vinegar"
    ],
    "steps": "Prepare the grilled mushroom using spices, herbs, and finish with vinegar."
  },
  {
    "name": "Grilled Nori",
    "ingredients": [
      "vinegar",
      "water",
      "cream",
      "milk"
    ],
    "steps": "Prepare the grilled nori using vinegar, water, cream, and finish with milk."
  },
  {
    "name": "Grilled Orange",
    "ingredients": [
      "egg",
      "ginger",
      "tomato",
      "garlic",
      "cream"
    ],
    "steps": "Prepare the grilled orange using egg, ginger, tomato, garlic, and finish with cream."
  },
  {
    "name": "Grilled Paratha",
    "ingredients": [
      "onion",
      "cheese",
      "tomato"
    ],
    "steps": "Prepare the grilled paratha using onion, cheese, and finish with tomato."
  },
  {
    "name": "Grilled Parsley",
    "ingredients": [
      "vinegar",
      "sugar",
      "salt",
      "tomato",
      "water",
      "butter"
    ],
    "steps": "Prepare the grilled parsley using vinegar, sugar, salt, tomato, water, and finish with butter."
  },
  {
    "name": "Grilled Pepper",
    "ingredients": [
      "onion",
      "spices",
      "water",
      "cream"
    ],
    "steps": "Prepare the grilled pepper using onion, spices, water, and finish with cream."
  },
  {
    "name": "Grilled Pickles",
    "ingredients": [
      "milk",
      "tomato",
      "flour",
      "herbs",
      "spices",
      "water"
    ],
    "steps": "Prepare the grilled pickles using milk, tomato, flour, herbs, spices, and finish with water."
  },
  {
    "name": "Grilled Pie",
    "ingredients": [
      "pepper",
      "herbs",
      "ginger"
    ],
    "steps": "Prepare the grilled pie using pepper, herbs, and finish with ginger."
  },
  {
    "name": "Grilled Pizza",
    "ingredients": [
      "salt",
      "egg",
      "pepper"
    ],
    "steps": "Prepare the grilled pizza using salt, egg, and finish with pepper."
  },
  {
    "name": "Grilled Popsicle",
    "ingredients": [
      "butter",
      "sugar",
      "pepper",
      "vinegar",
      "flour"
    ],
    "steps": "Prepare the grilled popsicle using butter, sugar, pepper, vinegar, and finish with flour."
  },
  {
    "name": "Grilled Rasgulla",
    "ingredients": [
      "cream",
      "tomato",
      "garlic",
      "pepper",
      "egg",
      "water"
    ],
    "steps": "Prepare the grilled rasgulla using cream, tomato, garlic, pepper, egg, and finish with water."
  },
  {
    "name": "Grilled Risotto",
    "ingredients": [
      "tomato",
      "oil",
      "egg"
    ],
    "steps": "Prepare the grilled risotto using tomato, oil, and finish with egg."
  },
  {
    "name": "Grilled Sake",
    "ingredients": [
      "milk",
      "chili",
      "water"
    ],
    "steps": "Prepare the grilled sake using milk, chili, and finish with water."
  },
  {
    "name": "Grilled Sardine",
    "ingredients": [
      "butter",
      "garlic",
      "chili",
      "flour",
      "spices",
      "oil"
    ],
    "steps": "Prepare the grilled sardine using butter, garlic, chili, flour, spices, and finish with oil."
  },
  {
    "name": "Grilled Shawarma",
    "ingredients": [
      "water",
      "spices",
      "pepper"
    ],
    "steps": "Prepare the grilled shawarma using water, spices, and finish with pepper."
  },
  {
    "name": "Grilled Shrimp",
    "ingredients": [
      "spices",
      "herbs",
      "vinegar"
    ],
    "steps": "Prepare the grilled shrimp using spices, herbs, and finish with vinegar."
  },
  {
    "name": "Grilled Soup",
    "ingredients": [
      "milk",
      "egg",
      "cream",
      "chili",
      "spices"
    ],
    "steps": "Prepare the grilled soup using milk, egg, cream, chili, and finish with spices."
  },
  {
    "name": "Grilled Spaghetti",
    "ingredients": [
      "milk",
      "herbs",
      "water",
      "oil"
    ],
    "steps": "Prepare the grilled spaghetti using milk, herbs, water, and finish with oil."
  },
  {
    "name": "Grilled Spinach",
    "ingredients": [
      "vinegar",
      "pepper",
      "oil",
      "onion",
      "ginger"
    ],
    "steps": "Prepare the grilled spinach using vinegar, pepper, oil, onion, and finish with ginger."
  },
  {
    "name": "Grilled Squash",
    "ingredients": [
      "water",
      "flour",
      "sugar",
      "salt"
    ],
    "steps": "Prepare the grilled squash using water, flour, sugar, and finish with salt."
  },
  {
    "name": "Grilled Strawberry",
    "ingredients": [
      "garlic",
      "ginger",
      "water",
      "oil"
    ],
    "steps": "Prepare the grilled strawberry using garlic, ginger, water, and finish with oil."
  },
  {
    "name": "Grilled Sugar",
    "ingredients": [
      "flour",
      "vinegar",
      "tomato",
      "herbs"
    ],
    "steps": "Prepare the grilled sugar using flour, vinegar, tomato, and finish with herbs."
  },
  {
    "name": "Grilled Sushi",
    "ingredients": [
      "ginger",
      "spices",
      "herbs",
      "sugar"
    ],
    "steps": "Prepare the grilled sushi using ginger, spices, herbs, and finish with sugar."
  },
  {
    "name": "Grilled Taco",
    "ingredients": [
      "cheese",
      "pepper",
      "oil",
      "spices"
    ],
    "steps": "Prepare the grilled taco using cheese, pepper, oil, and finish with spices."
  },
  {
    "name": "Grilled Tandoori",
    "ingredients": [
      "egg",
      "cheese",
      "oil",
      "pepper",
      "cream"
    ],
    "steps": "Prepare the grilled tandoori using egg, cheese, oil, pepper, and finish with cream."
  },
  {
    "name": "Grilled Tea",
    "ingredients": [
      "oil",
      "water",
      "tomato",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the grilled tea using oil, water, tomato, sugar, and finish with onion."
  },
  {
    "name": "Grilled Tempura",
    "ingredients": [
      "herbs",
      "cream",
      "cheese"
    ],
    "steps": "Prepare the grilled tempura using herbs, cream, and finish with cheese."
  },
  {
    "name": "Grilled Tofu",
    "ingredients": [
      "herbs",
      "salt",
      "water",
      "oil",
      "garlic"
    ],
    "steps": "Prepare the grilled tofu using herbs, salt, water, oil, and finish with garlic."
  },
  {
    "name": "Grilled Trout",
    "ingredients": [
      "egg",
      "flour",
      "spices"
    ],
    "steps": "Prepare the grilled trout using egg, flour, and finish with spices."
  },
  {
    "name": "Grilled Tuna",
    "ingredients": [
      "flour",
      "oil",
      "vinegar"
    ],
    "steps": "Prepare the grilled tuna using flour, oil, and finish with vinegar."
  },
  {
    "name": "Grilled Turkey",
    "ingredients": [
      "chili",
      "cheese",
      "milk",
      "cream"
    ],
    "steps": "Prepare the grilled turkey using chili, cheese, milk, and finish with cream."
  },
  {
    "name": "Grilled Turnip",
    "ingredients": [
      "egg",
      "tomato",
      "chili",
      "cream",
      "garlic"
    ],
    "steps": "Prepare the grilled turnip using egg, tomato, chili, cream, and finish with garlic."
  },
  {
    "name": "Grilled Vinegar",
    "ingredients": [
      "cheese",
      "sugar",
      "vinegar",
      "butter",
      "cream"
    ],
    "steps": "Prepare the grilled vinegar using cheese, sugar, vinegar, butter, and finish with cream."
  },
  {
    "name": "Grilled Waffle",
    "ingredients": [
      "chili",
      "milk",
      "water",
      "egg",
      "flour",
      "butter"
    ],
    "steps": "Prepare the grilled waffle using chili, milk, water, egg, flour, and finish with butter."
  },
  {
    "name": "Grilled Watermelon",
    "ingredients": [
      "spices",
      "oil",
      "water"
    ],
    "steps": "Prepare the grilled watermelon using spices, oil, and finish with water."
  },
  {
    "name": "Grilled Yakitori",
    "ingredients": [
      "onion",
      "oil",
      "milk",
      "cream",
      "vinegar",
      "cheese"
    ],
    "steps": "Prepare the grilled yakitori using onion, oil, milk, cream, vinegar, and finish with cheese."
  },
  {
    "name": "Organic Avocado",
    "ingredients": [
      "chili",
      "oil",
      "onion"
    ],
    "steps": "Prepare the organic avocado using chili, oil, and finish with onion."
  },
  {
    "name": "Organic Bacon",
    "ingredients": [
      "chili",
      "cream",
      "ginger"
    ],
    "steps": "Prepare the organic bacon using chili, cream, and finish with ginger."
  },
  {
    "name": "Organic Barley",
    "ingredients": [
      "onion",
      "tomato",
      "chili",
      "butter",
      "flour",
      "cheese"
    ],
    "steps": "Prepare the organic barley using onion, tomato, chili, butter, flour, and finish with cheese."
  },
  {
    "name": "Organic Beetroot",
    "ingredients": [
      "ginger",
      "chili",
      "butter"
    ],
    "steps": "Prepare the organic beetroot using ginger, chili, and finish with butter."
  },
  {
    "name": "Organic Bibimbap",
    "ingredients": [
      "milk",
      "chili",
      "cream"
    ],
    "steps": "Prepare the organic bibimbap using milk, chili, and finish with cream."
  },
  {
    "name": "Organic Blueberry",
    "ingredients": [
      "sugar",
      "ginger",
      "chili",
      "tomato",
      "herbs"
    ],
    "steps": "Prepare the organic blueberry using sugar, ginger, chili, tomato, and finish with herbs."
  },
  {
    "name": "Organic Bread",
    "ingredients": [
      "onion",
      "spices",
      "oil",
      "pepper",
      "garlic"
    ],
    "steps": "Prepare the organic bread using onion, spices, oil, pepper, and finish with garlic."
  },
  {
    "name": "Organic Broccoli",
    "ingredients": [
      "cheese",
      "chili",
      "egg",
      "cream",
      "pepper"
    ],
    "steps": "Prepare the organic broccoli using cheese, chili, egg, cream, and finish with pepper."
  },
  {
    "name": "Organic Brownie",
    "ingredients": [
      "cream",
      "pepper",
      "sugar",
      "salt"
    ],
    "steps": "Prepare the organic brownie using cream, pepper, sugar, and finish with salt."
  },
  {
    "name": "Organic Burger",
    "ingredients": [
      "salt",
      "pepper",
      "oil",
      "vinegar",
      "chili",
      "water"
    ],
    "steps": "Prepare the organic burger using salt, pepper, oil, vinegar, chili, and finish with water."
  },
  {
    "name": "Organic Butter",
    "ingredients": [
      "sugar",
      "cream",
      "vinegar",
      "salt",
      "tomato"
    ],
    "steps": "Prepare the organic butter using sugar, cream, vinegar, salt, and finish with tomato."
  },
  {
    "name": "Organic Cake",
    "ingredients": [
      "salt",
      "tomato",
      "cream",
      "cheese"
    ],
    "steps": "Prepare the organic cake using salt, tomato, cream, and finish with cheese."
  },
  {
    "name": "Organic Carrot",
    "ingredients": [
      "egg",
      "ginger",
      "oil",
      "onion"
    ],
    "steps": "Prepare the organic carrot using egg, ginger, oil, and finish with onion."
  },
  {
    "name": "Organic Cashew",
    "ingredients": [
      "cream",
      "pepper",
      "herbs",
      "onion",
      "garlic"
    ],
    "steps": "Prepare the organic cashew using cream, pepper, herbs, onion, and finish with garlic."
  },
  {
    "name": "Organic Casserole",
    "ingredients": [
      "garlic",
      "butter",
      "cheese"
    ],
    "steps": "Prepare the organic casserole using garlic, butter, and finish with cheese."
  },
  {
    "name": "Organic Cauliflower",
    "ingredients": [
      "vinegar",
      "spices",
      "cream"
    ],
    "steps": "Prepare the organic cauliflower using vinegar, spices, and finish with cream."
  },
  {
    "name": "Organic Chow Mein",
    "ingredients": [
      "salt",
      "garlic",
      "flour",
      "chili",
      "onion",
      "oil"
    ],
    "steps": "Prepare the organic chow mein using salt, garlic, flour, chili, onion, and finish with oil."
  },
  {
    "name": "Organic Clam",
    "ingredients": [
      "flour",
      "milk",
      "pepper"
    ],
    "steps": "Prepare the organic clam using flour, milk, and finish with pepper."
  },
  {
    "name": "Organic Clove",
    "ingredients": [
      "sugar",
      "pepper",
      "tomato"
    ],
    "steps": "Prepare the organic clove using sugar, pepper, and finish with tomato."
  },
  {
    "name": "Organic Coconut",
    "ingredients": [
      "onion",
      "milk",
      "oil"
    ],
    "steps": "Prepare the organic coconut using onion, milk, and finish with oil."
  },
  {
    "name": "Organic Corn",
    "ingredients": [
      "cheese",
      "onion",
      "milk",
      "flour"
    ],
    "steps": "Prepare the organic corn using cheese, onion, milk, and finish with flour."
  },
  {
    "name": "Organic Cucumber",
    "ingredients": [
      "milk",
      "cream",
      "butter"
    ],
    "steps": "Prepare the organic cucumber using milk, cream, and finish with butter."
  },
  {
    "name": "Organic Date",
    "ingredients": [
      "milk",
      "spices",
      "cream",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the organic date using milk, spices, cream, garlic, and finish with chili."
  },
  {
    "name": "Organic Dosa",
    "ingredients": [
      "cream",
      "butter",
      "tomato"
    ],
    "steps": "Prepare the organic dosa using cream, butter, and finish with tomato."
  },
  {
    "name": "Organic Duck",
    "ingredients": [
      "cream",
      "pepper",
      "garlic"
    ],
    "steps": "Prepare the organic duck using cream, pepper, and finish with garlic."
  },
  {
    "name": "Organic Dumpling",
    "ingredients": [
      "pepper",
      "spices",
      "herbs"
    ],
    "steps": "Prepare the organic dumpling using pepper, spices, and finish with herbs."
  },
  {
    "name": "Organic Egg",
    "ingredients": [
      "oil",
      "ginger",
      "salt",
      "cream",
      "pepper",
      "cheese"
    ],
    "steps": "Prepare the organic egg using oil, ginger, salt, cream, pepper, and finish with cheese."
  },
  {
    "name": "Organic Eggplant",
    "ingredients": [
      "milk",
      "water",
      "herbs",
      "chili"
    ],
    "steps": "Prepare the organic eggplant using milk, water, herbs, and finish with chili."
  },
  {
    "name": "Organic Fig",
    "ingredients": [
      "onion",
      "butter",
      "oil",
      "spices"
    ],
    "steps": "Prepare the organic fig using onion, butter, oil, and finish with spices."
  },
  {
    "name": "Organic Fish",
    "ingredients": [
      "herbs",
      "salt",
      "sugar",
      "butter",
      "flour",
      "oil"
    ],
    "steps": "Prepare the organic fish using herbs, salt, sugar, butter, flour, and finish with oil."
  },
  {
    "name": "Organic Flour",
    "ingredients": [
      "milk",
      "egg",
      "tomato",
      "herbs",
      "vinegar",
      "cheese"
    ],
    "steps": "Prepare the organic flour using milk, egg, tomato, herbs, vinegar, and finish with cheese."
  },
  {
    "name": "Organic Garlic",
    "ingredients": [
      "milk",
      "ginger",
      "oil"
    ],
    "steps": "Prepare the organic garlic using milk, ginger, and finish with oil."
  },
  {
    "name": "Organic Goose",
    "ingredients": [
      "water",
      "cheese",
      "herbs",
      "flour",
      "ginger"
    ],
    "steps": "Prepare the organic goose using water, cheese, herbs, flour, and finish with ginger."
  },
  {
    "name": "Organic Gulab Jamun",
    "ingredients": [
      "butter",
      "pepper",
      "garlic"
    ],
    "steps": "Prepare the organic gulab jamun using butter, pepper, and finish with garlic."
  },
  {
    "name": "Organic Halwa",
    "ingredients": [
      "vinegar",
      "egg",
      "ginger",
      "onion",
      "herbs"
    ],
    "steps": "Prepare the organic halwa using vinegar, egg, ginger, onion, and finish with herbs."
  },
  {
    "name": "Organic Ham",
    "ingredients": [
      "cheese",
      "egg",
      "pepper",
      "sugar"
    ],
    "steps": "Prepare the organic ham using cheese, egg, pepper, and finish with sugar."
  },
  {
    "name": "Organic Hazelnut",
    "ingredients": [
      "onion",
      "milk",
      "herbs"
    ],
    "steps": "Prepare the organic hazelnut using onion, milk, and finish with herbs."
  },
  {
    "name": "Organic Hotdog",
    "ingredients": [
      "pepper",
      "ginger",
      "spices",
      "milk"
    ],
    "steps": "Prepare the organic hotdog using pepper, ginger, spices, and finish with milk."
  },
  {
    "name": "Organic Idli",
    "ingredients": [
      "spices",
      "tomato",
      "flour"
    ],
    "steps": "Prepare the organic idli using spices, tomato, and finish with flour."
  },
  {
    "name": "Organic Jam",
    "ingredients": [
      "water",
      "onion",
      "herbs",
      "garlic",
      "sugar",
      "milk"
    ],
    "steps": "Prepare the organic jam using water, onion, herbs, garlic, sugar, and finish with milk."
  },
  {
    "name": "Organic Juice",
    "ingredients": [
      "onion",
      "tomato",
      "water",
      "pepper"
    ],
    "steps": "Prepare the organic juice using onion, tomato, water, and finish with pepper."
  },
  {
    "name": "Organic Ketchup",
    "ingredients": [
      "tomato",
      "milk",
      "onion",
      "cream",
      "oil"
    ],
    "steps": "Prepare the organic ketchup using tomato, milk, onion, cream, and finish with oil."
  },
  {
    "name": "Organic Kheer",
    "ingredients": [
      "onion",
      "pepper",
      "water",
      "vinegar",
      "oil"
    ],
    "steps": "Prepare the organic kheer using onion, pepper, water, vinegar, and finish with oil."
  },
  {
    "name": "Organic Kimchi",
    "ingredients": [
      "egg",
      "flour",
      "vinegar",
      "ginger"
    ],
    "steps": "Prepare the organic kimchi using egg, flour, vinegar, and finish with ginger."
  },
  {
    "name": "Organic Leek",
    "ingredients": [
      "onion",
      "salt",
      "garlic"
    ],
    "steps": "Prepare the organic leek using onion, salt, and finish with garlic."
  },
  {
    "name": "Organic Lemon",
    "ingredients": [
      "vinegar",
      "onion",
      "salt",
      "ginger",
      "butter"
    ],
    "steps": "Prepare the organic lemon using vinegar, onion, salt, ginger, and finish with butter."
  },
  {
    "name": "Organic Lettuce",
    "ingredients": [
      "sugar",
      "cheese",
      "onion",
      "vinegar",
      "egg",
      "chili"
    ],
    "steps": "Prepare the organic lettuce using sugar, cheese, onion, vinegar, egg, and finish with chili."
  },
  {
    "name": "Organic Lime",
    "ingredients": [
      "salt",
      "onion",
      "cheese",
      "chili"
    ],
    "steps": "Prepare the organic lime using salt, onion, cheese, and finish with chili."
  },
  {
    "name": "Organic Mayonnaise",
    "ingredients": [
      "egg",
      "garlic",
      "pepper"
    ],
    "steps": "Prepare the organic mayonnaise using egg, garlic, and finish with pepper."
  },
  {
    "name": "Organic Meatball",
    "ingredients": [
      "salt",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the organic meatball using salt, garlic, and finish with chili."
  },
  {
    "name": "Organic Muffin",
    "ingredients": [
      "garlic",
      "butter",
      "egg"
    ],
    "steps": "Prepare the organic muffin using garlic, butter, and finish with egg."
  },
  {
    "name": "Organic Oats",
    "ingredients": [
      "ginger",
      "flour",
      "sugar",
      "pepper"
    ],
    "steps": "Prepare the organic oats using ginger, flour, sugar, and finish with pepper."
  },
  {
    "name": "Organic Oil",
    "ingredients": [
      "garlic",
      "oil",
      "sugar",
      "water",
      "pepper",
      "vinegar"
    ],
    "steps": "Prepare the organic oil using garlic, oil, sugar, water, pepper, and finish with vinegar."
  },
  {
    "name": "Organic Olive",
    "ingredients": [
      "oil",
      "flour",
      "cheese",
      "pepper",
      "tomato"
    ],
    "steps": "Prepare the organic olive using oil, flour, cheese, pepper, and finish with tomato."
  },
  {
    "name": "Organic Onion",
    "ingredients": [
      "sugar",
      "water",
      "tomato",
      "salt",
      "butter"
    ],
    "steps": "Prepare the organic onion using sugar, water, tomato, salt, and finish with butter."
  },
  {
    "name": "Organic Orange",
    "ingredients": [
      "garlic",
      "ginger",
      "vinegar"
    ],
    "steps": "Prepare the organic orange using garlic, ginger, and finish with vinegar."
  },
  {
    "name": "Organic Oregano",
    "ingredients": [
      "ginger",
      "onion",
      "sugar"
    ],
    "steps": "Prepare the organic oregano using ginger, onion, and finish with sugar."
  },
  {
    "name": "Organic Paella",
    "ingredients": [
      "sugar",
      "water",
      "butter",
      "salt",
      "chili"
    ],
    "steps": "Prepare the organic paella using sugar, water, butter, salt, and finish with chili."
  },
  {
    "name": "Organic Pancake",
    "ingredients": [
      "milk",
      "onion",
      "vinegar",
      "ginger"
    ],
    "steps": "Prepare the organic pancake using milk, onion, vinegar, and finish with ginger."
  },
  {
    "name": "Organic Paratha",
    "ingredients": [
      "salt",
      "water",
      "cream",
      "ginger",
      "onion",
      "tomato"
    ],
    "steps": "Prepare the organic paratha using salt, water, cream, ginger, onion, and finish with tomato."
  },
  {
    "name": "Organic Pickles",
    "ingredients": [
      "salt",
      "spices",
      "oil",
      "garlic",
      "vinegar"
    ],
    "steps": "Prepare the organic pickles using salt, spices, oil, garlic, and finish with vinegar."
  },
  {
    "name": "Organic Pie",
    "ingredients": [
      "garlic",
      "onion",
      "pepper"
    ],
    "steps": "Prepare the organic pie using garlic, onion, and finish with pepper."
  },
  {
    "name": "Organic Pineapple",
    "ingredients": [
      "garlic",
      "egg",
      "butter",
      "sugar"
    ],
    "steps": "Prepare the organic pineapple using garlic, egg, butter, and finish with sugar."
  },
  {
    "name": "Organic Potato",
    "ingredients": [
      "salt",
      "egg",
      "ginger",
      "pepper",
      "onion",
      "water"
    ],
    "steps": "Prepare the organic potato using salt, egg, ginger, pepper, onion, and finish with water."
  },
  {
    "name": "Organic Pumpkin",
    "ingredients": [
      "vinegar",
      "oil",
      "garlic",
      "salt"
    ],
    "steps": "Prepare the organic pumpkin using vinegar, oil, garlic, and finish with salt."
  },
  {
    "name": "Organic Quesadilla",
    "ingredients": [
      "spices",
      "milk",
      "flour"
    ],
    "steps": "Prepare the organic quesadilla using spices, milk, and finish with flour."
  },
  {
    "name": "Organic Quinoa",
    "ingredients": [
      "oil",
      "water",
      "cheese",
      "spices",
      "sugar",
      "cream"
    ],
    "steps": "Prepare the organic quinoa using oil, water, cheese, spices, sugar, and finish with cream."
  },
  {
    "name": "Organic Rasgulla",
    "ingredients": [
      "oil",
      "pepper",
      "cheese"
    ],
    "steps": "Prepare the organic rasgulla using oil, pepper, and finish with cheese."
  },
  {
    "name": "Organic Raspberry",
    "ingredients": [
      "spices",
      "cream",
      "salt",
      "pepper",
      "onion",
      "flour"
    ],
    "steps": "Prepare the organic raspberry using spices, cream, salt, pepper, onion, and finish with flour."
  },
  {
    "name": "Organic Rice",
    "ingredients": [
      "herbs",
      "pepper",
      "oil",
      "cheese"
    ],
    "steps": "Prepare the organic rice using herbs, pepper, oil, and finish with cheese."
  },
  {
    "name": "Organic Roti",
    "ingredients": [
      "onion",
      "tomato",
      "chili",
      "vinegar",
      "water"
    ],
    "steps": "Prepare the organic roti using onion, tomato, chili, vinegar, and finish with water."
  },
  {
    "name": "Organic Salmon",
    "ingredients": [
      "vinegar",
      "cream",
      "tomato",
      "onion",
      "herbs",
      "oil"
    ],
    "steps": "Prepare the organic salmon using vinegar, cream, tomato, onion, herbs, and finish with oil."
  },
  {
    "name": "Organic Samosa",
    "ingredients": [
      "milk",
      "cheese",
      "onion",
      "tomato"
    ],
    "steps": "Prepare the organic samosa using milk, cheese, onion, and finish with tomato."
  },
  {
    "name": "Organic Sardine",
    "ingredients": [
      "garlic",
      "pepper",
      "egg",
      "milk",
      "flour"
    ],
    "steps": "Prepare the organic sardine using garlic, pepper, egg, milk, and finish with flour."
  },
  {
    "name": "Organic Sausage",
    "ingredients": [
      "spices",
      "tomato",
      "butter",
      "sugar",
      "cream"
    ],
    "steps": "Prepare the organic sausage using spices, tomato, butter, sugar, and finish with cream."
  },
  {
    "name": "Organic Snapper",
    "ingredients": [
      "egg",
      "butter",
      "oil",
      "spices",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the organic snapper using egg, butter, oil, spices, cheese, and finish with sugar."
  },
  {
    "name": "Organic Soup",
    "ingredients": [
      "sugar",
      "water",
      "herbs",
      "oil"
    ],
    "steps": "Prepare the organic soup using sugar, water, herbs, and finish with oil."
  },
  {
    "name": "Organic Spaghetti",
    "ingredients": [
      "salt",
      "cream",
      "tomato",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the organic spaghetti using salt, cream, tomato, sugar, and finish with onion."
  },
  {
    "name": "Organic Sugar",
    "ingredients": [
      "chili",
      "salt",
      "cream",
      "ginger"
    ],
    "steps": "Prepare the organic sugar using chili, salt, cream, and finish with ginger."
  },
  {
    "name": "Organic Sushi",
    "ingredients": [
      "spices",
      "cheese",
      "butter"
    ],
    "steps": "Prepare the organic sushi using spices, cheese, and finish with butter."
  },
  {
    "name": "Organic Tandoori",
    "ingredients": [
      "sugar",
      "spices",
      "ginger",
      "flour"
    ],
    "steps": "Prepare the organic tandoori using sugar, spices, ginger, and finish with flour."
  },
  {
    "name": "Organic Teriyaki",
    "ingredients": [
      "flour",
      "ginger",
      "butter",
      "sugar",
      "spices"
    ],
    "steps": "Prepare the organic teriyaki using flour, ginger, butter, sugar, and finish with spices."
  },
  {
    "name": "Organic Toast",
    "ingredients": [
      "cream",
      "tomato",
      "pepper",
      "salt"
    ],
    "steps": "Prepare the organic toast using cream, tomato, pepper, and finish with salt."
  },
  {
    "name": "Organic Tofu",
    "ingredients": [
      "water",
      "spices",
      "cheese",
      "pepper",
      "vinegar"
    ],
    "steps": "Prepare the organic tofu using water, spices, cheese, pepper, and finish with vinegar."
  },
  {
    "name": "Organic Tomato",
    "ingredients": [
      "milk",
      "egg",
      "ginger",
      "cheese"
    ],
    "steps": "Prepare the organic tomato using milk, egg, ginger, and finish with cheese."
  },
  {
    "name": "Organic Trout",
    "ingredients": [
      "ginger",
      "milk",
      "tomato",
      "cream",
      "vinegar",
      "oil"
    ],
    "steps": "Prepare the organic trout using ginger, milk, tomato, cream, vinegar, and finish with oil."
  },
  {
    "name": "Organic Turkey",
    "ingredients": [
      "vinegar",
      "onion",
      "milk",
      "butter",
      "tomato",
      "oil"
    ],
    "steps": "Prepare the organic turkey using vinegar, onion, milk, butter, tomato, and finish with oil."
  },
  {
    "name": "Organic Wasabi",
    "ingredients": [
      "pepper",
      "tomato",
      "oil"
    ],
    "steps": "Prepare the organic wasabi using pepper, tomato, and finish with oil."
  },
  {
    "name": "Organic Watermelon",
    "ingredients": [
      "garlic",
      "herbs",
      "cheese",
      "tomato"
    ],
    "steps": "Prepare the organic watermelon using garlic, herbs, cheese, and finish with tomato."
  },
  {
    "name": "Organic Yakitori",
    "ingredients": [
      "ginger",
      "butter",
      "water",
      "milk",
      "pepper",
      "garlic"
    ],
    "steps": "Prepare the organic yakitori using ginger, butter, water, milk, pepper, and finish with garlic."
  },
  {
    "name": "Organic Zucchini",
    "ingredients": [
      "milk",
      "cream",
      "ginger"
    ],
    "steps": "Prepare the organic zucchini using milk, cream, and finish with ginger."
  },
  {
    "name": "Raw Almond",
    "ingredients": [
      "cheese",
      "milk",
      "sugar",
      "water"
    ],
    "steps": "Prepare the raw almond using cheese, milk, sugar, and finish with water."
  },
  {
    "name": "Raw Apple",
    "ingredients": [
      "spices",
      "herbs",
      "oil",
      "onion"
    ],
    "steps": "Prepare the raw apple using spices, herbs, oil, and finish with onion."
  },
  {
    "name": "Raw Artichoke",
    "ingredients": [
      "salt",
      "oil",
      "spices",
      "onion",
      "garlic"
    ],
    "steps": "Prepare the raw artichoke using salt, oil, spices, onion, and finish with garlic."
  },
  {
    "name": "Raw Asparagus",
    "ingredients": [
      "flour",
      "butter",
      "cream",
      "spices",
      "egg"
    ],
    "steps": "Prepare the raw asparagus using flour, butter, cream, spices, and finish with egg."
  },
  {
    "name": "Raw Avocado",
    "ingredients": [
      "water",
      "ginger",
      "salt",
      "spices"
    ],
    "steps": "Prepare the raw avocado using water, ginger, salt, and finish with spices."
  },
  {
    "name": "Raw Bagel",
    "ingredients": [
      "water",
      "milk",
      "butter",
      "pepper"
    ],
    "steps": "Prepare the raw bagel using water, milk, butter, and finish with pepper."
  },
  {
    "name": "Raw Basil",
    "ingredients": [
      "pepper",
      "egg",
      "cheese",
      "ginger"
    ],
    "steps": "Prepare the raw basil using pepper, egg, cheese, and finish with ginger."
  },
  {
    "name": "Raw Beans",
    "ingredients": [
      "cream",
      "garlic",
      "herbs",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the raw beans using cream, garlic, herbs, pepper, and finish with egg."
  },
  {
    "name": "Raw Beef",
    "ingredients": [
      "oil",
      "herbs",
      "milk",
      "flour",
      "ginger",
      "cheese"
    ],
    "steps": "Prepare the raw beef using oil, herbs, milk, flour, ginger, and finish with cheese."
  },
  {
    "name": "Raw Bibimbap",
    "ingredients": [
      "onion",
      "herbs",
      "garlic"
    ],
    "steps": "Prepare the raw bibimbap using onion, herbs, and finish with garlic."
  },
  {
    "name": "Raw Biryani",
    "ingredients": [
      "onion",
      "cream",
      "butter",
      "egg",
      "oil",
      "flour"
    ],
    "steps": "Prepare the raw biryani using onion, cream, butter, egg, oil, and finish with flour."
  },
  {
    "name": "Raw Bread",
    "ingredients": [
      "ginger",
      "sugar",
      "water",
      "milk",
      "chili",
      "garlic"
    ],
    "steps": "Prepare the raw bread using ginger, sugar, water, milk, chili, and finish with garlic."
  },
  {
    "name": "Raw Broccoli",
    "ingredients": [
      "vinegar",
      "spices",
      "oil",
      "pepper"
    ],
    "steps": "Prepare the raw broccoli using vinegar, spices, oil, and finish with pepper."
  },
  {
    "name": "Raw Burger",
    "ingredients": [
      "herbs",
      "pepper",
      "spices"
    ],
    "steps": "Prepare the raw burger using herbs, pepper, and finish with spices."
  },
  {
    "name": "Raw Burrito",
    "ingredients": [
      "milk",
      "sugar",
      "butter",
      "water",
      "oil"
    ],
    "steps": "Prepare the raw burrito using milk, sugar, butter, water, and finish with oil."
  },
  {
    "name": "Raw Butter",
    "ingredients": [
      "flour",
      "garlic",
      "pepper"
    ],
    "steps": "Prepare the raw butter using flour, garlic, and finish with pepper."
  },
  {
    "name": "Raw Cake",
    "ingredients": [
      "ginger",
      "tomato",
      "oil",
      "water"
    ],
    "steps": "Prepare the raw cake using ginger, tomato, oil, and finish with water."
  },
  {
    "name": "Raw Casserole",
    "ingredients": [
      "cheese",
      "milk",
      "pepper"
    ],
    "steps": "Prepare the raw casserole using cheese, milk, and finish with pepper."
  },
  {
    "name": "Raw Cauliflower",
    "ingredients": [
      "ginger",
      "onion",
      "garlic",
      "pepper",
      "chili"
    ],
    "steps": "Prepare the raw cauliflower using ginger, onion, garlic, pepper, and finish with chili."
  },
  {
    "name": "Raw Celery",
    "ingredients": [
      "cheese",
      "tomato",
      "flour",
      "water",
      "egg"
    ],
    "steps": "Prepare the raw celery using cheese, tomato, flour, water, and finish with egg."
  },
  {
    "name": "Raw Cereal",
    "ingredients": [
      "sugar",
      "milk",
      "flour",
      "butter",
      "salt",
      "tomato"
    ],
    "steps": "Prepare the raw cereal using sugar, milk, flour, butter, salt, and finish with tomato."
  },
  {
    "name": "Raw Chicken",
    "ingredients": [
      "milk",
      "herbs",
      "cheese",
      "butter",
      "flour",
      "water"
    ],
    "steps": "Prepare the raw chicken using milk, herbs, cheese, butter, flour, and finish with water."
  },
  {
    "name": "Raw Clam",
    "ingredients": [
      "cream",
      "flour",
      "chili"
    ],
    "steps": "Prepare the raw clam using cream, flour, and finish with chili."
  },
  {
    "name": "Raw Corn",
    "ingredients": [
      "cheese",
      "spices",
      "vinegar",
      "milk",
      "salt"
    ],
    "steps": "Prepare the raw corn using cheese, spices, vinegar, milk, and finish with salt."
  },
  {
    "name": "Raw Curry",
    "ingredients": [
      "vinegar",
      "cream",
      "garlic",
      "herbs",
      "pepper"
    ],
    "steps": "Prepare the raw curry using vinegar, cream, garlic, herbs, and finish with pepper."
  },
  {
    "name": "Raw Date",
    "ingredients": [
      "garlic",
      "chili",
      "spices",
      "water",
      "herbs"
    ],
    "steps": "Prepare the raw date using garlic, chili, spices, water, and finish with herbs."
  },
  {
    "name": "Raw Donut",
    "ingredients": [
      "sugar",
      "butter",
      "cheese",
      "vinegar",
      "herbs",
      "ginger"
    ],
    "steps": "Prepare the raw donut using sugar, butter, cheese, vinegar, herbs, and finish with ginger."
  },
  {
    "name": "Raw Duck",
    "ingredients": [
      "cheese",
      "flour",
      "butter",
      "salt"
    ],
    "steps": "Prepare the raw duck using cheese, flour, butter, and finish with salt."
  },
  {
    "name": "Raw Dumpling",
    "ingredients": [
      "garlic",
      "salt",
      "onion",
      "chili"
    ],
    "steps": "Prepare the raw dumpling using garlic, salt, onion, and finish with chili."
  },
  {
    "name": "Raw Fig",
    "ingredients": [
      "garlic",
      "water",
      "cream",
      "flour",
      "onion",
      "herbs"
    ],
    "steps": "Prepare the raw fig using garlic, water, cream, flour, onion, and finish with herbs."
  },
  {
    "name": "Raw Gelato",
    "ingredients": [
      "butter",
      "salt",
      "milk"
    ],
    "steps": "Prepare the raw gelato using butter, salt, and finish with milk."
  },
  {
    "name": "Raw Ginger",
    "ingredients": [
      "garlic",
      "tomato",
      "vinegar",
      "herbs",
      "flour",
      "sugar"
    ],
    "steps": "Prepare the raw ginger using garlic, tomato, vinegar, herbs, flour, and finish with sugar."
  },
  {
    "name": "Raw Granola",
    "ingredients": [
      "chili",
      "salt",
      "water",
      "herbs",
      "milk",
      "ginger"
    ],
    "steps": "Prepare the raw granola using chili, salt, water, herbs, milk, and finish with ginger."
  },
  {
    "name": "Raw Grape",
    "ingredients": [
      "vinegar",
      "ginger",
      "flour"
    ],
    "steps": "Prepare the raw grape using vinegar, ginger, and finish with flour."
  },
  {
    "name": "Raw Ham",
    "ingredients": [
      "chili",
      "water",
      "oil"
    ],
    "steps": "Prepare the raw ham using chili, water, and finish with oil."
  },
  {
    "name": "Raw Hotdog",
    "ingredients": [
      "water",
      "egg",
      "onion",
      "spices"
    ],
    "steps": "Prepare the raw hotdog using water, egg, onion, and finish with spices."
  },
  {
    "name": "Raw Ice Cream",
    "ingredients": [
      "butter",
      "milk",
      "cream"
    ],
    "steps": "Prepare the raw ice cream using butter, milk, and finish with cream."
  },
  {
    "name": "Raw Jam",
    "ingredients": [
      "milk",
      "flour",
      "salt",
      "spices",
      "chili"
    ],
    "steps": "Prepare the raw jam using milk, flour, salt, spices, and finish with chili."
  },
  {
    "name": "Raw Juice",
    "ingredients": [
      "herbs",
      "butter",
      "pepper",
      "spices"
    ],
    "steps": "Prepare the raw juice using herbs, butter, pepper, and finish with spices."
  },
  {
    "name": "Raw Kebab",
    "ingredients": [
      "ginger",
      "spices",
      "chili",
      "herbs"
    ],
    "steps": "Prepare the raw kebab using ginger, spices, chili, and finish with herbs."
  },
  {
    "name": "Raw Ketchup",
    "ingredients": [
      "pepper",
      "onion",
      "chili"
    ],
    "steps": "Prepare the raw ketchup using pepper, onion, and finish with chili."
  },
  {
    "name": "Raw Kheer",
    "ingredients": [
      "milk",
      "spices",
      "water",
      "chili",
      "pepper"
    ],
    "steps": "Prepare the raw kheer using milk, spices, water, chili, and finish with pepper."
  },
  {
    "name": "Raw Laddu",
    "ingredients": [
      "butter",
      "salt",
      "tomato",
      "onion",
      "cream",
      "milk"
    ],
    "steps": "Prepare the raw laddu using butter, salt, tomato, onion, cream, and finish with milk."
  },
  {
    "name": "Raw Lasagna",
    "ingredients": [
      "cream",
      "butter",
      "onion"
    ],
    "steps": "Prepare the raw lasagna using cream, butter, and finish with onion."
  },
  {
    "name": "Raw Leek",
    "ingredients": [
      "garlic",
      "sugar",
      "butter",
      "water"
    ],
    "steps": "Prepare the raw leek using garlic, sugar, butter, and finish with water."
  },
  {
    "name": "Raw Lemon",
    "ingredients": [
      "garlic",
      "chili",
      "vinegar",
      "ginger"
    ],
    "steps": "Prepare the raw lemon using garlic, chili, vinegar, and finish with ginger."
  },
  {
    "name": "Raw Lentils",
    "ingredients": [
      "vinegar",
      "water",
      "chili",
      "salt",
      "cream"
    ],
    "steps": "Prepare the raw lentils using vinegar, water, chili, salt, and finish with cream."
  },
  {
    "name": "Raw Lime",
    "ingredients": [
      "spices",
      "salt",
      "cheese",
      "cream",
      "vinegar"
    ],
    "steps": "Prepare the raw lime using spices, salt, cheese, cream, and finish with vinegar."
  },
  {
    "name": "Raw Mackerel",
    "ingredients": [
      "tomato",
      "herbs",
      "onion"
    ],
    "steps": "Prepare the raw mackerel using tomato, herbs, and finish with onion."
  },
  {
    "name": "Raw Mango",
    "ingredients": [
      "cream",
      "ginger",
      "tomato",
      "oil",
      "milk",
      "butter"
    ],
    "steps": "Prepare the raw mango using cream, ginger, tomato, oil, milk, and finish with butter."
  },
  {
    "name": "Raw Marshmallow",
    "ingredients": [
      "chili",
      "ginger",
      "garlic"
    ],
    "steps": "Prepare the raw marshmallow using chili, ginger, and finish with garlic."
  },
  {
    "name": "Raw Meatball",
    "ingredients": [
      "cream",
      "sugar",
      "herbs",
      "butter",
      "spices"
    ],
    "steps": "Prepare the raw meatball using cream, sugar, herbs, butter, and finish with spices."
  },
  {
    "name": "Raw Miso",
    "ingredients": [
      "oil",
      "tomato",
      "butter",
      "egg",
      "garlic",
      "vinegar"
    ],
    "steps": "Prepare the raw miso using oil, tomato, butter, egg, garlic, and finish with vinegar."
  },
  {
    "name": "Raw Noodles",
    "ingredients": [
      "oil",
      "egg",
      "garlic"
    ],
    "steps": "Prepare the raw noodles using oil, egg, and finish with garlic."
  },
  {
    "name": "Raw Nutmeg",
    "ingredients": [
      "cream",
      "egg",
      "water",
      "garlic",
      "cheese"
    ],
    "steps": "Prepare the raw nutmeg using cream, egg, water, garlic, and finish with cheese."
  },
  {
    "name": "Raw Oats",
    "ingredients": [
      "pepper",
      "egg",
      "cheese",
      "milk",
      "ginger"
    ],
    "steps": "Prepare the raw oats using pepper, egg, cheese, milk, and finish with ginger."
  },
  {
    "name": "Raw Olive",
    "ingredients": [
      "chili",
      "pepper",
      "milk",
      "cream",
      "egg",
      "cheese"
    ],
    "steps": "Prepare the raw olive using chili, pepper, milk, cream, egg, and finish with cheese."
  },
  {
    "name": "Raw Orange",
    "ingredients": [
      "cheese",
      "onion",
      "herbs",
      "butter"
    ],
    "steps": "Prepare the raw orange using cheese, onion, herbs, and finish with butter."
  },
  {
    "name": "Raw Paella",
    "ingredients": [
      "onion",
      "flour",
      "cheese",
      "ginger",
      "cream",
      "sugar"
    ],
    "steps": "Prepare the raw paella using onion, flour, cheese, ginger, cream, and finish with sugar."
  },
  {
    "name": "Raw Papaya",
    "ingredients": [
      "vinegar",
      "cheese",
      "cream",
      "salt"
    ],
    "steps": "Prepare the raw papaya using vinegar, cheese, cream, and finish with salt."
  },
  {
    "name": "Raw Peanut",
    "ingredients": [
      "flour",
      "cheese",
      "vinegar",
      "cream",
      "onion",
      "ginger"
    ],
    "steps": "Prepare the raw peanut using flour, cheese, vinegar, cream, onion, and finish with ginger."
  },
  {
    "name": "Raw Peas",
    "ingredients": [
      "cheese",
      "flour",
      "milk"
    ],
    "steps": "Prepare the raw peas using cheese, flour, and finish with milk."
  },
  {
    "name": "Raw Pie",
    "ingredients": [
      "butter",
      "egg",
      "oil",
      "salt",
      "flour"
    ],
    "steps": "Prepare the raw pie using butter, egg, oil, salt, and finish with flour."
  },
  {
    "name": "Raw Pineapple",
    "ingredients": [
      "tomato",
      "onion",
      "spices"
    ],
    "steps": "Prepare the raw pineapple using tomato, onion, and finish with spices."
  },
  {
    "name": "Raw Pizza",
    "ingredients": [
      "ginger",
      "herbs",
      "sugar",
      "garlic"
    ],
    "steps": "Prepare the raw pizza using ginger, herbs, sugar, and finish with garlic."
  },
  {
    "name": "Raw Popsicle",
    "ingredients": [
      "butter",
      "spices",
      "salt",
      "cream",
      "pepper",
      "milk"
    ],
    "steps": "Prepare the raw popsicle using butter, spices, salt, cream, pepper, and finish with milk."
  },
  {
    "name": "Raw Radish",
    "ingredients": [
      "tomato",
      "pepper",
      "cheese",
      "herbs"
    ],
    "steps": "Prepare the raw radish using tomato, pepper, cheese, and finish with herbs."
  },
  {
    "name": "Raw Ramen",
    "ingredients": [
      "ginger",
      "egg",
      "water",
      "cream"
    ],
    "steps": "Prepare the raw ramen using ginger, egg, water, and finish with cream."
  },
  {
    "name": "Raw Raspberry",
    "ingredients": [
      "oil",
      "garlic",
      "cheese",
      "butter",
      "spices"
    ],
    "steps": "Prepare the raw raspberry using oil, garlic, cheese, butter, and finish with spices."
  },
  {
    "name": "Raw Rice",
    "ingredients": [
      "milk",
      "oil",
      "garlic"
    ],
    "steps": "Prepare the raw rice using milk, oil, and finish with garlic."
  },
  {
    "name": "Raw Risotto",
    "ingredients": [
      "tomato",
      "milk",
      "cheese",
      "oil",
      "salt"
    ],
    "steps": "Prepare the raw risotto using tomato, milk, cheese, oil, and finish with salt."
  },
  {
    "name": "Raw Salmon",
    "ingredients": [
      "flour",
      "butter",
      "garlic",
      "herbs"
    ],
    "steps": "Prepare the raw salmon using flour, butter, garlic, and finish with herbs."
  },
  {
    "name": "Raw Salt",
    "ingredients": [
      "egg",
      "vinegar",
      "chili",
      "sugar"
    ],
    "steps": "Prepare the raw salt using egg, vinegar, chili, and finish with sugar."
  },
  {
    "name": "Raw Samosa",
    "ingredients": [
      "cream",
      "onion",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the raw samosa using cream, onion, garlic, and finish with chili."
  },
  {
    "name": "Raw Sausage",
    "ingredients": [
      "herbs",
      "onion",
      "flour",
      "butter",
      "oil"
    ],
    "steps": "Prepare the raw sausage using herbs, onion, flour, butter, and finish with oil."
  },
  {
    "name": "Raw Shrimp",
    "ingredients": [
      "egg",
      "garlic",
      "pepper",
      "salt",
      "butter"
    ],
    "steps": "Prepare the raw shrimp using egg, garlic, pepper, salt, and finish with butter."
  },
  {
    "name": "Raw Sorbet",
    "ingredients": [
      "spices",
      "sugar",
      "oil",
      "tomato",
      "egg",
      "herbs"
    ],
    "steps": "Prepare the raw sorbet using spices, sugar, oil, tomato, egg, and finish with herbs."
  },
  {
    "name": "Raw Spaghetti",
    "ingredients": [
      "milk",
      "flour",
      "egg",
      "cheese",
      "ginger",
      "sugar"
    ],
    "steps": "Prepare the raw spaghetti using milk, flour, egg, cheese, ginger, and finish with sugar."
  },
  {
    "name": "Raw Strawberry",
    "ingredients": [
      "cream",
      "herbs",
      "butter",
      "ginger",
      "oil",
      "onion"
    ],
    "steps": "Prepare the raw strawberry using cream, herbs, butter, ginger, oil, and finish with onion."
  },
  {
    "name": "Raw Sushi",
    "ingredients": [
      "butter",
      "vinegar",
      "oil",
      "chili",
      "cream"
    ],
    "steps": "Prepare the raw sushi using butter, vinegar, oil, chili, and finish with cream."
  },
  {
    "name": "Raw Taco",
    "ingredients": [
      "pepper",
      "butter",
      "egg",
      "vinegar",
      "tomato",
      "milk"
    ],
    "steps": "Prepare the raw taco using pepper, butter, egg, vinegar, tomato, and finish with milk."
  },
  {
    "name": "Raw Thyme",
    "ingredients": [
      "flour",
      "chili",
      "herbs",
      "salt"
    ],
    "steps": "Prepare the raw thyme using flour, chili, herbs, and finish with salt."
  },
  {
    "name": "Raw Toffee",
    "ingredients": [
      "oil",
      "cheese",
      "water",
      "butter",
      "sugar",
      "cream"
    ],
    "steps": "Prepare the raw toffee using oil, cheese, water, butter, sugar, and finish with cream."
  },
  {
    "name": "Raw Trout",
    "ingredients": [
      "sugar",
      "flour",
      "ginger",
      "salt",
      "spices",
      "egg"
    ],
    "steps": "Prepare the raw trout using sugar, flour, ginger, salt, spices, and finish with egg."
  },
  {
    "name": "Raw Tuna",
    "ingredients": [
      "egg",
      "flour",
      "cream",
      "salt",
      "butter"
    ],
    "steps": "Prepare the raw tuna using egg, flour, cream, salt, and finish with butter."
  },
  {
    "name": "Raw Turkey",
    "ingredients": [
      "chili",
      "flour",
      "ginger",
      "egg"
    ],
    "steps": "Prepare the raw turkey using chili, flour, ginger, and finish with egg."
  },
  {
    "name": "Raw Wasabi",
    "ingredients": [
      "milk",
      "chili",
      "butter",
      "sugar"
    ],
    "steps": "Prepare the raw wasabi using milk, chili, butter, and finish with sugar."
  },
  {
    "name": "Raw Yakitori",
    "ingredients": [
      "onion",
      "flour",
      "garlic",
      "cheese",
      "water"
    ],
    "steps": "Prepare the raw yakitori using onion, flour, garlic, cheese, and finish with water."
  },
  {
    "name": "Raw Zucchini",
    "ingredients": [
      "ginger",
      "butter",
      "herbs",
      "water",
      "flour",
      "pepper"
    ],
    "steps": "Prepare the raw zucchini using ginger, butter, herbs, water, flour, and finish with pepper."
  },
  {
    "name": "Roasted Apple",
    "ingredients": [
      "pepper",
      "milk",
      "onion",
      "flour"
    ],
    "steps": "Prepare the roasted apple using pepper, milk, onion, and finish with flour."
  },
  {
    "name": "Roasted Asparagus",
    "ingredients": [
      "ginger",
      "egg",
      "milk",
      "pepper"
    ],
    "steps": "Prepare the roasted asparagus using ginger, egg, milk, and finish with pepper."
  },
  {
    "name": "Roasted Avocado",
    "ingredients": [
      "tomato",
      "vinegar",
      "butter",
      "ginger",
      "salt",
      "spices"
    ],
    "steps": "Prepare the roasted avocado using tomato, vinegar, butter, ginger, salt, and finish with spices."
  },
  {
    "name": "Roasted Bacon",
    "ingredients": [
      "cream",
      "cheese",
      "spices"
    ],
    "steps": "Prepare the roasted bacon using cream, cheese, and finish with spices."
  },
  {
    "name": "Roasted Bagel",
    "ingredients": [
      "milk",
      "oil",
      "egg"
    ],
    "steps": "Prepare the roasted bagel using milk, oil, and finish with egg."
  },
  {
    "name": "Roasted Barfi",
    "ingredients": [
      "garlic",
      "water",
      "sugar",
      "egg"
    ],
    "steps": "Prepare the roasted barfi using garlic, water, sugar, and finish with egg."
  },
  {
    "name": "Roasted Barley",
    "ingredients": [
      "butter",
      "cheese",
      "vinegar",
      "herbs",
      "pepper"
    ],
    "steps": "Prepare the roasted barley using butter, cheese, vinegar, herbs, and finish with pepper."
  },
  {
    "name": "Roasted Beans",
    "ingredients": [
      "pepper",
      "water",
      "onion",
      "spices"
    ],
    "steps": "Prepare the roasted beans using pepper, water, onion, and finish with spices."
  },
  {
    "name": "Roasted Butter",
    "ingredients": [
      "oil",
      "cream",
      "ginger",
      "salt",
      "butter"
    ],
    "steps": "Prepare the roasted butter using oil, cream, ginger, salt, and finish with butter."
  },
  {
    "name": "Roasted Cake",
    "ingredients": [
      "onion",
      "oil",
      "vinegar"
    ],
    "steps": "Prepare the roasted cake using onion, oil, and finish with vinegar."
  },
  {
    "name": "Roasted Cashew",
    "ingredients": [
      "cheese",
      "ginger",
      "milk",
      "tomato"
    ],
    "steps": "Prepare the roasted cashew using cheese, ginger, milk, and finish with tomato."
  },
  {
    "name": "Roasted Casserole",
    "ingredients": [
      "milk",
      "butter",
      "oil"
    ],
    "steps": "Prepare the roasted casserole using milk, butter, and finish with oil."
  },
  {
    "name": "Roasted Celery",
    "ingredients": [
      "spices",
      "butter",
      "tomato"
    ],
    "steps": "Prepare the roasted celery using spices, butter, and finish with tomato."
  },
  {
    "name": "Roasted Cheese",
    "ingredients": [
      "herbs",
      "vinegar",
      "butter",
      "flour",
      "oil"
    ],
    "steps": "Prepare the roasted cheese using herbs, vinegar, butter, flour, and finish with oil."
  },
  {
    "name": "Roasted Chicken",
    "ingredients": [
      "tomato",
      "flour",
      "water",
      "milk",
      "chili",
      "cheese"
    ],
    "steps": "Prepare the roasted chicken using tomato, flour, water, milk, chili, and finish with cheese."
  },
  {
    "name": "Roasted Chocolate",
    "ingredients": [
      "pepper",
      "butter",
      "egg",
      "chili",
      "flour",
      "garlic"
    ],
    "steps": "Prepare the roasted chocolate using pepper, butter, egg, chili, flour, and finish with garlic."
  },
  {
    "name": "Roasted Clam",
    "ingredients": [
      "spices",
      "milk",
      "egg"
    ],
    "steps": "Prepare the roasted clam using spices, milk, and finish with egg."
  },
  {
    "name": "Roasted Clove",
    "ingredients": [
      "oil",
      "cheese",
      "onion",
      "spices",
      "herbs",
      "vinegar"
    ],
    "steps": "Prepare the roasted clove using oil, cheese, onion, spices, herbs, and finish with vinegar."
  },
  {
    "name": "Roasted Cookie",
    "ingredients": [
      "onion",
      "herbs",
      "tomato"
    ],
    "steps": "Prepare the roasted cookie using onion, herbs, and finish with tomato."
  },
  {
    "name": "Roasted Crab",
    "ingredients": [
      "garlic",
      "water",
      "spices",
      "flour"
    ],
    "steps": "Prepare the roasted crab using garlic, water, spices, and finish with flour."
  },
  {
    "name": "Roasted Croissant",
    "ingredients": [
      "tomato",
      "garlic",
      "herbs",
      "cream",
      "water",
      "salt"
    ],
    "steps": "Prepare the roasted croissant using tomato, garlic, herbs, cream, water, and finish with salt."
  },
  {
    "name": "Roasted Curry",
    "ingredients": [
      "cream",
      "salt",
      "tomato",
      "flour",
      "egg"
    ],
    "steps": "Prepare the roasted curry using cream, salt, tomato, flour, and finish with egg."
  },
  {
    "name": "Roasted Dumpling",
    "ingredients": [
      "herbs",
      "salt",
      "butter",
      "flour",
      "vinegar"
    ],
    "steps": "Prepare the roasted dumpling using herbs, salt, butter, flour, and finish with vinegar."
  },
  {
    "name": "Roasted Egg",
    "ingredients": [
      "spices",
      "milk",
      "vinegar",
      "ginger"
    ],
    "steps": "Prepare the roasted egg using spices, milk, vinegar, and finish with ginger."
  },
  {
    "name": "Roasted Falafel",
    "ingredients": [
      "onion",
      "egg",
      "tomato",
      "milk",
      "vinegar"
    ],
    "steps": "Prepare the roasted falafel using onion, egg, tomato, milk, and finish with vinegar."
  },
  {
    "name": "Roasted Fig",
    "ingredients": [
      "flour",
      "salt",
      "water",
      "tomato",
      "egg"
    ],
    "steps": "Prepare the roasted fig using flour, salt, water, tomato, and finish with egg."
  },
  {
    "name": "Roasted Flour",
    "ingredients": [
      "garlic",
      "salt",
      "cheese",
      "water"
    ],
    "steps": "Prepare the roasted flour using garlic, salt, cheese, and finish with water."
  },
  {
    "name": "Roasted Garlic",
    "ingredients": [
      "spices",
      "egg",
      "cream"
    ],
    "steps": "Prepare the roasted garlic using spices, egg, and finish with cream."
  },
  {
    "name": "Roasted Gelato",
    "ingredients": [
      "milk",
      "sugar",
      "oil",
      "egg",
      "cream",
      "garlic"
    ],
    "steps": "Prepare the roasted gelato using milk, sugar, oil, egg, cream, and finish with garlic."
  },
  {
    "name": "Roasted Ginger",
    "ingredients": [
      "chili",
      "vinegar",
      "cheese"
    ],
    "steps": "Prepare the roasted ginger using chili, vinegar, and finish with cheese."
  },
  {
    "name": "Roasted Granola",
    "ingredients": [
      "spices",
      "herbs",
      "water",
      "egg",
      "vinegar",
      "salt"
    ],
    "steps": "Prepare the roasted granola using spices, herbs, water, egg, vinegar, and finish with salt."
  },
  {
    "name": "Roasted Grape",
    "ingredients": [
      "tomato",
      "pepper",
      "cream"
    ],
    "steps": "Prepare the roasted grape using tomato, pepper, and finish with cream."
  },
  {
    "name": "Roasted Gulab Jamun",
    "ingredients": [
      "spices",
      "butter",
      "ginger",
      "cream",
      "sugar"
    ],
    "steps": "Prepare the roasted gulab jamun using spices, butter, ginger, cream, and finish with sugar."
  },
  {
    "name": "Roasted Hazelnut",
    "ingredients": [
      "chili",
      "garlic",
      "water",
      "ginger",
      "spices"
    ],
    "steps": "Prepare the roasted hazelnut using chili, garlic, water, ginger, and finish with spices."
  },
  {
    "name": "Roasted Honey",
    "ingredients": [
      "spices",
      "salt",
      "tomato",
      "cream"
    ],
    "steps": "Prepare the roasted honey using spices, salt, tomato, and finish with cream."
  },
  {
    "name": "Roasted Hummus",
    "ingredients": [
      "salt",
      "cheese",
      "sugar",
      "egg",
      "spices"
    ],
    "steps": "Prepare the roasted hummus using salt, cheese, sugar, egg, and finish with spices."
  },
  {
    "name": "Roasted Ice Cream",
    "ingredients": [
      "butter",
      "egg",
      "spices",
      "salt",
      "ginger"
    ],
    "steps": "Prepare the roasted ice cream using butter, egg, spices, salt, and finish with ginger."
  },
  {
    "name": "Roasted Kebab",
    "ingredients": [
      "ginger",
      "onion",
      "oil"
    ],
    "steps": "Prepare the roasted kebab using ginger, onion, and finish with oil."
  },
  {
    "name": "Roasted Ketchup",
    "ingredients": [
      "salt",
      "sugar",
      "cheese",
      "milk",
      "ginger",
      "water"
    ],
    "steps": "Prepare the roasted ketchup using salt, sugar, cheese, milk, ginger, and finish with water."
  },
  {
    "name": "Roasted Laddu",
    "ingredients": [
      "ginger",
      "sugar",
      "garlic",
      "herbs",
      "egg",
      "butter"
    ],
    "steps": "Prepare the roasted laddu using ginger, sugar, garlic, herbs, egg, and finish with butter."
  },
  {
    "name": "Roasted Lettuce",
    "ingredients": [
      "onion",
      "water",
      "vinegar",
      "pepper"
    ],
    "steps": "Prepare the roasted lettuce using onion, water, vinegar, and finish with pepper."
  },
  {
    "name": "Roasted Lime",
    "ingredients": [
      "cream",
      "salt",
      "butter"
    ],
    "steps": "Prepare the roasted lime using cream, salt, and finish with butter."
  },
  {
    "name": "Roasted Mango",
    "ingredients": [
      "vinegar",
      "egg",
      "pepper",
      "butter"
    ],
    "steps": "Prepare the roasted mango using vinegar, egg, pepper, and finish with butter."
  },
  {
    "name": "Roasted Marshmallow",
    "ingredients": [
      "tomato",
      "salt",
      "vinegar",
      "spices",
      "cheese",
      "cream"
    ],
    "steps": "Prepare the roasted marshmallow using tomato, salt, vinegar, spices, cheese, and finish with cream."
  },
  {
    "name": "Roasted Milk",
    "ingredients": [
      "sugar",
      "cheese",
      "water"
    ],
    "steps": "Prepare the roasted milk using sugar, cheese, and finish with water."
  },
  {
    "name": "Roasted Mushroom",
    "ingredients": [
      "chili",
      "tomato",
      "flour",
      "herbs",
      "onion"
    ],
    "steps": "Prepare the roasted mushroom using chili, tomato, flour, herbs, and finish with onion."
  },
  {
    "name": "Roasted Mustard",
    "ingredients": [
      "onion",
      "water",
      "chili",
      "butter",
      "salt",
      "pepper"
    ],
    "steps": "Prepare the roasted mustard using onion, water, chili, butter, salt, and finish with pepper."
  },
  {
    "name": "Roasted Naan",
    "ingredients": [
      "oil",
      "garlic",
      "spices",
      "sugar"
    ],
    "steps": "Prepare the roasted naan using oil, garlic, spices, and finish with sugar."
  },
  {
    "name": "Roasted Noodles",
    "ingredients": [
      "oil",
      "salt",
      "tomato",
      "garlic"
    ],
    "steps": "Prepare the roasted noodles using oil, salt, tomato, and finish with garlic."
  },
  {
    "name": "Roasted Oats",
    "ingredients": [
      "cheese",
      "pepper",
      "ginger",
      "onion",
      "tomato"
    ],
    "steps": "Prepare the roasted oats using cheese, pepper, ginger, onion, and finish with tomato."
  },
  {
    "name": "Roasted Oregano",
    "ingredients": [
      "butter",
      "cheese",
      "oil",
      "milk",
      "water"
    ],
    "steps": "Prepare the roasted oregano using butter, cheese, oil, milk, and finish with water."
  },
  {
    "name": "Roasted Paella",
    "ingredients": [
      "egg",
      "herbs",
      "tomato"
    ],
    "steps": "Prepare the roasted paella using egg, herbs, and finish with tomato."
  },
  {
    "name": "Roasted Pasta",
    "ingredients": [
      "herbs",
      "cream",
      "sugar",
      "salt",
      "tomato"
    ],
    "steps": "Prepare the roasted pasta using herbs, cream, sugar, salt, and finish with tomato."
  },
  {
    "name": "Roasted Peanut",
    "ingredients": [
      "ginger",
      "butter",
      "salt",
      "sugar"
    ],
    "steps": "Prepare the roasted peanut using ginger, butter, salt, and finish with sugar."
  },
  {
    "name": "Roasted Peas",
    "ingredients": [
      "garlic",
      "tomato",
      "herbs",
      "oil",
      "sugar",
      "milk"
    ],
    "steps": "Prepare the roasted peas using garlic, tomato, herbs, oil, sugar, and finish with milk."
  },
  {
    "name": "Roasted Pho",
    "ingredients": [
      "salt",
      "tomato",
      "spices"
    ],
    "steps": "Prepare the roasted pho using salt, tomato, and finish with spices."
  },
  {
    "name": "Roasted Pie",
    "ingredients": [
      "oil",
      "tomato",
      "vinegar",
      "flour",
      "butter",
      "pepper"
    ],
    "steps": "Prepare the roasted pie using oil, tomato, vinegar, flour, butter, and finish with pepper."
  },
  {
    "name": "Roasted Pork",
    "ingredients": [
      "butter",
      "tomato",
      "egg",
      "herbs",
      "chili",
      "spices"
    ],
    "steps": "Prepare the roasted pork using butter, tomato, egg, herbs, chili, and finish with spices."
  },
  {
    "name": "Roasted Potato",
    "ingredients": [
      "vinegar",
      "cream",
      "ginger",
      "egg"
    ],
    "steps": "Prepare the roasted potato using vinegar, cream, ginger, and finish with egg."
  },
  {
    "name": "Roasted Pumpkin",
    "ingredients": [
      "onion",
      "flour",
      "butter",
      "chili",
      "cream"
    ],
    "steps": "Prepare the roasted pumpkin using onion, flour, butter, chili, and finish with cream."
  },
  {
    "name": "Roasted Raspberry",
    "ingredients": [
      "water",
      "chili",
      "butter",
      "oil",
      "pepper"
    ],
    "steps": "Prepare the roasted raspberry using water, chili, butter, oil, and finish with pepper."
  },
  {
    "name": "Roasted Rice",
    "ingredients": [
      "milk",
      "oil",
      "herbs",
      "pepper",
      "water",
      "cream"
    ],
    "steps": "Prepare the roasted rice using milk, oil, herbs, pepper, water, and finish with cream."
  },
  {
    "name": "Roasted Risotto",
    "ingredients": [
      "flour",
      "ginger",
      "tomato"
    ],
    "steps": "Prepare the roasted risotto using flour, ginger, and finish with tomato."
  },
  {
    "name": "Roasted Salmon",
    "ingredients": [
      "herbs",
      "salt",
      "pepper",
      "butter",
      "tomato",
      "oil"
    ],
    "steps": "Prepare the roasted salmon using herbs, salt, pepper, butter, tomato, and finish with oil."
  },
  {
    "name": "Roasted Samosa",
    "ingredients": [
      "chili",
      "herbs",
      "onion"
    ],
    "steps": "Prepare the roasted samosa using chili, herbs, and finish with onion."
  },
  {
    "name": "Roasted Sauce",
    "ingredients": [
      "chili",
      "ginger",
      "cream"
    ],
    "steps": "Prepare the roasted sauce using chili, ginger, and finish with cream."
  },
  {
    "name": "Roasted Shrimp",
    "ingredients": [
      "butter",
      "oil",
      "chili",
      "onion",
      "ginger",
      "herbs"
    ],
    "steps": "Prepare the roasted shrimp using butter, oil, chili, onion, ginger, and finish with herbs."
  },
  {
    "name": "Roasted Snapper",
    "ingredients": [
      "vinegar",
      "cheese",
      "milk"
    ],
    "steps": "Prepare the roasted snapper using vinegar, cheese, and finish with milk."
  },
  {
    "name": "Roasted Soda",
    "ingredients": [
      "tomato",
      "water",
      "herbs",
      "flour",
      "cream",
      "milk"
    ],
    "steps": "Prepare the roasted soda using tomato, water, herbs, flour, cream, and finish with milk."
  },
  {
    "name": "Roasted Soup",
    "ingredients": [
      "salt",
      "flour",
      "cream",
      "herbs",
      "cheese",
      "pepper"
    ],
    "steps": "Prepare the roasted soup using salt, flour, cream, herbs, cheese, and finish with pepper."
  },
  {
    "name": "Roasted Spaghetti",
    "ingredients": [
      "chili",
      "herbs",
      "pepper",
      "vinegar",
      "tomato"
    ],
    "steps": "Prepare the roasted spaghetti using chili, herbs, pepper, vinegar, and finish with tomato."
  },
  {
    "name": "Roasted Stew",
    "ingredients": [
      "chili",
      "egg",
      "oil",
      "pepper",
      "sugar",
      "cream"
    ],
    "steps": "Prepare the roasted stew using chili, egg, oil, pepper, sugar, and finish with cream."
  },
  {
    "name": "Roasted Strawberry",
    "ingredients": [
      "onion",
      "salt",
      "garlic",
      "ginger"
    ],
    "steps": "Prepare the roasted strawberry using onion, salt, garlic, and finish with ginger."
  },
  {
    "name": "Roasted Sugar",
    "ingredients": [
      "milk",
      "water",
      "cheese",
      "oil",
      "salt",
      "chili"
    ],
    "steps": "Prepare the roasted sugar using milk, water, cheese, oil, salt, and finish with chili."
  },
  {
    "name": "Roasted Tabbouleh",
    "ingredients": [
      "sugar",
      "tomato",
      "butter"
    ],
    "steps": "Prepare the roasted tabbouleh using sugar, tomato, and finish with butter."
  },
  {
    "name": "Roasted Tempura",
    "ingredients": [
      "spices",
      "vinegar",
      "water"
    ],
    "steps": "Prepare the roasted tempura using spices, vinegar, and finish with water."
  },
  {
    "name": "Roasted Thyme",
    "ingredients": [
      "oil",
      "cheese",
      "garlic",
      "water"
    ],
    "steps": "Prepare the roasted thyme using oil, cheese, garlic, and finish with water."
  },
  {
    "name": "Roasted Toffee",
    "ingredients": [
      "cheese",
      "onion",
      "spices",
      "oil",
      "tomato",
      "flour"
    ],
    "steps": "Prepare the roasted toffee using cheese, onion, spices, oil, tomato, and finish with flour."
  },
  {
    "name": "Roasted Tofu",
    "ingredients": [
      "ginger",
      "salt",
      "cream"
    ],
    "steps": "Prepare the roasted tofu using ginger, salt, and finish with cream."
  },
  {
    "name": "Roasted Tomato",
    "ingredients": [
      "water",
      "pepper",
      "oil",
      "tomato",
      "cream"
    ],
    "steps": "Prepare the roasted tomato using water, pepper, oil, tomato, and finish with cream."
  },
  {
    "name": "Roasted Trout",
    "ingredients": [
      "flour",
      "pepper",
      "water"
    ],
    "steps": "Prepare the roasted trout using flour, pepper, and finish with water."
  },
  {
    "name": "Roasted Tuna",
    "ingredients": [
      "onion",
      "pepper",
      "flour"
    ],
    "steps": "Prepare the roasted tuna using onion, pepper, and finish with flour."
  },
  {
    "name": "Roasted Vinegar",
    "ingredients": [
      "sugar",
      "vinegar",
      "salt",
      "ginger"
    ],
    "steps": "Prepare the roasted vinegar using sugar, vinegar, salt, and finish with ginger."
  },
  {
    "name": "Smoked Almond",
    "ingredients": [
      "spices",
      "garlic",
      "ginger",
      "water",
      "chili"
    ],
    "steps": "Prepare the smoked almond using spices, garlic, ginger, water, and finish with chili."
  },
  {
    "name": "Smoked Avocado",
    "ingredients": [
      "onion",
      "flour",
      "ginger",
      "herbs",
      "milk",
      "cream"
    ],
    "steps": "Prepare the smoked avocado using onion, flour, ginger, herbs, milk, and finish with cream."
  },
  {
    "name": "Smoked Bacon",
    "ingredients": [
      "cheese",
      "sugar",
      "ginger",
      "flour",
      "spices"
    ],
    "steps": "Prepare the smoked bacon using cheese, sugar, ginger, flour, and finish with spices."
  },
  {
    "name": "Smoked Bagel",
    "ingredients": [
      "cheese",
      "vinegar",
      "garlic",
      "butter",
      "spices"
    ],
    "steps": "Prepare the smoked bagel using cheese, vinegar, garlic, butter, and finish with spices."
  },
  {
    "name": "Smoked Banana",
    "ingredients": [
      "oil",
      "milk",
      "spices"
    ],
    "steps": "Prepare the smoked banana using oil, milk, and finish with spices."
  },
  {
    "name": "Smoked Barley",
    "ingredients": [
      "chili",
      "spices",
      "onion"
    ],
    "steps": "Prepare the smoked barley using chili, spices, and finish with onion."
  },
  {
    "name": "Smoked Beef",
    "ingredients": [
      "cheese",
      "oil",
      "butter",
      "cream",
      "milk",
      "flour"
    ],
    "steps": "Prepare the smoked beef using cheese, oil, butter, cream, milk, and finish with flour."
  },
  {
    "name": "Smoked Bibimbap",
    "ingredients": [
      "cheese",
      "oil",
      "cream",
      "salt",
      "herbs"
    ],
    "steps": "Prepare the smoked bibimbap using cheese, oil, cream, salt, and finish with herbs."
  },
  {
    "name": "Smoked Broccoli",
    "ingredients": [
      "salt",
      "water",
      "vinegar",
      "egg"
    ],
    "steps": "Prepare the smoked broccoli using salt, water, vinegar, and finish with egg."
  },
  {
    "name": "Smoked Brownie",
    "ingredients": [
      "butter",
      "onion",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the smoked brownie using butter, onion, pepper, and finish with egg."
  },
  {
    "name": "Smoked Burger",
    "ingredients": [
      "tomato",
      "ginger",
      "pepper"
    ],
    "steps": "Prepare the smoked burger using tomato, ginger, and finish with pepper."
  },
  {
    "name": "Smoked Butter",
    "ingredients": [
      "garlic",
      "onion",
      "cheese",
      "pepper"
    ],
    "steps": "Prepare the smoked butter using garlic, onion, cheese, and finish with pepper."
  },
  {
    "name": "Smoked Carrot",
    "ingredients": [
      "milk",
      "spices",
      "salt",
      "vinegar"
    ],
    "steps": "Prepare the smoked carrot using milk, spices, salt, and finish with vinegar."
  },
  {
    "name": "Smoked Cereal",
    "ingredients": [
      "chili",
      "ginger",
      "salt",
      "cream"
    ],
    "steps": "Prepare the smoked cereal using chili, ginger, salt, and finish with cream."
  },
  {
    "name": "Smoked Chocolate",
    "ingredients": [
      "oil",
      "sugar",
      "onion",
      "water",
      "milk"
    ],
    "steps": "Prepare the smoked chocolate using oil, sugar, onion, water, and finish with milk."
  },
  {
    "name": "Smoked Chow Mein",
    "ingredients": [
      "milk",
      "pepper",
      "ginger",
      "flour",
      "cheese",
      "water"
    ],
    "steps": "Prepare the smoked chow mein using milk, pepper, ginger, flour, cheese, and finish with water."
  },
  {
    "name": "Smoked Chutney",
    "ingredients": [
      "oil",
      "milk",
      "cheese"
    ],
    "steps": "Prepare the smoked chutney using oil, milk, and finish with cheese."
  },
  {
    "name": "Smoked Cinnamon",
    "ingredients": [
      "cheese",
      "pepper",
      "herbs"
    ],
    "steps": "Prepare the smoked cinnamon using cheese, pepper, and finish with herbs."
  },
  {
    "name": "Smoked Clam",
    "ingredients": [
      "spices",
      "oil",
      "sugar",
      "butter"
    ],
    "steps": "Prepare the smoked clam using spices, oil, sugar, and finish with butter."
  },
  {
    "name": "Smoked Clove",
    "ingredients": [
      "pepper",
      "milk",
      "vinegar"
    ],
    "steps": "Prepare the smoked clove using pepper, milk, and finish with vinegar."
  },
  {
    "name": "Smoked Coconut",
    "ingredients": [
      "cream",
      "cheese",
      "vinegar",
      "garlic",
      "milk"
    ],
    "steps": "Prepare the smoked coconut using cream, cheese, vinegar, garlic, and finish with milk."
  },
  {
    "name": "Smoked Coffee",
    "ingredients": [
      "herbs",
      "water",
      "vinegar",
      "sugar",
      "oil"
    ],
    "steps": "Prepare the smoked coffee using herbs, water, vinegar, sugar, and finish with oil."
  },
  {
    "name": "Smoked Crab",
    "ingredients": [
      "herbs",
      "chili",
      "salt",
      "ginger",
      "onion"
    ],
    "steps": "Prepare the smoked crab using herbs, chili, salt, ginger, and finish with onion."
  },
  {
    "name": "Smoked Crepe",
    "ingredients": [
      "sugar",
      "salt",
      "tomato",
      "pepper",
      "cream",
      "ginger"
    ],
    "steps": "Prepare the smoked crepe using sugar, salt, tomato, pepper, cream, and finish with ginger."
  },
  {
    "name": "Smoked Croissant",
    "ingredients": [
      "cream",
      "chili",
      "pepper",
      "salt",
      "cheese"
    ],
    "steps": "Prepare the smoked croissant using cream, chili, pepper, salt, and finish with cheese."
  },
  {
    "name": "Smoked Cucumber",
    "ingredients": [
      "pepper",
      "cream",
      "sugar",
      "oil",
      "milk",
      "water"
    ],
    "steps": "Prepare the smoked cucumber using pepper, cream, sugar, oil, milk, and finish with water."
  },
  {
    "name": "Smoked Curry",
    "ingredients": [
      "water",
      "salt",
      "ginger",
      "egg",
      "sugar"
    ],
    "steps": "Prepare the smoked curry using water, salt, ginger, egg, and finish with sugar."
  },
  {
    "name": "Smoked Falafel",
    "ingredients": [
      "cheese",
      "flour",
      "spices"
    ],
    "steps": "Prepare the smoked falafel using cheese, flour, and finish with spices."
  },
  {
    "name": "Smoked Fettuccine",
    "ingredients": [
      "milk",
      "oil",
      "tomato",
      "salt",
      "spices",
      "water"
    ],
    "steps": "Prepare the smoked fettuccine using milk, oil, tomato, salt, spices, and finish with water."
  },
  {
    "name": "Smoked Flour",
    "ingredients": [
      "butter",
      "onion",
      "tomato"
    ],
    "steps": "Prepare the smoked flour using butter, onion, and finish with tomato."
  },
  {
    "name": "Smoked Garlic",
    "ingredients": [
      "salt",
      "cream",
      "milk",
      "tomato",
      "water"
    ],
    "steps": "Prepare the smoked garlic using salt, cream, milk, tomato, and finish with water."
  },
  {
    "name": "Smoked Grape",
    "ingredients": [
      "onion",
      "water",
      "pepper",
      "tomato"
    ],
    "steps": "Prepare the smoked grape using onion, water, pepper, and finish with tomato."
  },
  {
    "name": "Smoked Gulab Jamun",
    "ingredients": [
      "egg",
      "oil",
      "milk",
      "cheese"
    ],
    "steps": "Prepare the smoked gulab jamun using egg, oil, milk, and finish with cheese."
  },
  {
    "name": "Smoked Ham",
    "ingredients": [
      "tomato",
      "cheese",
      "milk",
      "chili"
    ],
    "steps": "Prepare the smoked ham using tomato, cheese, milk, and finish with chili."
  },
  {
    "name": "Smoked Honey",
    "ingredients": [
      "egg",
      "vinegar",
      "tomato",
      "onion"
    ],
    "steps": "Prepare the smoked honey using egg, vinegar, tomato, and finish with onion."
  },
  {
    "name": "Smoked Hotdog",
    "ingredients": [
      "pepper",
      "flour",
      "cream",
      "cheese"
    ],
    "steps": "Prepare the smoked hotdog using pepper, flour, cream, and finish with cheese."
  },
  {
    "name": "Smoked Ice Cream",
    "ingredients": [
      "pepper",
      "herbs",
      "onion",
      "flour"
    ],
    "steps": "Prepare the smoked ice cream using pepper, herbs, onion, and finish with flour."
  },
  {
    "name": "Smoked Idli",
    "ingredients": [
      "spices",
      "pepper",
      "salt",
      "onion",
      "cheese",
      "garlic"
    ],
    "steps": "Prepare the smoked idli using spices, pepper, salt, onion, cheese, and finish with garlic."
  },
  {
    "name": "Smoked Jam",
    "ingredients": [
      "cream",
      "salt",
      "cheese",
      "herbs",
      "vinegar"
    ],
    "steps": "Prepare the smoked jam using cream, salt, cheese, herbs, and finish with vinegar."
  },
  {
    "name": "Smoked Kimchi",
    "ingredients": [
      "herbs",
      "milk",
      "flour",
      "chili",
      "salt"
    ],
    "steps": "Prepare the smoked kimchi using herbs, milk, flour, chili, and finish with salt."
  },
  {
    "name": "Smoked Laddu",
    "ingredients": [
      "cream",
      "salt",
      "herbs",
      "flour"
    ],
    "steps": "Prepare the smoked laddu using cream, salt, herbs, and finish with flour."
  },
  {
    "name": "Smoked Lemon",
    "ingredients": [
      "milk",
      "chili",
      "oil",
      "cream",
      "spices"
    ],
    "steps": "Prepare the smoked lemon using milk, chili, oil, cream, and finish with spices."
  },
  {
    "name": "Smoked Mackerel",
    "ingredients": [
      "spices",
      "pepper",
      "salt",
      "butter",
      "cream",
      "water"
    ],
    "steps": "Prepare the smoked mackerel using spices, pepper, salt, butter, cream, and finish with water."
  },
  {
    "name": "Smoked Mango",
    "ingredients": [
      "butter",
      "oil",
      "milk",
      "cream"
    ],
    "steps": "Prepare the smoked mango using butter, oil, milk, and finish with cream."
  },
  {
    "name": "Smoked Miso",
    "ingredients": [
      "oil",
      "herbs",
      "sugar",
      "flour",
      "spices"
    ],
    "steps": "Prepare the smoked miso using oil, herbs, sugar, flour, and finish with spices."
  },
  {
    "name": "Smoked Mochi",
    "ingredients": [
      "water",
      "salt",
      "sugar",
      "butter"
    ],
    "steps": "Prepare the smoked mochi using water, salt, sugar, and finish with butter."
  },
  {
    "name": "Smoked Muffin",
    "ingredients": [
      "vinegar",
      "oil",
      "garlic",
      "ginger",
      "flour",
      "sugar"
    ],
    "steps": "Prepare the smoked muffin using vinegar, oil, garlic, ginger, flour, and finish with sugar."
  },
  {
    "name": "Smoked Naan",
    "ingredients": [
      "chili",
      "flour",
      "onion"
    ],
    "steps": "Prepare the smoked naan using chili, flour, and finish with onion."
  },
  {
    "name": "Smoked Noodles",
    "ingredients": [
      "water",
      "ginger",
      "spices",
      "chili",
      "flour",
      "pepper"
    ],
    "steps": "Prepare the smoked noodles using water, ginger, spices, chili, flour, and finish with pepper."
  },
  {
    "name": "Smoked Nutmeg",
    "ingredients": [
      "salt",
      "tomato",
      "garlic",
      "onion",
      "milk",
      "cream"
    ],
    "steps": "Prepare the smoked nutmeg using salt, tomato, garlic, onion, milk, and finish with cream."
  },
  {
    "name": "Smoked Onion",
    "ingredients": [
      "pepper",
      "herbs",
      "milk",
      "onion"
    ],
    "steps": "Prepare the smoked onion using pepper, herbs, milk, and finish with onion."
  },
  {
    "name": "Smoked Paella",
    "ingredients": [
      "ginger",
      "cream",
      "chili",
      "egg",
      "onion"
    ],
    "steps": "Prepare the smoked paella using ginger, cream, chili, egg, and finish with onion."
  },
  {
    "name": "Smoked Papaya",
    "ingredients": [
      "pepper",
      "spices",
      "vinegar",
      "garlic"
    ],
    "steps": "Prepare the smoked papaya using pepper, spices, vinegar, and finish with garlic."
  },
  {
    "name": "Smoked Paratha",
    "ingredients": [
      "pepper",
      "sugar",
      "garlic",
      "herbs",
      "cream",
      "chili"
    ],
    "steps": "Prepare the smoked paratha using pepper, sugar, garlic, herbs, cream, and finish with chili."
  },
  {
    "name": "Smoked Peanut",
    "ingredients": [
      "flour",
      "water",
      "chili",
      "ginger"
    ],
    "steps": "Prepare the smoked peanut using flour, water, chili, and finish with ginger."
  },
  {
    "name": "Smoked Pepper",
    "ingredients": [
      "cheese",
      "onion",
      "egg",
      "cream",
      "herbs",
      "water"
    ],
    "steps": "Prepare the smoked pepper using cheese, onion, egg, cream, herbs, and finish with water."
  },
  {
    "name": "Smoked Pho",
    "ingredients": [
      "herbs",
      "garlic",
      "pepper"
    ],
    "steps": "Prepare the smoked pho using herbs, garlic, and finish with pepper."
  },
  {
    "name": "Smoked Pizza",
    "ingredients": [
      "spices",
      "egg",
      "garlic"
    ],
    "steps": "Prepare the smoked pizza using spices, egg, and finish with garlic."
  },
  {
    "name": "Smoked Pork",
    "ingredients": [
      "pepper",
      "sugar",
      "egg",
      "tomato",
      "onion"
    ],
    "steps": "Prepare the smoked pork using pepper, sugar, egg, tomato, and finish with onion."
  },
  {
    "name": "Smoked Potato",
    "ingredients": [
      "spices",
      "tomato",
      "herbs",
      "garlic",
      "water"
    ],
    "steps": "Prepare the smoked potato using spices, tomato, herbs, garlic, and finish with water."
  },
  {
    "name": "Smoked Quinoa",
    "ingredients": [
      "flour",
      "garlic",
      "sugar",
      "water"
    ],
    "steps": "Prepare the smoked quinoa using flour, garlic, sugar, and finish with water."
  },
  {
    "name": "Smoked Raspberry",
    "ingredients": [
      "spices",
      "water",
      "flour",
      "egg",
      "cream"
    ],
    "steps": "Prepare the smoked raspberry using spices, water, flour, egg, and finish with cream."
  },
  {
    "name": "Smoked Roti",
    "ingredients": [
      "butter",
      "spices",
      "vinegar"
    ],
    "steps": "Prepare the smoked roti using butter, spices, and finish with vinegar."
  },
  {
    "name": "Smoked Sake",
    "ingredients": [
      "flour",
      "sugar",
      "salt",
      "cheese"
    ],
    "steps": "Prepare the smoked sake using flour, sugar, salt, and finish with cheese."
  },
  {
    "name": "Smoked Salmon",
    "ingredients": [
      "cheese",
      "onion",
      "cream"
    ],
    "steps": "Prepare the smoked salmon using cheese, onion, and finish with cream."
  },
  {
    "name": "Smoked Samosa",
    "ingredients": [
      "cream",
      "butter",
      "oil",
      "flour",
      "cheese"
    ],
    "steps": "Prepare the smoked samosa using cream, butter, oil, flour, and finish with cheese."
  },
  {
    "name": "Smoked Sardine",
    "ingredients": [
      "water",
      "sugar",
      "milk",
      "cream",
      "flour"
    ],
    "steps": "Prepare the smoked sardine using water, sugar, milk, cream, and finish with flour."
  },
  {
    "name": "Smoked Snapper",
    "ingredients": [
      "garlic",
      "pepper",
      "butter",
      "oil",
      "vinegar",
      "spices"
    ],
    "steps": "Prepare the smoked snapper using garlic, pepper, butter, oil, vinegar, and finish with spices."
  },
  {
    "name": "Smoked Soda",
    "ingredients": [
      "cheese",
      "onion",
      "oil"
    ],
    "steps": "Prepare the smoked soda using cheese, onion, and finish with oil."
  },
  {
    "name": "Smoked Sorbet",
    "ingredients": [
      "spices",
      "garlic",
      "water",
      "chili",
      "herbs",
      "butter"
    ],
    "steps": "Prepare the smoked sorbet using spices, garlic, water, chili, herbs, and finish with butter."
  },
  {
    "name": "Smoked Soup",
    "ingredients": [
      "milk",
      "garlic",
      "sugar",
      "water"
    ],
    "steps": "Prepare the smoked soup using milk, garlic, sugar, and finish with water."
  },
  {
    "name": "Smoked Spinach",
    "ingredients": [
      "ginger",
      "oil",
      "salt",
      "chili",
      "egg",
      "cream"
    ],
    "steps": "Prepare the smoked spinach using ginger, oil, salt, chili, egg, and finish with cream."
  },
  {
    "name": "Smoked Stew",
    "ingredients": [
      "chili",
      "sugar",
      "oil",
      "flour",
      "salt",
      "egg"
    ],
    "steps": "Prepare the smoked stew using chili, sugar, oil, flour, salt, and finish with egg."
  },
  {
    "name": "Smoked Tabbouleh",
    "ingredients": [
      "onion",
      "oil",
      "water"
    ],
    "steps": "Prepare the smoked tabbouleh using onion, oil, and finish with water."
  },
  {
    "name": "Smoked Taco",
    "ingredients": [
      "cheese",
      "vinegar",
      "ginger",
      "tomato"
    ],
    "steps": "Prepare the smoked taco using cheese, vinegar, ginger, and finish with tomato."
  },
  {
    "name": "Smoked Tandoori",
    "ingredients": [
      "oil",
      "herbs",
      "onion",
      "egg"
    ],
    "steps": "Prepare the smoked tandoori using oil, herbs, onion, and finish with egg."
  },
  {
    "name": "Smoked Thyme",
    "ingredients": [
      "butter",
      "water",
      "spices",
      "sugar",
      "salt"
    ],
    "steps": "Prepare the smoked thyme using butter, water, spices, sugar, and finish with salt."
  },
  {
    "name": "Smoked Tomato",
    "ingredients": [
      "ginger",
      "salt",
      "pepper",
      "spices",
      "herbs"
    ],
    "steps": "Prepare the smoked tomato using ginger, salt, pepper, spices, and finish with herbs."
  },
  {
    "name": "Smoked Tuna",
    "ingredients": [
      "herbs",
      "vinegar",
      "cheese",
      "egg",
      "garlic"
    ],
    "steps": "Prepare the smoked tuna using herbs, vinegar, cheese, egg, and finish with garlic."
  },
  {
    "name": "Smoked Waffle",
    "ingredients": [
      "sugar",
      "spices",
      "flour",
      "tomato",
      "butter",
      "onion"
    ],
    "steps": "Prepare the smoked waffle using sugar, spices, flour, tomato, butter, and finish with onion."
  },
  {
    "name": "Smoked Wasabi",
    "ingredients": [
      "sugar",
      "vinegar",
      "ginger"
    ],
    "steps": "Prepare the smoked wasabi using sugar, vinegar, and finish with ginger."
  },
  {
    "name": "Smoked Zucchini",
    "ingredients": [
      "vinegar",
      "ginger",
      "milk"
    ],
    "steps": "Prepare the smoked zucchini using vinegar, ginger, and finish with milk."
  },
  {
    "name": "Sour Avocado",
    "ingredients": [
      "egg",
      "cheese",
      "sugar",
      "oil",
      "water",
      "butter"
    ],
    "steps": "Prepare the sour avocado using egg, cheese, sugar, oil, water, and finish with butter."
  },
  {
    "name": "Sour Bacon",
    "ingredients": [
      "chili",
      "garlic",
      "pepper",
      "cream"
    ],
    "steps": "Prepare the sour bacon using chili, garlic, pepper, and finish with cream."
  },
  {
    "name": "Sour Banana",
    "ingredients": [
      "oil",
      "butter",
      "milk",
      "garlic",
      "cheese"
    ],
    "steps": "Prepare the sour banana using oil, butter, milk, garlic, and finish with cheese."
  },
  {
    "name": "Sour Beef",
    "ingredients": [
      "cream",
      "spices",
      "pepper",
      "herbs"
    ],
    "steps": "Prepare the sour beef using cream, spices, pepper, and finish with herbs."
  },
  {
    "name": "Sour Brownie",
    "ingredients": [
      "garlic",
      "spices",
      "tomato"
    ],
    "steps": "Prepare the sour brownie using garlic, spices, and finish with tomato."
  },
  {
    "name": "Sour Carrot",
    "ingredients": [
      "salt",
      "ginger",
      "onion"
    ],
    "steps": "Prepare the sour carrot using salt, ginger, and finish with onion."
  },
  {
    "name": "Sour Cashew",
    "ingredients": [
      "cheese",
      "salt",
      "onion",
      "ginger"
    ],
    "steps": "Prepare the sour cashew using cheese, salt, onion, and finish with ginger."
  },
  {
    "name": "Sour Cauliflower",
    "ingredients": [
      "flour",
      "garlic",
      "spices"
    ],
    "steps": "Prepare the sour cauliflower using flour, garlic, and finish with spices."
  },
  {
    "name": "Sour Celery",
    "ingredients": [
      "pepper",
      "spices",
      "cheese",
      "sugar",
      "egg"
    ],
    "steps": "Prepare the sour celery using pepper, spices, cheese, sugar, and finish with egg."
  },
  {
    "name": "Sour Cereal",
    "ingredients": [
      "herbs",
      "ginger",
      "onion",
      "vinegar"
    ],
    "steps": "Prepare the sour cereal using herbs, ginger, onion, and finish with vinegar."
  },
  {
    "name": "Sour Cheese",
    "ingredients": [
      "chili",
      "tomato",
      "cream",
      "garlic"
    ],
    "steps": "Prepare the sour cheese using chili, tomato, cream, and finish with garlic."
  },
  {
    "name": "Sour Chili",
    "ingredients": [
      "cream",
      "oil",
      "sugar",
      "water",
      "garlic"
    ],
    "steps": "Prepare the sour chili using cream, oil, sugar, water, and finish with garlic."
  },
  {
    "name": "Sour Cookie",
    "ingredients": [
      "spices",
      "oil",
      "salt",
      "egg"
    ],
    "steps": "Prepare the sour cookie using spices, oil, salt, and finish with egg."
  },
  {
    "name": "Sour Croissant",
    "ingredients": [
      "spices",
      "egg",
      "sugar",
      "tomato",
      "flour",
      "garlic"
    ],
    "steps": "Prepare the sour croissant using spices, egg, sugar, tomato, flour, and finish with garlic."
  },
  {
    "name": "Sour Cucumber",
    "ingredients": [
      "chili",
      "water",
      "cheese",
      "cream"
    ],
    "steps": "Prepare the sour cucumber using chili, water, cheese, and finish with cream."
  },
  {
    "name": "Sour Curry",
    "ingredients": [
      "milk",
      "onion",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the sour curry using milk, onion, pepper, and finish with egg."
  },
  {
    "name": "Sour Duck",
    "ingredients": [
      "butter",
      "tomato",
      "egg",
      "onion",
      "herbs",
      "salt"
    ],
    "steps": "Prepare the sour duck using butter, tomato, egg, onion, herbs, and finish with salt."
  },
  {
    "name": "Sour Eggplant",
    "ingredients": [
      "cheese",
      "ginger",
      "vinegar",
      "spices"
    ],
    "steps": "Prepare the sour eggplant using cheese, ginger, vinegar, and finish with spices."
  },
  {
    "name": "Sour Fig",
    "ingredients": [
      "sugar",
      "chili",
      "cheese"
    ],
    "steps": "Prepare the sour fig using sugar, chili, and finish with cheese."
  },
  {
    "name": "Sour Flour",
    "ingredients": [
      "onion",
      "flour",
      "water"
    ],
    "steps": "Prepare the sour flour using onion, flour, and finish with water."
  },
  {
    "name": "Sour Garlic",
    "ingredients": [
      "chili",
      "flour",
      "onion",
      "sugar",
      "spices"
    ],
    "steps": "Prepare the sour garlic using chili, flour, onion, sugar, and finish with spices."
  },
  {
    "name": "Sour Ginger",
    "ingredients": [
      "herbs",
      "butter",
      "sugar",
      "garlic",
      "onion",
      "egg"
    ],
    "steps": "Prepare the sour ginger using herbs, butter, sugar, garlic, onion, and finish with egg."
  },
  {
    "name": "Sour Goose",
    "ingredients": [
      "cream",
      "sugar",
      "egg",
      "spices",
      "chili",
      "garlic"
    ],
    "steps": "Prepare the sour goose using cream, sugar, egg, spices, chili, and finish with garlic."
  },
  {
    "name": "Sour Gulab Jamun",
    "ingredients": [
      "flour",
      "chili",
      "water",
      "spices",
      "herbs",
      "cheese"
    ],
    "steps": "Prepare the sour gulab jamun using flour, chili, water, spices, herbs, and finish with cheese."
  },
  {
    "name": "Sour Halwa",
    "ingredients": [
      "milk",
      "onion",
      "oil",
      "garlic",
      "flour",
      "cream"
    ],
    "steps": "Prepare the sour halwa using milk, onion, oil, garlic, flour, and finish with cream."
  },
  {
    "name": "Sour Honey",
    "ingredients": [
      "sugar",
      "egg",
      "flour",
      "herbs",
      "chili",
      "vinegar"
    ],
    "steps": "Prepare the sour honey using sugar, egg, flour, herbs, chili, and finish with vinegar."
  },
  {
    "name": "Sour Hotdog",
    "ingredients": [
      "cheese",
      "tomato",
      "pepper",
      "milk",
      "egg",
      "onion"
    ],
    "steps": "Prepare the sour hotdog using cheese, tomato, pepper, milk, egg, and finish with onion."
  },
  {
    "name": "Sour Ice Cream",
    "ingredients": [
      "ginger",
      "cream",
      "milk",
      "herbs"
    ],
    "steps": "Prepare the sour ice cream using ginger, cream, milk, and finish with herbs."
  },
  {
    "name": "Sour Idli",
    "ingredients": [
      "ginger",
      "tomato",
      "spices"
    ],
    "steps": "Prepare the sour idli using ginger, tomato, and finish with spices."
  },
  {
    "name": "Sour Leek",
    "ingredients": [
      "herbs",
      "tomato",
      "egg",
      "water",
      "spices",
      "salt"
    ],
    "steps": "Prepare the sour leek using herbs, tomato, egg, water, spices, and finish with salt."
  },
  {
    "name": "Sour Lentils",
    "ingredients": [
      "cream",
      "milk",
      "water",
      "oil"
    ],
    "steps": "Prepare the sour lentils using cream, milk, water, and finish with oil."
  },
  {
    "name": "Sour Lime",
    "ingredients": [
      "salt",
      "vinegar",
      "flour",
      "herbs",
      "ginger",
      "sugar"
    ],
    "steps": "Prepare the sour lime using salt, vinegar, flour, herbs, ginger, and finish with sugar."
  },
  {
    "name": "Sour Mango",
    "ingredients": [
      "vinegar",
      "herbs",
      "flour",
      "oil",
      "egg"
    ],
    "steps": "Prepare the sour mango using vinegar, herbs, flour, oil, and finish with egg."
  },
  {
    "name": "Sour Marshmallow",
    "ingredients": [
      "cheese",
      "milk",
      "herbs"
    ],
    "steps": "Prepare the sour marshmallow using cheese, milk, and finish with herbs."
  },
  {
    "name": "Sour Matcha",
    "ingredients": [
      "butter",
      "garlic",
      "onion",
      "pepper",
      "flour"
    ],
    "steps": "Prepare the sour matcha using butter, garlic, onion, pepper, and finish with flour."
  },
  {
    "name": "Sour Milk",
    "ingredients": [
      "cheese",
      "vinegar",
      "cream",
      "ginger"
    ],
    "steps": "Prepare the sour milk using cheese, vinegar, cream, and finish with ginger."
  },
  {
    "name": "Sour Miso",
    "ingredients": [
      "vinegar",
      "pepper",
      "herbs",
      "cheese",
      "oil",
      "ginger"
    ],
    "steps": "Prepare the sour miso using vinegar, pepper, herbs, cheese, oil, and finish with ginger."
  },
  {
    "name": "Sour Naan",
    "ingredients": [
      "cheese",
      "sugar",
      "milk",
      "ginger"
    ],
    "steps": "Prepare the sour naan using cheese, sugar, milk, and finish with ginger."
  },
  {
    "name": "Sour Noodles",
    "ingredients": [
      "salt",
      "water",
      "pepper"
    ],
    "steps": "Prepare the sour noodles using salt, water, and finish with pepper."
  },
  {
    "name": "Sour Nori",
    "ingredients": [
      "egg",
      "butter",
      "onion"
    ],
    "steps": "Prepare the sour nori using egg, butter, and finish with onion."
  },
  {
    "name": "Sour Nutmeg",
    "ingredients": [
      "oil",
      "water",
      "garlic"
    ],
    "steps": "Prepare the sour nutmeg using oil, water, and finish with garlic."
  },
  {
    "name": "Sour Oats",
    "ingredients": [
      "salt",
      "ginger",
      "milk",
      "herbs",
      "cheese"
    ],
    "steps": "Prepare the sour oats using salt, ginger, milk, herbs, and finish with cheese."
  },
  {
    "name": "Sour Olive",
    "ingredients": [
      "salt",
      "herbs",
      "milk",
      "tomato",
      "vinegar"
    ],
    "steps": "Prepare the sour olive using salt, herbs, milk, tomato, and finish with vinegar."
  },
  {
    "name": "Sour Pancake",
    "ingredients": [
      "salt",
      "chili",
      "spices"
    ],
    "steps": "Prepare the sour pancake using salt, chili, and finish with spices."
  },
  {
    "name": "Sour Papaya",
    "ingredients": [
      "spices",
      "garlic",
      "herbs",
      "milk"
    ],
    "steps": "Prepare the sour papaya using spices, garlic, herbs, and finish with milk."
  },
  {
    "name": "Sour Peas",
    "ingredients": [
      "flour",
      "vinegar",
      "oil",
      "spices",
      "pepper",
      "garlic"
    ],
    "steps": "Prepare the sour peas using flour, vinegar, oil, spices, pepper, and finish with garlic."
  },
  {
    "name": "Sour Pepper",
    "ingredients": [
      "onion",
      "cheese",
      "tomato",
      "butter",
      "sugar"
    ],
    "steps": "Prepare the sour pepper using onion, cheese, tomato, butter, and finish with sugar."
  },
  {
    "name": "Sour Pickles",
    "ingredients": [
      "pepper",
      "butter",
      "water",
      "ginger",
      "cheese",
      "chili"
    ],
    "steps": "Prepare the sour pickles using pepper, butter, water, ginger, cheese, and finish with chili."
  },
  {
    "name": "Sour Pie",
    "ingredients": [
      "pepper",
      "vinegar",
      "sugar",
      "tomato",
      "flour",
      "cream"
    ],
    "steps": "Prepare the sour pie using pepper, vinegar, sugar, tomato, flour, and finish with cream."
  },
  {
    "name": "Sour Pizza",
    "ingredients": [
      "spices",
      "vinegar",
      "garlic"
    ],
    "steps": "Prepare the sour pizza using spices, vinegar, and finish with garlic."
  },
  {
    "name": "Sour Potato",
    "ingredients": [
      "pepper",
      "chili",
      "egg",
      "butter",
      "tomato",
      "spices"
    ],
    "steps": "Prepare the sour potato using pepper, chili, egg, butter, tomato, and finish with spices."
  },
  {
    "name": "Sour Pudding",
    "ingredients": [
      "tomato",
      "pepper",
      "vinegar"
    ],
    "steps": "Prepare the sour pudding using tomato, pepper, and finish with vinegar."
  },
  {
    "name": "Sour Ramen",
    "ingredients": [
      "spices",
      "herbs",
      "pepper",
      "sugar"
    ],
    "steps": "Prepare the sour ramen using spices, herbs, pepper, and finish with sugar."
  },
  {
    "name": "Sour Risotto",
    "ingredients": [
      "salt",
      "pepper",
      "onion",
      "sugar",
      "chili",
      "herbs"
    ],
    "steps": "Prepare the sour risotto using salt, pepper, onion, sugar, chili, and finish with herbs."
  },
  {
    "name": "Sour Roti",
    "ingredients": [
      "ginger",
      "chili",
      "salt"
    ],
    "steps": "Prepare the sour roti using ginger, chili, and finish with salt."
  },
  {
    "name": "Sour Salt",
    "ingredients": [
      "butter",
      "spices",
      "ginger"
    ],
    "steps": "Prepare the sour salt using butter, spices, and finish with ginger."
  },
  {
    "name": "Sour Sandwich",
    "ingredients": [
      "pepper",
      "chili",
      "sugar"
    ],
    "steps": "Prepare the sour sandwich using pepper, chili, and finish with sugar."
  },
  {
    "name": "Sour Snapper",
    "ingredients": [
      "oil",
      "cream",
      "herbs",
      "sugar",
      "spices",
      "chili"
    ],
    "steps": "Prepare the sour snapper using oil, cream, herbs, sugar, spices, and finish with chili."
  },
  {
    "name": "Sour Soda",
    "ingredients": [
      "pepper",
      "tomato",
      "salt",
      "vinegar",
      "herbs"
    ],
    "steps": "Prepare the sour soda using pepper, tomato, salt, vinegar, and finish with herbs."
  },
  {
    "name": "Sour Spinach",
    "ingredients": [
      "onion",
      "butter",
      "vinegar",
      "egg",
      "salt",
      "garlic"
    ],
    "steps": "Prepare the sour spinach using onion, butter, vinegar, egg, salt, and finish with garlic."
  },
  {
    "name": "Sour Sugar",
    "ingredients": [
      "salt",
      "butter",
      "ginger",
      "tomato"
    ],
    "steps": "Prepare the sour sugar using salt, butter, ginger, and finish with tomato."
  },
  {
    "name": "Sour Tabbouleh",
    "ingredients": [
      "flour",
      "salt",
      "pepper",
      "sugar",
      "butter",
      "water"
    ],
    "steps": "Prepare the sour tabbouleh using flour, salt, pepper, sugar, butter, and finish with water."
  },
  {
    "name": "Sour Thyme",
    "ingredients": [
      "herbs",
      "cheese",
      "tomato",
      "water",
      "garlic",
      "cream"
    ],
    "steps": "Prepare the sour thyme using herbs, cheese, tomato, water, garlic, and finish with cream."
  },
  {
    "name": "Sour Toast",
    "ingredients": [
      "pepper",
      "salt",
      "flour"
    ],
    "steps": "Prepare the sour toast using pepper, salt, and finish with flour."
  },
  {
    "name": "Sour Tomato",
    "ingredients": [
      "garlic",
      "flour",
      "ginger",
      "egg",
      "water"
    ],
    "steps": "Prepare the sour tomato using garlic, flour, ginger, egg, and finish with water."
  },
  {
    "name": "Sour Wasabi",
    "ingredients": [
      "sugar",
      "pepper",
      "onion",
      "flour",
      "milk",
      "salt"
    ],
    "steps": "Prepare the sour wasabi using sugar, pepper, onion, flour, milk, and finish with salt."
  },
  {
    "name": "Sour Zucchini",
    "ingredients": [
      "vinegar",
      "egg",
      "flour",
      "cheese",
      "onion"
    ],
    "steps": "Prepare the sour zucchini using vinegar, egg, flour, cheese, and finish with onion."
  },
  {
    "name": "Spicy Anchovy",
    "ingredients": [
      "pepper",
      "garlic",
      "butter",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the spicy anchovy using pepper, garlic, butter, cheese, and finish with sugar."
  },
  {
    "name": "Spicy Apple",
    "ingredients": [
      "spices",
      "sugar",
      "onion",
      "pepper"
    ],
    "steps": "Prepare the spicy apple using spices, sugar, onion, and finish with pepper."
  },
  {
    "name": "Spicy Artichoke",
    "ingredients": [
      "garlic",
      "herbs",
      "chili"
    ],
    "steps": "Prepare the spicy artichoke using garlic, herbs, and finish with chili."
  },
  {
    "name": "Spicy Avocado",
    "ingredients": [
      "pepper",
      "garlic",
      "herbs",
      "salt"
    ],
    "steps": "Prepare the spicy avocado using pepper, garlic, herbs, and finish with salt."
  },
  {
    "name": "Spicy Bacon",
    "ingredients": [
      "pepper",
      "chili",
      "spices",
      "oil",
      "egg",
      "flour"
    ],
    "steps": "Prepare the spicy bacon using pepper, chili, spices, oil, egg, and finish with flour."
  },
  {
    "name": "Spicy Banana",
    "ingredients": [
      "tomato",
      "sugar",
      "onion",
      "egg",
      "spices",
      "butter"
    ],
    "steps": "Prepare the spicy banana using tomato, sugar, onion, egg, spices, and finish with butter."
  },
  {
    "name": "Spicy Barfi",
    "ingredients": [
      "pepper",
      "sugar",
      "cheese"
    ],
    "steps": "Prepare the spicy barfi using pepper, sugar, and finish with cheese."
  },
  {
    "name": "Spicy Barley",
    "ingredients": [
      "herbs",
      "oil",
      "vinegar",
      "salt",
      "butter"
    ],
    "steps": "Prepare the spicy barley using herbs, oil, vinegar, salt, and finish with butter."
  },
  {
    "name": "Spicy Beans",
    "ingredients": [
      "water",
      "oil",
      "spices",
      "cheese",
      "ginger",
      "cream"
    ],
    "steps": "Prepare the spicy beans using water, oil, spices, cheese, ginger, and finish with cream."
  },
  {
    "name": "Spicy Bibimbap",
    "ingredients": [
      "ginger",
      "water",
      "tomato",
      "herbs",
      "egg",
      "butter"
    ],
    "steps": "Prepare the spicy bibimbap using ginger, water, tomato, herbs, egg, and finish with butter."
  },
  {
    "name": "Spicy Blueberry",
    "ingredients": [
      "water",
      "egg",
      "tomato",
      "milk",
      "herbs"
    ],
    "steps": "Prepare the spicy blueberry using water, egg, tomato, milk, and finish with herbs."
  },
  {
    "name": "Spicy Bread",
    "ingredients": [
      "herbs",
      "salt",
      "flour",
      "vinegar",
      "spices",
      "milk"
    ],
    "steps": "Prepare the spicy bread using herbs, salt, flour, vinegar, spices, and finish with milk."
  },
  {
    "name": "Spicy Broccoli",
    "ingredients": [
      "water",
      "spices",
      "chili",
      "egg",
      "cream"
    ],
    "steps": "Prepare the spicy broccoli using water, spices, chili, egg, and finish with cream."
  },
  {
    "name": "Spicy Brownie",
    "ingredients": [
      "flour",
      "water",
      "egg",
      "pepper"
    ],
    "steps": "Prepare the spicy brownie using flour, water, egg, and finish with pepper."
  },
  {
    "name": "Spicy Burger",
    "ingredients": [
      "oil",
      "salt",
      "spices"
    ],
    "steps": "Prepare the spicy burger using oil, salt, and finish with spices."
  },
  {
    "name": "Spicy Casserole",
    "ingredients": [
      "cheese",
      "chili",
      "ginger",
      "spices",
      "salt"
    ],
    "steps": "Prepare the spicy casserole using cheese, chili, ginger, spices, and finish with salt."
  },
  {
    "name": "Spicy Cauliflower",
    "ingredients": [
      "flour",
      "butter",
      "egg",
      "salt",
      "spices"
    ],
    "steps": "Prepare the spicy cauliflower using flour, butter, egg, salt, and finish with spices."
  },
  {
    "name": "Spicy Chow Mein",
    "ingredients": [
      "onion",
      "tomato",
      "milk",
      "herbs",
      "sugar"
    ],
    "steps": "Prepare the spicy chow mein using onion, tomato, milk, herbs, and finish with sugar."
  },
  {
    "name": "Spicy Coconut",
    "ingredients": [
      "tomato",
      "cheese",
      "vinegar"
    ],
    "steps": "Prepare the spicy coconut using tomato, cheese, and finish with vinegar."
  },
  {
    "name": "Spicy Cookie",
    "ingredients": [
      "garlic",
      "oil",
      "onion",
      "butter",
      "herbs",
      "egg"
    ],
    "steps": "Prepare the spicy cookie using garlic, oil, onion, butter, herbs, and finish with egg."
  },
  {
    "name": "Spicy Corn",
    "ingredients": [
      "garlic",
      "onion",
      "spices",
      "oil"
    ],
    "steps": "Prepare the spicy corn using garlic, onion, spices, and finish with oil."
  },
  {
    "name": "Spicy Croissant",
    "ingredients": [
      "water",
      "chili",
      "garlic",
      "onion",
      "herbs",
      "milk"
    ],
    "steps": "Prepare the spicy croissant using water, chili, garlic, onion, herbs, and finish with milk."
  },
  {
    "name": "Spicy Cucumber",
    "ingredients": [
      "onion",
      "flour",
      "herbs"
    ],
    "steps": "Prepare the spicy cucumber using onion, flour, and finish with herbs."
  },
  {
    "name": "Spicy Curry",
    "ingredients": [
      "vinegar",
      "sugar",
      "chili"
    ],
    "steps": "Prepare the spicy curry using vinegar, sugar, and finish with chili."
  },
  {
    "name": "Spicy Date",
    "ingredients": [
      "vinegar",
      "butter",
      "sugar",
      "garlic"
    ],
    "steps": "Prepare the spicy date using vinegar, butter, sugar, and finish with garlic."
  },
  {
    "name": "Spicy Duck",
    "ingredients": [
      "egg",
      "oil",
      "ginger",
      "tomato",
      "sugar",
      "flour"
    ],
    "steps": "Prepare the spicy duck using egg, oil, ginger, tomato, sugar, and finish with flour."
  },
  {
    "name": "Spicy Dumpling",
    "ingredients": [
      "cheese",
      "tomato",
      "herbs",
      "salt"
    ],
    "steps": "Prepare the spicy dumpling using cheese, tomato, herbs, and finish with salt."
  },
  {
    "name": "Spicy Egg",
    "ingredients": [
      "flour",
      "garlic",
      "sugar",
      "cream"
    ],
    "steps": "Prepare the spicy egg using flour, garlic, sugar, and finish with cream."
  },
  {
    "name": "Spicy Falafel",
    "ingredients": [
      "water",
      "herbs",
      "tomato",
      "milk",
      "salt"
    ],
    "steps": "Prepare the spicy falafel using water, herbs, tomato, milk, and finish with salt."
  },
  {
    "name": "Spicy Fish",
    "ingredients": [
      "garlic",
      "milk",
      "ginger",
      "vinegar",
      "onion",
      "herbs"
    ],
    "steps": "Prepare the spicy fish using garlic, milk, ginger, vinegar, onion, and finish with herbs."
  },
  {
    "name": "Spicy Gelato",
    "ingredients": [
      "egg",
      "garlic",
      "cream",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the spicy gelato using egg, garlic, cream, sugar, and finish with onion."
  },
  {
    "name": "Spicy Goose",
    "ingredients": [
      "butter",
      "salt",
      "tomato",
      "sugar",
      "cheese",
      "vinegar"
    ],
    "steps": "Prepare the spicy goose using butter, salt, tomato, sugar, cheese, and finish with vinegar."
  },
  {
    "name": "Spicy Granola",
    "ingredients": [
      "salt",
      "vinegar",
      "cream",
      "onion"
    ],
    "steps": "Prepare the spicy granola using salt, vinegar, cream, and finish with onion."
  },
  {
    "name": "Spicy Halwa",
    "ingredients": [
      "herbs",
      "garlic",
      "ginger",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the spicy halwa using herbs, garlic, ginger, cheese, and finish with sugar."
  },
  {
    "name": "Spicy Ham",
    "ingredients": [
      "ginger",
      "onion",
      "flour",
      "sugar",
      "tomato",
      "herbs"
    ],
    "steps": "Prepare the spicy ham using ginger, onion, flour, sugar, tomato, and finish with herbs."
  },
  {
    "name": "Spicy Honey",
    "ingredients": [
      "oil",
      "flour",
      "salt",
      "butter",
      "cream"
    ],
    "steps": "Prepare the spicy honey using oil, flour, salt, butter, and finish with cream."
  },
  {
    "name": "Spicy Hotdog",
    "ingredients": [
      "butter",
      "tomato",
      "onion",
      "egg",
      "cheese",
      "pepper"
    ],
    "steps": "Prepare the spicy hotdog using butter, tomato, onion, egg, cheese, and finish with pepper."
  },
  {
    "name": "Spicy Ice Cream",
    "ingredients": [
      "vinegar",
      "egg",
      "onion",
      "milk"
    ],
    "steps": "Prepare the spicy ice cream using vinegar, egg, onion, and finish with milk."
  },
  {
    "name": "Spicy Idli",
    "ingredients": [
      "onion",
      "vinegar",
      "spices"
    ],
    "steps": "Prepare the spicy idli using onion, vinegar, and finish with spices."
  },
  {
    "name": "Spicy Jam",
    "ingredients": [
      "chili",
      "cream",
      "herbs",
      "garlic",
      "pepper"
    ],
    "steps": "Prepare the spicy jam using chili, cream, herbs, garlic, and finish with pepper."
  },
  {
    "name": "Spicy Kebab",
    "ingredients": [
      "vinegar",
      "water",
      "egg",
      "ginger"
    ],
    "steps": "Prepare the spicy kebab using vinegar, water, egg, and finish with ginger."
  },
  {
    "name": "Spicy Ketchup",
    "ingredients": [
      "milk",
      "pepper",
      "garlic",
      "egg",
      "flour",
      "cream"
    ],
    "steps": "Prepare the spicy ketchup using milk, pepper, garlic, egg, flour, and finish with cream."
  },
  {
    "name": "Spicy Lasagna",
    "ingredients": [
      "herbs",
      "cream",
      "milk",
      "oil",
      "butter"
    ],
    "steps": "Prepare the spicy lasagna using herbs, cream, milk, oil, and finish with butter."
  },
  {
    "name": "Spicy Leek",
    "ingredients": [
      "herbs",
      "water",
      "flour"
    ],
    "steps": "Prepare the spicy leek using herbs, water, and finish with flour."
  },
  {
    "name": "Spicy Lemon",
    "ingredients": [
      "ginger",
      "chili",
      "oil",
      "water"
    ],
    "steps": "Prepare the spicy lemon using ginger, chili, oil, and finish with water."
  },
  {
    "name": "Spicy Lettuce",
    "ingredients": [
      "water",
      "chili",
      "sugar",
      "vinegar",
      "garlic"
    ],
    "steps": "Prepare the spicy lettuce using water, chili, sugar, vinegar, and finish with garlic."
  },
  {
    "name": "Spicy Lobster",
    "ingredients": [
      "cheese",
      "herbs",
      "egg"
    ],
    "steps": "Prepare the spicy lobster using cheese, herbs, and finish with egg."
  },
  {
    "name": "Spicy Macaroni",
    "ingredients": [
      "herbs",
      "cheese",
      "butter",
      "vinegar",
      "pepper"
    ],
    "steps": "Prepare the spicy macaroni using herbs, cheese, butter, vinegar, and finish with pepper."
  },
  {
    "name": "Spicy Mango",
    "ingredients": [
      "cheese",
      "garlic",
      "chili",
      "flour",
      "herbs"
    ],
    "steps": "Prepare the spicy mango using cheese, garlic, chili, flour, and finish with herbs."
  },
  {
    "name": "Spicy Marshmallow",
    "ingredients": [
      "ginger",
      "cream",
      "onion",
      "herbs",
      "tomato",
      "cheese"
    ],
    "steps": "Prepare the spicy marshmallow using ginger, cream, onion, herbs, tomato, and finish with cheese."
  },
  {
    "name": "Spicy Meatball",
    "ingredients": [
      "onion",
      "egg",
      "herbs"
    ],
    "steps": "Prepare the spicy meatball using onion, egg, and finish with herbs."
  },
  {
    "name": "Spicy Muffin",
    "ingredients": [
      "butter",
      "onion",
      "garlic"
    ],
    "steps": "Prepare the spicy muffin using butter, onion, and finish with garlic."
  },
  {
    "name": "Spicy Mushroom",
    "ingredients": [
      "butter",
      "salt",
      "garlic",
      "sugar"
    ],
    "steps": "Prepare the spicy mushroom using butter, salt, garlic, and finish with sugar."
  },
  {
    "name": "Spicy Naan",
    "ingredients": [
      "milk",
      "onion",
      "chili"
    ],
    "steps": "Prepare the spicy naan using milk, onion, and finish with chili."
  },
  {
    "name": "Spicy Noodles",
    "ingredients": [
      "salt",
      "cream",
      "milk",
      "ginger",
      "vinegar",
      "spices"
    ],
    "steps": "Prepare the spicy noodles using salt, cream, milk, ginger, vinegar, and finish with spices."
  },
  {
    "name": "Spicy Nori",
    "ingredients": [
      "pepper",
      "cheese",
      "milk",
      "garlic",
      "spices"
    ],
    "steps": "Prepare the spicy nori using pepper, cheese, milk, garlic, and finish with spices."
  },
  {
    "name": "Spicy Nutmeg",
    "ingredients": [
      "sugar",
      "spices",
      "water",
      "egg"
    ],
    "steps": "Prepare the spicy nutmeg using sugar, spices, water, and finish with egg."
  },
  {
    "name": "Spicy Oats",
    "ingredients": [
      "pepper",
      "oil",
      "garlic"
    ],
    "steps": "Prepare the spicy oats using pepper, oil, and finish with garlic."
  },
  {
    "name": "Spicy Olive",
    "ingredients": [
      "sugar",
      "garlic",
      "spices",
      "cheese"
    ],
    "steps": "Prepare the spicy olive using sugar, garlic, spices, and finish with cheese."
  },
  {
    "name": "Spicy Onion",
    "ingredients": [
      "egg",
      "vinegar",
      "flour",
      "sugar",
      "butter",
      "tomato"
    ],
    "steps": "Prepare the spicy onion using egg, vinegar, flour, sugar, butter, and finish with tomato."
  },
  {
    "name": "Spicy Oregano",
    "ingredients": [
      "flour",
      "onion",
      "spices"
    ],
    "steps": "Prepare the spicy oregano using flour, onion, and finish with spices."
  },
  {
    "name": "Spicy Paella",
    "ingredients": [
      "sugar",
      "salt",
      "cheese",
      "herbs",
      "butter"
    ],
    "steps": "Prepare the spicy paella using sugar, salt, cheese, herbs, and finish with butter."
  },
  {
    "name": "Spicy Papaya",
    "ingredients": [
      "herbs",
      "spices",
      "cream",
      "sugar",
      "ginger"
    ],
    "steps": "Prepare the spicy papaya using herbs, spices, cream, sugar, and finish with ginger."
  },
  {
    "name": "Spicy Paratha",
    "ingredients": [
      "butter",
      "salt",
      "water",
      "milk"
    ],
    "steps": "Prepare the spicy paratha using butter, salt, water, and finish with milk."
  },
  {
    "name": "Spicy Peanut",
    "ingredients": [
      "oil",
      "butter",
      "salt",
      "vinegar"
    ],
    "steps": "Prepare the spicy peanut using oil, butter, salt, and finish with vinegar."
  },
  {
    "name": "Spicy Peas",
    "ingredients": [
      "cream",
      "water",
      "vinegar"
    ],
    "steps": "Prepare the spicy peas using cream, water, and finish with vinegar."
  },
  {
    "name": "Spicy Pepper",
    "ingredients": [
      "tomato",
      "herbs",
      "pepper",
      "water",
      "vinegar"
    ],
    "steps": "Prepare the spicy pepper using tomato, herbs, pepper, water, and finish with vinegar."
  },
  {
    "name": "Spicy Popsicle",
    "ingredients": [
      "onion",
      "garlic",
      "vinegar",
      "egg"
    ],
    "steps": "Prepare the spicy popsicle using onion, garlic, vinegar, and finish with egg."
  },
  {
    "name": "Spicy Potato",
    "ingredients": [
      "herbs",
      "garlic",
      "tomato",
      "sugar",
      "salt",
      "water"
    ],
    "steps": "Prepare the spicy potato using herbs, garlic, tomato, sugar, salt, and finish with water."
  },
  {
    "name": "Spicy Pudding",
    "ingredients": [
      "egg",
      "salt",
      "spices",
      "flour"
    ],
    "steps": "Prepare the spicy pudding using egg, salt, spices, and finish with flour."
  },
  {
    "name": "Spicy Quesadilla",
    "ingredients": [
      "oil",
      "spices",
      "ginger",
      "garlic",
      "cheese",
      "water"
    ],
    "steps": "Prepare the spicy quesadilla using oil, spices, ginger, garlic, cheese, and finish with water."
  },
  {
    "name": "Spicy Quinoa",
    "ingredients": [
      "ginger",
      "garlic",
      "pepper",
      "cream",
      "vinegar",
      "oil"
    ],
    "steps": "Prepare the spicy quinoa using ginger, garlic, pepper, cream, vinegar, and finish with oil."
  },
  {
    "name": "Spicy Radish",
    "ingredients": [
      "ginger",
      "vinegar",
      "sugar",
      "oil",
      "chili"
    ],
    "steps": "Prepare the spicy radish using ginger, vinegar, sugar, oil, and finish with chili."
  },
  {
    "name": "Spicy Rice",
    "ingredients": [
      "salt",
      "cream",
      "pepper",
      "tomato",
      "cheese"
    ],
    "steps": "Prepare the spicy rice using salt, cream, pepper, tomato, and finish with cheese."
  },
  {
    "name": "Spicy Sake",
    "ingredients": [
      "water",
      "garlic",
      "cream",
      "chili",
      "vinegar",
      "cheese"
    ],
    "steps": "Prepare the spicy sake using water, garlic, cream, chili, vinegar, and finish with cheese."
  },
  {
    "name": "Spicy Salmon",
    "ingredients": [
      "sugar",
      "herbs",
      "flour",
      "garlic",
      "vinegar",
      "oil"
    ],
    "steps": "Prepare the spicy salmon using sugar, herbs, flour, garlic, vinegar, and finish with oil."
  },
  {
    "name": "Spicy Samosa",
    "ingredients": [
      "spices",
      "cream",
      "oil",
      "sugar",
      "cheese"
    ],
    "steps": "Prepare the spicy samosa using spices, cream, oil, sugar, and finish with cheese."
  },
  {
    "name": "Spicy Sardine",
    "ingredients": [
      "spices",
      "cream",
      "vinegar",
      "sugar",
      "pepper",
      "water"
    ],
    "steps": "Prepare the spicy sardine using spices, cream, vinegar, sugar, pepper, and finish with water."
  },
  {
    "name": "Spicy Sauce",
    "ingredients": [
      "tomato",
      "butter",
      "vinegar",
      "cream",
      "egg",
      "pepper"
    ],
    "steps": "Prepare the spicy sauce using tomato, butter, vinegar, cream, egg, and finish with pepper."
  },
  {
    "name": "Spicy Shawarma",
    "ingredients": [
      "water",
      "cheese",
      "milk"
    ],
    "steps": "Prepare the spicy shawarma using water, cheese, and finish with milk."
  },
  {
    "name": "Spicy Shrimp",
    "ingredients": [
      "sugar",
      "garlic",
      "water",
      "cheese",
      "butter"
    ],
    "steps": "Prepare the spicy shrimp using sugar, garlic, water, cheese, and finish with butter."
  },
  {
    "name": "Spicy Soup",
    "ingredients": [
      "oil",
      "flour",
      "butter"
    ],
    "steps": "Prepare the spicy soup using oil, flour, and finish with butter."
  },
  {
    "name": "Spicy Spaghetti",
    "ingredients": [
      "chili",
      "butter",
      "cheese"
    ],
    "steps": "Prepare the spicy spaghetti using chili, butter, and finish with cheese."
  },
  {
    "name": "Spicy Stew",
    "ingredients": [
      "butter",
      "onion",
      "flour",
      "salt",
      "cheese"
    ],
    "steps": "Prepare the spicy stew using butter, onion, flour, salt, and finish with cheese."
  },
  {
    "name": "Spicy Sugar",
    "ingredients": [
      "ginger",
      "onion",
      "milk",
      "salt",
      "egg",
      "chili"
    ],
    "steps": "Prepare the spicy sugar using ginger, onion, milk, salt, egg, and finish with chili."
  },
  {
    "name": "Spicy Tabbouleh",
    "ingredients": [
      "vinegar",
      "onion",
      "butter",
      "herbs"
    ],
    "steps": "Prepare the spicy tabbouleh using vinegar, onion, butter, and finish with herbs."
  },
  {
    "name": "Spicy Tea",
    "ingredients": [
      "ginger",
      "chili",
      "egg"
    ],
    "steps": "Prepare the spicy tea using ginger, chili, and finish with egg."
  },
  {
    "name": "Spicy Teriyaki",
    "ingredients": [
      "garlic",
      "herbs",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the spicy teriyaki using garlic, herbs, sugar, and finish with onion."
  },
  {
    "name": "Spicy Tofu",
    "ingredients": [
      "pepper",
      "salt",
      "garlic",
      "cheese"
    ],
    "steps": "Prepare the spicy tofu using pepper, salt, garlic, and finish with cheese."
  },
  {
    "name": "Spicy Turkey",
    "ingredients": [
      "tomato",
      "spices",
      "butter",
      "salt",
      "vinegar",
      "oil"
    ],
    "steps": "Prepare the spicy turkey using tomato, spices, butter, salt, vinegar, and finish with oil."
  },
  {
    "name": "Spicy Turnip",
    "ingredients": [
      "ginger",
      "milk",
      "flour"
    ],
    "steps": "Prepare the spicy turnip using ginger, milk, and finish with flour."
  },
  {
    "name": "Spicy Udon",
    "ingredients": [
      "spices",
      "vinegar",
      "flour"
    ],
    "steps": "Prepare the spicy udon using spices, vinegar, and finish with flour."
  },
  {
    "name": "Spicy Walnut",
    "ingredients": [
      "vinegar",
      "salt",
      "cream",
      "onion",
      "flour"
    ],
    "steps": "Prepare the spicy walnut using vinegar, salt, cream, onion, and finish with flour."
  },
  {
    "name": "Spicy Wasabi",
    "ingredients": [
      "vinegar",
      "cheese",
      "egg"
    ],
    "steps": "Prepare the spicy wasabi using vinegar, cheese, and finish with egg."
  },
  {
    "name": "Spicy Yogurt",
    "ingredients": [
      "garlic",
      "onion",
      "butter"
    ],
    "steps": "Prepare the spicy yogurt using garlic, onion, and finish with butter."
  },
  {
    "name": "Sweet Almond",
    "ingredients": [
      "ginger",
      "cream",
      "herbs",
      "chili",
      "water",
      "flour"
    ],
    "steps": "Prepare the sweet almond using ginger, cream, herbs, chili, water, and finish with flour."
  },
  {
    "name": "Sweet Avocado",
    "ingredients": [
      "sugar",
      "onion",
      "milk",
      "water"
    ],
    "steps": "Prepare the sweet avocado using sugar, onion, milk, and finish with water."
  },
  {
    "name": "Sweet Banana",
    "ingredients": [
      "water",
      "spices",
      "vinegar",
      "pepper",
      "ginger"
    ],
    "steps": "Prepare the sweet banana using water, spices, vinegar, pepper, and finish with ginger."
  },
  {
    "name": "Sweet Barfi",
    "ingredients": [
      "salt",
      "egg",
      "tomato"
    ],
    "steps": "Prepare the sweet barfi using salt, egg, and finish with tomato."
  },
  {
    "name": "Sweet Barley",
    "ingredients": [
      "chili",
      "garlic",
      "spices",
      "herbs",
      "flour"
    ],
    "steps": "Prepare the sweet barley using chili, garlic, spices, herbs, and finish with flour."
  },
  {
    "name": "Sweet Beans",
    "ingredients": [
      "cream",
      "herbs",
      "chili"
    ],
    "steps": "Prepare the sweet beans using cream, herbs, and finish with chili."
  },
  {
    "name": "Sweet Beef",
    "ingredients": [
      "oil",
      "sugar",
      "ginger",
      "pepper",
      "tomato",
      "salt"
    ],
    "steps": "Prepare the sweet beef using oil, sugar, ginger, pepper, tomato, and finish with salt."
  },
  {
    "name": "Sweet Beetroot",
    "ingredients": [
      "pepper",
      "sugar",
      "milk",
      "herbs",
      "cream",
      "flour"
    ],
    "steps": "Prepare the sweet beetroot using pepper, sugar, milk, herbs, cream, and finish with flour."
  },
  {
    "name": "Sweet Broccoli",
    "ingredients": [
      "butter",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the sweet broccoli using butter, garlic, and finish with chili."
  },
  {
    "name": "Sweet Burger",
    "ingredients": [
      "vinegar",
      "chili",
      "garlic"
    ],
    "steps": "Prepare the sweet burger using vinegar, chili, and finish with garlic."
  },
  {
    "name": "Sweet Carrot",
    "ingredients": [
      "flour",
      "vinegar",
      "sugar"
    ],
    "steps": "Prepare the sweet carrot using flour, vinegar, and finish with sugar."
  },
  {
    "name": "Sweet Casserole",
    "ingredients": [
      "cheese",
      "garlic",
      "cream",
      "onion"
    ],
    "steps": "Prepare the sweet casserole using cheese, garlic, cream, and finish with onion."
  },
  {
    "name": "Sweet Chili",
    "ingredients": [
      "chili",
      "water",
      "vinegar",
      "milk",
      "egg"
    ],
    "steps": "Prepare the sweet chili using chili, water, vinegar, milk, and finish with egg."
  },
  {
    "name": "Sweet Chow Mein",
    "ingredients": [
      "chili",
      "water",
      "spices",
      "egg",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the sweet chow mein using chili, water, spices, egg, cheese, and finish with sugar."
  },
  {
    "name": "Sweet Cinnamon",
    "ingredients": [
      "water",
      "pepper",
      "vinegar",
      "milk"
    ],
    "steps": "Prepare the sweet cinnamon using water, pepper, vinegar, and finish with milk."
  },
  {
    "name": "Sweet Clove",
    "ingredients": [
      "water",
      "vinegar",
      "salt"
    ],
    "steps": "Prepare the sweet clove using water, vinegar, and finish with salt."
  },
  {
    "name": "Sweet Coconut",
    "ingredients": [
      "herbs",
      "vinegar",
      "cheese",
      "tomato",
      "cream",
      "butter"
    ],
    "steps": "Prepare the sweet coconut using herbs, vinegar, cheese, tomato, cream, and finish with butter."
  },
  {
    "name": "Sweet Cookie",
    "ingredients": [
      "herbs",
      "garlic",
      "tomato",
      "spices",
      "vinegar",
      "water"
    ],
    "steps": "Prepare the sweet cookie using herbs, garlic, tomato, spices, vinegar, and finish with water."
  },
  {
    "name": "Sweet Crepe",
    "ingredients": [
      "water",
      "butter",
      "egg",
      "sugar",
      "flour",
      "oil"
    ],
    "steps": "Prepare the sweet crepe using water, butter, egg, sugar, flour, and finish with oil."
  },
  {
    "name": "Sweet Croissant",
    "ingredients": [
      "tomato",
      "cheese",
      "oil"
    ],
    "steps": "Prepare the sweet croissant using tomato, cheese, and finish with oil."
  },
  {
    "name": "Sweet Curry",
    "ingredients": [
      "spices",
      "cream",
      "sugar",
      "water",
      "chili",
      "salt"
    ],
    "steps": "Prepare the sweet curry using spices, cream, sugar, water, chili, and finish with salt."
  },
  {
    "name": "Sweet Date",
    "ingredients": [
      "ginger",
      "chili",
      "egg",
      "salt"
    ],
    "steps": "Prepare the sweet date using ginger, chili, egg, and finish with salt."
  },
  {
    "name": "Sweet Donut",
    "ingredients": [
      "flour",
      "water",
      "onion"
    ],
    "steps": "Prepare the sweet donut using flour, water, and finish with onion."
  },
  {
    "name": "Sweet Egg",
    "ingredients": [
      "flour",
      "salt",
      "onion",
      "garlic",
      "sugar"
    ],
    "steps": "Prepare the sweet egg using flour, salt, onion, garlic, and finish with sugar."
  },
  {
    "name": "Sweet Eggplant",
    "ingredients": [
      "butter",
      "cheese",
      "onion"
    ],
    "steps": "Prepare the sweet eggplant using butter, cheese, and finish with onion."
  },
  {
    "name": "Sweet Fettuccine",
    "ingredients": [
      "sugar",
      "water",
      "herbs",
      "garlic"
    ],
    "steps": "Prepare the sweet fettuccine using sugar, water, herbs, and finish with garlic."
  },
  {
    "name": "Sweet Fish",
    "ingredients": [
      "sugar",
      "onion",
      "flour",
      "tomato"
    ],
    "steps": "Prepare the sweet fish using sugar, onion, flour, and finish with tomato."
  },
  {
    "name": "Sweet Gelato",
    "ingredients": [
      "garlic",
      "pepper",
      "butter"
    ],
    "steps": "Prepare the sweet gelato using garlic, pepper, and finish with butter."
  },
  {
    "name": "Sweet Ginger",
    "ingredients": [
      "spices",
      "salt",
      "chili"
    ],
    "steps": "Prepare the sweet ginger using spices, salt, and finish with chili."
  },
  {
    "name": "Sweet Gnocchi",
    "ingredients": [
      "milk",
      "garlic",
      "oil",
      "cream",
      "cheese"
    ],
    "steps": "Prepare the sweet gnocchi using milk, garlic, oil, cream, and finish with cheese."
  },
  {
    "name": "Sweet Granola",
    "ingredients": [
      "spices",
      "milk",
      "chili",
      "egg",
      "pepper"
    ],
    "steps": "Prepare the sweet granola using spices, milk, chili, egg, and finish with pepper."
  },
  {
    "name": "Sweet Grape",
    "ingredients": [
      "spices",
      "oil",
      "cream",
      "pepper",
      "garlic",
      "chili"
    ],
    "steps": "Prepare the sweet grape using spices, oil, cream, pepper, garlic, and finish with chili."
  },
  {
    "name": "Sweet Gulab Jamun",
    "ingredients": [
      "onion",
      "ginger",
      "tomato"
    ],
    "steps": "Prepare the sweet gulab jamun using onion, ginger, and finish with tomato."
  },
  {
    "name": "Sweet Honey",
    "ingredients": [
      "oil",
      "flour",
      "onion",
      "pepper"
    ],
    "steps": "Prepare the sweet honey using oil, flour, onion, and finish with pepper."
  },
  {
    "name": "Sweet Hotdog",
    "ingredients": [
      "sugar",
      "spices",
      "cheese",
      "pepper"
    ],
    "steps": "Prepare the sweet hotdog using sugar, spices, cheese, and finish with pepper."
  },
  {
    "name": "Sweet Ice Cream",
    "ingredients": [
      "onion",
      "garlic",
      "water",
      "vinegar",
      "ginger",
      "herbs"
    ],
    "steps": "Prepare the sweet ice cream using onion, garlic, water, vinegar, ginger, and finish with herbs."
  },
  {
    "name": "Sweet Jam",
    "ingredients": [
      "flour",
      "cream",
      "pepper"
    ],
    "steps": "Prepare the sweet jam using flour, cream, and finish with pepper."
  },
  {
    "name": "Sweet Kebab",
    "ingredients": [
      "ginger",
      "vinegar",
      "cream"
    ],
    "steps": "Prepare the sweet kebab using ginger, vinegar, and finish with cream."
  },
  {
    "name": "Sweet Laddu",
    "ingredients": [
      "spices",
      "herbs",
      "ginger",
      "cheese"
    ],
    "steps": "Prepare the sweet laddu using spices, herbs, ginger, and finish with cheese."
  },
  {
    "name": "Sweet Lettuce",
    "ingredients": [
      "water",
      "milk",
      "sugar",
      "onion"
    ],
    "steps": "Prepare the sweet lettuce using water, milk, sugar, and finish with onion."
  },
  {
    "name": "Sweet Lobster",
    "ingredients": [
      "cheese",
      "herbs",
      "milk",
      "garlic"
    ],
    "steps": "Prepare the sweet lobster using cheese, herbs, milk, and finish with garlic."
  },
  {
    "name": "Sweet Mackerel",
    "ingredients": [
      "vinegar",
      "water",
      "cream",
      "garlic",
      "butter",
      "sugar"
    ],
    "steps": "Prepare the sweet mackerel using vinegar, water, cream, garlic, butter, and finish with sugar."
  },
  {
    "name": "Sweet Marshmallow",
    "ingredients": [
      "pepper",
      "cheese",
      "butter"
    ],
    "steps": "Prepare the sweet marshmallow using pepper, cheese, and finish with butter."
  },
  {
    "name": "Sweet Matcha",
    "ingredients": [
      "flour",
      "salt",
      "herbs",
      "vinegar",
      "cream",
      "onion"
    ],
    "steps": "Prepare the sweet matcha using flour, salt, herbs, vinegar, cream, and finish with onion."
  },
  {
    "name": "Sweet Miso",
    "ingredients": [
      "oil",
      "water",
      "salt",
      "vinegar",
      "egg",
      "sugar"
    ],
    "steps": "Prepare the sweet miso using oil, water, salt, vinegar, egg, and finish with sugar."
  },
  {
    "name": "Sweet Mushroom",
    "ingredients": [
      "vinegar",
      "milk",
      "sugar"
    ],
    "steps": "Prepare the sweet mushroom using vinegar, milk, and finish with sugar."
  },
  {
    "name": "Sweet Olive",
    "ingredients": [
      "onion",
      "oil",
      "sugar",
      "ginger"
    ],
    "steps": "Prepare the sweet olive using onion, oil, sugar, and finish with ginger."
  },
  {
    "name": "Sweet Oregano",
    "ingredients": [
      "onion",
      "butter",
      "salt"
    ],
    "steps": "Prepare the sweet oregano using onion, butter, and finish with salt."
  },
  {
    "name": "Sweet Paella",
    "ingredients": [
      "onion",
      "egg",
      "milk"
    ],
    "steps": "Prepare the sweet paella using onion, egg, and finish with milk."
  },
  {
    "name": "Sweet Papaya",
    "ingredients": [
      "garlic",
      "cheese",
      "sugar"
    ],
    "steps": "Prepare the sweet papaya using garlic, cheese, and finish with sugar."
  },
  {
    "name": "Sweet Pasta",
    "ingredients": [
      "spices",
      "water",
      "cheese",
      "butter",
      "milk"
    ],
    "steps": "Prepare the sweet pasta using spices, water, cheese, butter, and finish with milk."
  },
  {
    "name": "Sweet Peanut",
    "ingredients": [
      "flour",
      "ginger",
      "cheese",
      "salt",
      "chili",
      "milk"
    ],
    "steps": "Prepare the sweet peanut using flour, ginger, cheese, salt, chili, and finish with milk."
  },
  {
    "name": "Sweet Peas",
    "ingredients": [
      "butter",
      "garlic",
      "cheese",
      "onion"
    ],
    "steps": "Prepare the sweet peas using butter, garlic, cheese, and finish with onion."
  },
  {
    "name": "Sweet Pho",
    "ingredients": [
      "butter",
      "cheese",
      "flour",
      "vinegar",
      "onion"
    ],
    "steps": "Prepare the sweet pho using butter, cheese, flour, vinegar, and finish with onion."
  },
  {
    "name": "Sweet Pickles",
    "ingredients": [
      "tomato",
      "sugar",
      "water",
      "milk"
    ],
    "steps": "Prepare the sweet pickles using tomato, sugar, water, and finish with milk."
  },
  {
    "name": "Sweet Popsicle",
    "ingredients": [
      "onion",
      "salt",
      "spices",
      "egg"
    ],
    "steps": "Prepare the sweet popsicle using onion, salt, spices, and finish with egg."
  },
  {
    "name": "Sweet Pork",
    "ingredients": [
      "onion",
      "vinegar",
      "oil",
      "pepper"
    ],
    "steps": "Prepare the sweet pork using onion, vinegar, oil, and finish with pepper."
  },
  {
    "name": "Sweet Potato",
    "ingredients": [
      "tomato",
      "butter",
      "oil",
      "flour",
      "milk"
    ],
    "steps": "Prepare the sweet potato using tomato, butter, oil, flour, and finish with milk."
  },
  {
    "name": "Sweet Quesadilla",
    "ingredients": [
      "butter",
      "cream",
      "ginger",
      "tomato"
    ],
    "steps": "Prepare the sweet quesadilla using butter, cream, ginger, and finish with tomato."
  },
  {
    "name": "Sweet Radish",
    "ingredients": [
      "onion",
      "milk",
      "chili"
    ],
    "steps": "Prepare the sweet radish using onion, milk, and finish with chili."
  },
  {
    "name": "Sweet Ramen",
    "ingredients": [
      "flour",
      "spices",
      "water",
      "tomato",
      "herbs"
    ],
    "steps": "Prepare the sweet ramen using flour, spices, water, tomato, and finish with herbs."
  },
  {
    "name": "Sweet Raspberry",
    "ingredients": [
      "egg",
      "vinegar",
      "garlic",
      "chili",
      "ginger",
      "milk"
    ],
    "steps": "Prepare the sweet raspberry using egg, vinegar, garlic, chili, ginger, and finish with milk."
  },
  {
    "name": "Sweet Rice",
    "ingredients": [
      "herbs",
      "sugar",
      "cream",
      "egg",
      "pepper"
    ],
    "steps": "Prepare the sweet rice using herbs, sugar, cream, egg, and finish with pepper."
  },
  {
    "name": "Sweet Roti",
    "ingredients": [
      "tomato",
      "egg",
      "oil"
    ],
    "steps": "Prepare the sweet roti using tomato, egg, and finish with oil."
  },
  {
    "name": "Sweet Sake",
    "ingredients": [
      "herbs",
      "tomato",
      "flour",
      "onion"
    ],
    "steps": "Prepare the sweet sake using herbs, tomato, flour, and finish with onion."
  },
  {
    "name": "Sweet Salt",
    "ingredients": [
      "butter",
      "flour",
      "chili",
      "cheese"
    ],
    "steps": "Prepare the sweet salt using butter, flour, chili, and finish with cheese."
  },
  {
    "name": "Sweet Samosa",
    "ingredients": [
      "egg",
      "tomato",
      "spices",
      "ginger"
    ],
    "steps": "Prepare the sweet samosa using egg, tomato, spices, and finish with ginger."
  },
  {
    "name": "Sweet Sandwich",
    "ingredients": [
      "oil",
      "egg",
      "tomato"
    ],
    "steps": "Prepare the sweet sandwich using oil, egg, and finish with tomato."
  },
  {
    "name": "Sweet Sauce",
    "ingredients": [
      "chili",
      "tomato",
      "salt",
      "onion",
      "water"
    ],
    "steps": "Prepare the sweet sauce using chili, tomato, salt, onion, and finish with water."
  },
  {
    "name": "Sweet Snapper",
    "ingredients": [
      "flour",
      "oil",
      "chili",
      "spices",
      "tomato",
      "egg"
    ],
    "steps": "Prepare the sweet snapper using flour, oil, chili, spices, tomato, and finish with egg."
  },
  {
    "name": "Sweet Soup",
    "ingredients": [
      "herbs",
      "tomato",
      "ginger",
      "vinegar",
      "cream",
      "onion"
    ],
    "steps": "Prepare the sweet soup using herbs, tomato, ginger, vinegar, cream, and finish with onion."
  },
  {
    "name": "Sweet Spaghetti",
    "ingredients": [
      "chili",
      "sugar",
      "pepper"
    ],
    "steps": "Prepare the sweet spaghetti using chili, sugar, and finish with pepper."
  },
  {
    "name": "Sweet Spinach",
    "ingredients": [
      "vinegar",
      "sugar",
      "flour",
      "cream",
      "water"
    ],
    "steps": "Prepare the sweet spinach using vinegar, sugar, flour, cream, and finish with water."
  },
  {
    "name": "Sweet Spring Roll",
    "ingredients": [
      "onion",
      "herbs",
      "tomato",
      "egg"
    ],
    "steps": "Prepare the sweet spring roll using onion, herbs, tomato, and finish with egg."
  },
  {
    "name": "Sweet Squash",
    "ingredients": [
      "garlic",
      "sugar",
      "cream"
    ],
    "steps": "Prepare the sweet squash using garlic, sugar, and finish with cream."
  },
  {
    "name": "Sweet Strawberry",
    "ingredients": [
      "spices",
      "milk",
      "flour"
    ],
    "steps": "Prepare the sweet strawberry using spices, milk, and finish with flour."
  },
  {
    "name": "Sweet Sugar",
    "ingredients": [
      "butter",
      "vinegar",
      "spices"
    ],
    "steps": "Prepare the sweet sugar using butter, vinegar, and finish with spices."
  },
  {
    "name": "Sweet Tea",
    "ingredients": [
      "garlic",
      "cheese",
      "salt",
      "cream",
      "egg"
    ],
    "steps": "Prepare the sweet tea using garlic, cheese, salt, cream, and finish with egg."
  },
  {
    "name": "Sweet Tempura",
    "ingredients": [
      "salt",
      "water",
      "chili",
      "cream",
      "egg",
      "tomato"
    ],
    "steps": "Prepare the sweet tempura using salt, water, chili, cream, egg, and finish with tomato."
  },
  {
    "name": "Sweet Thyme",
    "ingredients": [
      "vinegar",
      "salt",
      "pepper"
    ],
    "steps": "Prepare the sweet thyme using vinegar, salt, and finish with pepper."
  },
  {
    "name": "Sweet Toast",
    "ingredients": [
      "ginger",
      "salt",
      "onion",
      "spices",
      "cream",
      "vinegar"
    ],
    "steps": "Prepare the sweet toast using ginger, salt, onion, spices, cream, and finish with vinegar."
  },
  {
    "name": "Sweet Tofu",
    "ingredients": [
      "cheese",
      "garlic",
      "onion"
    ],
    "steps": "Prepare the sweet tofu using cheese, garlic, and finish with onion."
  },
  {
    "name": "Sweet Tuna",
    "ingredients": [
      "butter",
      "oil",
      "ginger"
    ],
    "steps": "Prepare the sweet tuna using butter, oil, and finish with ginger."
  },
  {
    "name": "Sweet Udon",
    "ingredients": [
      "butter",
      "garlic",
      "cheese"
    ],
    "steps": "Prepare the sweet udon using butter, garlic, and finish with cheese."
  },
  {
    "name": "Sweet Waffle",
    "ingredients": [
      "ginger",
      "vinegar",
      "butter",
      "chili",
      "salt"
    ],
    "steps": "Prepare the sweet waffle using ginger, vinegar, butter, chili, and finish with salt."
  },
  {
    "name": "Sweet Walnut",
    "ingredients": [
      "garlic",
      "chili",
      "herbs",
      "cream",
      "oil",
      "milk"
    ],
    "steps": "Prepare the sweet walnut using garlic, chili, herbs, cream, oil, and finish with milk."
  },
  {
    "name": "Sweet Yakitori",
    "ingredients": [
      "herbs",
      "spices",
      "garlic",
      "vinegar",
      "salt",
      "onion"
    ],
    "steps": "Prepare the sweet yakitori using herbs, spices, garlic, vinegar, salt, and finish with onion."
  },
  {
    "name": "Sweet Yogurt",
    "ingredients": [
      "salt",
      "ginger",
      "flour",
      "pepper",
      "egg"
    ],
    "steps": "Prepare the sweet yogurt using salt, ginger, flour, pepper, and finish with egg."
  },
  {
    "name": "Sweet Zucchini",
    "ingredients": [
      "chili",
      "spices",
      "butter",
      "onion",
      "salt",
      "cream"
    ],
    "steps": "Prepare the sweet zucchini using chili, spices, butter, onion, salt, and finish with cream."
  }
];