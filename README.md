# CSV-Based Auto React Apps Generator

description: >
  এই project-এর উদ্দেশ্য হলো `websites.csv` ফাইল থেকে স্বয়ংক্রিয়ভাবে
  Vite React apps তৈরি করা, যেখানে প্রতিটি app-এর Hero এবং Contact section
  CSV অনুযায়ী auto generate হবে।

project_structure:
  - generate.js: "Node.js script যা CSV পড়ে প্রতিটি app তৈরি করে এবং Hero + Contact components auto generate করে।"
  - websites.csv: "আপনার data source, প্রতিটি row অনুযায়ী একটি app তৈরি হবে।"
  - build/: "generated apps-এর folder।"

csv_format: |
  domain,title,description,phone,address
  foodexpress.com,Food Express,Delicious meals delivered fast,01712345678,"House 12, Road 5, Banani, Dhaka"
  techhubbd.com,Tech Hub BD,Your trusted tech partner,01898765432,"Level 4, Block B, Dhanmondi, Dhaka"
  bookbazaar.com,Book Bazaar,Buy and sell books online,01911223344,"Shop 22, New Market, Chittagong"

csv_rules:
  - "প্রতিটি row → একটি React app"
  - "domain → app folder name"
  - "phone এবং address → Contact component"
  - "Hero text fixed template: [[ Quick | Fast | Speedy ]] delivery service in Dhaka. (script auto replace করবে Quick)"

prerequisites:
  - Node.js (v18+ recommended)
  - npm
  - Internet connection (Vite app create + npm install এর জন্য)

setup_installation:
  steps:
    - "Project clone বা zip extract করুন।"
    - "Project root-এ থাকাকালীন websites.csv এবং generate.js আছে তা নিশ্চিত করুন।"
    - "CSV parser install করুন:"
    - "npm install csv-parser"

generate_apps:
  steps:
    - "node generate.js"
    - "নতুন apps → build/ folder-এ create হবে"
    - "যদি folder already থাকে → Hero + Contact overwrite হবে"
    - "সব app Hero + Contact centered, white text, black background"
  output_example: |
    /build
       /foodexpress.com
       /techhubbd.com
       /bookbazaar.com

run_individual_app:
  steps:
    - "cd build/foodexpress.com"
    - "npm run dev"
    - "Browser open হবে local server (default: http://localhost:5173)"
    - "Hero + Contact centered দেখাবে"

app_structure_generated:
  src:
    - App.jsx: "Main app wrapper, flex centered"
    - Hero.jsx: "Hero section, centered, white text"
    - Contact.jsx: "Contact section, centered, white text"
    - index.css: "Overrides Vite default body flex"

notes:
  - "নতুন CSV row add করলে আবার node generate.js চালান → নতুন app generate হবে।"
  - "সব apps independent, একে অন্যের সাথে interfere করবে না।"
  - "Inline styles ব্যবহার করা হয়েছে, কোনো extra CSS change দরকার নেই।"

troubleshooting:
  vite_create_fail:
    - "নিশ্চিত করুন Node.js + npm installed"
    - "ইন্টারনেট connection ঠিক আছে"
  apps_not_centered:
    - "App.jsx wrapper inline style check করুন"
    - "index.css auto overwrite হয় generate.js-এ"

👨‍💻 Developer Info
Name: Md. Shahariar Hafiz
Email: shahariar.works@gmail.com
Portfolio: https://shahariar-hafiz.netlify.app/
LinkedIn: devshahariarhafiz
