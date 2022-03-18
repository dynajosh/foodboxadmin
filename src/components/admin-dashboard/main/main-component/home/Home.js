import axios from "axios";
import React, { Profiler, useEffect, useState } from "react";
import "./Home.css";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Button } from "@mui/material";


export default function Home() {
  const [balance, setBalance] = useState(0)
  const [profile, setProfile] = useState({})
  const [orderCount, setOrderCount] = useState([])
  const slackbotURL = "https://slack.com/oauth/v2/authorize?client_id=2919381425936.2888984705526&scope=channels:history,channels:manage,channels:read,chat:write,chat:write.public,groups:write,im:history,im:read,im:write,mpim:write,users:read&user_scope="

  useEffect(()=>{
    axios.get(`https://api.coinslash.org/v1/coinslash_community/get_company_profile?slack_workspace_url=freetek`)
    .then(res =>{setProfile(res.data.data)})
    // console.log(profile)

    axios.get(`https://api.coinslash.org/v1/coinslash_community/get_order_history?slack_workspace_url=freetek`)
    .then(res=>{setOrderCount(res.data.subsctiptions)})    
  }, [])

  return (
    <div className="home-wrapper">
      <div className="welcome-div">
        <h1>Welcome Admin</h1>
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
            <p>Total Orders</p>
          </div>
          <div className="card-value">{profile.remaining_budget}</div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">
            {" "}
              <span>
                <i className="las la-utensils"></i>
              </span>
          </div>
          <div className="card-description">
            <p>Assigned to Dispatch</p>
          </div>
          <div className="card-value">0</div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon">
            {" "}
              <span>
                <i className="las la-users"></i>
              </span>
          </div>
          <div className="card-description">
            <p>Delivered</p>
          </div>
          <div className="card-value">0</div>
        </div>
      </div>
    </div>
  );
}
