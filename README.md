# Flower Recognition App 🌸  
**A React-based web application for flower classification, user profile management, and achievement tracking.**  

---

## **Table of Contents**  
1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Navigation](#navigation)  
4. [Tech Stack](#tech-stack)  
5. [Installation and Setup](#installation-and-setup)  
6. [Usage](#usage)  
7. [Project Structure](#project-structure)
8. [Setup Notes](#setup-notes)
9. [License](#license)  

---

## **Introduction**  
The Flower Recognition App provides an intuitive and interactive platform for classifying flowers, managing user profiles, and tracking achievements. It incorporates responsive design, modular architecture, and secure authentication to deliver a seamless user experience.  

---

## **Features**  
### **Core Functionality**  
- **Flower Classifier**: Upload images to identify flowers using a server-side API and view detailed information about each flower.  
- **User Management**: Secure login, registration, and profile updates.  
- **Achievements System**: Unlock achievements based on recognition milestones and flower types.  

### **Additional Features**  
- **Dynamic Modal**: Displays flower details, including scientific names and habitat.  
- **Protected Routes**: Ensures secure access to user profiles and achievements.  
- **Responsive Design**: Optimized for all devices using Bootstrap.  

---

## **Navigation**  

### Home Page
![obraz](https://github.com/user-attachments/assets/99c1f0bc-8861-437e-8378-77fb41fa9128)



- Explore features of the app.
- Quick navigation to the other components, like **Classifier**

---

### Login Page
![obraz](https://github.com/user-attachments/assets/266f9cff-6cb0-46b1-a0b5-373bab935fb7)


- Secure login using username and password.
- Navigation link to the registration page for new users.

---

### Register Page
![obraz](https://github.com/user-attachments/assets/a2f76575-aac2-4641-b454-3c86de713d40)


- Create a new account to access app features.

---

### Flower Classifier
![obraz](https://github.com/user-attachments/assets/27a55dca-ff83-41bc-ba13-5cf4ef2530a4)
![obraz](https://github.com/user-attachments/assets/f27f5710-5517-4a7e-9c83-5a84f983906d)


- Upload an image to classify flowers.
- Receive detailed information on detected flowers.

---

### Achievements
![obraz](https://github.com/user-attachments/assets/edf9a45d-1fc5-4719-ba82-44bb59fa2a39)


- View unlocked badges and track progress toward new milestones.

---

### Profile Page
![obraz](https://github.com/user-attachments/assets/1cbaad91-f6aa-4ac3-98ee-c448c8124ce7)
![obraz](https://github.com/user-attachments/assets/b797040c-867b-4110-a532-871ad1273c5f)



- Update user details.
- See the acquired flowers progress
- Reset achievements or other data.

---

## **Tech Stack**  
- **Frontend**: React.js, TypeScript, Bootstrap  
- **Routing**: React Router  
- **State Management**: React Context API  
- **Backend Integration**: REST API for authentication and flower classification  

---

## **Installation and Setup**  

### **Prerequisites**  
Ensure you have the following installed on your system:  
- [Node.js](https://nodejs.org/) (v14+ recommended)  
- npm or yarn  

### **Steps**  
### **Clone the repository**:  
   ```bash  
   git clone https://github.com/your-username/flower-recognition-app.git  
   cd flower-recognition-app  
  ```

## **Installation**  

### **Install Dependencies**  
Run the following command to install the required packages:  
```bash  
npm install  
```

### Start the development server:
```bash
    npm start  
```
    Open your browser and navigate to http://localhost:3000.

## **Usage**  
### **Navigation**  
- **Home**: Overview and navigation links to core features.  
- **Classifier**: Upload images to classify flowers.  
- **Login/Register**: Access user-specific features.  
- **Achievements**: Track progress and unlocked achievements (requires login).  
- **Profile**: Manage user data (requires login).  

---

## Project Structure

```
flower-recognition-app/
├── 📁src
│   ├── App.tsx
│   ├── 📁assets
│   │   ├── 📁flower_icons
│   │   │   └── (bluebell.jpg, [...])
│   │   ├── 📁utils
│   │   │   └── webpage_icon.png
│   ├── 📁components
│   │   ├── Achievements.tsx
│   │   ├── FlowerClassifier.tsx
│   │   ├── FlowerInfoModal.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── PrivateRoute.tsx
│   │   ├── Profile.tsx
│   │   ├── Register.tsx
│   │   ├── UserContext.tsx
│   ├── 📁data
│   │   ├── achievements.json
│   │   ├── flowers.json
│   ├── main.tsx
├── .gitignore
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
```



### Explanation of Key Files and Folders:

- **`src/`**: Contains all the main application code including components, assets, and styles.
- **`assets/`**: Stores all images, icons, and other static resources.
- **`components/`**: Houses all React components such as `Home.tsx`, `FlowerClassifier.tsx`, `Profile.tsx`, etc.
- **`data/`**: Contains JSON files with static data like flower information and achievements.
- **`main.tsx`**: The entry point of the application, where the root React component is rendered.
- **`index.css`**: Global CSS styles applied to the app.
- **`package.json`**: The npm configuration file that defines dependencies and project scripts.
- **`README.md`**: The project's readme file with details on installation, setup, and usage.
- **`vite.config.ts`**: Configuration file for Vite, the build tool used in this project.


---

## Setup Notes

- The app requires a backend server with a loaded ML model for authentication (`/auth/login`, `/auth/register`), user (`/user/fetch_data`, `/user/update`), and prediction endpoints (`/predict`)
- Ensure CORS settings are properly configured if running the backend locally.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

---
