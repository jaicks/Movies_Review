import React from 'react'

function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="footer p-3 mt-4 text-center bg-dark text-light">
                                Developed By:
                                <span className="text-warning font-weight-normal">
                                    Jaicky Kumar
                                </span>
                                , using React Js &amp; Redux JS
                                 <p className="float-right">
                                    <a href="#">Back to Top</a>
                                </p>
                                <p>Movies Rating App is © IMD Rating type app, I make with the help of React, Redux, BootStrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
