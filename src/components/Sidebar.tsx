import React,{useState}from "react";
import classnames from "classnames";
import './styles/sidebar.css';
import LandingPage from './LandingPage/LandingPage';
import logo from '../assets/logo.svg';
function Sidebar() {
  // const [state, setstate] = useState(initialState);
  const [open, setOpen] = useState(window.matchMedia("(min-width: 1024px)").matches || false)

  const ontoggleNav = () => {
   setOpen(!open);
  };

    const mobile = window.matchMedia("(max-width: 768px)").matches;
    return (
      <div>
        <div className="bodyWrap">
          <div className={classnames({ blur: mobile && open })} />
          <div
            className={classnames(
              "sidenav",
              { sidenavOpen: open },
              { sidenavClose: !open }
            )}
          >
            <div style={{display:"flex",flexDirection:"row" ,paddingRight:"30px",paddingLeft:"30px",marginBottom:"60px",marginTop:"30px"}}>
              <div>  <img src={logo} width="150" alt="logo" /></div>
           

            </div>
           <div className="sidebarTitles">
           <a href="#">Dashboard</a>
           <a href="#">Home</a>

           </div>
           
          </div>

          <div
            className={classnames(
              "main",
              { mainShrink: open },
              { mainExpand: !open },
              { noscroll: mobile && open }
            )}
          >
      
         
          </div>
        </div>
        
      </div>
    );
}

export default Sidebar;
