// Import the Firebase modules that you need in your app
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Function to place an order
function placeOrder(order) {
    const orderId = Date.now(); // or use a more robust ID generation
    set(ref(db, 'orders/' + orderId), order)
        .then(() => {
            console.log("Order placed successfully!");
        })
        .catch((error) => {
            console.error("Error placing order: ", error);
        });
}

// Example usage: Placing an order
const order = {
    pizzaType: 'Margherita',
    size: 'Large',
    quantity: 2,
    customerName: 'John Doe',
    address: '123 Pizza Lane'
};

placeOrder(order);