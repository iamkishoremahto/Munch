import React, { useState } from "react";
import { Modal } from "antd";
import './commonDialog.less'


const CommonDialog = (props) => {
    debugger;
    const { modalData } = props;
    const [isChecked, setIsChecked] = useState(
        modalData ? modalData.Status : false
    );


    return (

        <Modal
            visible={props.visible}
            footer={null}
            className="cc-modal"
            width={"293px"}
            onCancel={props.closeModal}
            
        ><div className="popContent">
             <div className="cc-modal-header">
                <ul style={{ width: '293px' }} className="HeaderPopupUl">
         
                    <li class="home"><p>Home</p></li>
                    <li class="shop"><p>Shop</p>
                    <ul className='subContent'>
                        <li><span class="Food-order-from-restaurantSub">  Food-order from restaurant</span></li>
                        <li><span class="GiftsSub">  Gifts</span></li>
                        <li><span class="NGOsSub">  NGO's</span></li>

                    </ul >
                    </li>                 
                    <li class="info"><p>Info</p></li>
                    <ul>
                        <li ><span class="The-MovementSub">  The Movement</span></li>
                    </ul>
                    <li class="how-it-Works-Ordering" ><p>How it Works-Ordering</p></li>
                    <li class="easy-Gifting"> <p>Easy Gifting</p></li>
                    <li class="meaningful-Donation"><p>Meaningful Donation</p></li>
                    <li class="restaurant"><p>Restaurant</p></li>
                    <li class="vendors" ><p>Vendors</p></li>
                    <li class="nGOs"><p>NGO's</p></li>
                    <li class="corporate-and-Teams" ><p>Corporate and Teams</p></li>
                    <li class="landlord-and-Building"><p>Landlord and Building</p></li>
                    <li class="universities"> <p>Universities</p></li>
                    <li class="ambassador-Program"><p>Ambassador Program</p></li>
                    <li class="app"><p>App</p></li>
                    <li class="contact-Us"><p>Contact Us</p></li>



                </ul>
            </div>
            </div>
        </Modal>
    );
};

export default CommonDialog;