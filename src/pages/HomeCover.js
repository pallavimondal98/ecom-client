import React from 'react';
import './Home.css'
import Marquee from "react-fast-marquee";
import Swiper from './Swiper'
import { Link } from 'react-router-dom';

const HomeCover = () => {
  
  return (
    
    <div className="hm2">{/* <!-----------main boday------------>*/}
      <Marquee className='css2'>
        <ul><li>LOWEST PRICES</li> <li>CASH ON DELIVERY</li> <li>QUICK RETURNS</li> <li>LOWEST PRICES</li> <li>CASH ON DELIVERY</li> <li>QUICK RETURNS</li></ul>
      </Marquee>

      {/*<!---------banner-1 section------->*/}
      <div className="banner-1">     
          <div className="badge ">
              <div className="text">Barlow</div>
          </div>
          <div className="logo brand-logo" style={{textAlign: 'center', fontSize: '69px'}}><span style={{color:'red'}}>B</span><span className="small-text">arlow</span></div>
          <p>A Place Where You Can Find Your Drame Dress</p>
      </div>

      {/* <!---------Category Section---------->*/}
      <section className="sec-0">   
          <h1><b>Category</b></h1>
          <div className="catogary">
              <div className="card catogary-card" style={{width: '18rem'}}>
                  <img src="https://assets.ajio.com/medias/sys_master/root/20230601/u7Kf/6478b55cd55b7d0c6330eef5/-1117Wx1400H-469486467-white-MODEL.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text"><Link to="/mens"><b>Men Category</b></Link></p>
                  </div>
                </div>
                <div className="card catogary-card" style={{width: '18rem'}}>
                  <img src="https://assets.ajio.com/medias/sys_master/images/images/ha4/h9b/50097337827358/Brand-Category-rio.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text"><Link to="/womens"><b>Women Catogary</b></Link></p>
                  </div>
                </div>
                <div className="card catogary-card" style={{width: '18rem'}}>
                  <img src="https://assets.ajio.com/cms/TRENDS/MOBILE/Tiles-Ajio_riogirl.jpg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <p className="card-text"><Link to="/kids"><b>Kids Catogary</b></Link></p>
                  </div>
                </div>
          </div>
      </section>

      {/* <!----------- carousel - banner  page link dynamically----------> */}
      <section className="banner"> 
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item ban-er active">
              <img src="https://i.ibb.co/gFbrF8D/men-banner.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item ban-er">
              <img src="https://i.ibb.co/gzPb7P9/Kids-Banner.png" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item ban-er">
              <img src="https://i.ibb.co/BPQs0gW/women-banner.jpg" className="d-block w-100" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section> 

      {/*<!-------------banner-2 Section-------------->*/}
      <section className="sec-2">        
          <div className="sm-banner">
              <img src="https://i.ibb.co/YPPdryG/discount.png" alt=""/>
              <div className="ad-ban-text">
                  <Link to="#">View Collection</Link>
              </div>
          </div>
      </section>

    <Swiper/> {/* <!------------carousel card 2 section-----------> */}
      

      <section className="sec-4 choose">       {/*<!----------why choose us section----------->*/}
          <img src="https://i.ibb.co/Qmfk85q/choose.png" alt=""/>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 offset-lg-6">
                      <div className="why-choose">
                          <h2>Why Choose Us?</h2>
                          <div className="choose-wrap fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                              <div className="chs">
                                  <img src="https://i.ibb.co/yNLmBY4/choose1.png" alt=""/>
                                  <h6>Fast Shipping</h6>
                              </div>
                              <div className="chs">
                                  <img src="https://i.ibb.co/nc3Sp4y/choose2.png" alt=""/>
                                  <h6>Secured Payment</h6>
                              </div>
                              <div className="chs">
                                  <img src="https://i.ibb.co/3NnJytK/choose3.png" alt=""/>
                                  <h6>Safe Delivery</h6>
                              </div>
                              <div className="chs">
                                  <img src="https://i.ibb.co/LNgBQGB/choose4.png" alt=""/>
                                  <h6>Gift Vouchers</h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div >
  )
}

export default HomeCover