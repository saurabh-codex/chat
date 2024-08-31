import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

import Cookies from "universal-cookie";
import Logo from "../headerlogo.png"
const cookies = new Cookies();

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-header">
      <div className="navbar bg-base-100 fixed top-0 z-50">
  <a className="btn btn-ghost text-xl z-50">FLICK <img className="logoimg mt-2 h-10 w-auto" src={Logo} alt="" /></a>
</div>
      </div>

      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out w-full flex justify-center p-10 ">
          <button className="btn btn-error" onClick={signUserOut}> Sign Out</button>
        </div>
      )}
    </div>
  );
};