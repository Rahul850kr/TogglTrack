import React from 'react'

import styles from '../Employe-time/employee.module.css'

import { useNavigate } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Footer from '../Homepage/Footer';



const Reporting = () => {
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
                        A time reporting system that gives you actionable insights
                    </h1>
                </div>
                <div>
                    <p>
                        See at a glance where your team spends their time with our time reporting dashboards. Filter time entries by project, team or date to create insightful reports.
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
                        <button onClick={() => navigate("/signup")}>Sign up for free</button>
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
                        Time reports to stay informed, <em>accountable</em>, and transparent
                    </h2>
                </div>

                {/* // here i make Less timesheets, more time */}

                <div className={styles.Less_timesheets_main_div} >
                    <div>
                        <h3>
                            Insights like flashlights
                        </h3>
                        <p>
                            From profitability projections to earnings-per-client to ROI to milestone setting, better understand how your team works. And turn your business into a winning one.
                        </p>
                    </div>
                    <div className={styles.Less_timesheets_img_main_div} >
                        <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/59e7925ceb89c4e8844b5d3cf0f9da15/c8e9a/feature-report-user-alt.png" alt="" />
                    </div>
                </div>

                {/* // here i make Bye-bye admin time */}

                <div className={styles.Less_timesheets_main_div} style={{ flexDirection: "row-reverse" }}>
                    <div>
                        <h3 >
                            Build trust with client-ready visuals
                        </h3>
                        <p>
                            Be transparent about where client hours are going, improve existing relationships—and win more. Share what you've been working on with beautiful weekly or monthly reports that show it.
                        </p>
                    </div>
                    <div className={styles.Less_timesheets_img_main_div}>
                        <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/55f31c7a59217a62ae1f7f99d917a26b/27e61/feature-reports-share.png" alt="" />
                    </div>
                </div>


                <div className={styles.Less_timesheets_main_div}>
                    <div>
                        <h3>
                            Flexible time reports for every type of meeting
                        </h3>
                        <p>
                            Showcase your team's contributions in quarterly meetings. Make a case for a new hire or bigger budgets. Track R&D to maximize tax credits. You've put in the hours—the proof is in the reporting.
                        </p>
                    </div>
                    <div className={styles.Less_timesheets_img_main_div}>
                        <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/ffef750ba2e5391ce037dbe25f36d475/d2480/feature-all-reports.png" alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.co_founder_of_Newlogic_main_div}>
                <div>
                    <h4>
                        “Toggl Track gives us the opportunity to outcompete our rivals. When we pitch new business, we bring our Toggl Track Time Reports and demonstrate the level of visibility we can provide.”
                    </h4>
                    <p>
                        — David Jackson, CEO at FullStack Labs
                    </p>
                </div>
                <div>
                    <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/9b5a3ae0874ace24c893b26de0de121d/51ce3/speaker-jackson.png" alt="" />
                </div>
            </div>


            <div>
                <div className={styles.Designed_to_empower_main_div}>
                    <h2>
                        Streamlined, integrated data collection for <em>accurate</em> reporting
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
                        <img src="https://public-assets.toggl.space/a23815ec-b3c6-4f07-8a09-fab3a1c4363f/static/aaeb281e59e470758c049603db7f86a6/91868/illo-ok-hand.png" alt="" />
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
                    It's time to get your team on  <em>Track</em>
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

export default Reporting