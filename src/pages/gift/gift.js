import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './gift.less'

class gift extends Component { 
    render() {
       
        return (
            <div className='GiftPage'>
              <Header/>
                <div className='PinkColorScreen'>
                 
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="Easy-Gifting">
                                    <h1>Easy Gifting</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <img src={require('../../assets/images/png/Group 23550.png')} alt=''
                                    className='EasyGiftingImg' />

                                <div className='FoodIsGiftIMG'>
                                    <img src={require('../../assets/images/png/Group 23376.png')} alt=''
                                        className='EasyGiftingImg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='FoodIsaGiftContentD'>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <span class="Food-Is-a-Gift">
                                        Food Is a Gift
                                    </span>
                                    <div className='FoodIsaGiftContentPara'>
                                        <p> Connecting you with food you love and the opportunity to share</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="Easy-Gifting">
                                    Easy Gifting
                                </div>
                                <div class="Send-and-receive-treats">
                                    Send and receive treats.
                                </div>
                                <div className='ParasDiv'>

                                    <div className='para1'>
                                        <span><img src={require('../../assets/images/png/rightArrow1.png')} alt='' /></span>
                                        <p className='rightArrowOne'> This is where the magic is made.</p>
                                    </div>

                                    <div className='para2'>
                                        <span><img src={require('../../assets/images/png/rightArrow2.png')} alt='' /></span>
                                        <p className='rightArrowTwo'>With just a few clicks, quickly send a croissant to your crush, team or mom to let them know you’re thinking of them.</p>
                                    </div>

                                    <div className='para3'>
                                        <span><img src={require('../../assets/images/png/rightArrow3.png')} alt='' /></span>
                                        <p className='rightArrowThree'>It’ll be ready for them when they go to pick it up.</p>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <img src={require('../../assets/images/png/Group 23550.png')} alt=''
                                    className='SecondEasyGiftingImg' />
                            </div>

                        </div>
                    </div>
                    <div className='LoveLetterDiv'>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <img src={require('../../assets/images/png/loveLetter.png')} alt=''
                                        className='loveLetter' />
                                </div>
                                <div class="col">
                                    <div class="noAdressRequired">
                                        <img src={require('../../assets/images/png/checkBox.png')} alt=''
                                            className='checkBox' />
                                        <p>   No address required!</p>
                                    </div>


                                    <div class="rightArrow1Div">
                                        <div className='rightArrow1IMG'>
                                            <img src={require('../../assets/images/png/rightArrow1.png')} alt=''
                                                className='rightArrow1' />
                                        </div>
                                        <div className='rightArrowContent'>
                                            <p> You don’t have to know the address of your giftee.</p>

                                        </div>
                                    </div>

                                    <div class="alreadyusingMunch">
                                        <div className='rightArrow2IMG'>
                                            <img src={require('../../assets/images/png/rightArrow2.png')} alt=''
                                                className='rightArrow2' />
                                        </div>
                                        <div className='alreadyusingMunchPara'>
                                            <p> If they’re already using Munch, just click on their name, chose your gift, and send! If they don’t yet have Munch, just enter their phone number or email.</p>

                                        </div>

                                    </div>

                                    <div class="TheiWillReceiveDiv">
                                        <div className='rightArrowImgDiv'>
                                            <img src={require('../../assets/images/png/rightArrow3.png')} alt=''
                                                className='rightArrow3' />
                                        </div>

                                        <div className='rightArrowParaDiv'>
                                            <p>   Their will receive a message with your card and gift will be waiting for them, whenever they need a pick-me-up.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="AdressRequiredDiv">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div class="AdressRequired">
                                        <img src={require('../../assets/images/png/checkBox1.png')} alt='' />
                                        <p> Don’t know what foods they like?</p>
                                        <div className='AdressRequiredPara'>
                                            <span class="No-worries-when-you-chose-a-friend-to-send-gifts-to-you-will-see-what-foods-they-have-saved-as-their-favourites">
                                                No worries, when you chose a friend to send gifts to, you will see what foods they have saved as their favourites.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div className='AdressRequiredImg'>
                                        <img src={require('../../assets/images/png/Group 23531.png')} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="GiftBlueScreen">
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <div className='BlueScreenContentDiv'>
                                        <div class="GiftBrownScren">
                                            <span className='quoteLeft'><img src={require('../../assets/images/png/quoteLeft.png')} alt='' /></span>
                                            <p> We are showered every day with gifts, but they are not meant for us to keep.
                                                Their life is in their movement, the inhale and the exhale of our shared breath.
                                                Our work and our joy is to pass along the gift and to trust that what we put out into the universe will always come back.</p>
                                            <span className='quoteRight'><img src={require('../../assets/images/png/quoteRight.png')} alt='' /></span>

                                            <div class="-Braiding-Sweetgrass-Robin-Wall-Kimmerer">
                                                -Braiding Sweetgrass, Robin Wall Kimmerer.
                                            </div>

                                        </div>
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
} export default gift
