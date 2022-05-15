import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {  useNavigate } from 'react-router-dom';

import '../Pricing.css';


export default function Pricing() {
  const navigate = useNavigate();

  const basic =()=>{
    navigate('/payment',{state:{price:0,quantity:1 ,description:'Free Basic Package '}});
  }

  const standard =()=>{
    navigate('/payment',{state:{price:850,quantity:1 ,description:'Standard Package '}});
  }
  const gold=()=>{
      navigate('/payment',{state:{price:1750,quantity:1 ,description:'Gold Package '}});
  }
  const platinum=()=>{
      navigate('/payment',{state:{price:4000,quantity:1 ,description:'Platinum Package '}});
  }

  return (
    <div className="pricing_container">
      <div className="pricing_contents">
        <div className="pricing_header">
          <h1>
          Website Design Packages for <span>Smaller Businesses</span> 
          </h1>
        </div>
        <div className="pricing_main">
          <p>
          At Software Dev Bytes, we assist companies of all sizes with their <Link to="/websites">Website Development</Link>
           , <Link to="/ecommerce">Search Engine Optimization </Link>  and <Link to="/websites">Website Maintenance </Link> needs. To help 
           smaller businesses, we&#39;ve created a number of website design packages. We do this
            because we know how challenging it is for smaller companies to find a website developer
             that can serve their needs properly and responsively. Our packages allow small business
              owner to get a first class website without large upfront costs. Best of all you will have 
              us available on-call to support your update and maintenance needs.
              </p>
<p>

           When working with us, you won&#39;t get complicated and disheartening up-charges or 
           overly technical lingo, just simple, straight-forward answers to your questions. 
           To see what we mean, take a look at our packages and pricing. Once you do, you&#39;ll 
           understand why they&#39;re so popular with smaller businesses.
</p>
         
        </div>
        <div className="table_contents">
          
          <div className="table_items">
            <table>
              <thead>
                <tr>
                  <th scope="col">Packages</th>
                  <th scope="col">Basic</th>
                  <th scope="col">Standard</th>
                  <th scope="col">Gold</th>
                  <th scope="col">Platinum</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row">Pages</th>
                  <td>Up to 3</td>
                  <td>Up to 7</td>
                  <td>Up to 10</td>
                  <td>10+</td>
                </tr>
                <tr>
                  <th scope="row">Hosting and registration (1 domain)</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Revisions Per Month</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Premium Website Analytics</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Responsive Design (Mobile Friendly)</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Keyword Analysis</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Search Engine Optimized Images</th>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">XML and HTML Sitemaps</th>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Website Support Team Available</th>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">1 Custom Email Address (Optional)</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Access To Content Management System</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">High Quality Graphics</th>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">
                  Upgraded Features like Event Calendars,
                   Biogs, Google Maps, pop forms and 
                   Social Media Sharing
                  </th>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">Lead Conversion Forms</th>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="red"><ClearIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                  <th scope="row">SSL Certificates (Add-On)</th>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                  <td className="green"><CheckIcon /></td>
                </tr>
                <tr>
                <th scope="row">Price</th>
                  <td>Free</td>
                  <td>$850</td>
                  <td>$1750</td>
                  <td>$4000</td>
                </tr>
                <tr className="button_row">
                  <th scope="row" >Minimum 1 Year Contract</th>
                  <td> <button onClick={()=>{basic()}} className="basic">Subscribe</button> </td>
                  <td><button onClick={()=>{standard()}} className="standard">Subscribe</button></td>
                  <td><button  onClick={()=>{gold()}} className="gold">Subscribe</button></td>
                  <td><button  onClick={()=>{platinum()}} className="platinum">Subscribe</button></td>
                </tr>

              </tbody>

            </table>
            <p>Add-ons: Additional services can be added to your plan upon request.</p>

          </div>
          <div className="getin_touch">
            <p>
            Email: afeez20@gmail.com, find us at www.softwaredevbytes.com or call us at 747-249-8760
            </p>

          </div>
        </div>
      </div>
      
    </div>
  );
}

