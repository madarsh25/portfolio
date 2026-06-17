import fs from 'fs';
import path from 'path';
import https from 'https';

const assetsDir = path.resolve('src/assets');
const skillsDir = path.resolve('src/assets/skills');
const publicDir = path.resolve('public');

// Ensure directories exist
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
if (!fs.existsSync(skillsDir)) fs.mkdirSync(skillsDir, { recursive: true });
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// Copy files
const copies = [
  { src: 'C:/Users/Lenovo/Downloads/project-skyscanner-screenshot.png', dest: 'src/assets/project-skyscanner-screenshot.png' },
  { src: 'C:/Users/Lenovo/Downloads/project-messmate-screenshot.png', dest: 'src/assets/project-messmate-screenshot.png' },
  { src: 'C:/Users/Lenovo/Downloads/project-paygen-screenshot.png', dest: 'src/assets/project-paygen-screenshot.png' },
  { src: 'C:/Users/Lenovo/Downloads/github-logo.png', dest: 'src/assets/github-logo.png' },
  { src: 'C:/Users/Lenovo/Desktop/Adarsh Yadav CV..pdf', dest: 'public/resume.pdf' },
  { src: 'C:/Users/Lenovo/Desktop/Adarsh Yadav CV..pdf', dest: 'src/assets/resume.pdf' },
  { src: 'C:/Users/Lenovo/Desktop/adarsh/passport size photo adi.png', dest: 'src/assets/profile-photo.png' }
];

copies.forEach(({ src, dest }) => {
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`Copied ${src} -> ${dest}`);
    } else {
      console.warn(`File not found: ${src}`);
    }
  } catch (err) {
    console.error(`Error copying ${src}:`, err.message);
  }
});

// Download icons
const icons = ['html', 'css', 'js', 'react', 'redux', 'nextjs', 'tailwind', 'ts', 'vite', 'nodejs', 'express', 'mongodb', 'java', 'git', 'vscode'];

function downloadIcon(icon) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(path.join(skillsDir, `${icon}.svg`));
    https.get(`https://skillicons.dev/icons?i=${icon}`, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${icon}: HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${icon}.svg`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(skillsDir, `${icon}.svg`), () => {});
      reject(err);
    });
  });
}

async function run() {
  for (const icon of icons) {
    try {
      await downloadIcon(icon);
    } catch (err) {
      console.error(err.message);
    }
  }
  console.log('All downloads complete!');
}

run();
