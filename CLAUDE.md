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
  macros: { cal: "650", protein: "60g", carbs: "50g", fat: "20g" },  // per serving; include only what's known, "~" ok
  groceries: [                     // grouped shopping list: [group name, [items]]
    ["Meat", ["Chicken thighs, 2.5 lb"]],
    ["Pantry", ["Honey", "Olive oil"]]
  ],
  steps: [                         // [short title, instructions]; wrap amounts in **bold**
    ["Prep the chicken", "Cut **2.4 lb chicken** into cubes."]
  ],
  tips: ["Keeps about 4 days in the fridge."]
}
```

### Servings scaling

Each recipe page has a servings control. It rescales numbers inside **bold** in the steps (fractions for tsp/tbsp/cups,
decimals kept for decimal amounts like 2.4 lb, whole numbers for counts like 10 eggs). So put every amount that should
scale in bold, with its unit right after the number ("**2½ tsp smoked paprika**", "**10 eggs**").
A note in parentheses directly after a bold amount is rescaled if it holds a measurement ("(just over 2 cups dry)") and
hidden if it holds some other number ("(¾ of the block)"). Times, temperatures and sizes ("8 minutes", "165°F",
"1.5-inch") must not be bold.

The grocery list scales too:
- Bold amounts scale the same way ("Chicken breast, **1.75 lb**", "(you need **10**)").
- Package counts use `{count unit|packages used}`: `{1 box|9/16} (1 lb)` means buy 1 box and the recipe uses 9 oz of it.
  When scaled, the count is rounded up (2 boxes at 10 servings) and a bare size note becomes "(1 lb each)".
  Work out "packages used" from the step amounts and the package size; ask the owner if a package size is unknown.
- Items with no amount (spices, sauces, "Honey") are left as is.
At the original servings everything displays exactly as written, without the markup.

Tile colors already in use: `#b8261c` (red), `#9a5b13` (amber). Other good ones: `#3f6b2a` green, `#1f5f8b` blue,
`#7a2e5c` plum, `#0f6b63` teal, `#5b3fa0` violet.

Reordering items within a recipe's groceries or steps shifts which boxes appear checked for anyone mid-recipe; that's fine,
the "Clear checkmarks" button resets it.

## Publishing

1. Run `bin/bump-version` (updates `version.json` and the version stamps in `index.html`).
2. Check it in a browser (Playwright screenshot at phone width) — home list and the new recipe page.
3. Commit and push. The site goes live once the change is on `main`.
