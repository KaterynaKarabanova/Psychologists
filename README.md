# Psychologists
Project Description:

The application is designed for a company that offers access to psychologist services. It consists of three main pages:

Home Page:

Displays the site's title, company slogan, and a call-to-action button redirecting to the "Psychologists" page.
Styling is implemented using a unique color palette for a more distinctive project.
![image](https://github.com/KaterynaKarabanova/Psychologists/assets/135024704/ae0cafd7-3194-48e6-aaba-ddcef4222990)
Psychologists Page:

Lists psychologists available for consultation.
Users can sort psychologists alphabetically, by price, or by popularity.
Pagination functionality is included, allowing users to load more psychologist cards.

![image](https://github.com/KaterynaKarabanova/Psychologists/assets/135024704/b742a7e3-a3d1-4a58-9b2e-dc0b472c8f95)


Favorites Page:

Displays psychologists added to the user's favorites list.
Similar styling to the "Psychologists" page for consistency.
Technical Specifications:

Authentication:

Firebase authentication for user registration, login, retrieval of user data, and logout.
Registration/Login Form:

Implemented using Formik & Yup with minimal field validation.
Modal window closes on clicking the close button, backdrop, or pressing the Esc key.
Realtime Database:

Utilizes Firebase Realtime Database to store psychologist information.
Fields include name, avatar URL, experience, reviews, price per hour, rating, license, specialization, initial consultation, and about.
Psychologist Card:

Each psychologist card displays relevant information.
Clicking the "Read more" button expands the card to show detailed information and client reviews.
Favorites Functionality:

Authenticated users can add psychologists to their favorites list.
Changes to favorite status persist even after page refresh.
Appointment Form:

Modal window opens on clicking the "Make an appointment" button.
Implemented using Formik & Yup with all fields required.
Modal window closes on user action (close button, backdrop click, or Esc key press).
React Router:

Routes implemented using React Router for navigation.
![image](https://github.com/KaterynaKarabanova/Psychologists/assets/135024704/03dd2723-51af-4ce9-b64a-4957b4fc95e1)
![image](https://github.com/KaterynaKarabanova/Psychologists/assets/135024704/d3b79625-476b-4b66-b8b0-5d597a90b7cd)

Materials:

Firebase documentation for REST API usage.
This project aims to provide users with easy access to psychologist services through a user-friendly and interactive web application.
