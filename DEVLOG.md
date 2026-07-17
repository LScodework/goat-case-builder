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
