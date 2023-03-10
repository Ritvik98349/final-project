import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import './home.css';
import {GrShare} from 'react-icons/gr';
import { Link } from "react-router-dom";


export default function Home() {
    const [articles, setArticles] = useState([]);
    const getArticles = async () =>{
        const articleRequest = await axios.get("http://localhost:3333/Artciles");
        // console.log(articleRequest);
        setArticles(articleRequest.data);
        // console.log(articles);
    } 
    useEffect(() => {
        getArticles();
    }, []);    
    return(
        <>
            <div>
                
            <div className="landing1">
                <div className="landing1container">
                    <div className="landing1_1" style={{display:'flex', justifyContent:'center', width:'100%'}}>
                        <p className="l1_p1">Blog</p>
                    </div>
                    <div className="landing1_2" style={{display:'flex', justifyContent:'center', width:'100%', paddingBottom:'3rem'}}>
                        <p className="l1_p2">Resource Library</p>
                    </div>
                    <div className="landing1_3" style={{display:'flex', justifyContent:'center', width:'100%'}}>
                        <p className="l1_p3">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
                    </div>
                    {/* <div className="emailCapture">
                        <div className="inputField">
                            <input className="inputLabel" placeholder="Type your Email here 123"/>
                            <div className="hintText">
                                <p className="hintTextText">We care about your data in our privacy policy.</p>
                            </div>
                            <div>
                                <button className="getStarted" placeholder="">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div> */}
                         <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                            <div style={{display:'flex',justifyContent:'space-between', width:'55%'}}>
                                <input className="input_type1" placeholder="Type Your Email here"/>
                                <button className="GetStarted">Get Started</button>
                            </div>
                            <div style={{justifyContent:'left'}}>
                                <p className="hintText">We care about your data in our privacy policy.</p>
                            </div>
                        </div>
                    </div>

            </div>
            {/* Section 2 */}
            <div>
                    <div className="container2">
                        <div className="blogPostCard">
                            <img src="/images/image.png" style={{marginTop:'-10rem'}}/>
                            <div className="content">
                                <div style={{marginTop:'-2rem'}}><p className="contentp1">Olivia Rhye ??? 20 Jan 2022</p></div>
                                <div><p className="contentp2" style={{marginTop:'-2rem'}}>UX review presentations</p></div>
                                <div className="contentp3" style={{marginTop:'-2rem'}}>How do you create compelling presentations that wow your colleagues and impress your managers?</div>
                                <div>
                                    <div className="contentCat1">
                                        <p style={{color:'#6941C6',textAlign:'center', paddingTop:'0.35rem'}}>Design</p>
                                    </div>                                                                      
                                </div>
                            </div>
                        </div>
                        <div className="cardRow">
                    {articles.length > 0 ? articles.map((artcile, i) => {
                        return(
                            
                                <div className="layoutCard">
                                    <img src="/images/image1.png" style={{width: '384px',height: '240px'}}></img>
                                    <div className="layoutCardcontent">
                                        <div className="layoutCardcontent1">
                                                {artcile.Author} ??? {artcile.Date}
                                        </div>
                                        <div style={{display:'flex',justifyContent:'space-between'}}>
                                            <div className="layoutCardcontent2">
                                                    {artcile.Title}
                                            </div>
                                            {/* <div className="sharebtn"> */}
                                            <Link to={`/${artcile.id}`}>
                                               <button className="sharebtn"><GrShare></GrShare></button>

                                            </Link>
                                            {/* </div> */}
                                        </div>
                                        <div className="layoutCardcontent3">
                                                {artcile.Intro}
                                        </div>
                                        <div>
                                        <div className="contentCat1">
                                            <p style={{color:'#6941C6',textAlign:'center', paddingTop:'0.35rem'}}>{artcile.Category}</p>
                                        </div>   
                                        </div>
                                    </div>
                                </div>
                            )
                        }):'No Articles Yet'}
                        </div>

                    </div>
            </div>
            </div>
            <div className="newsletter">
                 <div className="newsletter-content">
                     <div className="newsletter-part1" >
                         <div className="newsletter-part1-first">Sign up for our newsletter</div>
                         <div className="newletter-part1-second">Be the first to know bout releases and industry news and insights.</div>
                     </div>
                     <div className="newsletter-part2">
                         <div className="newsletter-part2-left">
                             <div className="newsletter-part2-left-up">
                                 <input type="text" placeholder="Enter your email"></input>
                             </div>
                             <div className="newsletter-part2-left-down">
                                 We care about your data in our privacy policy.
                             </div>
                         </div>
                         <div className="newsletter-part2-rightdiv">
                             <button className="newsletter-part2-right">Subscribe</button>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="footer">
                 <div className="footer-container">
                     <div className="footer-content">
                         <div className="logo-and-links">
                             <div className="logo">
                                     <img src="/images/Blogger-Logo.jpg" width="10%" ></img>
                                 </div>
                             <div className="footer-links">
                                 <span>Overview</span>
                                 <span>Features</span>
                                 <span>Pricing</span>
                                 <span>Careers</span>
                                 <span>Help</span>
                                 <span>Privacy</span>
                             </div>
                         </div>
                         <div className="newsletter2">
                             <p> stay up to date</p>
                             <div className="email-capture">
                             <input className="email-capture-left" type="text" placeholder="Enter your email"></input>
                             <button className="email-capture-right">Subscribe</button>
                             </div>
                         </div>
                         </div>
                     </div>

                 <div className="footer-container2">
                     <div className="footer-content2">
                         <div className="footer-text"> &#169; 2077 Untitled UI. All rights reserved.</div>
                         <div className="footer-links2">
                             <span>Terms</span>
                             <span>Privacy</span>
                             <span>Cookies</span>
                         </div>
                     </div>
                 </div>
             </div>             
        </>
    )
}
