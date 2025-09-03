# Country Data App 🌍

A simple React application that lets you search and explore country information using the [REST Countries API](https://studies.cs.helsinki.fi/restcountries/api/all).

---

## ✨ Features
- 🔍 Search for countries by name  
- 📃 Displays a filtered list of matching countries  
- 👀 "Show" button to view details of a specific country  
- 📌 Country details include:
  - Name  
  - Capital  
  - Area  
  - Languages  
  - National Flag  

---

## 🛠 Tech Stack
- [React](https://react.dev/) — frontend framework  
- [Axios](https://axios-http.com/) — for API requests  
- [REST Countries API](https://studies.cs.helsinki.fi/restcountries/api/all) — data source  

---
## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd country-data-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm start

# 4. Open the app in your browser
# then navigate to:
http://localhost:3000
try-data-app
```

## 🚀 Usage

- Enter a search term in the input field.

- If more than 10 results → you’ll be asked to narrow down your search.

- If 2–10 results → a list of countries appears with a show button next to each.

- Click show to see full details of that country.

- If exactly 1 country matches → details are shown automatically.Usage