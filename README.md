# 🌍 TourVisto

TourVisto is a modern admin dashboard built with React, TypeScript, and Appwrite, designed to manage users, trips, and filtering options for a travel or tour-based platform.

## 🚀 Tech Stack

React – Component-based UI library for building modern web interfaces
TypeScript – Strongly typed JavaScript for safer and scalable development
Appwrite – Backend-as-a-Service (BaaS) for authentication, databases, and storage
## 📌 Features

🔐 User Authentication (via Appwrite)
📋 User and Trip Management Dashboards
🔍 Powerful Filtering Options
🎯 Clean, responsive UI built with modern React patterns
🛠️ Setup Instructions

## Clone the Repository

```
git clone https://github.com/yourusername/tourvisto.git
cd tourvisto
Install Dependencies
npm install
```

Configure Appwrite
Create an Appwrite project
Set up your database, collections, and authentication
Add your Appwrite project ID, endpoint, and other env variables in a .env file:
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_db_id
VITE_APPWRITE_COLLECTION_ID_USERS=your_users_collection_id
VITE_APPWRITE_COLLECTION_ID_TRIPS=your_trips_collection_id
Run the Application
npm run dev
## 📁 Project Structure

tourvisto/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/ (Appwrite logic)
│   ├── types/
│   └── App.tsx
├── public/
├── .env
├── tsconfig.json
└── package.json
more updates coming<img width="150" alt="image" src="https://github.com/user-attachments/assets/53560961-16ba-4812-95e8-1276c3097f86" />
