import React, { useState, useEffect, useMemo, useCallback } from "react";
import { lists } from "../functions";
import { useTable, usePagination } from "react-table";
import "./table.css";
import { useLocation, Link } from "react-router-dom";

export default function List() {
    //
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState();

    const location = useLocation();
    var search = location.search.substring(1).split("&")[0].split("=")[1];
    search = search.split("+").filter(Boolean).join(" ");

    const list = useCallback(async () => {
        try {
            const stud = await lists(search);

            setStatus(stud.status);
            setStudents(stud.data);
        } finally {
            setLoading(false);
        }
        // eslint-disable-next-line
    }, [loading, status]);

    useEffect(() => {
        list();
    }, [list]);

    const COLUMNS = [
        {
            Header: "Roll Number",
            accessor: "roll_no",
        },
        {
            Header: "Name",
            accessor: "name",
        },
    ];

    const columns = useMemo(
        () => COLUMNS,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const data = useMemo(() => students, [students]);

    const tableInstance = useTable(
        {
            columns,
            data,
            initialState: {
                pageIndex: parseInt(sessionStorage.getItem("page")),
                pageSize: 14,
            },
        },
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        state: { pageIndex },
    } = tableInstance;

    return (
        <div>
            {!loading && status === 200 ? (
                <div>
                    <h2 className="text-warning mt-2 marg">
                        KCET Results 2021
                    </h2>
                    <p className="text-white marg">
                        Search results for "
                        <span className="fw-bolder">{search.trim()}</span>"
                    </p>
                    <table className="tables" {...getTableProps()}>
                        <thead>
                            {headerGroups.map((headerGroup) => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map((column) => (
                                        <th {...column.getHeaderProps()}>
                                            {column.render("Header")}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map((row, i) => {
                                prepareRow(row);
                                return (
                                    <tr
                                        {...row.getRowProps()}
                                        className="one"
                                        onClick={() => {
                                            sessionStorage.setItem(
                                                "roll_no",
                                                row.cells[0].value
                                            );
                                            // console.log(row.cells[0].value);
                                            window.location.href = `/display`;
                                        }}
                                    >
                                        {row.cells.map((cell) => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render("Cell")}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="pagination mt-4 mb-2">
                        <button
                            className="pb-1 one"
                            onClick={() => {
                                if (canPreviousPage) {
                                    sessionStorage.setItem(
                                        "page",
                                        pageIndex - 1
                                    );
                                }
                                window.scrollTo(0, 0);
                                previousPage();
                            }}
                            disabled={!canPreviousPage}
                        >
                            {"<"}
                        </button>{" "}
                        <span className="text-white text pt-2">
                            Page{" "}
                            <strong>
                                {pageIndex + 1} of {pageOptions.length}
                            </strong>{" "}
                        </span>
                        <button
                            className="pb-1 two"
                            onClick={() => {
                                if (canNextPage) {
                                    sessionStorage.setItem(
                                        "page",
                                        pageIndex + 1
                                    );
                                }
                                window.scrollTo(0, 0);
                                nextPage();
                            }}
                            disabled={!canNextPage}
                        >
                            {">"}
                        </button>{" "}
                    </div>
                </div>
            ) : (
                <div className="d-flex flex-column min-vh-100 text-center justify-content-center align-items-center">
                    {loading ? (
                        <h6 className="text-white">loading...</h6>
                    ) : null}
                    {!loading && status !== 200 ? (
                        <div>
                            <h2 className="text-danger">{students}</h2>
                            <Link className="btn btn-warning mt-4" to="/">
                                Back
                            </Link>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    );
}
