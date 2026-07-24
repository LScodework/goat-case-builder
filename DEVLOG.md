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

## Day 4B – Team Logos, Tooltips, Player Image Modal, and Award Flip Cards

### What I Completed

- Reworked the team history section so each player’s teams are stored as structured data instead of one long text string.
- Added the following information for every team entry:
  - Full team name
  - Team abbreviation
  - Jersey number or numbers
  - Team logo file
- Added team logo badges beside each team abbreviation in the player bio.
- Added custom gold-and-charcoal tooltips that display the team’s full name.
- Made the team tooltips work with:
  - Hover on desktop
  - Click or tap on mobile
- Added JavaScript so opening one team tooltip closes any other open tooltip.
- Added JavaScript so clicking or tapping elsewhere closes the active team tooltip.
- Cleaned up duplicate CSS rules for:
  - `.team-entry`
  - `.team-logo`
  - `.team-separator`

### Player Bio Layout Improvements

- Updated the player bio area to display separate lines for:
  - BIO
  - TEAMS
  - ERA
- Styled the labels in gold so the information is easier to scan.
- Added team logos, abbreviations, and jersey numbers to the TEAMS line.
- Preserved the divider lines and spacing between the player’s bio sections.
- Adjusted alignment and spacing so the logos and text sit correctly on the same line.

### Player Image Improvements

- Added an interactive modal for player photos.
- Player photos now enlarge when clicked or tapped.
- Added the player’s name beneath the enlarged photo.
- Added multiple ways to close the image modal:
  - Clicking the close button
  - Clicking outside the modal card
  - Pressing the Escape key
- Added hover effects to the normal player photo:
  - Slight zoom
  - Increased brightness
- Used the photo’s existing `alt` text to provide the player name inside the modal.

### Award Card Improvements

- Rebuilt all six award cards as interactive flip cards:
  - MVPs for Player One
  - Championships for Player One
  - Finals MVPs for Player One
  - MVPs for Player Two
  - Championships for Player Two
  - Finals MVPs for Player Two
- Preserved the original award-card styling while adding a front and back face.
- Added a smooth 3D horizontal flip animation.
- Added placeholder content to the back of each card:
  - MVP Years
  - Championship Runs
  - Finals MVP Years
- Made the cards flip when hovered over on desktop.
- Added tap and click support for mobile devices.
- Added JavaScript so only one award card remains flipped at a time.
- Added JavaScript so clicking or tapping outside the cards closes the active card.
- Fixed the MVP divider line so it matches the width of the other award-card dividers.
- Completed the flip-card feature without changing the placement of the Career Résumé or GOAT Case sections.

### Problems I Solved

- Fixed duplicated CSS that was causing conflicting team-entry styles.
- Fixed team tooltip positioning and alignment.
- Fixed player-name display inside the image modal when the original JavaScript selector did not match the HTML.
- Recovered the project several times using Git after broken HTML nesting affected the player panels.
- Used `git restore` to return `index.html` and `style.css` to the last working commit.
- Used Cursor’s **Revert File** command when an unsaved editor copy did not match the restored file on disk.
- Learned to replace only one small HTML block at a time instead of moving large groups of nested `<div>` elements.
- Tested the MVP flip card first before converting the Championships and Finals MVP cards.
- Confirmed each step worked in both player panels before continuing.

### What I Learned

- How objects and arrays can store structured team data more cleanly than one long string.
- How JavaScript can dynamically create HTML elements with `document.createElement()`.
- How to append logos, tooltips, text, and separators to the page with JavaScript.
- How custom tooltips can replace the browser’s basic `title` tooltip.
- How event delegation works with `event.target.closest()`.
- How adding and removing a class can control interactive states.
- How a modal works using:
  - A hidden overlay
  - An active or open class
  - Click events
  - Keyboard events
- How nested HTML elements create the front and back faces of a flip card.
- How CSS properties create a 3D card animation:
  - `perspective`
  - `transform-style: preserve-3d`
  - `rotateY()`
  - `backface-visibility`
  - `transition`
- How the `.is-flipped` class allows the same flip interaction to work with taps instead of only hover.
- Why correct HTML nesting is extremely important.
- Why changing or removing a single closing `</div>` can affect large sections of the page.
- Why making small changes and testing after each one is safer than replacing an entire section at once.
- Why Git checkpoints are especially important before complicated HTML and CSS changes.
- The difference between restoring a file from Git and reverting an unsaved editor tab in Cursor.

### Git Progress

- Saved the completed Day 4B work in Git.
- Created the commit:

    git commit -m "Add interactive flipping award cards"

- Confirmed that the repository returned to a clean working state with:

    git status

- Final Git result:

    On branch main  
    nothing to commit, working tree clean

### Next Steps

- Change the player award data from simple text totals into structured award objects.
- Add the specific years each player won an MVP.
- Add the specific years each player won Finals MVP.
- Add championship-year information showing:
  - The player’s team
  - The Finals opponent
- Dynamically populate the back of each award card using JavaScript.
- Test the new award data structure with LeBron James before updating the other nine players.
- Continue testing all new features on both Player One and Player Two before committing them.

## Day 5 — Dynamic Award Details and Top Section Finalization

Today I finished the entire upper section of the player profile cards.

I added structured `awardDetails` data for all 10 players, including regular-season MVP years, championship runs, Finals MVP years, championship teams, and Finals opponents. I connected that data to the backs of the award flip cards so the information now updates dynamically based on the selected player.

I used JavaScript to create the award-year boxes and championship matchup boxes with `forEach()`, `document.createElement()`, `classList.add()`, `appendChild()`, and `innerHTML = ""`. I also used separate `<span>` elements so the championship-winning team could be highlighted in gold while the year and opponent remain white.

I styled MVP and Finals MVP years in a compact four-column gold-box grid and styled championship runs in a two-column layout so longer entries remain readable. I adjusted only the backs of the flip cards so the new information fits without changing the front-card design.

I also added historical Finals MVP context for Wilt Chamberlain and Bill Russell. Wilt’s card shows his 1972 Finals MVP and notes that the award did not exist for his 1967 championship. Russell’s card explains that the award began in his final season and was later named in his honor.

During the process, I fixed JavaScript selector errors caused by class names and `data-award` values not matching the HTML exactly. This reinforced how one incorrect selector can return `null` and stop the rest of the script from running.

I tested the layout with players who have very different award totals, including Michael Jordan, Kareem Abdul-Jabbar, Kobe Bryant, and Bill Russell. I also changed the white divider above the lower profile sections to a thicker gold divider to better match the site’s visual theme.

The full upper player-profile section is now complete, including player photos, bio information, team history, team logos, award totals, flip cards, award years, championship runs, and historical award context.

### Main Concepts Practiced

- Nested objects and arrays
- Accessing structured player data
- Looping with `forEach()`
- Creating and appending HTML elements with JavaScript
- Using template literals
- Styling separate pieces of dynamically generated content
- CSS grid layouts
- CSS specificity
- Debugging `null` selector errors
- Matching JavaScript selectors exactly to HTML
- Using `Ctrl + F` to search a file and `Ctrl + Shift + F` to search the whole project

### Next Step

Begin redesigning the Career Résumé and GOAT Case sections.

## Day 6 – Career Résumé and GOAT Case Styling

### Career Résumé Redesign

- Redesigned the Career Résumé section so each accomplishment appears as its own polished achievement row.
- Removed the default list bullets.
- Added dark gradient backgrounds to each résumé item.
- Added gold left-side accent borders.
- Added gold star icons before each accomplishment.
- Improved spacing between résumé cards and the GOAT Case divider.
- Added stronger desktop hover effects:
  - Horizontal movement
  - Slight scale increase
  - Brighter background
  - Stronger shadow and gold glow
  - Wider gold accent border
- Added mobile-safe `:active` feedback.
- Added reduced-motion support for users who disable animations.

### GOAT Case Arguments Redesign

- Redesigned the GOAT Case Arguments section so it feels distinct from the résumé.
- Turned each argument into a larger numbered card.
- Added automatic `01`, `02`, `03`, and `04` numbering using CSS counters.
- Added gold borders, dark gradients, rounded corners, and subtle shadows.
- Added desktop hover effects:
  - Upward lift
  - Slight scale increase
  - Brighter gold border
  - Stronger glow
  - Larger and brighter argument number
- Added mobile-safe press feedback.
- Added reduced-motion support.

### Interaction Instructions

- Added a small interaction hint beneath the site description in the header.
- The hint explains that users can tap or hover over:
  - Player photos
  - Team logos
  - Award cards
- Styled the hint so it remains subtle and does not inherit the main gold-gradient subtitle styling.

### Standardized Career Résumé Data

- Reorganized all ten player résumés into a consistent comparison structure.
- Added six standard résumé rows for every player:
  1. Championships, Finals MVPs, and regular-season MVPs
  2. Career points and scoring position
  3. Career points, rebounds, and assists averages
  4. All-Star and All-NBA selections
  5. Major statistical titles
  6. Defensive honors
- Added four player-specific résumé accomplishments beneath the standard rows.
- Updated résumé data for:
  - LeBron James
  - Michael Jordan
  - Kobe Bryant
  - Magic Johnson
  - Larry Bird
  - Stephen Curry
  - Kevin Durant
  - Wilt Chamberlain
  - Kareem Abdul-Jabbar
  - Bill Russell

### Head-to-Head Résumé Alignment

- Added a `syncCareerResumeRows()` JavaScript function.
- Matching résumé rows on Player One and Player Two now use the same height.
- The taller row determines the shared height for both players.
- Added `box-sizing: border-box` to résumé rows so padding and borders are included correctly.
- The row heights resync whenever:
  - Either selected player changes
  - The browser window is resized
- Forced row heights are removed on mobile so stacked cards return to natural sizing.

### Result

- The lower half of each player card now matches the visual quality of the photo, bio, and awards sections.
- Career accomplishments are easier to scan.
- GOAT arguments feel more important and persuasive.
- Standardized résumé rows make head-to-head comparison much clearer.
- Matching rows stay aligned across both player cards on desktop while remaining mobile-friendly.

## Day 7 – Final Polish and GitHub Deployment

### What I Worked On

Today I finished several final content and visual improvements, saved the project with Git, uploaded the repository to GitHub, and published the website using GitHub Pages.

### GOAT Case Argument Consistency

- Reviewed the GOAT Case Arguments for all ten players.
- Confirmed that nine players already had four arguments.
- Found that Michael Jordan only had three arguments.
- Added a fourth Michael Jordan argument focused on his cultural influence, the globalization of basketball, and his lasting impact on how future great players are evaluated.
- Confirmed that all ten players now have four GOAT Case Arguments.
- This keeps the two player columns visually aligned when comparing their GOAT cases.

### Header Redesign

- Reworked the top of the website so the title area no longer floats in an empty section.
- Turned the header into a framed hero panel that matches the dark-and-gold visual style of the player comparison cards.
- Added:
  - A dark layered gradient background
  - A subtle gold glow behind the title
  - A gold border
  - Rounded corners
  - An outer shadow
  - A faint inner highlight
  - A decorative gold line across the bottom
- Expanded the header closer to the edges of the screen.
- Kept the existing title image, subtitle, and interaction instructions unchanged.
- Avoided adding more decorative images so the header would remain clean instead of becoming cluttered.

### Saving the Final Layout Changes

- Saved all updated project files in Cursor.
- Used Git to check the working directory.
- Staged the three modified files.
- Created a new commit for the completed comparison layout and header work.

Commit created:

```bash
git commit -m "Polish comparison layout and header"
```

- Confirmed that the repository returned to a clean state with nothing left to commit.

### Git and GitHub

Before today, the project was using Git locally, but it was not connected to an online repository.

I learned that:

- Git tracks versions of the project locally on the computer.
- GitHub stores the Git repository online.
- GitHub acts as an online backup for the code and commit history.
- A GitHub repository can be shared with other people.
- GitHub can also be used as part of a professional programming portfolio.
- A remote connects the local Git repository to its GitHub repository.
- `origin` is the conventional name for the primary remote repository.
- The `main` branch on the computer can track the `main` branch on GitHub.

### GitHub Repository Creation

- Created a public GitHub repository named:

```text
goat-case-builder
```

- Added the repository description:

```text
An interactive NBA GOAT comparison website built with HTML, CSS, and JavaScript.
```

- Left the GitHub README, `.gitignore`, and license options unchecked because the local project already had its own files and Git history.
- Connected the local project to the new GitHub repository.

Commands used:

```bash
git remote add origin https://github.com/LScodework/goat-case-builder.git
git remote -v
```

- Confirmed that `origin` was configured for both fetching and pushing.

### First GitHub Push

Uploaded the complete project and its existing Git history to GitHub with:

```bash
git push -u origin main
```

The push:

- Uploaded 106 Git objects
- Uploaded the complete project files and images
- Created the remote `main` branch
- Connected the local `main` branch to the GitHub `main` branch
- Set the local branch to track `origin/main`

Because the upstream connection is now configured, future updates can normally be uploaded using:

```bash
git push
```

### GitHub Pages Deployment

- Opened the repository settings on GitHub.
- Selected the GitHub Pages section.
- Set the publishing source to:

```text
Deploy from a branch
```

- Selected:

```text
Branch: main
Folder: /(root)
```

- Saved the GitHub Pages settings.
- GitHub automatically built and published the website.
- Confirmed that the website can now be opened and shared without purchasing a custom domain.

Public website:

```text
https://lscodework.github.io/goat-case-builder/
```

### Live Website Testing

Tested the deployed version and confirmed that:

- The website loads successfully.
- The title and header display.
- The player images load.
- The player dropdowns work.
- Duplicate player selection prevention works.
- Player biographies update correctly.
- Team logos display.
- Award cards display correctly.
- Award cards flip to show years and championship opponents.
- Career Résumé sections display.
- GOAT Case Arguments display.
- The side-by-side comparison layout works.

### Live Header Alignment Issue

While testing the published website on a wide browser window, I noticed that the header frame was narrower than the combined width of the two player panels.

The cause was identified as:

```css
max-width: 1700px;
```

The player comparison section continued expanding on the larger screen, while the header stopped expanding once it reached 1700 pixels.

The planned correction is to change:

```css
max-width: 1700px;
```

to:

```css
max-width: none;
```

This will allow the header to remain approximately 10 pixels from each side of the screen and align more closely with the outside edges of the Player One and Player Two panels.

### Important Commands Learned

```bash
git status
```

Shows which files have been modified, staged, or left untracked.

```bash
git add .
```

Stages all current project changes for the next commit.

```bash
git commit -m "Commit message"
```

Creates a saved Git version containing the staged changes.

```bash
git remote add origin REPOSITORY-URL
```

Connects a local Git repository to a GitHub repository.

```bash
git remote -v
```

Displays the GitHub addresses associated with the remote.

```bash
git push -u origin main
```

Uploads the local `main` branch to GitHub and establishes its upstream tracking branch.

```bash
git push
```

Uploads future local commits after the upstream connection has been configured.

### Current Project Status

The GOAT Case Builder is now:

- Fully functional
- Visually polished for desktop
- Stored locally with Git version history
- Backed up publicly on GitHub
- Published as a functioning website through GitHub Pages
- Shareable with friends using a free public link
- Suitable to begin presenting as a portfolio project

### Next Steps

- Remove the header’s `max-width: 1700px` restriction.
- Save the final header alignment change.
- Commit the adjustment with Git.
- Push the new commit to GitHub.
- Confirm that GitHub Pages automatically updates.
- Test the website more thoroughly on mobile and smaller screen sizes.

# Day 8 – Turning the Site Into a True Comparison Tool

## Overview

Today’s focus was improving the GOAT Case Builder so it feels like an actual head-to-head comparison tool instead of two separate player résumés displayed beside each other.

The largest additions were visual comparison markers, standardized résumé comparisons, an overall comparison summary modal, clearer instructions for users, and a few loading-performance improvements.

## Dropdown Improvements

- Reordered both player dropdown menus alphabetically by last name.
- Final dropdown order:
  - Kareem Abdul-Jabbar
  - Larry Bird
  - Kobe Bryant
  - Wilt Chamberlain
  - Stephen Curry
  - Kevin Durant
  - LeBron James
  - Magic Johnson
  - Michael Jordan
  - Bill Russell
- Kept the existing feature that prevents the same player from being selected in both dropdowns.

## Award Card Interaction Improvements

- Updated the MVP, Championship, and Finals MVP flip cards so each card can be locked independently.
- Cards still flip temporarily when hovered over.
- Clicking a card now locks it in the flipped position.
- Clicking the card again returns it to the front.
- Added an `ignore-hover` state so a card does not immediately flip back after being manually closed.
- Added matching border-radius and overflow rules so the front and back faces stay contained within the award card.

## Comparison Marker Images

Added two custom transparent comparison images:

- `images/glowing-green-goat.png`
- `images/glowing-red-basketball.png`

The comparison system now uses:

- Green glowing goat for the category leader
- Red glowing basketball for the lower result
- Gold glowing equals sign for a tie

The transparent versions fixed the visible background boxes that appeared around the original images.

## Award Comparisons

Added automatic comparisons for the three main award categories:

- Regular-season MVPs
- NBA Championships
- Finals MVPs

When two players are selected, JavaScript compares the totals and places the correct marker on the front of each award card.

The markers only appear on the front of the cards so they do not interfere with the detailed information on the back.

## Standardized Career Résumé Comparisons

The first six rows of every player’s Career Résumé are now treated as standardized comparison categories.

These rows compare:

1. Major awards
2. Career regular-season points
3. Career scoring, rebounding, and assist averages
4. All-Star, All-NBA, and All-NBA First Team selections
5. League-leading statistical titles
6. Defensive achievements

The remaining four résumé rows are still unique to each player and display a decorative gold star instead of a comparison marker.

## Comparison Logic

Created reusable JavaScript functions to compare different types of résumé data.

Comparison methods now include:

- Direct numerical comparisons
- Category-by-category comparisons
- Counting category wins instead of adding unrelated statistics together
- Parsing numbers from résumé text
- Counting MVP, championship, and Finals MVP category victories
- Comparing career points
- Comparing points, rebounds, and assists
- Comparing All-Star and All-NBA selections
- Comparing statistical league-leading titles
- Comparing defensive selections and Defensive Player of the Year awards

This allowed the site to compare the standardized résumé rows while keeping the unique player accomplishments unchanged.

## Comparison Summary Button

Added a centered comparison summary button beneath the two player panels.

The button:

- Remains hidden when fewer than two players are selected
- Appears automatically once both players are selected
- Remains visible when either selected player is changed
- Opens a modal containing the overall comparison results

## Comparison Summary Modal

Created a new comparison summary modal that overlays the page.

The modal includes:

- Both selected players
- Player photos
- Player names
- A two-column head-to-head layout
- Gold divider lines
- Totals for:
  - Green goat results
  - Red basketball results
  - Tied categories

The modal counts the comparison markers from:

- Three award cards
- Six standardized résumé rows

This produces nine total comparison categories for each player.

The modal can be closed by:

- Clicking the close button
- Clicking outside the modal card

## Summary Name Formatting

Adjusted player names inside the comparison summary only.

- Middle names and nicknames are removed from the summary display.
- The player’s first name appears above the last name.
- The full stored player name remains unchanged everywhere else on the site.

Example:

Michael  
Jordan

## Comparison Key

Added a visual key beneath the instructional text in the header.

The key explains:

- Green goat = Category leader
- Red basketball = Lower total
- Gold equals sign = Tie

The key was styled to:

- Use smaller text
- Match the muted off-white instructional text
- Use smaller icons
- Keep the same gold equals styling used throughout the player comparisons
- Sit closely beneath the existing hover/tap instructions

## Comparison Qualifier

Added a clarification beneath the comparison key:

“Comparison results reflect standardized categories only and do not include each player’s unique accolades or GOAT case arguments.”

This makes it clear that the comparison summary does not attempt to mathematically judge the personalized résumé achievements or subjective GOAT arguments.

## Loading and Performance Improvements

Made two small improvements intended to help the page become usable faster on slower computers.

### Deferred JavaScript

Updated the script tag in `index.html` to use `defer`.

This allows the browser to continue building the page while the JavaScript file loads.

### Player Image Loading

Added lazy loading and asynchronous decoding to both player-photo elements.

These allow player images to load and decode without unnecessarily blocking the rest of the page.

## Files Updated

- `index.html`
- `style.css`
- `script.js`
- `DEVLOG.md`

## New Image Files

- `images/glowing-green-goat.png`
- `images/glowing-red-basketball.png`

## Git Update

Committed and pushed the Day 8 changes to GitHub with the commit message:

`Add comparison summary and improve page loading`

## Day 8 Result

The GOAT Case Builder now functions much more clearly as a true player comparison website.

Users can:

- Select two different players
- Compare major awards
- Compare standardized career résumé categories
- Understand every result through a visual marker system
- Lock award cards open to review details
- View a compact overall comparison summary
- Still read the unique accomplishments and GOAT arguments that cannot be reduced to simple numerical comparisons

## Day 9 – Responsive Mobile and Tablet Layout

Today I made the GOAT Case Builder responsive across phones, tablets, and smaller desktop screens.

### What I changed

- Installed and configured Live Server in Cursor IDE.
- Used Chrome DevTools Device Mode to test the project at multiple screen sizes.
- Removed an extra closing `</div>` from `index.html`.
- Added responsive CSS media queries.
- Changed the player comparison panels to stack vertically on narrower screens.
- Preserved the side-by-side comparison layout on wider screens.
- Adjusted the main responsive breakpoint after testing phones, tablets, and landscape orientations.
- Made the header scale properly on mobile.
- Removed the large dark gap around the mobile header.
- Fixed the header tagline overlapping the title image.
- Reworked the player overview layout so the image appears above the bio on stacked screens.
- Expanded the bio, team, and era section to use the available mobile width.
- Expanded the award row to better align with the Career Résumé and GOAT Case sections.
- Resized award labels and comparison markers for smaller screens.
- Added special styling for the longer “Championships” label.
- Fixed comparison markers overlapping award-card text.
- Added additional small-screen styling for devices around 390px wide.
- Added medium-width styling for award cards on devices such as the Surface Pro and iPad Pro.
- Tested the layout using multiple simulated devices and viewport widths.
- Verified that player images, bios, award cards, flip-card backs, résumés, GOAT arguments, modals, and comparison summaries still work correctly.
- Committed and pushed the completed responsive update to GitHub.

### Responsive behavior

- Phones and narrower tablet layouts display the two player panels vertically.
- Wider tablets, landscape layouts, and desktop screens display the panels side by side.
- Small-screen award cards use reduced spacing, label sizes, and marker sizes.
- Medium-width screens use adjusted award-card typography to prevent overlap.
- The site now avoids horizontal scrolling and cramped desktop layouts on mobile devices.

### Tools and concepts practiced

- CSS media queries
- Responsive breakpoints
- Flexbox direction changes
- Responsive widths and spacing
- Mobile and tablet testing
- Chrome DevTools Device Mode
- Live Server
- Local browser testing before deployment
- Git commit and push workflow

### Git commit

Add responsive mobile and tablet layouts

### Current project status

The GOAT Case Builder now works across desktop, tablet, and mobile screen sizes. The core comparison experience, interactive award cards, player modals, résumé sections, GOAT arguments, and comparison summary remain functional across the tested layouts.