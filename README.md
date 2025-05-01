# SpaceX Launch Tracker 

This project is a SpaceX Launch Tracker application built with React, Next.js, and Material-UI. It displays detailed information about SpaceX launches, including mission names, dates, statuses, and more. The project was enhanced and tested as part of a coding challenge.

## 📸 Screenshot

![image](https://github.com/user-attachments/assets/8dcadb12-b66f-4f7b-a3eb-b95f441ace31)


## ✨ Features

### 🧭 Pagination
- Implements a pagination system to navigate through the list of launches.
- Dynamically calculates the total number of pages based on the number of launches.
- Allows users to move between pages with **"Previous"** and **"Next"** buttons.

### 📱 Responsive Design
- Uses Material-UI's Grid system to adapt the layout to screen size:
  - 🟦 **1 card per row** on small screens.
  - 🟩 **2 cards per row** on medium screens.
  - 🟨 **3 cards per row** on large screens.
  - 🟥 **4 cards per row** on extra-large screens.

### 🚀 Launch Cards
- 🛰 **Dynamic Information Display**:
  - Mission Name
  - Launch Date (formatted as `MMM DD, YYYY`)
  - Status: 
    - ✅ Success
    - ❌ Failed
    - ⏳ Upcoming
  - Mission Details (limited to 3 lines with ellipsis, full view on hover via tooltip)
  - Failure Reason (if applicable)
  - Mission Patch Image (fallback to placeholder if unavailable)
- 🎯 **UI Enhancements**:
  - Smooth hover animations for a modern look and interactive feel.
  - Watch button with external link icon opens webcast in a new tab.
  - Fixed and responsive card widths to prevent layout breakage.

### ⚠️ Error Handling
- Gracefully handles missing or incomplete data.
- Displays fallback content like **placeholder images** or **default messages**.

### 🎨 Modern UI/UX
- Built with **Material-UI** for a sleek and polished interface.
- Consistent typography and spacing for readability.
- Visual indicators for launch status:
  - ✅ Green: **Success**
  - ❌ Red: **Failure**
  - ⏳ Blue: **Upcoming**

### 🧪 Testing
- Comprehensive unit testing with Jest:
  - ✔️ LaunchCard component: renders launch data and handles missing fields.
  - ✔️ Pagination component: navigates pages correctly.
  - ✔️ Home page: displays header, launch cards, and pagination controls.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [Material-UI (MUI)](https://mui.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Testing**: [Jest](https://jestjs.io/), [@testing-library/react](https://testing-library.com/)

---

## 📦

