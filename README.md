# CSV-Based Auto React Apps Generator

এই project-এর উদ্দেশ্য হলো `websites.csv` ফাইল থেকে স্বয়ংক্রিয়ভাবে **Vite React apps** তৈরি করা, যেখানে প্রতিটি app-এর Hero এবং Contact section CSV অনুযায়ী auto generate হবে।  

---

## Project Structure

project-root/
│
├─ generate.js # Node.js script যা CSV পড়ে প্রতিটি app তৈরি করে এবং Hero + Contact components auto generate করে
├─ websites.csv # আপনার data source, প্রতিটি row অনুযায়ী একটি app তৈরি হবে
└─ build/ # Generated apps-এর folder

yaml
Copy code

---

## CSV Format

`websites.csv` structure:

```csv
domain,title,description,phone,address
foodexpress.com,Food Express,Delicious meals delivered fast,01712345678,"House 12, Road 5, Banani, Dhaka"
techhubbd.com,Tech Hub BD,Your trusted tech partner,01898765432,"Level 4, Block B, Dhanmondi, Dhaka"
bookbazaar.com,Book Bazaar,Buy and sell books online,01911223344,"Shop 22, New Market, Chittagong"
Rules:

প্রতিটি row → একটি React app

domain → app folder name

phone এবং address → Contact component

Hero text fixed template: [[ Quick | Fast | Speedy ]] delivery service in Dhaka. (script auto replace করবে Quick)

Prerequisites
Node.js (v18+ recommended)

npm

Internet connection (Vite app create + npm install এর জন্য)

Setup & Installation
Project clone বা zip extract করুন।

Project root-এ থাকাকালীন websites.csv এবং generate.js আছে তা নিশ্চিত করুন।

CSV parser install করুন:

bash
Copy code
npm install csv-parser
Generate Apps
bash
Copy code
node generate.js
নতুন apps → build/ folder-এ create হবে

যদি folder already থাকে → Hero + Contact overwrite হবে

সব app Hero + Contact centered, white text, black background

Output Example
bash
Copy code
/build
   /foodexpress.com
   /techhubbd.com
   /bookbazaar.com
Run Individual App
প্রতিটি app চালাতে:

bash
Copy code
cd build/foodexpress.com
npm run dev
Browser open হবে local server (default: http://localhost:5173)

Hero + Contact centered দেখাবে

App Structure (Generated)
pgsql
Copy code
src/
│
├─ App.jsx       # Main app wrapper, flex centered
├─ Hero.jsx      # Hero section, centered, white text
├─ Contact.jsx   # Contact section, centered, white text
└─ index.css     # Overrides Vite default body flex
Notes
নতুন CSV row add করলে আবার node generate.js চালান → নতুন app generate হবে।

সব apps independent, একে অন্যের সাথে interfere করবে না।

Inline styles ব্যবহার করা হয়েছে, কোনো extra CSS change দরকার নেই।

Troubleshooting
Vite create fail হলে:

নিশ্চিত করুন Node.js + npm installed

ইন্টারনেট connection ঠিক আছে

Apps centered না হলে:

App.jsx wrapper inline style check করুন

index.css auto overwrite হয় generate.js-এ

Prepared by: Your Name
Date: 2025