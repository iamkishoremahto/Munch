import React, { Component } from 'react'
import { Popover } from 'antd';
import CommonDialog from '../../components/Modal/CommonDialog';
import './home.less'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



class home extends Component {
    render() {
        return (
            <div className='HomepageDiv'>
                <Header />
                <div className='YellowScreen'>

                    <div className='ParentDiv'>
                        <div class="container">
                            <div class="row" id='munchMagicTitleName'>
                                <div class="col">
                                    <div className='TitleName'>
                                        <div className='Munch'>
                                            <span className="Munch">
                                                <span className="text-style-1">M</span>unch
                                            </span>
                                        </div>
                                        <div className='Magic'>
                                            <span className="Magic">
                                                <span className="text-style-1">M</span>agic
                                            </span>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="container">

                            <div className="row" >
                                <div className="col-8" id='ImdDiv'>
                                    <div className='TopBitmap'><img src={require('../../assets/images/png/Group 23569.png')} alt='' /></div>

                                    <div class="leftBitmap"><img src={require('../../assets/images/png/Group 23568.png')} alt='' /></div>
                                    <img src={require('../../assets/images/png/Group 23518.png')} alt='' />


                                    <div class="rightBitmap"><img src={require('../../assets/images/png/Group 23570.png')} alt='' /></div>

                                </div>
                                <div className="col-4" id='picndText'> <img src={require('../../assets/images/png/Group 23376.png')} alt='' />
                                </div>
                            </div>

                        </div>
                        <div className="container">

                            <div className="row" id='OrderFood'>
                                <div className="col-4">
                                    <span className="Get-Order-Food">
                                        <span className="text-style-22">Get</span><h6>Order Food</h6>
                                    </span>

                                    <img src={require('../../assets/images/png/Group 23528.png')}
                                        srcset="../../src/assets/images/png/Group 23528@2x.png 2x,
                                       ../../src/assets/images/png/Group 23528@3x.png 3x"
                                        className="Group-23528" />


                                    <div className='paraDiv'>
                                        <span className="In-the-feed-discover-what-your-friends-and-co-workers-are-eating-the-best-curated-treats-and-local-eats">
                                            In the feed, discover what your friends and co-workers are eating, the best curated treats and local eats.
                                        </span>
                                    </div>
                                    <span class="Coming-Soon">
                                        COMING SOON
                                    </span>
                                    <div className='LinkDiv'>
                                        <span className="ORDERBTN">
                                            <button>ORDER</button>
                                        </span>
                                    </div>
                                </div>



                                <div className="col-4" id='GiftAtreate'>
                                    <span className="Gift-Gift-a-Treat">
                                        <span className="text-style-22">Gift</span>
                                        <h6>Gift a Treat</h6>
                                    </span>

                                    <img src={require('../../assets/images/png/Group 23529.png')}
                                        srcset="../../src/assets/images/png/Group 23529@2x.png 2x,
                                    ../../src/assets/images/png/Group 23529@3x.png 3x"
                                        className="Group-23529" />

                                    <div className='paraDiv'>
                                        <span className="Gift-a-treat-large-or-small-from-their-neighbourhood-favourite-or-our-carefully-curated-catalog-of-unique-and-trending-treats-No-address-necessary">
                                            Gift a treat, large or small, from their neighbourhood favourite or our carefully curated catalog of unique and trending treats.
                                            No address necessary.
                                        </span>
                                    </div>
                                    <span class="Coming-Soon">
                                        COMING SOON
                                    </span>
                                    <div className='LinkDiv'> <span className="GiftBTN">
                                        <button>GIFT </button>
                                    </span></div>

                                </div>
                                <div className="col-4" id='MakeAimpact'>
                                    <span className="Donate-Make-an-Impact">
                                        <span className="text-style-22">Donate</span>
                                        <h6>Make an Impact</h6>
                                    </span>

                                    <img src={require('../../assets/images/png/Group 23530.png')}
                                        srcset="../../src/assets/images/png/Group 23530@2x.png 2x,
                                        ../../src/assets/images/png/Group 23530@3x.png 3x"
                                        className="Group-23530" />

                                    <div className='paraDiv'>
                                        <span className="Discover-and-donate-to-hand-picked-and-screened-NGOs-fighting-against-hunger-food-insecurity-and-sustainability-issues">
                                            Discover and donate to hand-picked and screened NGO’s fighting against hunger, food insecurity and sustainability issues.
                                        </span>
                                    </div >
                                    <span class="Coming-Soon">
                                        COMING SOON
                                    </span>
                                    <div className='LinkDiv'>
                                        <span className="DonateBTN">
                                            <button>DONATE</button>
                                            <b>  </b>
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="Rectangle-19556">

                                    <span class="Munch-Magic-lets-you-easily-order-gift-and-donate-food-integrating-the-experiences-so-you-can-spread-the-fun-and-food">
                                        Munch Magic lets you easily order, gift and donate food, integrating the experiences, so you can spread the fun and food.
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                <Footer />

            </div >


        )
    }
} export default home


