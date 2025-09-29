// generate.js
import fs from "fs";
import path from "path";
import csv from "csv-parser";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// __dirname fix for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HERO_INPUT_TEMPLATE = '[[ Quick | Fast | Speedy ]] delivery service in Dhaka.';

function renderHero(input) {
  const match = input.match(/\[\[\s*([^\]]+?)\s*\]\]/);
  if (!match) return input;
  const options = match[1].split('|').map(s => s.trim());
  return input.replace(match[0], options[0]);
}

// Read CSV
const results = [];
fs.createReadStream(path.join(__dirname, 'websites.csv'))
  .pipe(csv())
  .on('data', data => results.push(data))
  .on('end', () => {
    const buildDir = path.join(__dirname, 'build');
    if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

    results.forEach(site => {
      const domain = site.domain.trim();
      const projectDir = path.join(buildDir, domain);

      // Create app if folder not exists
      if (!fs.existsSync(projectDir)) {
        console.log(`Creating Vite React app for ${domain}...`);
        execSync(`npm create vite@latest ${domain} -- --template react`, { cwd: buildDir, stdio: 'inherit' });
        execSync(`npm install`, { cwd: projectDir, stdio: 'inherit' });
      } else {
        console.log(`${domain} folder exists. Skipping Vite create. Overwriting components...`);
      }

      // Overwrite index.css
      const cssContent = `
body {
  margin: 0;
  display: block;
  background-color: black;
  color: white;
  min-height: 100vh;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
`;
      fs.writeFileSync(path.join(projectDir, 'src', 'index.css'), cssContent, 'utf8');

      // Hero.jsx
      const heroContent = `import React from "react";

export default function Hero() {
  return (
    <div style={{
      textAlign: "center",
      color: "white",
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "20px"
    }}>
      ${renderHero(HERO_INPUT_TEMPLATE)}
    </div>
  );
}
`;
      fs.writeFileSync(path.join(projectDir, 'src', 'Hero.jsx'), heroContent, 'utf8');

      // Contact.jsx
      const contactContent = `import React from "react";

export default function Contact() {
  return (
    <div style={{
      textAlign: "center",
      color: "white",
      fontSize: "1.2rem"
    }}>
      <p>Phone: ${site.phone}</p>
      <p>Address: ${site.address}</p>
    </div>
  );
}
`;
      fs.writeFileSync(path.join(projectDir, 'src', 'Contact.jsx'), contactContent, 'utf8');

      // App.jsx
      const appContent = `import React from "react";
import Hero from "./Hero";
import Contact from "./Contact";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%"
      }}
    >
      <Hero />
      <Contact />
    </div>
  );
}
`;
      fs.writeFileSync(path.join(projectDir, 'src', 'App.jsx'), appContent, 'utf8');

      console.log(`${domain} Hero + Contact updated!`);
    });

    console.log('All websites processed successfully!');
  });
