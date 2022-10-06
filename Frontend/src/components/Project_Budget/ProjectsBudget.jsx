import React from 'react'

import styles from '../Employe-time/employee.module.css'
import EmployeeFAQ from '../Employe-time/Employee_FAQ/EmployeeFAQ';
import { useNavigate } from "react-router-dom";
import Footer from '../Homepage/Footer';
import Navbar from '../Navbar/Navbar';
import SameSignUp from "../Billing-invoicing/Same_Sign_up/Same_Sign-up"



const ProjectBudget = () => {
     const navigate = useNavigate();

     return (
          <>
               <div>
                    <Navbar />
               </div>
               {/*here i worked on  Employee time tracking software your team will love */}

               <div className={styles.Employee_time_tracking_main_div} style={{ height: "550px" }}>
                    <div>
                         <h1>
                              Keep projects profitable and on track with project time tracking
                         </h1>
                    </div>
                    <div>
                         <p>
                              Quickly see how time is spent on across multiple projects, clients, and teams. Get insights on the profitability of every project.
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
                              <button onClick={() => navigate("/signup")} >Sign up for free</button>
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
                              Plan better, <em>stress less</em>, and hit deadlines and revenue goals
                         </h2>
                    </div>

                    {/* // here i make Less timesheets, more time */}

                    <div className={styles.Less_timesheets_main_div} >
                         <div>
                              <h3>
                                   Boost profitability
                              </h3>
                              <p>
                                   Track project performance and assess project profitability in real time. Compare projects, months, and clients, and see how labor costs stack up against billable rates.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div} >
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/0df6b1b7e0a4cfc5fdc298b9d2e0f718/81511/feature-project-insights.png" alt="" />
                         </div>
                    </div>

                    {/* // here i make Bye-bye admin time */}

                    <div className={styles.Less_timesheets_main_div} style={{ flexDirection: "row-reverse" }}>
                         <div>
                              <h3 >
                                   Plan with confidence
                              </h3>
                              <p>
                                   Scope projects based on hard data, not gut intuition. Use historical project time tracking insights for better cost projections, forecasts, and realistic budgets.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/24f48a74d42287c7bbebe9cb6a28ea7e/70109/feature-historical-data.png" alt="" />
                         </div>
                    </div>


                    <div className={styles.Less_timesheets_main_div}>
                         <div>
                              <h3>
                                   Keep your team busy but not burdened
                              </h3>
                              <p>
                                   No one should be overworked or underworked. Get a bird's eye view of where your team is spending time. Reshuffle the work as needed.
                              </p>
                         </div>
                         <div className={styles.Less_timesheets_img_main_div}>
                              <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/6ac44cd598477e9322efd7591c226171/c69c8/feature-team-dashboard-full.png" alt="" />
                         </div>
                    </div>
               </div>

               <div className={styles.co_founder_of_Newlogic_main_div} style={{ height: "300px" }}>
                    <div>
                         <h4>
                              “Toggl Track has given us actual data about our labor; we're able to see how much time each step of our creative process takes. As women in an industry that remains male-dominated, it's really important to us that our work is rewarded appropriately.”
                         </h4>
                         <p>
                              — Bethany Kaylor, Writer at RogueMark Studios
                         </p>
                    </div>
                    <div>
                         <img style={{ marginTop: "40px" }} src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/da16487b593f28a81ff4d4a02488b83f/51ce3/speaker-bethany.png" alt="" />
                    </div>
               </div>


               <div>
                    <div className={styles.Designed_to_empower_main_div}>
                         <h2 style={{ maxWidth: "700px", margin: "0 auto" }}>
                              <em>Streamlined</em> project time tracking, so you can focus on the strategy
                         </h2>
                    </div>
                    <div className={styles.Designed_to_empower_logo_main_div}>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img style={{ width: "80%" }} src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/7b895350a4c9d902b51951b23df9dc0f/fd958/illo-integrations.png" alt="" />
                              <h5>100+ integrations</h5>
                              <p>Use Toggl Track with the tools you already use. Embed a timer in 100+ popular tools with the Track browser extensions.</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img style={{ width: "80%" }} src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/780b1be4eb20e534d7864f6f3dc65895/fafe8/illo-desktop-mobile.png" alt="" />
                              <h5>Works where you work</h5>
                              <p>Track time on our web app, desktop, and mobile apps. You can even start the timer from your stopwatch!</p>
                         </div>
                         <div className={styles.Designed_to_empower_logo_child_div}>
                              <img style={{ width: "60%" }} src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/2a0360ce37c992839633143fb27b29b4/5c336/illo-calendar-view.png" alt="" />
                              <h5>Calendar views</h5>
                              <p>Connect your calendar tools to see your daily and weekly events in Toggl Track, and even copy calendar events as time entries.</p>
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

                    <h2 className={styles.employee_page_faq_main_content_h2}>
                         FAQs
                    </h2>
                    <div>
                         <EmployeeFAQ />
                    </div>
               </div>

               <div className={styles.get_your_team_on_Track_main_div}>
                    <h1 style={{ maxWidth: "700px", margin: "0 auto" }}>
                         It's time to get your projects on <em>Track</em>
                    </h1>
                    <div className={styles.get_your_team_on_Track_main_container_div}>
                         <div className={styles.get_your_team_on_Track_child_container_div}>
                              <h4>
                                   “
                              </h4>
                              <h6>
                                   With Toggl Track, we’re never late with projects. We always fulfill our commitments. Because we never over-scope, and we never experience scope creep.
                              </h6>
                              <p>
                                   Marek Šolc, CFO of Ligting Beetle, A Design Studio
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

export default ProjectBudget