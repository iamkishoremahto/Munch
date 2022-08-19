import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ContactUs from '../../components/Modal/ContactUs';
import { ActionContactUs } from '../../store/actions/actions-server-data';
import './corporateandteams.less'

class corporateandteams extends Component {
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
            <div className='CorporateAndTeams'>
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
                <div className='CorporateAndTeamsBrownColorScreen'>
                  
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="CorporateandTeams">
                                    Corporate and Teams
                                </div>

                                <div className="All-Under-One-Easy-Umbrella">
                                    All Under One, Easy Umbrella
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='corporateAndTeamsBtns'>
                        <div className="container">
                            <div className="row">
                                <div className="col">

                                    <button className='EmployeeAppreciationBtn'><span class="Employee-Appreciation">
                                        Employee Appreciation
                                    </span></button>

                                </div>
                                <div className="col">
                                    <button className='TeamMoralandBuildingBtn'><span class="Team-Moral-and-Building">
                                        Team Moral and Building
                                    </span></button>
                                </div>
                                <div className="col">
                                    <button className='CustomerAppreciation'><span className="Customer-Appreciation">
                                        Customer Appreciation
                                    </span></button>

                                </div>
                                <div className="col">
                                    <button className='CorporateGivingPrograms'><span class="Corporate-Giving-Programs">
                                        Corporate Giving Programs
                                    </span></button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='EmployeeAppreciationDiv'>
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <img src={require('../../assets/images/png/EmployeeAppreciation.png')} alt='' className='EmployeeAppreciationImg' />

                                </div>
                                <div className="col-8">
                                    <div class="EmployeeAppreciationContent">
                                        Employee Appreciation
                                    </div>
                                    <div className='EmployeeAppreciationUl'>

                                        <div className='CheckMarkParent'>
                                            <div className='CheckMarkImgDiv'>
                                                <img src={require('../../assets/images/png/checkMark1.png')} alt='checkMark1' />
                                            </div>
                                            <div className='CheckMarkPara'>
                                                <p> Easily reward your team with the sustenance they need.</p>
                                            </div>
                                        </div>

                                        <div className='CheckMarkImgDiv1'>
                                            <img src={require('../../assets/images/png/checkMark1.png')} alt='checkMark1' />
                                        </div>
                                        <div className='CheckMarkPara1'>
                                            <p>Send them a quick pick me up.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='TeamMoralAndBuildingSession'>
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <div class="TeamMoralAndBuildingCorporateGivingPrograms">
                                        CorporateGivingPrograms
                                    </div>
                                    <div className='EmployeeAppreciationUl'>

                                        <div className='TeamMoralAndBuildingParent'>
                                            <div className='TeamMoralAndBuildingCheckMarkImgDiv'>
                                                <img src={require('../../assets/images/png/checkMark2.png')} alt='checkMark2' />
                                            </div>
                                            <div className='TeamMoralAndBuildingCheckMarkPara'>
                                                <p>  Gel your team by giving them the common ground of food and community.</p>
                                            </div>
                                        </div>

                                        <div className='TeamMoralAndBuildingCheckMarkImgDiv1'>
                                            <img src={require('../../assets/images/png/checkMark2.png')} alt='checkMark2' />
                                        </div>
                                        <div className='TeamMoralAndBuildingCheckMarkPara1'>
                                            <p>They can see what others are eating, send their free gift coins to other members on the team, send thank you’s, well-done’s or hang-in-there treats or jump on causes together.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-4">
                                    <img src={require('../../assets/images/png/TeamImg.png')} alt='' className='TeamImg' />

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=' CustomerAppreciationParentDiv'>
                        <div class="container">
                            <div class="row">
                                <div class="col-4">
                                    <img src={require('../../assets/images/png/man.png')} alt='' className='man' />

                                </div>
                                <div class="col-8" id=' CustomerAppreciationDiv'>
                                    <div className='ParantDiv'>
                                        <span class="CustomerAppreciationContent">
                                            Customer Appreciation
                                        </span>

                                        <div className='EmployeeAppreciationUl'>

                                            <div className='CustomerAppreciationParent'>
                                                <div className='CustomerAppreciationCheckMarkImgDiv'>
                                                    <img src={require('../../assets/images/png/checkMark3.png')} alt='' className='checkMark3' />
                                                </div>
                                                <div className='CustomerAppreciationCheckMarkPara'>
                                                    <p> Easily reward your most loyal customers.</p>
                                                </div>
                                            </div>

                                            <div className='CustomerAppreciationParent1'>
                                                <div className='CustomerAppreciationCheckMarkImgDiv1'>
                                                    <img src={require('../../assets/images/png/checkMark3.png')} alt='' className='checkMark3' />
                                                </div>
                                                <div className='CustomerAppreciationCheckMarkPara1'>
                                                    <p>Appreciation keep's them talking wonders and coming back.</p>
                                                </div>
                                            </div>

                                            <div className='CustomerAppreciationParent2'>
                                                <div className='CustomerAppreciationCheckMarkImgDiv2'>
                                                    <img src={require('../../assets/images/png/checkMark3.png')} alt='' className='checkMark3' />
                                                </div>
                                                <div className='CustomerAppreciationCheckMarkPara2'>
                                                    <p>Get your stragglers attention and lure them back with a treat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <div class="Corporate-Giving-Programs">
                                    Corporate Giving Programs
                                </div>

                                <div className='FirstCheckMarkContent'>
                                    <div className='firstCheckMarkImg'>
                                        <img src={require('../../assets/images/png/checkMark4.png')} alt='' className='checkMark4' />

                                    </div>
                                    <div className='firstCheckMarKContent'>
                                        <span class="Personalized-Campaign-Page">
                                            <p> Personalized Campaign Page.</p>
                                        </span>
                                    </div>
                                </div>

                                <div className='secondCheckMarkContent'>
                                    <div className='secondCheckMarkImg'>
                                        <img src={require('../../assets/images/png/checkMark4.png')} alt='' className='checkMark4' />

                                    </div>
                                    <div className='secondCheckMarKContent'>
                                        <span class="Your-campaign-page-will-not-only-be-visible-to-your-employees-and-clients-but-all-Munchers-within-the-app">
                                            <p> Your campaign page will not only be visible to your employees and clients, but all Munchers within the app.</p>
                                        </span>
                                    </div>
                                </div>

                                <div className='ThirdCheckMarkContent'>
                                    <div className='ThirdCheckMarkImg'>
                                        <img src={require('../../assets/images/png/checkMark4.png')} alt='' className='checkMark4' />

                                    </div>
                                    <div className='ThirdCheckMarKContent'>
                                        <span class="ThirdPara">
                                            <p>   Every donation (from the organization, employees or towards your campaign) is published both on your page and in the feed to inspire all Munchers.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img src={require('../../assets/images/png/CharityImg.png')} alt='' className='CharityImg' />

                                </div>
                            </div>

                        </div>
                    </div>



                </div>
                <div className='corporateandteamsBlueScreen'>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="landlordsAndBuildings">
                                    Landlords and Buildings
                                </div>
                                <div class="RewardsLoyaltyAndOnlineOrdering">
                                    Rewards, Loyalty and Online Ordering
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <div className='ResidentialAndCommercialBuildingsColumn8Div'>
                                <span class="ResidentialAndCommercialBuildings">
                                    Residential and Commercial Buildings
                                </span>
                                <div className='ResidentialAndCommercialBuildingsUl'>

                                    <div className='CommercialBuildingsParent1'>
                                        <div className='CommercialBuildingsFirstArrow'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow1' />

                                        </div>
                                        <div className='CommercialBuildingsFirstPara'>
                                        <p> Reward your tenants for paying rent on time.</p>
                                        </div>
                                    </div>

                                    <div className='CommercialBuildingsParent2'>
                                        <div className='CommercialBuildingsSecondArrow'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow2' />

                                        </div>
                                        <div className='CommercialBuildingsSecondPara'>
                                        <p> Create incentives (signing a new lease, reporting a maintenance issue) and reward your tenants for fulfilling them.</p>
                                        </div>
                                    </div>

                                    <div className='CommercialBuildingsParent3'>
                                        <div className='CommercialBuildingsThirdArrow'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow3' />

                                        </div>
                                        <div className='CommercialBuildingsThirdPara'>
                                       <p> Give your renters another reason to renew their lease.</p>
                                        </div>
                                    </div>
                                    <div className='CommercialBuildingsParent4'>
                                        <div className='CommercialBuildingsFourthArrow'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow4' />

                                        </div>
                                        <div className='CommercialBuildingsFourthPara'>
                                        <p>Give your renters another reason to renew their lease.</p>
                                        </div>
                                    </div>
                                    <div className='CommercialBuildingsParent5'>
                                        <div className='CommercialBuildingsFifthArrow'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow5' />

                                        </div>
                                        <div className='CommercialBuildingsFifthPara'>
                                        <p> Elevate your buildings’ appeal and tenant experience with the amenity of food and online ordering.</p>
                                        </div>
                                    </div>
                                    <div className='CommercialBuildingsParent6'>
                                        <div className='CommercialBuildingsSixthArrow'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow6' />

                                        </div>
                                        <div className='CommercialBuildingsSixthPara'>
                                        <p> Connect your tenants and create community.</p>
                                        </div>
                                    </div>
                                    <div className='CommercialBuildingsParent7'>
                                        <div className='CommercialBuildingsSeventhArrow'>
                                        <img src={require('../../assets/images/png/WhiteRightArrow.png')} alt='' className='WhiteRightArrow7' />

                                        </div>
                                        <div className='CommercialBuildingsSeventhPara'>                                      
                                       <p> Gain insights into what rewards delight your tenants.</p>
                                        </div>
                                    </div>                                
                                    
                                </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img src={require('../../assets/images/png/BuildingIMG.png')} alt='' className='BuildingIMG' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div>
                                    <img src={require('../../assets/images/png/coffeeShop.png')} alt='' className='coffeeShop' />

                                </div>
                            </div>
                            <div class="col">
                                <div class="Malls-and-Food-Courts">
                                    Malls and Food Courts
                                </div>

                                <div class="Connect-shoppers-with-online-ordering">
                                    Connect shoppers with online ordering.
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <div class="Hotels">
                                    Hotels
                                </div>

                                <div class="Connect-guests-with-online-ordering-for-your-kitchen-andor-local-eats">
                                    Connect guests with online ordering for your kitchen and/or local eats.
                                </div>
                            </div>
                            <div class="col-4">
                                <div>
                                    <img src={require('../../assets/images/png/HotelIMG.png')} alt='' className='HotelIMG' />

                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="CorporateAndTeamContactUsBtn">
                                    <button onClick={() => this.setState({ isModalOpen: true, modalData: undefined})}><span class="ContactUsCorporateAndTeam">
                                        Contact Us
                                    </span></button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="corporateandteamsYellowScreen">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="corporateandteamsUniversities">
                                    Universities
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-8">
                                <div className='column8SessionDiv'>
                                    <div className='UniversitiesParentOne'>
                                        <div className='UniversitiesFirstArrow'>
                                            <img src={require('../../assets/images/png/GraterthenIMG.png')} alt='' className='GraterthenIMG1' />
                                        </div>
                                        <div className='UniversitiesFirstParaOne'>
                                            <p> Whether your campus would like to more deeply engage students or increase sales,</p>
                                        </div>

                                    </div>
                                    <div className='UniversitiesParentTwo'>
                                        <div className='UniversitiesSecondArrow'>
                                            <img src={require('../../assets/images/png/GraterthenIMG.png')} alt='' className='GraterthenIMG2' />
                                        </div>
                                        <div className='UniversitiesFirstParaTwo'>
                                            <p>   Whether you already have online ordering or you are looking to add online ordering to your services,</p>
                                        </div>

                                    </div>
                                    <div className='UniversitiesParentThree'>
                                        <div className='UniversitiesThirdArrow'>
                                            <img src={require('../../assets/images/png/GraterthenIMG.png')} alt='' className='GraterthenIMG3' />
                                        </div>
                                        <div className='UniversitiesFirstParathree'>
                                            <p>   Munch Magic can add value to your campus dining programs.</p>
                                        </div>

                                    </div>
                                    <div class="UniversitiesLastPara">
                                        Pleases
                                        <span class="text-style-1">Contact Us</span>
                                        to see how Munch Magic can serve both you and your community.
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <img src={require('../../assets/images/png/UnivercityIMG.png')} alt='' className='UnivercityIMG' />

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

export default connect(mapStateToProps, mapDispatchToProps)(corporateandteams);
