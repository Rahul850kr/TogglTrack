import styles from "./table.module.css";
import { BsCheckLg } from "react-icons/bs";
import { Tooltip } from '@chakra-ui/react';
import { AiOutlineExclamationCircle } from "react-icons/ai";




const Table = () => {

    return (
        <div className={styles.main_container} id="pricingTable">
            <h1>Full Plan Comparison</h1>
            <div className={styles.container_heading}>Time Tracking</div>
            <div className={styles.grid_container}>

                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Web app, mobile apps, and desktop apps</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Pomodoro timer</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Idle time detection</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Personal time tracking reminders</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Automated time tracking triggers</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Personal desktop activity tracking</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Favorite time entries</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>

            </div >
            <div className={styles.container_heading}>Team Management</div>
            <div className={styles.grid_container}>

                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Overview of team activity</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>User groups</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Team access level management</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Team time tracking reminder emails</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Add time for team members</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Manage team member billable rates and labor costs</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Single Sign-On (SSO)</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>

            </div >



            <div className={styles.container_heading}>Reporting</div>
            <div className={styles.grid_container}>

                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Exportable Summary, Detailed, and Weekly reports</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>CSV imports</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>XLS export</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Billable rates</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Time rounding for reports</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Custom company logo</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Saved Reports</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Schedule saved reports via email</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Set required fields for time entries</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Limit tag access</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Lock time entries</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Historical billable rates</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Time entry audits</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>

            </div >


            <div className={styles.container_heading}>Project Management</div>
            <div className={styles.grid_container}>

                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Unlimited projects and clients</p>
                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Pre-populated project templates</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Tasks (sub-projects)</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Project time estimates and alerts</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Recurring projects</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Project forecasts and analysis</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>


            </div >



            <div className={styles.container_heading}>Integrations</div>
            <div className={styles.grid_container}>

                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Track time in 100+ popular tools with the Toggl Track browser extension</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>API (Toggl Track API + Reports API)</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>View Outlook and Google Calendar events in Toggl Track</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>View tracked time in your calendar</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Jira Sync</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.griditem_1} ${styles.grid_item} ${styles.grid_item_text}`}>
                    <div>

                        <p>Salesforce Sync</p>

                    </div>

                    <div>
                        <Tooltip label="Hey, I'm here!" aria-label='A tooltip'>
                            <AiOutlineExclamationCircle className={styles.tooltip} />
                        </Tooltip>
                    </div>


                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>
                <div className={`${styles.grid_item_2} ${styles.grid_item}  ${styles.grid_item_check}`}>
                    <BsCheckLg className={styles.check} />

                </div>


            </div >
        </div >

    )
};


export default Table;