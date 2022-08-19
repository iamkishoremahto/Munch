import React, { useState } from "react";
import { Modal } from "antd";
import { Formik, Form } from "formik";
import InputText from "../Form/InputText";
import '../../components/Modal/ContactUs.less'

const SignUp = (props) => {
    debugger;
    const { modalData } = props;
    const [isChecked, setIsChecked] = useState(
        modalData ? modalData.Status : false
    );

    const handleSubmit = (values) => {
        debugger;
        let param = {
            email: values.email,
            message: "",
        };

        props.addEditHandler(param);

    };

    return (

        <Modal
            visible={props.visible}
            footer={null}
            className="cs-modal"
            width={"550px"}
            onCancel={props.closeModal}
        >

            <div className="cs-modal-header">
                <div className="cancelBtn">
                    <img src={require('../../assets/images/png/cancelBtn.png')}
                        className='cancelBtnIMG' onClick={props.closeModal} />

                </div>

                {modalData == undefined
                    ? "Subscribe to Our Newsletter"
                    : "Subscribe to Our Newsletter"
                }
                <div className="popupPara">
                    <p>
                    Sign up to our newsletter and be the first to receive our exclusive offers and coupons
                    </p>
                </div>
            </div>
            <Formik
                initialValues={{
                    email: modalData ? modalData.email : "",
                }}
                onSubmit={(values) => handleSubmit(values)}

                render={({ values, handleChange, handleBlur, setFieldValue }) => {
                    return (
                        <Form>
                            <div className="cs-modal-body oneThird">

                                <div className="firstINP">
                                    <InputText
                                        className="first"
                                        style={{ 'width': '1000px' }}
                                        name="email"
                                        label={"Email*"}
                                        placeholder={"Email"}
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />

                                </div>



                            </div>

                            <div className="cs-modal-footer">
                                <div className="cs-modal-footer__btns">
                                    {/* <button type="button" onClick={props.closeModal}>Cancel</button> */}
                                    <button type="submit">Submit</button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
            />
        </Modal>
    );
};

export default SignUp;