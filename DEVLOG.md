# Development Log
## Day 1 — Project Setup and Initial Comparison Interface

### What I completed
- Installed Cursor and opened the existing GOAT Case Builder repository.
- Configured Git Bash as the default terminal in Cursor.
- Confirmed that the project was connected to Git and using the `main` branch.
- Created the initial HTML structure and connected `index.html`, `style.css`, and `script.js`.
- Built a two-panel layout so users can compare two players side by side.
- Added a separate player dropdown to each comparison panel.
- Styled the page, player panels, headings, labels, and dropdown menus.
- Created hidden player-result sections that only appear after a player is selected.
- Added reusable JavaScript that controls both player selectors instead of duplicating the same logic.
- Created a `players` object to store player information.
- Added LeBron James’s summary information, career résumé, and GOAT case arguments.
- Used JavaScript to insert the selected player’s information and bullet-point lists into the correct panel.
- Added error protection so players without completed data do not break the page.
- Saved the completed work in Git with the commit:
  `Build initial player comparison interface`

### Important design decisions
- Designed the app around a side-by-side comparison from the beginning.
- Organized each player profile into three sections:
  1. Action photo and four-line player summary
  2. Career résumé and major records
  3. GOAT case arguments
- Chose to hide player information until a valid player is selected.
- Used one reusable JavaScript function for both comparison panels.
- Stored single display values as strings and groups of résumé items and arguments as arrays.

### Problems encountered and solutions
- Cursor initially opened in the Agents interface instead of the regular IDE.
  - Switched into the VS Code-style Cursor IDE.
- Cursor initially used PowerShell.
  - Changed the default terminal profile to Git Bash.
- Cursor’s AI autocomplete inserted unwanted code.
  - Used undo and disabled or dismissed autocomplete suggestions.
- The original design only included one player selector.
  - Restructured the HTML and CSS into two equal comparison panels.
- Selecting players without data could cause JavaScript errors.
  - Added a check that hides the result and stops the function when player data is unavailable.

### What I learned
- HTML provides the structure of the page, CSS controls its appearance, and JavaScript controls its behavior.
- Classes use a `.` in CSS, while IDs use a `#`.
- A `<div>` is a general container used to group related content.
- The `hidden` attribute can keep content invisible until JavaScript reveals it.
- Dropdown values can act as keys that connect HTML selections to JavaScript data.
- JavaScript objects store labeled information, while arrays store multiple ordered items.
- Functions make code reusable and prevent unnecessary duplication.
- Git commits create clear checkpoints that document the progress of a project.

## Day 2 — Expanded the Player Database

Today I expanded the GOAT Case Builder from one working player profile to a complete group of ten players.

### What I completed

* Added full profile data for:

  * Michael Jordan
  * Kobe Bryant
  * Magic Johnson
  * Larry Bird
  * Stephen Curry
  * Kevin Durant
  * Wilt Chamberlain
  * Kareem Abdul-Jabbar
  * Bill Russell
* Kept LeBron James as the original profile from Day 1.
* Added Bill Russell to both player dropdown menus.
* Added each player’s:

  * Full name
  * Positions, height, and weight
  * Teams, jersey numbers, and career span
  * MVPs, championships, and Finals MVPs
  * Career résumé
  * GOAT case arguments
* Tested every player in both comparison panels.
* Confirmed that the same reusable JavaScript system correctly displays different player profiles on either side.
* Found and fixed a display issue with Kareem Abdul-Jabbar’s profile.
* Committed the completed Day 2 changes to Git with the message:

  * `Add complete player profiles`

### What I learned

* A JavaScript object can store a large amount of organized data for multiple players.
* Each player must use a key that exactly matches the value used in the HTML dropdown.
* Commas are required between player objects inside the larger `players` object.
* A missing comma, bracket, quote, or mismatched key can prevent a player profile from displaying.
* Building one reusable display function is much more efficient than creating separate HTML for every player.
* Testing each new player immediately makes errors easier to find.

## Day 3 — Player Photos, Comparison Rules, and Header Redesign

### What I Completed

- Replaced the photo placeholders with real `<img>` elements.
- Added an `image` property to all ten player objects in `script.js`.
- Created an `images` folder and added a photo for every player.
- Styled all player photos to display at a consistent size using:
  - Fixed width and height
  - `object-fit: cover`
  - `object-position: center top`
- Confirmed that every player photo updates correctly in both comparison panels.

### Comparison Improvement

- Created an `updateAvailablePlayers()` function.
- Made each dropdown disable the player currently selected on the opposite side.
- Prevented users from comparing the same player against himself.
- Learned that variables created inside a function can only be used inside that function’s scope.

### Visual Redesign

- Changed the page background from light gray to a near-black gradient.
- Reworked the header around a dark-and-gold theme.
- Renamed the site title from **GOAT Case Builder** to **Find Your GOAT**.
- Added custom metallic-gold assets:
  - Goat graphics on both sides of the title
  - Basketball graphics outside the goats
  - A metallic-gold title PNG
- Used CSS mirroring so one goat image could face inward on both sides.
- Adjusted image sizes and spacing until the header looked balanced.
- Centered and recolored the subtitle to match the new theme.
- Removed unused image drafts before committing the final design.

### Git Checkpoints

Created commits for:

- `Add player photos`
- `Prevent duplicate player selections`
- `Redesign site header`

### Main Concepts Practiced

- Connecting JavaScript object data to HTML image elements
- Local image paths and project asset organization
- CSS image sizing and cropping
- `object-fit` and `object-position`
- JavaScript function scope
- Looping through `<select>` options
- Disabling dropdown choices dynamically
- CSS pseudo-elements
- Flexbox alignment
- Absolute positioning
- Mirroring images with `transform: scaleX(-1)`
- Using transparent PNG assets
- Saving clean progress through Git commits

## Day 4.a — Header and Player Panel Styling

### What I worked on

- Replaced the previous title image with a new NBA 2K-inspired “Find Your GOAT” header graphic.
- Cropped the new header PNG to remove excess empty space around the artwork.
- Kept the original gold goat and basketball accent images, then moved them from the header into the upper corners of the player selection panels.
  - Goats sit in the far outside corners.
  - Basketballs sit in the corners closest to the center.
- Reduced the size of the accent images so the new title graphic remains the main focus.

### Player selection panel redesign

- Changed the player panels from bright white to a neutral charcoal gradient.
- Added subtle gold borders and stronger shadows to match the dark-and-gold theme.
- Styled the `Player One` and `Player Two` headings with:
  - Teko display font
  - Gold text
  - Wide metallic gold underline
- Changed the dropdown label text from “Select a Player” to “Pick Your GOAT.”
- Styled the labels in a darker gold with uppercase lettering.
- Redesigned the dropdowns with:
  - Dark charcoal backgrounds
  - Gold borders
  - Gold selected text
  - Softer gray dropdown options
  - Hover and focus effects
- Hid the disabled “Select a Player” placeholder from the opened dropdown list.
- Kept duplicate-player prevention working between the two dropdowns.

### Player profile redesign

- Upgraded player photos with a metallic gold-gradient frame.
- Added layered shadows and a subtle hover lift effect to make the photos feel like collectible sports cards.
- Converted the awards sentence into three separate stat cards:
  - MVPs
  - Championships
  - Finals MVPs
- Updated JavaScript so the three award numbers populate correctly from each player’s existing awards string.
- Added gold award labels, gold underline accents, and large highlighted numbers.
- Wrapped the player physical and career details inside a styled bio card.
- Added:
  - Dark inner gradient
  - Gold left border
  - Gold divider line
  - Brighter, heavier bio text
- Preserved all existing player data, dropdown behavior, résumé lists, GOAT arguments, and duplicate-selection logic.

### Assets added

- `images/find-your-goat-styled.png`
- `images/find-your-goat-styled-cropped.png`

### Current stopping point

The top player profile section now includes:

- Player photo
- Player name
- Styled physical and career bio
- Three award stat cards

The next planned improvement is to add small team logos beside the team-history information so the career section has more visual variety and is easier to scan.