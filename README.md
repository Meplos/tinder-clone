# React Tinder Clone

This app is tinder base app powered by REACT and firebase.
This app was build for train my react and CSS skills.

src/firebase.js was not include in the repo.

Add this in your src directory.

```
import firebase from 'firebase';

const firebaseConfig = {
    /* copy key from you're firebase project */
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebaseApp.firestore();

export default database;
```

run `npm start` to run project
