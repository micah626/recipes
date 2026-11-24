# Recipes app

A static, installable web app (GitHub Pages, served from `main`) holding the owner's meal-prep recipes.
No build step. Files:

- `recipes.js` — **all recipe content**. Adding or editing a recipe only touches this file.
- `index.html` — the app (home list with search, recipe pages at `#/<id>`, checklists saved in localStorage).
- `version.json` + `bin/bump-version` — installed copies reload when the version changes.
- `manifest.json`, `icon.svg`, `apple-touch-icon.png` — home-screen app setup.

## Adding a recipe

The owner works out recipes in a separate chat, then pastes the final recipe here. Transcribe it faithfully:
keep their exact amounts, wording and brand names. Don't invent macros, times or ingredients; ask if something
is missing or ambiguous (e.g. servings).

Append an object to `window.RECIPES` in `recipes.js`:

```js
{
  id: "short-kebab-id",            // URL slug, unique, never change it once published (checkmarks are keyed on it)
  name: "Full Recipe Name",
  tag: "AB",                       // 1–3 letters shown on the tile (optional; defaults to initials)
  color: "#1f5f8b",                // tile color (optional; pick one not used by the other recipes)
  blurb: "One short sentence describing the dish.",
  serves: 5,
  time: { total: 45, scales: 20 }, // minutes until it's ready; "scales" is the part that grows with servings
  macros: { cal: "650", protein: "60g", carbs: "50g", fat: "20g" },  // per serving; include only what's known, "~" ok
  groceries: [                     // grouped shopping list: [group name, [items]]
    ["Meat", ["Chicken thighs, 2.5 lb"]],
    ["Pantry", ["Honey", "Olive oil"]]
  ],
  steps: [                         // [short title, instructions, optional time]; wrap amounts in **bold**
    ["Prep the chicken", "Cut **2.4 lb chicken** into cubes."],
    ["Sear it", "Cook about 5 minutes per side.", "10m"]   // time shows as a chip: "1m 30s" -> "1 min 30 sec"
  ],
  tips: ["Keeps about 4 days in the fridge."]
}
```

### Servings scaling

Each recipe page has a servings control. It rescales numbers inside **bold** in the steps (fractions for tsp/tbsp/cups,
decimals kept for decimal amounts like 2.4 lb, whole numbers for counts like 10 eggs). So put every amount that should
scale in bold, with its unit right after the number ("**2½ tsp smoked paprika**", "**10 eggs**").
A note in parentheses directly after a bold amount is rescaled if it holds a measurement ("(just over 2 cups dry)") and
hidden if it holds some other number ("(¾ of the block)"); percentages like "(95% lean)" and notes ending in "each"
("(about 30g, each)") are always kept as is. Counts fix their noun: "1 medium red onion" -> "2 medium red onions",
"6 tortillas" -> "1 tortilla"; unit words too ("1 teaspoon" / "2 teaspoons"). Times, temperatures and sizes ("8 minutes", "165°F",
"1.5-inch") must not be bold.

The grocery list scales too:
- Bold amounts scale the same way ("Chicken breast, **1.75 lb**", "(you need **10**)").
- Package counts use `{count unit|packages used}` (unit optional: `Red bell pepper, {1|1}`; size words stay
  singular: `Red onion, {1 medium|1}` -> "2 medium"): `{1 box|9/16} (1 lb)` means buy 1 box and the recipe uses 9 oz of it.
  When scaled, the count is rounded up (2 boxes at 10 servings), a bare size note becomes "(1 lb each)", and if
  rounding up leaves extra it adds how much actually gets used ("you'll only use about 18 oz").
  Work out "packages used" from the step amounts and the package size; ask the owner if a package size is unknown.
- Items with no amount (spices, sauces, "Honey") are left as is.
At the original servings everything displays exactly as written, without the markup.

Tile colors already in use: `#b8261c` (red), `#9a5b13` (amber), `#3f6b2a` (green), `#7a2e5c` (plum), `#1f5f8b` (blue),
`#8a4b2a` (brown), `#0f6b63` (teal). Other good ones: `#5b3fa0` violet, `#3d4f7a` slate, `#a3402a` rust, `#5c6b2a` olive.

### Recipe options (switches)

A recipe can have one `choice` field, which adds a switch to the page (e.g. Chicken: Dark meat / White meat,
Cheese layer: Extra mozzarella / Ricotta). `base` is the option the recipe is written for. Every other option can:
- `replace`: exact, case-sensitive text swaps applied to groceries, steps and tips (swap a tip to "" to hide it);
- `add`: extra grocery lines, `[group name, item]` (a new group is created if the name doesn't exist);
- `macros`: estimated nutrition for that option (mark with "~");
- `tip`: one line shown under the switch.

```js
choice: {
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
}
```

Every chicken recipe gets the Dark/White meat switch. Estimate the swapped macros from USDA raw values per 100 g
(thigh meat only: 121 kcal, 19.7 g protein, 4.1 g fat; breast meat only: 120 kcal, 22.5 g protein, 2.6 g fat) times
the chicken per serving; carbs don't change. The pick is remembered per recipe (localStorage `recipeChoice`).

If the owner doesn't give a total time, estimate one from the steps (count hands-on prep like chopping, and don't add
up steps that happen at the same time, e.g. "while the rice cooks"), round to 5 minutes, and tell them it's an estimate.
Then split it: `scales` is the work that grows with the amount (chopping, searing in batches, filling/rolling,
portioning); the rest stays fixed (boiling water, simmering, baking). The page shows
total - scales + scales x (servings / base servings), never using less than half of `scales`, rounded to 5 minutes.

When the owner pastes an ingredient list rather than a shopping list, build the grocery list from it: group by store
section, keep their amounts, and combine an ingredient used twice into one "total" line (e.g. garlic powder 2 + 0.5 tsp).

Reordering items within a recipe's groceries or steps shifts which boxes appear checked for anyone mid-recipe; that's fine,
the "Clear checkmarks" button resets it.

## Publishing

1. Run `bin/bump-version` (updates `version.json` and the version stamps in `index.html`).
2. Check it in a browser (Playwright screenshot at phone width) — home list and the new recipe page.
3. Commit and push. The site goes live once the change is on `main`.
