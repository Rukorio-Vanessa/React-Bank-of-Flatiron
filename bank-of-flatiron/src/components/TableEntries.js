import React from "react";
import Tables from "./Table";
import Table from 'react-bootstrap/Table';

function TableEntries(props){
    return (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Transaction Date</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                </tr>
              </tbody>  
            </Table>
    )
}

export default TableEntries