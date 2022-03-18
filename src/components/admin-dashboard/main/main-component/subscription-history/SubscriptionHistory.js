import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


const SubscriptionHistory =()=> {
  const [subscriptions, setSubscriptions] = useState([])

  const test = () => {
    console.log(subscriptions)
  }

  useEffect(()=>{
    axios.get(`https://api.coinslash.org/v1/coinslash_community/get_subscription_history?slack_workspace_url=freetek`)
    .then(res=>{setSubscriptions(res.data.subsctiptions)})
    .then(console.log("here"))
    }, [])

    
  var subscriptionsList = Object.keys(subscriptions).map(
    function(key){
      return subscriptions[key]
    }
  )
  

  const columns = [
    {
      field: 'transaction_ref',
      headerName: 'Transaction ID',
      width: '150',
      editable: false
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: '150',
      editable: false
    },
    {
      field: 'payment_channel',
      headerName: 'Payment Channel',
      width: '150',
      editable: false
    },
    {
      field: 'selected_plan',
      headerName: 'Selected Plan',
      width: '150',
      editable: false
    },
    {
      field: 'subscription_date',
      headerName: 'Subscription Date',
      width: '200',
      editable: false
    },
  ]

  const rows = subscriptionsList;
    return(
        <div className="content-wrapper">
          <div className='title'>
            <h1>Subscription History</h1>
            <h4>View orders placed by your members of staff.</h4>
          </div>
            <div className="">
            <DataGrid
            rows={rows}
            // getRowId={(row) => row.id}
            getRowId={(row) => row.transaction_ref}
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

export default SubscriptionHistory;