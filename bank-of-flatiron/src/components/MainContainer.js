import React, { useState, useEffect } from "react";
import TableEntries from "./TableEntries";

function MainContainer() {
    //a state to hold all the data we would fetch
    const [table, setTable] = useState([])
    //GET request for all the details to use as entries for the bank transactions
    useEffect(() => {
        fetch("http://localhost:3000/transactions")
          .then((r) => r.json())
          .then((data) => setTable(data)) 
      }, [])

      return(
        <div>
        <TableEntries table={table} setTable={setTable}/>
        </div>
      )
}
