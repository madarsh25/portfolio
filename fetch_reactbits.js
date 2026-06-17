import fs from 'fs';
import path from 'path';
import https from 'https';

const components = [
  'GooeyNav-JS-CSS',
  'GlassSurface-JS-CSS',
  'Orb-JS-CSS',
  'GradientText-JS-CSS',
  'SoftAurora-JS-CSS',
  'DomeGallery-JS-CSS',
  'BorderGlow-JS-CSS',
  'TiltedCard-JS-CSS'
];

const uiDir = path.resolve('src/components/ui');

if (!fs.existsSync(uiDir)) fs.mkdirSync(uiDir, { recursive: true });

async function downloadComponent(name) {
  return new Promise((resolve, reject) => {
    https.get(`https://reactbits.dev/r/${name}.json`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.files && json.files.length > 0) {
            json.files.forEach(file => {
              const fileName = path.basename(file.path);
              const folderName = file.path.split('/')[0];
              const isFolder = file.path.includes('/');
              
              let componentDir = uiDir;
              
              if(isFolder) {
                 componentDir = path.join(uiDir, folderName);
                 if (!fs.existsSync(componentDir)) {
                   fs.mkdirSync(componentDir, { recursive: true });
                 }
              }
              const filePath = path.join(componentDir, fileName);
              fs.writeFileSync(filePath, file.content);
              console.log(`Saved ${filePath}`);
            });
          }
          resolve();
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const comp of components) {
    try {
      await downloadComponent(comp);
      console.log(`Successfully downloaded ${comp}`);
    } catch(e) {
      console.error(`Error with ${comp}:`, e.message);
    }
  }
}

run();
