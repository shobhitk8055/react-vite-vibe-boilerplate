import { Pagination } from "@mui/material";
import React from "react";

export const Table = () => {
  return (
    <div>
      <div className="d-flex justify-content-between pb-3 align-items-end">
        <div className="d-flex align-items-center">
          Show
          <select
            className="mx-2 form-control"
            style={{ padding: "0.175rem 0.75rem" }}
          >
            <option selected>10</option>
            <option>15</option>
            <option>20</option>
          </select>
          entries
        </div>
        <div className="w-25">
          <input className="form-control" placeholder="Search" />
        </div>
      </div>
      <table className="table ">
        <thead className="table-primary">
          <tr>
            <th scope="col">Sr. No.</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-between align-items-end">
        <span>Showing 1 to 10 of 1000 entries</span>
        <Pagination color="primary" count={10} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};
