import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

   const [{}, dispatch] = useStateValue();

   useEffect(()=>{
      auth.onAuthStateChanged(authUser=>{
         if(authUser){
             dispatch({
               type: "SET_USER",
               user : authUser
             })
         }else{
            dispatch({
               type:"SET_USER",
               user: null
            })
         }
      })
   },[])

   return (
      //BEM
      <BrowserRouter>
         <div className="app">
            
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/checkout" element={<><Header /><Checkout /></>} />
               <Route path="/" element={<><Header /><Home /></>} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
