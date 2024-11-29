// import { useState } from 'react';
 
// function Header({ title }) {
//   return <h1>{title ? title : 'Default title'}</h1>;
// }
 
// function HomePage() {
//   const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
//   const [likes, setLikes] = useState(0);
 
//   function handleClick() {
//     setLikes(likes + 1);
//   }
 
//   return (
//     <div>
//       <Header title="Develop. Preview. Ship." />
//       <ul>
//         {names.map((name) => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
 
//       <button onClick={handleClick}>Like ({likes})</button>
//     </div>
//   );
// }

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Login from "./Login";
// import Dashboard from "./Dashboard";
// import PrivateRoute from "./PrivateRoute";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route element={<PrivateRoute />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;
