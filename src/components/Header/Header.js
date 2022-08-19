import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SignUp from '../../components/Modal/SignUp';
import { ActionContactUs } from '../../store/actions/actions-server-data';
import { Popover } from 'antd';
import CommonDialog from '../Modal/CommonDialog';
import './Header.less'

class Header extends Component {
    state = {
        isModalOpen: false,    
        isSignModalOpen: false,
        isStateUpdated: false,
        modalData: undefined,
        isDeleteModalOpen: false,     

    }

    addEditHandler = (param) => {
        debugger;
        this.props.ActionContactUs(param)
        this.setState({ isSignModalOpen: false, modalData: undefined, isStateUpdated: false })
    }
    render() {
    
        const { isModalOpen,isSignModalOpen, modalData, isDeleteModalOpen,pagination } = this.state;
        debugger;
        return (
            <div className='headerDiv'>
                {
                    isModalOpen &&
                    <CommonDialog
                        visible={isModalOpen}
                        closeModal={() => this.setState({ isModalOpen: false })}
                    />

                }
           {
                    isSignModalOpen &&

                    <SignUp
                        visible={isSignModalOpen}
                        modalData={modalData}
                        closeModal={() => this.setState({ isSignModalOpen: false, modalData: undefined })}
                        addEditHandler={this.addEditHandler}
                    />

                }
                <div class="container">
                    <div class="row" id='HeaderRow'>
                        <div class="col-12">
                            <div className='HeaderParentDiv'>
                                <ul className='HeaderUl'>
                                    {/* <li><button type='button' >Login</button></li> */}
                                    <li className='SignupBTN'><button type='button' onClick={() => this.setState({ isSignModalOpen: true, modalData: undefined})}>Signup</button></li>



                                    <li className='MenuDiv'>
                                        <Popover children className='popoverDiv' placement="left" onClick={() => this.setState({ isModalOpen: true })} trigger="click">
                                            <div className="header-content-profile">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" color='white' fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                            </div>
                                        </Popover>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
