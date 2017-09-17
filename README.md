# Fab Wallet UI

This project is client of the fab wallet system. It is recommeded to run the backend first.

Backend for this project is:

https://github.com/javatechy/fab-backend

Running the applicaion
-----------------------------
Follow these steps to run this project:
* Clone the project `git clone https://github.com/javatechy/fab-ui.git`
* Install angular-cli using `npm install -g @angular/cli` 
* `cd fab-ui && npm install`
* Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
* for Production Build : `ng build --prod`. Build is created in `dist/` folder.

Project Structure
-----------------------------
There are 3 components:
 * `LoginComponent` - for user/admin Login
 * `AdminComponent` - for admin Page
 * `UserComponent`  - for User Page


Session Management
-----------------------------
Sessions are managed in localstorage.

