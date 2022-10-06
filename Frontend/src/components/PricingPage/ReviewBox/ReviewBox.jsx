import styles from "./reviewBox.module.css"



const ReviewBox = () => {
    return (
        <div className={styles.container}>
            <div className={styles.reviewBox}>
                <div className={styles.reviewTop}>
                    <div>
                        “Toggl Track increased our profitability by at least 20%. We found out where the
                        team was spending too much time on clients. Toggl Track gave us the ability to
                        restrategize, find out what’s wrong, and fix it.”


                        <br />
                        <br />

                        <p>— Sweat+Co on Toggl Track’s Premium plan.</p>

                    </div>
                    <div className={styles.reviewImg}>
                        <img src="https://public-assets.toggl.com/b/static/81d28305aa04efef1d9588833a218978/de391/case-study-sweatandco.png" alt="ceo"></img>

                    </div>

                </div>

                <div className={styles.reviewBottom}>
                    <p>Toggl Track is trusted by Sweat+Co and 70,000+ teams</p>
                    <button>Try Toggl Track</button>
                </div>
            </div>



        </div>
    )
};


export default ReviewBox;