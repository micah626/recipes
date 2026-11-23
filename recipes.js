// Recipe data. To add a recipe, append an object to this list (see CLAUDE.md).
// Steps: [title, text]. Wrap amounts in **double asterisks** to highlight them.
window.RECIPES = [
{
  id: "honey-chipotle",
  name: "Honey Chipotle Chicken Mac n Cheese",
  tag: "MC",
  color: "#b8261c",
  blurb: "Crispy, honey-chipotle glazed chicken over a smoky, creamy mac and cheese.",
  serves: 5,
  macros: { cal: "651", protein: "61g", carbs: "54g", fat: "22g" },
  groceries: [
    ["Meat", ["Boneless skinless chicken thighs, about 2.5 lb (or about 4 lb bone-in to debone yourself)"]],
    ["Dairy", ["Light butter (about 4½ tbsp total)", "Fat-free evaporated milk, 1 can (12 oz), or skim milk", "Light cream cheese, 1 block (8 oz)", "Reduced-fat shredded cheddar, 1 bag (8 oz)"]],
    ["Produce", ["Fresh parsley, 1 bunch"]],
    ["Pantry", ["Elbow macaroni, 1 box (1 lb)", "Cholula Chipotle hot sauce, 2 bottles", "Honey", "Jarred minced garlic", "Olive oil"]],
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
  name: "High-Protein Chicken Lo Mein",
  tag: "LM",
  color: "#9a5b13",
  blurb: "Saucy, caramelized noodles loaded with seared chicken, eggs and veggies.",
  serves: 5,
  macros: { cal: "~620", protein: "~50g" },
  groceries: [
    ["Meat & eggs", ["Chicken breast, 1.75 lb", "Eggs, 1 dozen (you need 10)"]],
    ["Frozen", ["Mixed frozen veggies, 1 bag (about 10.5 oz)"]],
    ["Pasta", ["Spaghetti (1 lb box) or lo mein noodles (2 packs, 8 oz each)"]],
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
}
];
