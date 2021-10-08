import React from "react";
import "../style.css";

export default function Home() {
    const local = () => {
        sessionStorage.setItem("page", 0)
    }
    const HomePage = () => {
        return (
            <div className="container-fluid">
                <div className="jumbotron bg-dark text-white text-center">
                    <h1 className="display-3">KCET RESULTS 2021</h1>
                    <p className="lead para" >
                        Get namewise results!
                    </p>
                </div>

                <div className="jumbotron d-flex justify-content-center d-grid mt-5 ml-5 mr-5">
                    <div className="text-white">
                        <h3>KCET name wise results:</h3>

                        <p className="lead">
                            KEA released results of KCET 2021 in the month of September.
                            Students can check their rank and marks based on
                            their name here. For more info visit{" "}
                            <a
                                className="one"
                                href="https://cetonline.karnataka.gov.in/kea/"
                            >
                                official website of KEA
                            </a>
                        </p>
                    </div>
                </div>

                <div className="d-grid mt-2 text-white justify-content-center">
                    <h2 className="text-warning text-left">Search here!</h2>
                </div>

                <div>
                    <div className="middle text-left d-grid mt-2">
                        <form action="\list" method="GET">
                            <div className="form-group">
                                <label className="text-light">Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    autoComplete="off"
                                    id="name"
                                    name="search"
                                />
                            </div>

                            <div className="form-group">
                                <div className="d-grid mt-4 mb-5">
                                    <input
                                        className="btn btn-success"
                                        type="submit"
                                        value="Submit"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="spacer"></div>
                <footer className="footer bg-dark">
                    <div className="container-fluid bg-success text-white-50 text-center py-2">
                        <h6>
                            For any queries, feel free to reach us out{" "}
                            <a
                                className="two"
                                href="https://youtu.be/dQw4w9WgXcQ"
                            >
                                here
                            </a>
                        </h6>
                    </div>
                    <div className="container bg-dark text-center">
                        <span className="text-muted"><small>
                            An amazing{" "}
                            <span className="text-white ">KCET results</span>{" "}
                            website that no-one asked for</small>
                        </span>
                    </div>
                </footer>
            </div>
        );
    };

    return <div>
        { local()}{HomePage()}</div>;
}
