import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/Modal/ContactUs';
import { ActionContactUs } from '../../store/actions/actions-server-data';
import './restaurant.less'

class restaurant extends Component {

    state = {
        isModalOpen: false,
        isStateUpdated: false,
        modalData: undefined,
        isDeleteModalOpen: false,
    }

    addEditHandler = (param) => {
        debugger;
        this.props.ActionContactUs(param)
        this.setState({ isModalOpen: false, modalData: undefined, isStateUpdated: false })
    }
 
    render() {
        const { isModalOpen, modalData, isDeleteModalOpen,pagination } = this.state;
    
        return (
            <div className='restaurantPage'>
                <Header/>
                {
                    isModalOpen &&

                    <ContactUs
                        visible={isModalOpen}
                        modalData={modalData}
                        closeModal={() => this.setState({ isModalOpen: false, modalData: undefined })}
                        addEditHandler={this.addEditHandler}
                    />

                }
                <div className='restaurantPageYelloColorScreen'>
                
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="For-Restaurants">
                                    For Restaurants
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='RestaurantsImgSession'>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div className='RestaurantImage'>
                                        <img src={require('../../assets/images/png/RestaurantIMG.png')} alt='' className='RestaurantIMG' />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div className='ClouldImg'>
                                        <img src={require('../../assets/images/png/restaurantClouldImg.png')} alt='' className='Cloud' />
                                    </div>
                                    <div class="RegisterBTN">
                                        <button>Register</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="TransformingTheFoodDiv">
                                    <p>Transforming the Food Platform Experience</p>
                                </div>
                                <span class="We-put-the-social-into-food-ordering">
                                    WE PUT THE SOCIAL INTO FOOD ORDERING
                                </span>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='allDiv'>
                                    <div className='OrganicMarketing'>
                                        <span class="Organic-Marketing">
                                            Organic Marketing
                                        </span>
                                        <img src={require('../../assets/images/png/mobileMarketing.png')} alt='' className='mobileMarketing' />
                                        <div class="Organic-marketing-with-the-broadcasting-of-every-order-into-the-feed">
                                            Organic marketing with the broadcasting of every order into the feed.
                                        </div>
                                        <span class="Know-More-">
                                            <a href=""><p> Know More  </p></a>
                                        </span>
                                    </div>
                                    <div className='BrandedRewards'>
                                        <span class="Branded-Rewards">
                                            Branded Rewards
                                        </span>
                                        <img src={require('../../assets/images/png/financeProfit.png')} alt='' className='financeProfit' />
                                        <span class="Branded-rewards-tangible-referrals-and-retargeting-features-drives-repeat-business">
                                            <p>Branded rewards, tangible referrals, and retargeting features drives repeat business.</p>
                                        </span>

                                        <span class="Know-More-">
                                            <a href=""><p> Know More  </p></a>
                                        </span>

                                    </div>
                                    <div className=' DigitalRestaurant'>
                                        <span class="Digital-Restaurant">
                                            Digital Restaurant
                                        </span>
                                        <img src={require('../../assets/images/png/onlineFoodOrder.png')} alt='' className='onlineFoodOrder' />
                                        <span class="Digital-restaurant-culture-and-followership-for-your-brand">
                                            <p>Digital restaurant culture and followership for your brand.</p>
                                        </span>
                                        <span class="Know-More-">
                                            <a href=""><p> Know More  </p></a>
                                        </span>

                                    </div>
                                    <div className='Analytics'>
                                        <span class="analytics">
                                            Analytics
                                        </span>
                                        <img src={require('../../assets/images/png/seoAnalytics.png')} alt='' className='seoAnalytics' />
                                        <span class="See-some-of-the-things-our-analytics-can-help-you-do">
                                            <p>See some of the things our analytics can help you do.</p>
                                        </span>
                                        <span class="Know-More-">
                                            <a href=""><p> Know More  </p></a>
                                        </span>

                                    </div>
                                    <div className=' StreamlinedOrdering'>
                                        <span class="Streamlined-Ordering">
                                            Streamlined Ordering
                                        </span>
                                        <img src={require('../../assets/images/png/manExploringInternet.png')} alt='' className='manExploringInternet' />
                                        <span class="Streamline-your-operation-both-on-and-off-premise-with-online-payments-and-easy-ordering">
                                            <p> Streamline your operation both on and off premise with online payments and easy ordering.</p>
                                        </span>
                                        <span class="Know-More-">
                                            <a href=""><p> Know More</p></a>
                                        </span>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className='WinImgDiv'>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <ul>
                                        <li><p>  Inventory management: easily place items out of stock.</p></li>
                                        <li><p>Customizable prep times specific to your items.</p></li>
                                        <li><p>Contactless Ordering.</p></li>
                                        <li><p>Contactless Payment.</p></li>
                                        <li><p>Wireless, no need for landlines.</p></li>
                                        <li><p>Hook up as many devices as necessary.</p></li>
                                        <li><p>Express checkout with PayPal.</p></li>
                                        <li><p>Tap into Our Growing Community; Your listing on Munch Magic.</p></li>
                                    </ul>
                                </div>
                                <div class="col-4">
                                    <div>
                                        <img src={require('../../assets/images/png/winBuyImg.png')} alt='' className='winImg' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='OrganikMarcketContent'>
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <span class="Organic-Marketing-with-Every-Order">
                                        Organic Marketing with Every Order
                                    </span>
                                    <ul>
                                        <li><p> Munchers are higher value customer because become they an ambassador for you. </p></li>
                                        <li><p>Each order and each gift sent from your establishment through Munch Magic is published in the feed for all of their friends to see. </p></li>
                                        <li><p>Munchers see this when searching for where or what to eat.
                                            They also see items and businesses their friends have eaten and marked as a favorite while perusing the restaurant menus.</p></li>

                                    </ul>
                                </div>
                                <div class="col-4">
                                    <div className='RightSideSession'>
                                        <span class="The-Feed">
                                            The Feed
                                        </span>
                                        <img src={require('../../assets/images/png/Group 23401.png')} alt='' className='Group 23401' />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <img src={require('../../assets/images/png/BrandedRewards.png')} alt='' className='BrandedRewardsImg' />

                            </div>
                            <div class="col-6">
                                <div className='BrandedRewardCardContent'>
                                    <span class="BrandedRewardsCard">
                                        Branded Rewards
                                    </span>
                                    <div class="RewardYourBestClients">
                                        Reward your best clients and target the trailers
                                    </div>
                                    <div class="DoYouRememberThePaper">
                                        Do you remember the paper punch cards that rewarded you with a free something on your tenth visit?
                                    </div>
                                    <span class="InMunchMagic">
                                        In Munch Magic, you get your own digitalized punchcard with every customer who orders from you and each friend to whom they send their gift coin after every order.
                                        Plus, you set the terms.
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="How-It-Works">
                                    How It Works
                                </div>
                                <div className='HowItWorksContent'>
                                    <p>  The first time a customer orders from you, a punchcard for your establishment is set up with the first slot filled.
                                        The client is also given a gift coin to send to a friend. When she choses a friend and sends the gift coin, a punchcard for your establishment is also set up for the giftee (to doubly encourage her to order from you, both through the indirect recommendation of her friend and her punchcard incentive). You decide what is rewarded after 10 visits.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <span class="Analytics-The-Power-of-Insight">
                                    Analytics: The Power of Insight
                                </span>

                                <div class="Some-of-the-things-our-analytics-can-help-you-do">
                                    Some of the things our analytics can help you do:
                                </div>

                                <div className='AnalyticsUL'>
                                    <ul>
                                        <li> <p> Reward your best clients and target the trailers.</p></li>
                                        <li><p>Encourage off-hour visits by giving discounts only during that time period, helping you move food, fill tables and keep your regular patrons happy.</p></li>
                                        <li><p>Surprise with spontaneous rewards: draw in first time guests and pull them in for a second visit.</p></li>
                                        <li><p>Track which promotions are redeemed and easily see which are more effective to hone your marketing strategy.</p></li>
                                        <li><p>Optimise your menu by eliminating slower moving items.</p></li>
                                        <li><p>Reduce costs by only ordering ingredients you need.</p></li>
                                        <li><p>Encourage more sales by offering promotions for popular items.</p></li>
                                    </ul>

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="Streamline">
                                    Streamline
                                </div>
                                <div className='StreamlinePara'>
                                    <p>  Streamline your operation both on and off premise with online payments and easy ordering.
                                        This translates as cutting down on labor costs and/or focusing the human input where it’s needed most: the food and the clients.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='StreamlineButtons'>

                        <div class="container">
                            <div class="row">

                                <div class="col">
                                    <div className=' noCommitments'>
                                        <button> NO COMMITMENTS</button>

                                    </div>
                                </div>
                                <div class="col">
                                    <button>NO MONTHLY PAYMENTS</button>
                                </div>
                                <div class="col">
                                    <button>NO CREDIT CARD NEEDED</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="contactUsBtn">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <button onClick={() => this.setState({ isModalOpen: true, modalData: undefined})}> Contact Us</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="RestaurantBlue">
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="Vendors">
                                        Vendors
                                    </div>

                                    <div class="Treat-and-Gift-Makers">
                                        Treat and Gift Makers
                                    </div>

                                    <div class="Do-you-make-unique-treats">
                                        Do you make unique treats?
                                    </div>

                                    <div class="Or-have-items-that-would-make-great-gifts">
                                        Or have items that would make great gifts?
                                    </div>

                                    <div class="We-would-love-to-hear-from-you">
                                        We would love to hear from you!
                                    </div>

                                    <div class="OrganicMArketingPara">
                                        <div className='organicMarketingLine'>
                                            <p>Organic marketing with the broadcasting of every order and gift into the feed.</p>
                                        </div>

                                        <div className='BuildTheRightLine'>
                                            <p>Build the right brand image aligned with your values and our NGOs; pick a cause to support. It will be shown in your listing.</p>
                                        </div>

                                        <div className='IfMakeAdonation'>
                                            <p> If you make a donation to a cause, it is also published in the feed, which broadcasts to your clients where your values lie. </p>
                                        </div>
                                        <div className='GrowingOurCummunityLine'>
                                            <p>Tap into Our Growing Community; Your listing on Munch Magic mobile and website applications.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <img src={require('../../assets/images/png/VendersImg.png')} alt='' className='VendersImg' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="RestaurantYellowScreen">
                        <div class="container">
                            <div class="row">
                                <div class="col-8">
                                    <div class="RestaurantNGOs">
                                        NGOs
                                    </div>
                                    <ul>
                                        <li><p> Are you an NGO that would like to deepen your impact, expand your reach, grow your followership and raise more funds?</p></li>
                                        <li><p>Munch Magic is a social food ordering app not in which users can donate food while ordering their own.</p></li>
                                        <li><p>We aim to bring people into more intimate relationships
                                            with organisations working for the causes that they care about, bridging the gap between the two in an informal, social media format. </p></li>
                                        <li><p>Tap into our growing community. Every donation within the app is broadcast into the feed where users see what causes and organisations their friends are supporting. This triple serves as inspiration, information, and organic advertising! </p></li>
                                        <li><p>If you are interested in having your NGO on Munch Magic, please<span><a className='RestaurantPageAs' href="">contact us</a> </span> </p></li>

                                    </ul>
                                </div>
                                <div class="col-4">
                                    <div className='ResturantNgosIMGDIV'>
                                        <img src={require('../../assets/images/png/restaurantNgosImg.png')} alt='' className='RestaurantNGOsImg' />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <Footer />


            </div>
        )
    }
} 
function mapStateToProps({ rLoading, rServerData, rSession }) {
    debugger;
    return {

      

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ActionContactUs,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(restaurant);
