import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table'
import Aside from "../../../aside/Aside";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import './Orders.css'
import {CustomSelect, Button} from "../../../../styled-components/Inputs";

const statusOptions = [
  {
    label: "Ordered",
    value: "ordered"
  },
  {
    label: "Assigned To Dispatch",
    value: "assigned_to_dispatch"
  },
  {
    label: "Delivered",
    value: "delivered"
  },
]

const changeOrderStatus=(e, params) => {
    axios.post("https://api.coinslash.org/v1/coinslash_community/update_order_status", {
        "order_id": e,
        "old_status": e,
        "new_status": e
    })
    console.log(params.row.id)
    console.log(e)
}

const columns = [
  { field: 'id', headerName: 'ID', width:150 },
  { field: 'title', headerName: 'Title', width: 300 },
//   { field: 'body', headerName: 'Body', width: 300 },
  { field: 'actions',
    type: 'actions',
    headerName: 'Action', 
    width: 350 ,
    disableClickEventBubbling: true,
    sortable: false,
    getActions: (params) => [
    <CustomSelect 
      type="select"
      required
      name="status"
      defaultValue="ordered"
      options={statusOptions}
      onChange={(e)=>changeOrderStatus(e, params)}
    // onClick={() => console.log(params.row.id)}
      />
        // <Button onClick={() => console.log(params.row.id)}>
        //   Test
        // </Button>,
      ],

  }
]

const AllFood = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  return (
    <div className="content-wrapper">
    <div className='title'>
      <h1>Orders</h1>
      <h4>View and manage all orders</h4>
    </div>
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row.id}
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
    </div>
  )
}

export default AllFood;