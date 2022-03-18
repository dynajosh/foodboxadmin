import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table'
import Aside from "../../../aside/Aside";
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { usePaystackPayment } from 'react-paystack';
import './Subscribe.css'


var SubscriptionParams = {
  amount: 0,
  transaction_ref: "string",
  payment_channel: "string",
  slack_workspace_url: "string",
  selected_plan: "string",
  team_size: "string"
}


const Subscribe =()=> {
  const email = "oriakhi78@gmail.com"
  const [fee, setFee] = useState(500)



  const config ={ 
    reference: (new Date().getTime().toString),
    email: "ffnfjnfj@gmail.com",
    amount: fee*100,
    publicKey: "pk_test_665b1af80c031dbbefca54b85428c315170ce04c"
  }

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    successCall()
  };

  const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  // console.log('closed')
  setFee(500)
  // console.log(fee)
  }

  const successCall = () => {
    // console.log("Hiiiiii")
  }

  const payFunction = () => {
    console.log(fee)
    initializePayment(onSuccess, onClose, console.log("Works"))
  }

const activateSubscription =() => {
    axios.post(`https://api.coinslash.org/v1/coinslash_community/record_subscription`, {
      data: SubscriptionParams
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
    // setSubscriptions(res.data)
  }

  return (
    <div className="content-wrapper">
      <div className='title'>
            <h1>Top Up</h1>
            <h4>Select a plan for your team or upgrade your existing plan.</h4>
          </div>
      <div>

      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-icon">
            {" "}
            <span>
              <i className="las la-coins"></i>
            </span>
          </div>
          <div className="card-description">
            <p>Gold</p>
          </div>
          <div className="card-value">NGN 50,000</div>
          <button className="subscribe-button" onClick={payFunction}>Subscribe</button>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">
            {" "}
              <span>
                <i className="las la-utensils"></i>
              </span>
          </div>
          <div className="card-description">
            <p>Diamond</p>
          </div>
          <div className="card-value">NGN 40,000</div>
          <button className="subscribe-button" onClick={()=>setFee(500), payFunction}>Subscribe</button>

        </div>
        <div className="dashboard-card">
          <div className="card-icon">
            {" "}
              <span>
                <i className="las la-users"></i>
              </span>
          </div>
          <div className="card-description">
            <p>Platinum</p>
          </div>
          <div className="card-value">NGN 30,000</div>
          <button className="subscribe-button" onClick={payFunction}>Subscribe</button>

        </div>
      </div>
    </div>
  );
}

export default Subscribe;