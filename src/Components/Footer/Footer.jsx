import React from 'react'
import "./Footer.css"
import facebook from "../../Assets/Images/Icons/social/facebook-white.svg"
import insta from "../../Assets/Images/Icons/social/instagram-white.svg"
import Twitter from "../../Assets/Images/Icons/social/twitter-white.svg"
import playstore from "../../Assets/Images/Icons/store/play-store.svg"
import appstore from "../../Assets/Images/Icons/store/app-store.svg"
import microsoft from "../../Assets/Images/Icons/store/windows-store.svg"


function Footer() {

    const options = [
        "Home",
        "Terms and Conditions",
        "Privacy Policy",
        "Help",
        "manage Account"
    ]
  return (
    <div>
        <footer className='fooeterDiv'>

                <div className='footertopDiv'>
                    <div className='footeroptn'>
                       {options?.map((item)=>{
                        return(
                            <div className={item==="manage Account"?"removeborder":'optionstext'}>
                            {item}
                             </div>
                        )
                       })
                       }
                    </div>
                    <div className='copywrites'>
                        copy right © 2023  Savvyapp. All Rights Reserved.
                    </div>       
                </div>

                <div className='footerbtmDiv'>
                            <div className='iconsdiv1'>
                            <img src={facebook} alt="facebook" />
                            <img src={insta} alt="Insta" />
                            <img src={Twitter} alt="twitter" />                                
                            </div>

                            <div className='iconsdiv2'>
                                <img src={playstore} alt="playstore" />
                                <img src={appstore} alt="appstore" />
                            </div>
                </div>
        </footer>
    </div>
  )
}

export default Footer