import React, { Component } from 'react'
import './ngo.less'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

class ngo extends Component {

  render() {
 
    return (
      <div className='NGOPage'>
      <Header/>
        <div className='NGOsBlueScreen'>          
          <div class="container">
            <div class="row">
              <div class="col">
                <h2 class="Easy-and-Meaningful-Donation">
                  Easy and Meaningful Donation
                </h2>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-12">
                <div className='Group 23374'>
                  <img src={require('../../assets/images/png/Group 23559.png')} alt='' />
                </div>

                <div className='Group 23376'>
                  <img src={require('../../assets/images/png/Group 23376.png')} alt='' />

                </div>
              </div>
            </div>
          </div>
          <div className='ThreecolDiv'>
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="Rectangle-19625">
                    <div className='love-earth-5332383-4457612-PhotoRoom'>
                      <img src={require('../../assets/images/png/love-earth-5332383-4457612-PhotoRoom.png')} alt='' />

                    </div>

                    <div class="Chose-vetted-charitable-causes-inspiring-and-meaningful-to-you">
                      <p>      Choose vetted, charitable causes inspiring and meaningful to you.</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="Rectangle-19626">
                    <div className='Group 23543'>
                      <img src={require('../../assets/images/png/Group 23543.png')} alt='' />

                    </div>

                    <div class="See-exactly-how-your-contribution-is-being-used">
                      <p> See exactly how your contribution is being used.</p>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="Rectangle-19627">
                    <div className='area-chart-3856456-3212621-PhotoRoom'>
                      <img src={require('../../assets/images/png/area-chart-3856456-3212621-PhotoRoom.png')} alt='' />

                    </div>

                    <div class="Watch-as-your-impact-materialises-in-ongoing-updates-from-the-NGO">
                      <p>  Watch as your impact materialises in ongoing updates from the NGO.</p>
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
} export default ngo
