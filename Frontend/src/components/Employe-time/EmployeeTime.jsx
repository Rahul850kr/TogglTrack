import React from 'react'
import styles from './employee.module.css'
// import EmployeeFAQ from './Employee_FAQ/EmployeeFAQ';
import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Footer from '../Homepage/Footer';




const EmployeeTime = () => {
     const navigate = useNavigate();

     return (
          <>
               <div>
                    <Navbar />
               </div>
               {/*here i worked on  Employee time tracking software your team will love */}

               <div className={styles.Employee_time_tracking_main_div}>
                    <div>
                         <h1>
                              Employee time tracking software your team will love
                         </h1>
                    </div>
                    <div>
                         <p>
                              A sleek, intuitive employee time tracker that allows your team to track time on multiple platforms with just one click.
                         </p>
                    </div>
                    <div>
                         <span>
                              <p>
                                   Try Toggl Track today. No credit card required.
                              </p>
                         </span>
                    </div>
                    <div className={styles.Employee_time_tracking_main_button_div}>
                         <div>
                              <button onClick={() => navigate("/signup")}  >Sign up for free</button>
                         </div>
                         <div className={styles.Employee_time_tracking_main_demo_p_div}>
                              <p>Book a demo</p>
                              <p></p>
                         </div>
                    </div>

               </div>

               {/* /// here i made logo  */}
               <div className={styles.trustedTypes_main_div}>
                    <div>
                         TRUSTED BY
                    </div>
                    <img src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/f99eb40e82b76e7bc1642a43dfe5c2cc/a9558/brands-employee-desktop.png" alt="" />
               </div>

               {/* ////here i make alternative to timesheets */}

               <div>
                    <div className={styles.alternative_to_timesheets_main_div}>
                         <h2>
                              An alternative to timesheets your employees will say <em>yes</em> to
                         </h2>
                    </div>

                    {/* // here i make Less timesheets, more time */}

                    <div className={styles.Less_timesheets_main_div} >
                         <div>
                              <h3>
                                   Less timesheets, more time
                              </h3>
                              <p>
                                   Nobody likes timesheet entry. It's time-consuming and relies too much on memory. Our solution? Intuitive employee time tracking software for large teams, with accurate time reports you can export in seconds.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div} >
                              <img src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/44cc4850fe2159d12bc9b92f294ea6b2/2c40e/feature-timesheets-one-click.png" alt="" />
                         </div>
                    </div>

                    {/* // here i make Bye-bye admin time */}

                    <div className={styles.Less_timesheets_main_div} style={{ flexDirection: "row-reverse" }}>
                         <div>
                              <h3 >
                                   Bye-bye admin time
                              </h3>
                              <p>
                                   We're all about less admin for everyone, whether you're managing projects, teams, or an entire business. Filter, sort, and export your data by user, task, or project.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/59e7925ceb89c4e8844b5d3cf0f9da15/c8e9a/feature-report-user-alt.png" alt="" />
                         </div>
                    </div>


                    <div className={styles.Less_timesheets_main_div}>
                         <div>
                              <h3>
                                   Seamless, second-nature time tracking for employees
                              </h3>
                              <p>
                                   Our employee time tracking solution keeps the end user in mind. Time tracking is a breeze with integrations with 100+ apps via our browser extensions, and our native calendar and project management integrations.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/048853ffbfd04412bc9e99c1a7d41a59/88b27/feature-integrations-large.png" alt="" />
                         </div>
                    </div>
               </div>

               <div className={styles.co_founder_of_Newlogic_main_div}>
                    <div>
                         <h4>
                              “For people who have never used employee time tracking software before, it’s extremely easy and intuitive, as well as non-invasive. That’s why there was no resistance when we introduced the tool to our team.”
                         </h4>
                         <p>
                              — Greg Martel, COO and co-founder of Newlogic
                         </p>
                    </div>
                    <div>
                         <img src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/0439498177848d1bb6168be953252ac7/51ce3/speaker-greg.png" alt="" />
                    </div>
               </div>


               <div>
                    <div className={styles.Designed_to_empower_main_div}>
                         <h2>
                              Designed to <em>empower</em> teams
                         </h2>
                    </div>
                    <div className={styles.Designed_to_empower_logo_main_div}>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img style={{ width: "80%" }} src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/780b1be4eb20e534d7864f6f3dc65895/fafe8/illo-desktop-mobile.png" alt="" />
                              <h5>Works everywhere</h5>
                              <p>Give your team more options. Let them track time from the web app, desktop and mobile apps, or even from their stopwatch.</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/e1444ff4e5168185be80f7d13a9458e4/88313/illo-creepy-eye.png" alt="" />
                              <h5>We say no to employee surveillance</h5>
                              <p>And you get a yes from your employees. Employee buy-in is key to accurate data, so we're committed to features that help empower employees.</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img src="https://public-assets.toggl.space/ae4e1ee7-9a08-426a-b230-a537a04e9aa6/static/aaeb281e59e470758c049603db7f86a6/91868/illo-ok-hand.png" alt="" />
                              <h5>Designed to be easy</h5>
                              <p>No instruction manual needed. Get your team onboard and start tracking. If you ever need help, our support team has a track record of responding within 3 hours!</p>
                         </div>
                    </div>
               </div>


               <div className={styles.employee_page_faq_main_content_container}>
                    <div className={styles.employee_page_faq_main_content_container_signup2}>
                         {/* <SameSignUp /> */}
                    </div>
                    <div className={styles.employee_page_faq_main_content_onbording}>
                         <p>Onboarding a team?</p>
                         <div className={styles.Employee_time_tracking_main_demo_p_div}>
                              <p style={{ marginTop: "19px", color: "#EA96E0", fontWeight: "bold" }}>Book a demo</p>
                              <p style={{ marginTop: "28px", color: "#EA96E0", fontWeight: "bold" }}></p>
                         </div>
                    </div>

                    {/* <h2 className={styles.employee_page_faq_main_content_h2}>
                         FAQs
                    </h2> */}
                    <div>
                         {/* <EmployeeFAQ /> */}
                    </div>
               </div>

               <div className={styles.get_your_team_on_Track_main_div}>
                    <h1>
                         It's time to get your team on <em>Track</em>
                    </h1>
                    <div className={styles.get_your_team_on_Track_main_container_div}>
                         <div className={styles.get_your_team_on_Track_child_container_div}>
                              <h4>
                                   “
                              </h4>
                              <h6>
                                   Toggl Track's edge is its utter simplicity, and simplicity fosters buy-in. If you want to see how time is spent in your team, you owe members a simple tracking interface. Toggl Track does this.
                              </h6>
                              <p>
                                   Michael T, Executive. 5/5 stars on Capterra.
                              </p>
                              <img src="https://public-assets.toggl.com/b/static/b77f69af46625ee5cf575f64ff0e38b6/2fffe/review-badges-dark.png" alt="" />
                         </div>
                         <div>

                              {/* <SameSignUp /> */}

                         </div>
                    </div>
               </div>

               <div style={{ backgroundColor: "#2d1738", textAlign: "left", marginTop: "50px" }}>
                    <div style={{ width: "80%", margin: "0 auto" }}>
                         <Footer />
                    </div>
               </div>

          </>
     )
}

export default EmployeeTime