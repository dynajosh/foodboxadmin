import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table'
import Aside from "../../../aside/Aside";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import './Orders.css'


const OrderHistory =()=> {
  const [orders, setOrders] = useState([])

  // useEffect(()=>{
  //   axios.get(`https://fakestoreapi.com/products/`)
  //   .then(res=>{setOrders(res.data.subsctiptions)})
  //   .catch(err=>console.log(err))
  // }, [])
  
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data)=>data.json())
    .then((data)=> setOrders(data))
    .then((data)=>console.log(data))
  })


  const columns = [
    {
      field: 'userId',
      headerName: 'Order ID',
      width: '150',
      editable: false
    },
    {
      field: 'title',
      headerName: 'Slack User',
      width: '150',
      editable: false
    },
    {
      field: 'body',
      headerName: 'Food Name',
      width: '150',
      editable: false
    },
  //   {
  //     field: 'food_price',
  //     headerName: 'Food Price',
  //     width: '150',
  //     editable: false
  //   },
  //   {
  //     field: 'delivery_phone_number',
  //     headerName: 'Phone Number',
  //     width: '150',
  //     editable: false
  //   },
  //   {
  //     field: 'date',
  //     headerName: 'Date / Time',
  //     width: '200',
  //     editable: false
  //   },
  //   {
  //     field: 'status',
  //     headerName: 'Delivery Status',
  //     width: '200',
  //     editable: false
  //   },
  ]

  const rows = orders;
    return(
        <div className="content-wrapper">
          <div className='title'>
            <h1>Order History</h1>
            <h4>View all orders</h4>
          </div>
            <div className="">
            <DataGrid
            rows={rows}
            getRowId={(row) => row.order_id}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            autoHeight
          />   
            </div>
        </div>
    )
}

export default OrderHistory;