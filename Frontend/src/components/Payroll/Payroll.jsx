import React from 'react'

import styles from "../../components/Employe-time/employee.module.css";
import EmployeeFAQ from "../../components/Employe-time/Employee_FAQ/EmployeeFAQ";
import { useNavigate } from "react-router-dom";
import Footer from '../Homepage/Footer';
import Navbar from '../Navbar/Navbar';
import SameSignUp from "../Billing-invoicing/Same_Sign_up/Same_Sign-up"



const Payroll = () => {
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
                              Payroll time tracking–payroll made easy
                         </h1>
                    </div>
                    <div>
                         <p>
                              Slash the time you spend on processing payroll. Pay employees and contractors accurately based on hours worked.
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
                              <button onClick={() => navigate("/signup")}   >Sign up for free</button>
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
                              Multiple contractors and rates, <em>one</em> payroll time tracking platform
                         </h2>
                    </div>

                    {/* // here i make Less timesheets, more time */}

                    <div className={styles.Less_timesheets_main_div} >
                         <div>
                              <h3>
                                   Save hours on payroll admin
                              </h3>
                              <p>
                                   Ditch the chaotic time cards and time codes. The team can track time on any device across projects. Administrators can export payroll timesheet data in two clicks.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div} >
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/e4b7b678a2d8925896559d183f52b264/c948f/feature-timesheet-everywhere.png" alt="" />
                         </div>
                    </div>

                    {/* // here i make Bye-bye admin time */}

                    <div className={styles.Less_timesheets_main_div} style={{ flexDirection: "row-reverse" }}>
                         <div>
                              <h3 >
                                   Calculate payroll with ease and get employees paid on time
                              </h3>
                              <p>
                                   Assign billable rates to team members and calculate how much they've contributed to billable work. Track the balance of billable and non-billable work.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/59e7925ceb89c4e8844b5d3cf0f9da15/c8e9a/feature-report-user-alt.png" alt="" />
                         </div>
                    </div>


                    <div className={styles.Less_timesheets_main_div}>
                         <div>
                              <h3>
                                   Protect your business with airtight data
                              </h3>
                              <p>
                                   Get peace of mind with accurate, detailed time tracking data and ensure you're ready for audits or contract disputes.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/115a5f1d86d76bd11873197763a8307c/3b6fe/feature-data-payroll.png" alt="" />
                         </div>
                    </div>
               </div>

               <div className={styles.co_founder_of_Newlogic_main_div}>
                    <div>
                         <h4>
                              “Toggl Track allowed us to scale from a team of 35 people in one location, to a team of over 100 in four countries across myriad locations.”
                         </h4>
                         <p>
                              — Gabriel Fagundez, Chief Operating Officer at Moove It
                         </p>
                    </div>
                    <div>
                         <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/778d818cfc7964f059a2e2e64b34fca2/51ce3/speaker-gabriel.png" alt="" />
                    </div>
               </div>


               <div>
                    <div className={styles.Designed_to_empower_main_div}>
                         <h2>
                              <em> Frictionless</em> time tracking and seamless payroll for employees and contractors
                         </h2>
                    </div>
                    <div className={styles.Designed_to_empower_logo_main_div}>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img style={{ width: "80%" }} src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/47cd7aff2a75c9fbb42a3274372ed65b/1434b/illo-reminders.png" alt="" />
                              <h5>Reminders to help you remember</h5>
                              <p>Set up email reminders, desktop notifications, and Pomodoro timers so you never forget to track time.</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/e1444ff4e5168185be80f7d13a9458e4/88313/illo-creepy-eye.png" alt="" />
                              <h5>We say no to employee surveillance</h5>
                              <p>And you get a yes from your employees. Employee buy-in is key to accurate data, so we're committed to features that help empower employees.</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/aaeb281e59e470758c049603db7f86a6/91868/illo-ok-hand.png" alt="" />
                              <h5>Designed to be easy</h5>
                              <p>No instruction manual needed. Get your team onboard and start tracking. If you ever need help, our support team has a track record of responding within 3 hours!</p>
                         </div>
                    </div>
               </div>


               <div className={styles.employee_page_faq_main_content_container}>
                    <div className={styles.employee_page_faq_main_content_container_signup2}>
                         {/* <SameSignUp2 /> */}
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
                                   Having an easy report to submit for payroll was huge. It gave both my team more freedom to concentrate on the money-making work, and much less time worrying about administrative stuff.
                              </h6>
                              <p>
                                   Marissa B, Director of Communications. 5/5 stars on G2.
                              </p>
                              <img src="https://public-assets.toggl.com/b/static/b77f69af46625ee5cf575f64ff0e38b6/2fffe/review-badges-dark.png" alt="" />
                         </div>
                         <div>

                              <SameSignUp />

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

export default Payroll