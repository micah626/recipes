// Recipe data. To add a recipe, append an object to this list (see CLAUDE.md).
// Steps: [title, text]. Wrap amounts in **double asterisks** so they scale with servings.
// Groceries: **amounts** scale too. Package counts are written {count unit|packages used}, e.g.
// {1 box|9/16} = buy 1 box, the recipe uses 9/16 of it. Scaled counts are rounded up.
window.RECIPES = [
{
  id: "honey-chipotle",
  name: "Honey Chipotle Chicken Mac n Cheese",
  tag: "MC",
  color: "#b8261c",
  blurb: "Crispy, honey-chipotle glazed chicken over a smoky, creamy mac and cheese.",
  serves: 5,
  time: { total: 50, scales: 30 },   // minutes; "scales" = the part that grows with servings (cubing, searing in batches, portioning)
  macros: { cal: "651", protein: "61g", carbs: "54g", fat: "22g" },
  choice: {                        // written for dark meat; how to switch to white meat
    label: "Chicken",
    base: "dark",
    options: {
      dark: { name: "Dark meat" },
      white: {
        name: "White meat",
        replace: [["chicken thighs", "chicken breasts"], [" (or about 4 lb bone-in to debone yourself)", ""]],
        macros: { cal: "~646", protein: "~67g", carbs: "54g", fat: "~19g" },
        tip: "Breast dries out faster than thighs, so pull it the moment it's golden and cooked through (165°F)."
      }
    }
  },
  groceries: [
    ["Meat", ["Boneless skinless chicken thighs, about **2.5 lb** (or about 4 lb bone-in to debone yourself)"]],
    ["Dairy", ["Light butter (about **4½ tbsp** total)", "Fat-free evaporated milk, {1 can|1.25/1.5} (12 oz), or skim milk", "Light cream cheese, {1 block|6/8} (8 oz)", "Reduced-fat shredded cheddar, {1 bag|1/2} (8 oz)"]],
    ["Produce", ["Fresh parsley, 1 bunch"]],
    ["Pantry", ["Elbow macaroni, {1 box|9/16} (1 lb)", "Cholula Chipotle hot sauce, {2 bottles|13/10}", "Honey", "Jarred minced garlic", "Olive oil"]],
    ["Spices (check what you have)", ["Salt", "Dried oregano", "Smoked paprika", "Garlic powder", "Onion powder", "Ground cumin"]]
  ],
  steps: [
    ["Prep the chicken", "Trim the fat off **2.4 lb chicken thighs** and cut them into about 1.5-inch cubes. Bigger cubes stay juicier."],
    ["Season it", "In a bowl, toss the chicken with **2 tsp salt**, **1 tbsp dried oregano**, **2½ tsp smoked paprika**, **2½ tsp garlic powder**, **1½ tsp cumin** and **1 tbsp olive oil**. Let it sit while you start the pasta."],
    ["Boil the pasta", "Bring a big pot of salted water to a boil. Cook **9 oz macaroni** (just over 2 cups dry) for 8 minutes, drain, and set aside in the pot."],
    ["Sear the chicken", "Melt **3 tbsp light butter** in a large pan over medium heat. Spread the chicken in one layer (two batches if crowded) and cook about 5 minutes per side until golden and crispy. Pull it as soon as it's golden."],
    ["Glaze it", "Turn the heat to low. Add a little more butter if the pan is dry, then **2 tbsp minced garlic**, **2½ tbsp honey**, **6½ tbsp Cholula Chipotle** (a little under ½ cup) and **a handful of chopped parsley**. Stir until coated, then move the chicken to a plate."],
    ["Toast the spices", "Same pan, still on low. Melt **1½ tbsp light butter** and add **1½ tsp garlic powder**, **1½ tsp onion powder**, **1½ tsp smoked paprika** and **1 tsp salt**. Stir about 30 seconds. Leave them in the pan, and have the milk ready so they don't burn."],
    ["Make the cheese sauce", "Pour **1¼ cups fat-free evaporated milk** right in on the spices, then **6½ tbsp Cholula Chipotle** and **6 oz light cream cheese** (¾ of the block). Stir until smooth, then stir in **a scant 1 cup shredded cheddar** until creamy. Keep the heat low so it doesn't split."],
    ["Combine", "Pour the sauce into the pot with the macaroni (off the heat or on very low), add **a handful of chopped parsley**, and stir until silky. Add a splash of milk if it's too thick."],
    ["Portion", "Split the mac into 5 containers and top each with the chicken. Let them cool before putting the lids on and refrigerating."]
  ],
  tips: [
    "Reheat with a splash of water or milk, loosely covered, on medium power, stirring halfway.",
    "Keeps about 4 days in the fridge."
  ]
},
{
  id: "lo-mein",
  name: "Chicken Lo Mein",
  tag: "LM",
  color: "#9a5b13",
  blurb: "Saucy, caramelized noodles loaded with seared chicken, eggs and veggies.",
  serves: 5,
  time: { total: 40, scales: 25 },   // cutting and searing the chicken in batches, eggs, portioning
  macros: { cal: "~620", protein: "~50g" },
  choice: {                        // written for white meat; how to switch to dark meat
    label: "Chicken",
    base: "white",
    options: {
      dark: {
        name: "Dark meat",
        replace: [["Chicken breast", "Boneless skinless chicken thighs"], ["chicken breast", "boneless skinless chicken thighs"]],
        macros: { cal: "~620", protein: "~45g" },
        tip: "Trim the extra fat off the thighs before cubing. They stay juicy even if they cook a minute longer."
      },
      white: { name: "White meat" }
    }
  },
  groceries: [
    ["Meat & eggs", ["Chicken breast, **1.75 lb**", "Eggs, {1 dozen|10/12} (you need **10**)"]],
    ["Frozen", ["Mixed frozen veggies, {1 bag|1} (about **10.5 oz**)"]],
    ["Pasta", ["Spaghetti, {1 box|10.5/16} (1 lb), or lo mein noodles, {2 packs|10.5/8} (8 oz each)"]],
    ["Pantry & sauces", ["Regular soy sauce (low-sodium if you want)", "Dark soy sauce", "Oyster sauce", "Sesame oil", "Avocado oil", "Sriracha (Sriracha Hot Chili Sauce, not sweet chili sauce)", "Honey or brown sugar", "Garlic powder", "Rice vinegar (optional)"]]
  ],
  steps: [
    ["Marinate the chicken", "Cut **1.75 lb chicken breast** into bite-size cubes. Mix with **1 tbsp garlic powder**, **2 tbsp soy sauce**, **1 tbsp avocado oil** and **1 tbsp sriracha**. Let it sit about 10 minutes."],
    ["Mix the sauce", "In a cup, stir together **4 tbsp regular soy sauce**, **1½ tbsp dark soy sauce**, **3 tbsp oyster sauce**, **2 tbsp sesame oil**, **1 tbsp honey or brown sugar**, **1 tsp garlic powder** and **1 tsp rice vinegar**. Set it aside."],
    ["Boil the noodles", "Cook **10.5 oz dry noodles** in salted water 1 minute less than the package says. Drain, rinse under cold water, and toss with **1 tbsp sesame oil**."],
    ["Scramble the eggs first", "Whisk **10 eggs**. Heat a large nonstick pan over medium with a little of **2 tsp avocado oil**. Push the eggs into big, soft curds and take them out while slightly wet."],
    ["Sear the chicken", "Medium-high heat, the rest of the pan oil. Add half the chicken in one layer, leave it 2–3 minutes to brown, then flip and cook to 165°F. Move to the plate and repeat."],
    ["Cook the veggies", "Add **10.5 oz frozen veggies** to the same pan and cook, stirring, until hot and any water cooks off, about 4 minutes."],
    ["Caramelize the noodles", "Heat to high. Add the noodles and about half the sauce. Toss, then let them sit untouched 30–60 seconds so the sauce darkens. Toss and repeat once."],
    ["Combine everything", "Add the chicken and eggs back with the rest of the sauce. Toss 1–2 minutes until coated and hot. Add a splash of water if it looks dry."],
    ["Portion it out", "Split evenly into 5 containers. Let them cool a bit before sealing and refrigerating."]
  ],
  tips: [
    "Too salty? Switch the regular soy sauce to low-sodium and keep the dark soy for color.",
    "Boil the noodles while the chicken marinates to save time.",
    "Keeps about 4 days in the fridge."
  ]
},
{
  id: "cheesy-beef-burritos",
  name: "Cheesy Beef Burritos",
  tag: "BB",
  color: "#3f6b2a",
  blurb: "Taco-seasoned lean beef and red rice, wrapped with cheese and toasted shut.",
  serves: 6,
  time: { total: 45, scales: 20 },   // chopping, browning beef, filling, rolling and toasting burritos
  macros: { cal: "583", protein: "51g", carbs: "57g", fat: "15g" },
  groceries: [
    ["Meat", ["Extra-lean ground beef (95% lean or leaner), **1.76 pounds**"]],
    ["Produce", ["Red onion, {1 medium|1}", "Red bell pepper, {1|1}"]],
    ["Dairy", ["Light butter, **0.53 ounces**", "Low-fat shredded cheese, **6.35 ounces**"]],
    ["Bakery", ["Protein or low-carb tortillas (Mission), **6**"]],
    ["Pantry", ["White rice, **7.05 ounces**", "Tomato paste, **1.23 ounces**", "Chicken stock, **1.67 cups**", "Fajita sauce (Old El Paso), **7.05 ounces**", "Cooking spray"]],
    ["Spices (check what you have)", ["Paprika, **2 teaspoons**", "Garlic powder, **2.5 teaspoons** total", "Onion powder, **1.5 teaspoons** total", "Cayenne, **1.5 teaspoons** total", "Cumin, **1 teaspoon**", "Dried oregano, **1 teaspoon**", "Salt, **3 teaspoons** total", "Black pepper, **1 teaspoon**"]]
  ],
  steps: [
    ["Mix the taco seasoning", "In a small bowl, stir together **2 teaspoons paprika** (seasoning), **2 teaspoons garlic powder** (seasoning), **1 teaspoon onion powder** (seasoning), **1 teaspoon cayenne** (seasoning), **1 teaspoon cumin**, **1 teaspoon dried oregano**, **2 teaspoons salt** (seasoning) and **1 teaspoon black pepper**. Set it aside."],
    ["Toast the rice", "Melt **0.53 ounces light butter** (rice) in a pot over medium heat. Add **7.05 ounces white rice**, rinsed and stir for 1–2 minutes until it smells toasty.", "1m 30s"],
    ["Season the rice", "Stir in **0.5 teaspoons garlic powder** (rice), **0.5 teaspoons onion powder** (rice), **0.5 teaspoons cayenne** (rice), **1 teaspoon salt** (rice) and **1.23 ounces tomato paste**. Cook about 1 minute until the rice is coated red.", "1m"],
    ["Cook the rice", "Pour in **1.67 cups chicken stock** and bring it to a boil. Cover, turn the heat to low and simmer until the liquid is absorbed, then take it off the heat and let it sit covered 5 minutes. Fluff with a fork.", "15m"],
    ["Cook the veggies", "While the rice cooks, spray a large pan with cooking spray and set it over medium-high heat. Cook **1 medium red onion**, diced and **1 red bell pepper**, diced until softened.", "4m"],
    ["Brown the beef", "Add **1.76 pounds extra-lean ground beef** (95% lean or leaner) and break it up as it cooks until browned with no pink left.", "7m"],
    ["Sauce the beef", "Stir in all the taco seasoning and **7.05 ounces fajita sauce** (Old El Paso). Simmer 2–3 minutes until thick and coated.", "2m 30s"],
    ["Fill the burritos", "Lay out **6 protein or low-carb tortillas** (Mission). Split the rice and beef evenly between them and top each with an equal share of **6.35 ounces low-fat shredded cheese** (about 30g, or a heaping ¼ cup, each)."],
    ["Roll them up", "Fold in the sides, then roll each burrito up tightly from the bottom."],
    ["Toast to seal", "Toast the burritos folded side down in a dry or lightly buttered pan over medium heat until golden, then flip and toast the other side. This seals them shut.", "2m"],
    ["Cool and wrap", "Let them cool fully, then wrap each in foil."]
  ],
  tips: [
    "Storage: fridge up to a week, freezer a couple of months.",
    "To reheat, take off the foil, wrap in a damp paper towel and microwave 3–4 minutes from the fridge or 5–6 from frozen, flipping halfway, then crisp it in a pan or air fryer for a couple of minutes.",
    "The video's caption gives ingredients but no cooking steps, so the steps follow the standard method for each part."
  ]
},
{
  id: "lasagna-stuffed-bread",
  name: "Lasagna Stuffed Bread",
  tag: "LB",
  color: "#7a2e5c",
  blurb: "A hollowed-out round loaf layered with meat sauce, noodles and cheese, baked under garlic butter.",
  serves: 8,
  time: { total: 65, scales: 15 },   // hollowing and layering each loaf; extra loaves bake at the same time
  macros: { cal: "~650", protein: "~30g", carbs: "~54g", fat: "~33g" },
  choice: {                        // written with extra mozzarella; how to switch to a ricotta filling
    label: "Cheese layer",
    base: "mozzarella",
    options: {
      mozzarella: { name: "Extra mozzarella" },
      ricotta: {
        name: "Ricotta",
        replace: [
          ["Shredded mozzarella, **3.5 cups** total", "Shredded mozzarella, **2 cups** total"],
          ["toss together **2.5 cups shredded mozzarella** (filling)", "stir together **15 oz ricotta**, **1 cup shredded mozzarella** (filling)"],
          ["then a sprinkle of the cheese mix", "then a layer of the cheese mix, spread thin"],
          ["Without ricotta the cheese layers come out stretchy and stringy instead of soft and creamy. For some of that creaminess back, stir 4 oz of softened cream cheese into the filling.", ""]
        ],
        add: [["Dairy & eggs", "Whole-milk ricotta, {1 container|1} (15 oz)"]],
        macros: { cal: "~680", protein: "~31g", carbs: "~55g", fat: "~36g" },
        tip: "Ricotta makes the cheese layers soft and creamy like classic lasagna. Use the egg so the slices hold together."
      }
    }
  },
  groceries: [
    ["Meat", ["Ground beef, **0.5 pounds**"]],
    ["Dairy & eggs", ["Shredded mozzarella, **3.5 cups** total", "Grated romano or parmesan, **0.75 cups** total", "Butter, **0.5 cups** (1 stick)", "Large egg, **1** (optional)"]],
    ["Produce", ["Fresh parsley, **3 tablespoons** chopped total", "Garlic, **3 cloves**"]],
    ["Bakery", ["Large round loaf of bread (like a sourdough boule), **1**"]],
    ["Pantry", ["Pasta sauce, **3 cups**", "Lasagna noodles, **0.5 pounds**"]],
    ["Spices (check what you have)", ["Black pepper, **0.25 teaspoons**"]]
  ],
  steps: [
    ["Heat the oven", "Preheat the oven to 375°F."],
    ["Cook the noodles", "Boil **0.5 pounds lasagna noodles** according to the package, then drain and lay them flat so they don't stick together.", "10m"],
    ["Mix the cheese filling", "In a bowl, toss together **2.5 cups shredded mozzarella** (filling), **0.5 cups grated romano or parmesan** (filling), **2 tablespoons fresh parsley**, chopped (filling) and **0.25 teaspoons black pepper**. Stir in **1 large egg** (optional) if you're using it; it helps the cheese layer hold together when you slice."],
    ["Make the meat sauce", "Brown **0.5 pounds ground beef** in a pan, breaking it up, until no pink is left. Stir in **3 cups pasta sauce**, bring it to a simmer, then take it off the heat.", "8m"],
    ["Hollow the bread", "Slice the top off **1 large round loaf** of bread (like a sourdough boule) and save it as a lid. Pull out most of the soft bread inside, leaving a sturdy shell about ½ inch thick."],
    ["Layer it", "Spoon in a layer of meat sauce, then noodles (cut or fold them to fit), then a sprinkle of the cheese mix. Repeat until the bread is full, ending with sauce."],
    ["Add the lid and garlic butter", "Put the top back on. Mix **0.5 cups butter, softened** (1 stick) with **3 garlic cloves**, minced and **1 tablespoon fresh parsley**, chopped (topping), then brush it all over the top of the loaf."],
    ["Add the cheese", "Sprinkle **1 cup shredded mozzarella** (topping) and **0.25 cups grated parmesan or romano** (topping) over the top."],
    ["Bake", "Bake at 375°F for 30 minutes.", "30m"],
    ["Broil", "Switch to broil for 1–2 minutes, watching closely, until the cheese is golden and bubbly. Let it rest 5 minutes before cutting so the cheese sets a bit.", "1m 30s"]
  ],
  tips: [
    "Without ricotta the cheese layers come out stretchy and stringy instead of soft and creamy. For some of that creaminess back, stir 4 oz of softened cream cheese into the filling.",
    "Cut into 8 servings (the original estimate was 6). Nutrition is a rough estimate: the size of the loaf and how much bread you pull out change it the most."
  ]
},
{
  id: "honey-garlic-popcorn-chicken",
  name: "Honey Garlic Popcorn Chicken",
  tag: "HG",
  color: "#1f5f8b",
  blurb: "Crispy air-fried chicken bites tossed in a buttery honey garlic glaze.",
  serves: 3,
  time: { total: 40, scales: 25 },   // cubing and coating the chicken, air frying in batches
  macros: { cal: "506", protein: "46g", carbs: "66g", fat: "12g" },
  choice: {                        // written for white meat; how to switch to dark meat
    label: "Chicken",
    base: "white",
    options: {
      dark: {
        name: "Dark meat",
        replace: [["Chicken breast", "Boneless skinless chicken thighs"], ["chicken breast", "boneless skinless chicken thighs"]],
        macros: { cal: "~508", protein: "~40g", carbs: "66g", fat: "~15g" },
        tip: "Trim the extra fat off the thighs before cubing. They stay juicy even if they air fry a couple of minutes longer."
      },
      white: { name: "White meat" }
    }
  },
  groceries: [
    ["Meat", ["Chicken breast, **1.43 pounds**"]],
    ["Produce", ["Garlic, **3 cloves**"]],
    ["Dairy", ["Light butter, **3 tablespoons**"]],
    ["Pantry", ["Potato starch (or cornstarch), **1 cup**", "All-purpose flour, **3 tablespoons**", "Honey, **4 tablespoons**", "Sesame oil, **2 teaspoons**", "Brown sugar substitute (like brown stevia), **1 teaspoon** (optional, or use brown sugar)", "Cooking spray"]],
    ["Spices (check what you have)", ["Garlic powder, **1 teaspoon**", "White pepper, **1.5 teaspoons** total", "Ground ginger, **0.5 teaspoons**", "Chili powder, **0.5 teaspoons**", "Salt, **1 teaspoon**"]]
  ],
  steps: [
    ["Season the chicken", "In a bowl, toss **1.43 pounds chicken breast**, cut into 1-inch cubes with **1 teaspoon garlic powder**, **1 teaspoon white pepper** (chicken), **0.5 teaspoons ground ginger**, **0.5 teaspoons chili powder**, **1 teaspoon salt** and **2 teaspoons sesame oil** until coated."],
    ["Make the batter", "Add **3 tablespoons all-purpose flour** and **0.33 cups water** to the bowl and mix until every piece is coated in a thin, sticky batter."],
    ["Coat in starch", "Put **1 cup potato starch** in a separate bowl. Toss the chicken in it a few pieces at a time, pressing so the starch sticks. Shake off the extra."],
    ["Air fry", "Lay the chicken in the air fryer basket in one layer (do batches if needed) and spray all over with cooking spray. Cook at 400°F for about 12–15 minutes, shaking and spraying again halfway, until golden and crispy and the chicken hits 165°F.", "14m"],
    ["Make the glaze", "While it cooks, melt **3 tablespoons light butter** in a large pan over medium-low heat. Add **3 garlic cloves**, minced and cook about 1 minute until fragrant, then stir in **4 tablespoons honey**, **1 teaspoon brown sugar substitute** (like brown stevia) and **0.5 teaspoons white pepper** (glaze). Simmer 1–2 minutes until slightly thick and bubbly.", "2m"],
    ["Toss and serve", "Turn off the heat, add the crispy chicken and toss until glazed. Eat right away while it's crunchy."]
  ],
  tips: [
    "No air fryer: bake on a sprayed sheet pan at 425°F for 20‒25 minutes, flipping halfway.",
    "Brown stevia is optional; skip it or use 1 tsp brown sugar.",
    "Potato starch can be swapped for cornstarch.",
    "For meal prep, keep the glaze separate and toss after reheating so it stays crispy.",
    "The caption gives the ingredients and macros but no steps or serving count, so the steps are the usual method for this kind of chicken and 3 servings is worked out from the protein numbers."
  ]
},
{
  id: "hot-honey-chicken-sliders",
  name: "Hot Honey Chicken Sliders",
  tag: "HS",
  color: "#8a4b2a",
  blurb: "Spicy hot honey chicken and melty cheese baked into brioche sliders.",
  serves: 6,
  time: { total: 45, scales: 20 },   // cubing and cooking the chicken, building the sliders
  macros: { cal: "560", protein: "56g", carbs: "33g", fat: "21g" },
  choice: {                        // written for white meat; how to switch to dark meat
    label: "Chicken",
    base: "white",
    options: {
      dark: {
        name: "Dark meat",
        replace: [["Chicken breast", "Boneless skinless chicken thighs"], ["chicken breast", "boneless skinless chicken thighs"]],
        macros: { cal: "~561", protein: "~52g", carbs: "33g", fat: "~23g" },
        tip: "Trim the extra fat off the thighs before cubing. They stay juicy even if they cook a minute or two longer."
      },
      white: { name: "White meat" }
    }
  },
  groceries: [
    ["Meat", ["Chicken breast, **1.76 pounds**"]],
    ["Produce", ["Red onion, {1|1/2} (you'll use **0.5**)"]],
    ["Dairy", ["Reduced-fat shredded cheddar, **3.17 ounces**", "Reduced-fat Swiss cheese slices, **3.53 ounces**", "Shredded mozzarella, **8.82 ounces**", "Light butter, **1 tablespoon** (optional)"]],
    ["Bakery", ["Brioche burger buns, **6**"]],
    ["Pantry & sauces", ["Frank's RedHot, **0.25 cups**", "Honey, **4 teaspoons** total", "Light mayo, **2 tablespoons**", "Sriracha, **1 tablespoon**", "Sweet corn, **2 tablespoons**", "Sliced pickles", "Garlic paste or minced garlic, **0.5 teaspoons** (optional)", "Cooking spray"]],
    ["Spices (check what you have)", ["Paprika, **1 tablespoon**", "Onion powder, **1 tablespoon**", "Garlic powder, **1 tablespoon**", "Cayenne, **1 teaspoon**", "Black pepper, **2 teaspoons**", "Salt, **1 tablespoon**", "Dried oregano, **2 teaspoons**", "Parsley flakes"]]
  ],
  steps: [
    ["Heat the oven", "Preheat the oven to 375°F."],
    ["Season the chicken", "Toss **1.76 pounds chicken breast**, cut into small cubes with **1 tablespoon paprika**, **1 tablespoon onion powder**, **1 tablespoon garlic powder**, **1 teaspoon cayenne**, **2 teaspoons black pepper** and **1 tablespoon salt**."],
    ["Cook the chicken", "Spray a large pan with cooking spray and set it over medium-high heat. Cook the chicken until browned and cooked through (165°F), about 8 minutes.", "8m"],
    ["Add the veggies", "Add **0.5 red onion**, diced, **2 tablespoons sweet corn** and **2 teaspoons dried oregano** and cook 2–3 minutes until the onion softens.", "2m 30s"],
    ["Make it hot honey", "Lower the heat, pour in **0.25 cups Frank's RedHot**, drizzle with **1 tablespoon honey** (to drizzle) and stir to coat. Turn off the heat and stir in **3.17 ounces reduced-fat shredded cheddar** until melted."],
    ["Mix the sriracha mayo", "In a small bowl, stir together **2 tablespoons light mayo**, **1 tablespoon sriracha** and **1 teaspoon honey** (sriracha mayo)."],
    ["Build the sliders", "Split **6 brioche burger buns** and set the bottoms in a baking dish. Layer each with Swiss cheese (from **3.53 ounces reduced-fat Swiss cheese slices**), an equal share of the chicken, an equal share of **8.82 ounces shredded mozzarella** (about 40g each), pickles and a spread of sriracha mayo. Put the tops on."],
    ["Garlic butter (optional)", "Melt **1 tablespoon light butter** (optional) with **0.5 teaspoons garlic paste or minced garlic** (optional) and a pinch of parsley flakes, then brush it over the bun tops."],
    ["Bake", "Bake at 375°F for 10–12 minutes until the cheese is melted and the tops are toasty.", "11m"]
  ],
  tips: [
    "To store: wrap each in foil once cooled and refrigerate. To reheat, microwave 30–60 seconds, then air fry until toasty.",
    "You'll also need cooking spray, sliced pickles and parsley flakes.",
    "The caption gives the ingredients, macros and bake time but not the cooking steps, so the steps are the usual method."
  ]
},
{
  id: "pizza-sticks",
  name: "Mozzarella Pizza Sticks",
  tag: "PS",
  color: "#0f6b63",
  blurb: "String cheese and turkey pepperoni wrapped in a Greek yogurt dough and air fried until golden.",
  serves: 10,
  time: { total: 45, scales: 35 },   // rolling, filling and sealing each stick, air frying in batches
  macros: { cal: "170", protein: "19g" },
  groceries: [
    ["Dairy", ["Nonfat Greek yogurt, **7.05 ounces**", "Light mozzarella string cheese sticks, **10**", "Low-fat shredded mozzarella, **1.76 ounces**"]],
    ["Meat", ["Turkey pepperoni, **3.53 ounces**"]],
    ["Baking", ["Self-rising flour, **3.53 ounces**", "Protein flour (he used Fit Protein Flour), **3.53 ounces**"]],
    ["Pantry", ["Pizza sauce, **10 tablespoons**, plus more for dipping", "Ranch, for dipping (optional)", "Cooking spray"]],
    ["Equipment", ["Dough press"]]
  ],
  steps: [
    ["Make the dough", "In a big bowl, mix **3.53 ounces self-rising flour**, **3.53 ounces protein flour** (he used Fit Protein Flour) and **7.05 ounces nonfat Greek yogurt** until it comes together, then knead it into one smooth dough ball. Add a little flour if it's sticky."],
    ["Divide it", "Split the dough into **10 equal balls**."],
    ["Roll them out", "On a floured counter, roll each ball into a thin rectangle a little longer than a cheese stick. Squaring them up makes rolling easier, but it doesn't have to be perfect."],
    ["Add the toppings", "On each rectangle, spread about 1 tbsp of sauce from **10 tablespoons pizza sauce**, plus more for dipping. Lay 1 cheese stick from **10 light mozzarella string cheese sticks** on top, then about 10g of pepperoni from **3.53 ounces turkey pepperoni** and a pinch (5g) of **1.76 ounces low-fat shredded mozzarella**."],
    ["Roll and seal", "Fold the ends in and roll each one up tightly around the cheese stick. Pinch the seam closed so the cheese can't leak out."],
    ["Air fry", "Set them seam side down in the air fryer with a little cooking spray. Air fry at 375°F for about 5 minutes, until golden. Give them another minute or two if they're still pale.", "5m"],
    ["Serve", "Let them cool a minute (the cheese is very hot), then dip in pizza sauce or ranch."]
  ],
  tips: [
    "You'll need a dough press for this.",
    "He air fried them in batches; don't crowd the basket.",
    "If you can't find protein flour, use all self-rising flour (about 200g total); protein drops a few grams per stick.",
    "The video just says \"flour\"; self-rising is what makes this 2-ingredient-style dough puff, so use that.",
    "The amount of sauce per stick was covered by a notification in your recording, so 1 tbsp is my estimate."
  ]
},
{
  id: "sweet-chili-popcorn-chicken",
  name: "Crispy Sweet Chili Popcorn Chicken",
  tag: "SC",
  color: "#5b3fa0",
  blurb: "Air-fried popcorn chicken tossed in a sticky sweet chili glaze, served over rice.",
  serves: 7,
  time: { total: 80, scales: 55 },   // dicing and coating the chicken, air frying in batches, portioning
  macros: { cal: "544", protein: "54g" },
  choice: {                        // written for white meat; how to switch to dark meat
    label: "Chicken",
    base: "white",
    options: {
      dark: {
        name: "Dark meat",
        replace: [["Chicken breast", "Boneless skinless chicken thighs"], ["chicken breast", "boneless skinless chicken thighs"]],
        macros: { cal: "~546", protein: "~48g" },
        tip: "Trim the extra fat off the thighs before dicing. They stay juicy even if they air fry a couple of minutes longer."
      },
      white: { name: "White meat" }
    }
  },
  groceries: [
    ["Meat & eggs", ["Chicken breast, **3.09 pounds**", "Large eggs, **2**"]],
    ["Produce", ["Garlic, **4 cloves**", "Green onion, for topping (optional)", "Red chili, for topping (optional)"]],
    ["Pantry & sauces", ["Low-sodium soy sauce, **0.76 cups** total", "Light sweet chili sauce, **8.82 ounces**", "Honey, **3.17 ounces**", "Sriracha, **0.71 ounces**", "Potato starch (or cornstarch), **8.82 ounces**", "Cornstarch, **5 grams**", "White rice, about **1⅓ cups** dry", "Sesame seeds, for topping (optional)", "Cooking spray"]],
    ["Spices (check what you have)", ["Onion powder, **1 teaspoon**", "Garlic powder, **1 teaspoon**", "White pepper, **0.5 teaspoons**", "Red pepper flakes, **0.5 teaspoons**"]]
  ],
  steps: [
    ["Marinate the chicken", "In a big bowl, mix **3.09 pounds chicken breast**, diced with **2 large eggs**, **1 teaspoon onion powder**, **1 teaspoon garlic powder**, **0.5 teaspoons white pepper** and **0.38 cups low-sodium soy sauce** (marinade) until every piece is coated. Let it sit about 10 minutes."],
    ["Coat in starch", "Put **8.82 ounces potato starch** (about 80g sticks) in a separate bowl. Toss the chicken in it in batches, pressing so it sticks, and shake off the extra."],
    ["Crisp the chicken", "Spray with cooking spray and air fry at 400°F for about 12–15 minutes, shaking and spraying again halfway, until golden and crispy and 165°F inside. Do it in batches so the basket isn't crowded.", "14m"],
    ["Start the glaze", "In a large pan over medium heat with a little cooking spray, cook **4 garlic cloves**, minced for 30 seconds. Add **0.38 cups low-sodium soy sauce** (glaze), **0.38 cups water** (glaze), **8.82 ounces light sweet chili sauce**, **3.17 ounces honey**, **0.71 ounces sriracha** and **0.5 teaspoons red pepper flakes** and bring to a simmer.", "1m"],
    ["Thicken it", "Stir **5 grams cornstarch** into **0.42 cups cold water** (slurry), pour it in and simmer 1–2 minutes until glossy and sticky.", "2m"],
    ["Glaze the chicken", "Turn off the heat, add the crispy chicken and toss until fully coated."],
    ["Portion it out", "Split **2.31 pounds cooked white rice** into **7 containers** (150g each, about ¾ cup), top with the chicken and sprinkle with sesame seeds, sliced green onion and sliced red chili if you like. Cool before sealing."]
  ],
  tips: [
    "Chicken only (no rice): about 349 cal and 50g protein per serving.",
    "No air fryer: bake on a sprayed sheet pan at 425°F for 18–22 minutes, flipping halfway.",
    "Cook about 1⅓ cups dry rice to get 1,050g cooked.",
    "Ayam's sweet chili sauce is Australian; any light or reduced-sugar sweet chili sauce works (regular adds calories).",
    "Potato starch can be swapped for cornstarch.",
    "The chili flake amount isn't given; ½ tsp is a starting point."
  ]
}
];
