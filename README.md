# YOUR NAME

<p align="center">
  <img width="140" alt="avatar" src="AVATAR_URL" />
</p>

Short bio — I'm Kabubu Maurice Bururnje a Computer science student specializing in Backend development. I also aim to be fullstack developer having built frontend and backend projects i really enjoy logic and problem solving more than creativity thats why i major more in Backend.
I use Django, Flask, FastApi and nodejs i look forward to learning more on springboot java. 

---

## ⚡ Skills & Frameworks
JavaScript · Python · Rust · Go · Flask · Django · FastAPI · Node.js · React

---

## 🎛️ Rolling Snake — Languages & Frameworks Demo

<p align="center">
  <!-- Replace path below with ./assets/rolling-snake.gif after you upload the GIF to the repo -->
  ![Rolling Snake Demo](./assets/rolling-snake.gif)
</p>

Want to see it live? Visit the demo on GitHub Pages:
- https://mauricekabubu.github.io/YOUR_REPO_NAME/  (replace YOUR_REPO_NAME with your project repo name)

---

## How to add the GIF and make this README live

1. Create the profile repo (if you haven't):
   - For the profile README to show on your GitHub profile, create a repository named exactly: `mauricekabubu/mauricekabubu`.
   - For a project page, create e.g. `mauricekabubu/rolling-snake-demo`.

2. Upload files:
   - Upload the demo files (index.html, styles.css, script.js) to the project repo root (or use the files I already gave you).
   - Create a folder named `assets/` and upload the demo GIF as `assets/rolling-snake.gif`.

3. Paste this README:
   - In the repo, click Add file → Create new file → name it `README.md`.
   - Paste the contents of this README (make sure to replace placeholders) and commit.

4. (Optional) Enable GitHub Pages for a live demo:
   - In the project repo: Settings → Pages → Source → choose `main` branch and `/ (root)` → Save.
   - Your site will be available at: `https://mauricekabubu.github.io/YOUR_REPO_NAME/`

---

## Tips for creating an optimized GIF (high quality, small file size)

Record the demo (tools: QuickTime on macOS, ShareX on Windows, Peek/OBS on Linux) and convert to GIF using ffmpeg (two-pass palette) for best colors:

ffmpeg -y -i demo.mp4 -vf "fps=15,scale=640:-1:flags=lanczos,palettegen" palette.png  
ffmpeg -i demo.mp4 -i palette.png -filter_complex "fps=15,scale=640:-1:flags=lanczos[x];[x][1:v]paletteuse" assets/rolling-snake.gif

Optional optimization with gifsicle:
gifsicle -O3 --colors 128 assets/rolling-snake.gif -o assets/rolling-snake-optimized.gif

---

If you want, I can:
- Generate the GIF for you from the demo and provide the ready file, or
- Produce an inline animated SVG version (smaller, no GIF), or
- Create the files and open a PR in your repo (tell me the repo name).

Which would you like next? (Generate GIF / SVG README / Create PR)
