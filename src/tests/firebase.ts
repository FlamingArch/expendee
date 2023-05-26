// import firebase from "firebase/app";
// import "firebase/firestore";
// import { render, waitFor } from "@testing-library/react";
// import { FirestoreProvider, useFirestore } from "react-firestore";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";

// // Mock Firebase configuration and initialize Firestore
// jest.mock("firebase/app", () => {
//   return {
//     initializeApp: jest.fn(),
//     firestore: jest.fn(() => ({
//       collection: jest.fn(),
//       doc: jest.fn(),
//       get: jest.fn(),
//       add: jest.fn(),
//       set: jest.fn(),
//       update: jest.fn(),
//       delete: jest.fn(),
//     })),
//   };
// });

// // Mock FirestoreProvider and useFirestore hook
// jest.mock("react-firestore", () => {
//   return {
//     FirestoreProvider: jest.fn(({ children }) => children),
//     useFirestore: jest.fn(() => firebase.firestore()),
//   };
// });

// // Mock React Router history
// const history = createMemoryHistory();

// // Example component that interacts with Firestore
// function MyComponent() {
//   const firestore = useFirestore();

//   const addData = async (data) => {
//     await firestore.collection("myCollection").add(data);
//   };

//   const getData = async () => {
//     const snapshot = await firestore.collection("myCollection").get();
//     return snapshot.docs.map((doc) => doc.data());
//   };

//   // ... other CRUD operations

//   return (
//     <div>
//       <button onClick={() => addData({ name: "John" })}>Add Data</button>
//       <button onClick={getData}>Get Data</button>
//       {/* ... render other components */}
//     </div>
//   );
// }

// // Unit test for Firebase Firestore CRUD operations
// describe("Firebase Firestore CRUD operations", () => {
//   it("should add data to Firestore collection", async () => {
//     const { getByText } = render(
//       <FirestoreProvider firebase={firebase}>
//         <Router history={history}>
//           <MyComponent />
//         </Router>
//       </FirestoreProvider>
//     );

//     const addButton = getByText("Add Data");
//     addButton.click();

//     await waitFor(() => {
//       expect(firebase.firestore().collection).toHaveBeenCalledWith(
//         "myCollection"
//       );
//       expect(firebase.firestore().add).toHaveBeenCalledWith({ name: "John" });
//     });
//   });

//   it("should get data from Firestore collection", async () => {
//     const mockSnapshot = {
//       docs: [
//         { data: () => ({ name: "John" }) },
//         { data: () => ({ name: "Jane" }) },
//       ],
//     };

//     firebase.firestore().collection.mockReturnValue({
//       get: jest.fn(() => Promise.resolve(mockSnapshot)),
//     });

//     const { getByText } = render(
//       <FirestoreProvider firebase={firebase}>
//         <Router history={history}>
//           <MyComponent />
//         </Router>
//       </FirestoreProvider>
//     );

//     const getDataButton = getByText("Get Data");
//     getDataButton.click();

//     await waitFor(() => {
//       expect(firebase.firestore().collection).toHaveBeenCalledWith(
//         "myCollection"
//       );
//       expect(firebase.firestore().get).toHaveBeenCalled();
//       expect(getByText("John")).toBeInTheDocument();
//       expect(getByText("Jane")).toBeInTheDocument();
//     });
//   });

//   // ... write similar tests for other CRUD operations
// });
