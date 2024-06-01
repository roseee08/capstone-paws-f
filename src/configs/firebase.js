import admin from "firebase-admin";
import serviceAccount from "../../serviceAccount.json" assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://capstone-paws.firebaseio.com"
});

const auth = admin.auth();

export { auth };
