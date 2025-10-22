
# Synergy Connect

**Synergy Connect** is a collaboration platform that brings together students and employees within organizations. It enables users to:

- Create accounts
- Send messages (private and group)
- Join organizations and teams
- Make voice and video calls
- Share posts, polls, and surveys

Built using **React** on the frontend and **Node.js** on the backend.

---

## ✨ Features

- ✅ User account creation, login, and logout  
- ✅ Private and group messaging  
- ✅ Voice and video calling  
- ✅ Post creation, media sharing, and commenting  
- ✅ Polls and surveys  
- ✅ Role-based access control (e.g., member, admin)  
- ✅ Real-time updates (e.g., typing indicators, online presence, read receipts)  
- ✅ Search functionality (users, posts, files)

---

## 🛠 Tech Stack

| Layer        | Tech                          |
|--------------|-------------------------------|
| **Frontend** | React.js, Tailwind CSS        |
| **Backend**  | Node.js (Express or NestJS)   |
| **Realtime** | Socket.IO / WebSockets        |
| **Database** | MongoDB / PostgreSQL          |
| **Auth**     | JWT / OAuth2                  |
| **Calls**    | WebRTC / Twilio               |
| **Storage**  | AWS S3 / Firebase Storage     |

---
## Screenshots
Homepage
<img width="1836" height="914" alt="image" src="https://github.com/user-attachments/assets/609a4f7c-8b49-4c1f-820e-c1b528d24660" />

Organizations Page
<img width="1833" height="905" alt="image" src="https://github.com/user-attachments/assets/2144eae6-a4f9-4cf6-aa8d-741be5631e5f" />

Settings Page
<img width="1836" height="908" alt="image" src="https://github.com/user-attachments/assets/146f39ef-24c9-4ff8-8518-2acd4ad89543" />



## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed  
- (Optional) Docker for containerization  
- `.env` files configured for DB, auth, and media services

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-org/synergy-connect.git
   cd synergy-connect
````

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables**
   Create `.env` files in both `frontend` and `backend` directories with your secrets and configs.

5. **Run the backend server**

   ```bash
   cd ../backend
   npm run dev
   ```

6. **Run the frontend development server**

   ```bash
   cd ../frontend
   npm start
   ```

---

## 🧪 Usage

* Open your browser: `http://localhost:5000`
* Sign up or log in
* Create or join an organization/team
* Send messages, create posts, polls, or surveys
* Search users, posts, or groups
* Make voice/video calls

---

## 📁 Suggested Project Structure

```
/backend
  ├─ controllers/
  ├─ models/
  ├─ routes/
  ├─ services/
  ├─ sockets/
  └─ app.js

/frontend
  └─ src/
      ├─ components/
      ├─ pages/
      ├─ hooks/
      ├─ services/
      └─ contexts/
```
````

## 🔴 Real-Time Communication & Calls

* Real-time messaging, presence, typing indicators via **Socket.IO**
* Voice & video calls with **WebRTC** or third-party like **Twilio**
* Backend handles signaling, and peer-to-peer communication is managed via frontend


## 🤝 Contributing

All contributions welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m "Add my feature"`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request



## 📜 License

Licensed under the [MIT License](LICENSE)



Let me know if you’d like me to include a badge section (build passing, license, etc.), GitHub actions CI setup, or sample `.env` templates.
