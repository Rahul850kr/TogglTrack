import styles from "./pricingplans.module.css";
import Toggl from "../Toggle/Toggle";
import ReviewBox from "../ReviewBox/ReviewBox";
import Download from "../Download/Download"

import PricingBox from "../PricingBox/PricingBox";
import { AiFillCaretRight } from "react-icons/ai";
import HomeSameSignUp from "../../Products_Page/HomePage_sign_up/HomeSameSignUp.jsx";

import EmployeeFAQ from "../../Products_Page/Employee_time/Employee_FAQ/EmployeeFAQ"

import Table from "../Table/Table";


import HomeNavbar from "../../Products_Page/Home_Navbar/HomeNavbar.jsx";


import Footertop from "../../Homepage/Footer/Footer";






const PricingPlan = () => {
    return (


        <div>
            <div>
                <HomeNavbar />
            </div>
            <div className={styles.container}>
                <h1 className={styles.heading}>Pricing Plans</h1>
                <p>No credit card required. All plans come with a free, 30-day trial of our Premium features.</p>
                <p className={styles.togglebtnheading}>Choose your billing:</p>
                <Toggl />

                <PricingBox />
                <br />
                <br />
                <div className={styles.description}>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. You can choose to upgrade at the end of the trial or continue using Track for free.</div>

                <button className={styles.planFeatureBtn}>Compare all plan features <AiFillCaretRight />  </button>

                <ReviewBox />
                <EmployeeFAQ />
                <Table />
                <Download />
                <div style={{ width: "70%", margin: "auto", textAlign: "left" }}>
                    <HomeSameSignUp />


                </div>


                <div style={{ backgroundColor: "#2d1738", textAlign: "left", marginTop: "50px" }}>
                    <div style={{ width: "80%", margin: "0 auto" }}>
                        <Footertop />

                    </div>
                </div>



            </div>
        </div >
    )
}


export default PricingPlan;