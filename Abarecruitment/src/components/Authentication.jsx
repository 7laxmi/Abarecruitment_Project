import { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import app from '../firebase/firebase.config';
import { getAuth , onAuthStateChanged , signOut} from "firebase/auth";

const Authentication = () => {
    const [authenticateduser, setauthenticateduser] = useState("");
    const auth = getAuth();

    useEffect(() => {
        const listonAuth = onAuthStateChanged(auth, (user) => {
            if (user){
                setauthenticateduser(user);
            }else{
                setauthenticateduser(null);
            }
        } )
        return () => {
            listonAuth();
        }
    }, [])

    const  userSignOut = () => {
        signOut(auth).then(()=>{
            //console.log("user signed out")
        }).catch((error) => {//console.log("error")
        });
    }
  return (
    <>
    { authenticateduser === null? 
    <>
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <NavLink to="/login" className="py-2 px-5 border rounded">Log in</NavLink>
          <NavLink to="/sign-up" className="py-2 px-5 border rounded bg-blue text-white">Sign up</NavLink>
        </div>
        </> :
        <>
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
        <NavLink to="/" onClick={userSignOut} className="py-2 px-5 border rounded ">Sign Out</NavLink>
        </div>
    </>
    }
    </>
  );
}

export default Authentication;