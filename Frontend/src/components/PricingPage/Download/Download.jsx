
import style from "./download.module.css";


const Download = () => {
    return (
        <div className={style.download_main_container}>
            <div
                className={`${style.download_container} ${style.download_description}`}
            >
                <h1>Online, offline or on the go?
                    We <img src="https://i.ibb.co/XFt0vTK/text1.png"></img> app for that!
                </h1>
                <p>Your data instantly syncs across all apps and devices</p>
            </div>
            <div
                className={`${style.download_container} ${style.download_types}`}
            >
                <div className={`${style.download_type}`}>

                    <div className={`${style.download_type_heading}`} >
                        <img src="https://i.ibb.co/CQZ6Qhy/mobile.png"></img>
                        <h5>MOBILE APPS</h5>
                        <p>Start and stop tracking from anywhere

                        </p>
                    </div>
                    <div className={`${style.download_btn}`}>
                        <button className={`${style.download_btn_ios}  ${style.download_btn_props}`}><img
                            src="https://public-assets.toggl.com/b/static/e25cbb59a5a23262acbe030b4ce4891a/b2057/icon-apple.png"
                        >
                        </img>iOS</button>
                        <button className={`${style.download_btn_android}  ${style.download_btn_props} `}>
                            <img
                                src="https://public-assets.toggl.com/b/static/57389a8f02dc9b6c20e88547b5b8b809/ec093/icon-android.png"
                            >
                            </img>
                            Android</button>
                    </div>



                </div>
                <div className={`${style.download_type}`}>
                    <div className={`${style.download_type_heading}`} >
                        <img src="https://i.ibb.co/tPZzRy4/laptop.png"></img>
                        <h5>DESKTOP APPS</h5>
                        <p>For users who want to work with minimal distractions
                        </p>
                    </div>
                    <div className={`${style.download_btn}`}>
                        <button className={`${style.download_btn_windows} ${style.download_btn_props}`}>
                            <img
                                src="https://public-assets.toggl.com/b/static/204f64a175de64c7d473278ae048f2f2/88208/icon-windows.png"
                            >

                            </img>
                            Windows</button>
                        <button className={`${style.download_btn_macOS}  ${style.download_btn_props}`}>
                            <img
                                src="https://public-assets.toggl.com/b/static/e25cbb59a5a23262acbe030b4ce4891a/b2057/icon-apple.png"
                            >

                            </img>
                            macOS</button>
                    </div>

                </div>
                <div className={`${style.download_type} `}>
                    <div className={`${style.download_type_heading}`} >
                        <img src="https://i.ibb.co/12Tz9MG/web.png"></img>
                        <h5>WEB APP</h5>
                        <p>To view time reports, manage projects, and teams  </p>
                    </div>
                    <div className={`${style.download_btn}`}>
                        <button className={`${style.download_btn_signup}  ${style.download_btn_props}`}>Sign up for free</button>
                    </div>

                </div>
                <div className={`${style.download_type}`}>
                    <div className={`${style.download_type_heading}`} >
                        <img src="https://i.ibb.co/nnzD716/browser.png"></img>
                        <h5>BROWSER PLUGINS</h5>
                        <p>100+ integrations with your favorite online tools</p>
                    </div>
                    <div className={`${style.download_btn}`}>
                        <button className={`${style.download_btn_chrome}  ${style.download_btn_props} `}>
                            <img

                                src="https://public-assets.toggl.com/b/static/332df9a3c112ad4f9957b2955ccd6e8a/ec733/chrome.png"
                            >

                            </img>


                            Chrome</button>
                        <button className={`${style.download_btn_firefox}  ${style.download_btn_props}`}>
                            <img
                                src="https://public-assets.toggl.com/b/static/319c6802313fdddaae75bbe61ec3501b/88208/firefox.png"
                            >
                            </img>

                            Firefox</button>
                    </div>

                </div>
            </div>

        </div>
    )
}



export default Download;