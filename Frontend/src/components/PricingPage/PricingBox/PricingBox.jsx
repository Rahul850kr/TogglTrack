import styles from "./pricingbox.module.css";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { Tooltip } from '@chakra-ui/react'
const PricingBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.productCard}>
                    <h6>Free</h6>
                    <p>Seamless time tracking and reporting designed with freelancers in mind</p>
                    <div className={styles.price}>
                        <span>$0</span>
                        Free for up to 5 users.
                    </div>
                    <hr />
                    <ul>
                        <li><BsCheckLg />Unlimited time tracking</li>
                        <li><BsCheckLg />Unlimited projects, clients, and tags</li>
                        <li><BsCheckLg />Exportable reports</li>
                        <li><BsCheckLg />Web app, mobile apps, and desktop apps

                            <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                                <AiOutlineExclamationCircle className={styles.tooltip} />
                            </Tooltip>

                        </li>
                        <li><BsCheckLg />Automated time tracking triggers</li>
                        <li><BsCheckLg />Idle time detection</li>
                        <li><BsCheckLg />Pomodoro timer</li>
                        <li><BsCheckLg />CSV imports
                            <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                                <AiOutlineExclamationCircle className={styles.tooltip} />
                            </Tooltip>

                        </li>
                        <li><BsCheckLg />Personal desktop activity tracking
                            <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                                <AiOutlineExclamationCircle className={styles.tooltip} />
                            </Tooltip>

                        </li>
                        <li><BsCheckLg />Track time in 100+ popular tools
                            <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                                <AiOutlineExclamationCircle className={styles.tooltip} />
                            </Tooltip>

                        </li>
                    </ul>
                    <button className={styles.getStartedbtn}>Get Started</button>

                </div>
                <div className={styles.productCard}>
                    <h6>Starter</h6>
                    <p>Built for small teams to work at a fast pace without a lot of overhead</p>
                    <div className={styles.price}>
                        <span>$9</span>
                        per user per month
                    </div>
                    <hr />

                    <ul>
                        <li><BsCheckLg />Everything in Free +</li>
                        <li><BsCheckLg />Billable rates</li>
                        <li><BsCheckLg />Time rounding for reports</li>
                        <li><BsCheckLg />Favorite time entries</li>
                        <li><BsCheckLg />Create Saved Reports for quick online access</li>
                        <li><BsCheckLg />Project time estimates and alerts</li>
                        <li><BsCheckLg />Tasks (Sub-projects)</li>
                        <li><BsCheckLg />Pre-populated project templates</li>
                        <li><BsCheckLg />View tracked time in your calendar

                            <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                                <AiOutlineExclamationCircle className={styles.tooltip} />
                            </Tooltip>

                        </li>

                    </ul>
                    <button className={styles.getStartedbtn}>Get Started</button>

                </div>

                <div className={`${styles.productCard} ${styles.premiumPopup}`}>
                    <h6>Premium</h6>
                    <p>Powerful tools to keep growing teams aligned and agile</p>

                    <div className={styles.price}>
                        <span>$18</span>

                        per user per month
                    </div>
                    <hr />

                    <ul>
                        <li><BsCheckLg />Everything in Starter +</li>
                        <li><BsCheckLg />Team time tracking reminders</li>
                        <li><BsCheckLg />Schedule saved reports via email</li>
                        <li><BsCheckLg />Time tracking audits</li>
                        <li><BsCheckLg />Project forecasts and analysis</li>
                        <li><BsCheckLg />Centralized control of labor costs and billable rates for team members</li>
                        <li><BsCheckLg />Lock time entries and add time for team members</li>
                        <li><BsCheckLg />Set required fields for time entries</li>
                        <li><BsCheckLg />Single sign-on (SSO)</li>
                        <li><BsCheckLg />Native Jira and Salesforce integrations

                            <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                                <AiOutlineExclamationCircle className={styles.tooltip} />
                            </Tooltip>

                        </li>
                    </ul>
                    <button className={styles.getStartedbtn}>Get Started</button>

                </div>
                <div className={styles.productCard}>
                    <h6>Enterprise</h6>
                    <p>Tailored solutions for your large or complex organization</p>
                    <div className={styles.price}>
                        <span>~</span>
                        Custom pricing. Unlimited users.
                    </div>
                    <hr />
                    <ul>
                        <li><BsCheckLg />Everything in Premium +</li>
                        <li><BsCheckLg />Manage multiple workspaces under one Organization</li>
                        <li><BsCheckLg />Priority support</li>
                        <li><BsCheckLg />Expert training and assistance</li>
                        <li><BsCheckLg />Customizable solutions</li>
                        <li><BsCheckLg />Volume discounts for large teams on our annual plan</li>
                    </ul>
                    <button className={styles.getStartedbtn}>Get Started</button>

                </div>
            </div>
        </div>
    )
}


export default PricingBox;
