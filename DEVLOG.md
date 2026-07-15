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