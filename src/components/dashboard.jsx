import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Dashboard() {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("Logged in as:", user.email, user.uid);
      // user.displayName, user.photoURL, user.emailVerified, etc.
    } else {
      console.log("User is signed out");
    }
  });
  return (
    <div className="flex flex-col w-full h-full bg-gray-100">
      <div className="flex flex-row w-full h-16 bg-gray-200 border-b">
        <h1 className="text-xl font-bold text-center">Dashboard</h1>
      </div>
      <div className="flex flex-col w-full h-full p-4">
        <p>Welcome to the dashboard!</p>
      </div>
    </div>
  );
}
export default Dashboard;
