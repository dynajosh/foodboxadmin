import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Body', width: 600 }
]

const Orders = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/psts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div className="content-wrapper">
    <div className='title'>
      <h1>Order History</h1>
      <h4>View all orders</h4>
    </div>
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
    </div>
  )
}

export default Orders;

