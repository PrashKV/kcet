import React, { Component } from "react";

import { info } from "../functions";
import "../style.css";
export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
        };
    }
    componentDidMount() {
        const state = sessionStorage.getItem("roll_no");
        info(state)
            .then((res) => {
                this.setState({ info: res.data });
            })
            .catch((e) => console.log(e));
    }

    render() {
        const { info } = this.state;
        return (
            <div>
                <div className="row col-12 text-center">
                    <h2 className="text-warning ">KCET Results 2021</h2>
                    <h6 className="text-white-50 mt-3">
                        Name :{" "}
                        <span className="fw-bold text-white">{info.name}</span>
                    </h6>
                    <h6 className="text-white-50 mb-4">
                        CET NUMBER :{" "}
                        <span className="fw-bold text-white">
                            {info.roll_no}
                        </span>
                    </h6>
                </div>

                <div className="container d-flex justify-content-center">
                    <div className="row align-self-center">
                        <div className="col-lg-6 col-12 ">
                            <table className="table">
                                <tbody>
                                    <tr className="text-center bg-success">
                                        <th>Discipline</th>
                                        <th>Rank</th>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            Engineering
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.engineering}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            Medical / Dental
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.med}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">BNYS</td>
                                        <td className="text-end fw-bold">
                                            {info.bnys}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            NATA(Architecture)
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.nata}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            Agriculture BSc.
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.agri}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            Veterinary Science
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.vet}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            Agriculture BSc. (Practical)
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.agri_prac}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            Veterinary (Practical)
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.vet_prac}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">B-PHARMA</td>
                                        <td className="text-end fw-bold">
                                            {info.b_pharma}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">PHARMA-D</td>
                                        <td className="text-end fw-bold">
                                            {info.pharma_d}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-left">
                                            LATERAL ENTRY B-PHARMA
                                        </td>
                                        <td className="text-end fw-bold">
                                            {info.lateral}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-5 col-12  justify-contents-center align-self-center ">
                            <div className="text-white details mb-2 mt-2 px-2 fst-italic">
                                Details :
                            </div>
                            <table className="table table-bordered">
                                <tbody className="text-center">
                                    <tr className=" text-center bg-success">
                                        <th>Subject</th>
                                        <th>QE Marks</th>
                                        <th>CET Marks</th>
                                    </tr>

                                    <tr>
                                        <td width="34%">Physics</td>
                                        <td width="23%">{info.phy}</td>
                                        <td width="23%">{info.phy_cet}</td>
                                    </tr>
                                    <tr>
                                        <td width="34%">Chemistry</td>
                                        <td width="23%">{info.chem}</td>
                                        <td width="23%">{info.chem_cet}</td>
                                    </tr>
                                    <tr>
                                        <td width="34%">Mathematics</td>
                                        <td width="23%">{info.math}</td>
                                        <td width="23%">{info.math_cet}</td>
                                    </tr>
                                    <tr>
                                        <td width="34%">Biology</td>
                                        <td width="23%">{info.bio}</td>
                                        <td width="23%">{info.bio_cet}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="row col-12 text-center">
                    <span className="text-muted fst-italic">
                        Data from{" "}
                        <a
                            className="one"
                            href="https://cetonline.karnataka.gov.in/kea/"
                        >
                            KEA
                        </a>{" "}
                    </span>
                </div>
            </div>
        );
    }
}

// body > div.col-lg-6.col-md-offset-3 > div.panel.panel-primary.col-lg-6.col-sm-12
