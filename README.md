# beginner-tailwind-site
https://www.youtube.com/watch?v=elgqxmdVms8&list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0&index=1 
git clone repo
cd repo
code .

git init

// CONTRUIRE SON TAILWIND
src/css/tailwind.css
@tailwind base;
@tailwind components;
@tailwind utilities;


npx tailwindcss-cli build src/css/tailwind.css -o build/tailwind.css

npm init -y
npm install -D tailwindcss postcss autoprefixer vite

// CONFIGURATION
npx tailwindcss init -p

// package.json
// package.json
"scripts": {
    "dev": "vite src/",
	"build": "vite build src/"
  },

// index.html !  
<link href="css/tailwind.css" rel="stylesheet">

// tailwind.config.js
"./src/**/*.jsx", "index.html"
npm start