# FES Module 3 — Mini Project

A complete implementation of the four project lessons: Architect Your Website, Build a Hero, Website Body and Feet, and Respond and Deploy.

## Open it

Open `index.html` in a browser. To edit it, open this entire folder in VS Code. No installation, build command, or framework is needed. All images are included locally, so the site also works offline.

## Follow along with the lessons

1. **Architect Your Website:** `index.html` contains the semantic header, main, footer, navigation, and course label. `style.css` begins with the reset, colors, and shared typography.
2. **Build a Hero:** the hero pairs `assets/laptop.png` with a heading, description, and a Learn more anchor. The logo uses bold Frontend text.
3. **Website Body and Feet:** About and Social share `.section__card` and `.section__body`. Modifier classes give them different backgrounds and accent borders. About places text first; Social places the illustration first. The labeled contact form and footer finish the page.
4. **Respond and Deploy:** media queries at 1024px and 768px adapt the type, navigation, images, and columns. Relative file paths support GitHub Pages project sites.

`script.js` is a small optional addition that previews a validated contact message. It does not send email, save information, or contact a server. Connecting an actual contact service would be a separate step.

## Course materials and fidelity

The four PNG images are the supplied FES Mini Project Resources from the lesson's Course Materials menu. This implementation follows the written lesson requirements and the visible video example: light background, white hero, amber About card, blue Social card, contact form, and footer. It uses original readable copy and some spacing/typography refinements; it is not a verbatim transcription of the instructor's code or a pixel-exact copy. This is a student learning exercise, not an official FES website. Keep use of the supplied artwork within your course permissions.

## Publish with GitHub Pages

The site is ready to publish, but has not been uploaded or deployed to an account.

1. Create a GitHub repository for this project.
2. From this project folder, initialize Git, stage the files, and create your first commit:

   ```sh
   git init
   git add .
   git commit -m "Build responsive frontend mini project"
   git branch -M main
   ```

3. Use the repository URL GitHub provides:

   ```sh
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```

4. In the repository's **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/ (root)**. Save and wait for the published URL.
5. For future changes, stage, commit, and run `git push`.

## Files

- `index.html` — content and accessible page structure
- `style.css` — all styling, including both course breakpoints
- `script.js` — local-only contact preview
- `assets/` — course-supplied images
- `.nojekyll` — serves this as a plain static site on GitHub Pages
