/* 
* 1. create a new firebase project in console.firebase.google.com
* 2. npm install firebase
* 3. create firebase.init.js and import getAuth to export auth
* 4. Firebase settings > Authentication > enable email and password
* 5. Create Login, Signup component,setup route
* 6. attach form field handler and form submit handler 
* 7. npm install --save react-firebase-hooks
* 8 .useCreateUserWithEmailAndPassword from react-firebase-hooks
* 9. if user is created redirect to the expected page
* 10. useSignInWithEmailAndPassword for sign In for Login
* 11.  Create RequiredAuth component ==> check user exists also track user location
* 12 . in Route wrap protected component by using RequiredAuth component
*/




/* 
* hosting steps
* 1 . npm install -g firebase-tools (one time for your computer)
* 2. firebase login (one time for your computer
* 3. firebase init (for each project one time)
* 4. npm run build (every time you want to deploy build your project)
* 5. firebase deploy (every time you want to deploy build your project)
*/