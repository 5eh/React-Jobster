import React from 'react'
import Main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'



const Landing = () => {
  return (
      <Wrapper>
          <nav>
            <Logo />
          </nav>
          <div className='container page'>
              <div className='info'>
                  <h1>
                      Job <span>Tracking</span> App 
                  </h1>
                  <p>
                    I'm baby four dollar toast wayfarers vexillologist af tattooed put a bird on it. Venmo celiac kale chips vexillologist yr. Tacos narwhal tonx listicle synth, everyday carry brunch godard squid tofu pickled tumblr. Tilde snackwave truffaut bodega boys sartorial freegan lomo helvetica YOLO. Vaporware venm  
                  </p>
                <Link to='/register' className='btn btn-hero'>Login/Register</Link>
              </div>
              <img src={Main} alt='People' className='img main-img' />
          </div>
    </Wrapper>
  )
}



export default Landing