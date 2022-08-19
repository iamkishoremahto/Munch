import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './order.less'


class order extends Component { 
    
    render() {
     
        return (
            <div className='OrderPage'>
              <Header/>
                <div className='ordersYellowScreen'>
                
                    <div className='OrderPageParent'>

                        <div class="container">
                            <div class="row" id='orderingContentDiv'>
                                <div class="col-12">
                                    <span class="Ordering">
                                        <h1>Ordering</h1>
                                    </span>

                                    <div class="How-Does-It-Work">
                                        How Does It Work?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row" id='LastYelloDiv'>
                            <div class="col">
                                <div className='firstImg'>
                                    <img src={require('../../assets/images/png/Group 23401 copy.png')} alt='' />

                                </div>
                                <span class="Step-1">
                                    Step 1
                                </span>
                                <div class="In-the-feed-discover-the-best-curated-treats-local-eats-and-what-and-where-your-friends-and-co-workers-are-eating">
                                    <p>  In the feed, discover the best curated treats, local eats, and what and where your friends and co-workers are eating.</p>
                                </div>

                            </div>
                            <div class="col">
                                <div className='secondImg'>
                                    <img src={require('../../assets/images/png/mob copy.png')} alt='' />

                                </div>
                                <span class="Step-2">
                                    Step 2
                                </span>
                                <div class="Order-ahead-pick-it-up-and-jump-the-line-Or-have-it-delivered-or-shipped-to-you">
                                    <p>  Order ahead, pick it up and jump the line. (Or have it delivered or shipped to you.)</p>
                                </div>

                            </div>
                            <div class="col">
                                <div className='ThirdImg'>
                                    <img src={require('../../assets/images/png/mob.png')} alt='' />

                                </div>
                                <span class="Step-3">
                                    Step 3
                                </span>
                                <div class="Collect-your-Reward-and-send-your-Gift-Star-to-a-friend">
                                    <p>   Collect your Reward
                                        and send your Gift Star to a friend.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="Path-35612">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div className='Group 23564'>
                                    <img src={require('../../assets/images/png/Group 23564.png')} alt='' />

                                </div>
                                <div class="Rectangle-19564">
                                    <p class="Honesty-and-Transparency">
                                        Honesty and Transparency
                                    </p>
                                    <img src={require('../../assets/images/png/NoPath.png')} alt=''
                                        class="NoPath" />
                                    <div className='Unlike-many-third-party-food-aggregator-apps-no-hidden-fees-and-no-inflated-menus-prices'>
                                        <p>
                                            Unlike many third party food aggregator apps, no hidden fees and no inflated menus prices.
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div class="col">
                                <div className='Group 23565'>
                                    <img src={require('../../assets/images/png/Group 23565.png')} alt='' />

                                </div>
                                <div class="Rectangle-19564">
                                    <p class="Support-Local-Restaurants">
                                        Support Local Restaurants
                                    </p>

                                     <img src={require('../../assets/images/png/gettyimages-1225861959-612x612.png')} alt='' 
                                        class="gettyimages-1225861959-612x612" />

                                    <div class="No-unfair-commissions-neither-to-you-nor-the-restaurant">
                                        <p> No unfair commissions (neither to you nor the restaurant).</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div className='Group 23566'>
                                    <img src={require('../../assets/images/png/Group 23566.png')} alt=''  />

                                </div>
                                <div class="Rectangle-19566">
                                    <p class="Convenience">
                                        Convenience
                                    </p>
                                    <div className='Mask Group 57'>
                                        <img src={require('../../assets/images/png/Mask Group 57.png')} alt='' className="Mask-Group-57"/>

                                    </div>
                                    <div class="But-not-at-a-cost--neither-to-your-wallet-providers-nor-to-health-or-quality">
                                        <p>But not at a cost- neither to your wallet, providers, nor to health or quality.</p>
                                    </div>
                                </div>
                            </div>


                            <div class="Rectangle-19569">
                                <span class="Magnanimous-and-Ethical-Pickup">
                                    Magnanimous and Ethical Pickup
                                </span>
                                <img src={require('../../assets/images/png/gift-box-4973842-4251252-PhotoRoom.png')} alt='' 
                                    class="gift-box-4973842-4251252-PhotoRoom" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Designed to Give, Everybody Gets */}


                <div class="Web--Order">

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h2 class="Designed-to-Give-Everybody-Gets">
                                    Designed to Give, Everybody Gets
                                </h2>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                            <img src={require('../../assets/images/png/Group 23378.png')} alt='' 
                                    class="Group 23378" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="You-ordering-food-is-not-an-isolated-consumer-experience-but-an-action-that-shines-your-light-outwards-in-multiple-directions">
                                    <p> You ordering food is not an isolated consumer experience but an action
                                        that shines your light outwards in multiple directions:</p>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="from-other-bellies-you-fill-to-how-you-express-and-share-your-food-experience-to-the-local-businesses-and-farmers-you-support-and-to-what-you-chose-to-put-into-your-body">
                                    <p>   from other bellies you fill, to how you express and share your food experience,
                                        to the local businesses and farmers you support, and to what you chose to put into your body.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <Footer/>

            </div>
        )
    }
} export default order
