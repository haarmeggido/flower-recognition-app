
# Flower Recognition App 🌸

The **Flower Recognition App** is a user-friendly React application designed to classify flowers, track user achievements, and manage personal profiles. The app offers a smooth user experience with protected routes, a visually appealing design, and support for user authentication.

## Features

- **Flower Classification**: Identify flowers using the in-app classifier.
- **Achievements System**: Track and display user achievements.
- **Profile Management**: Manage user details and view account statistics.
- **User Authentication**: Register and log in to access protected features.
- **Responsive Design**: Fully optimized for mobile and desktop views.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository/flower-recognition-app.git
   ```
2. Navigate into the project directory:
   ```bash
   cd flower-recognition-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## File Structure

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

---

## Navigation

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

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: To ensure type safety.
- **React Router**: For navigation and route protection.
- **Bootstrap**: For responsive design and styling.

---

## Setup Notes

- The app requires a backend server with a loaded ML model for authentication (`/auth/login`, `/auth/register`), user (`/user/fetch_data`, `/user/update`), and prediction endpoints (`/predict`)
- Ensure CORS settings are properly configured if running the backend locally.

---

## License

This project is licensed under the [MIT License](./LICENSE).
