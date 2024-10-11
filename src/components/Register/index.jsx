import {Component} from 'react'

import './index.css'

class Login extends Component{
    render(){
        return (
        <div class="login">
         <img src="https://res.cloudinary.com/dn6izpj6p/image/upload/v1728577172/b68a25a6d28597b50ccbb1e12f7c2401_vm9hgt.jpg" alt="login image" class="login__img"/>

         <form action="" class="login__form">
            
            <h1 class="login__title">Register</h1>
            <div class="login__content">
            <div class="login__box">     
                  <div class="login__box-input">
                     <input type="text" required class="login__input" id="login-email" placeholder=" "/>
                     <label htmlFor="login-email" class="login__label">User Name</label>
                  </div>
               </div>
               <div class="login__box">     
                  <div class="login__box-input">
                     <input type="text" required class="login__input" id="login-email" placeholder=" "/>
                     <label htmlFor="login-email" class="login__label">Register Number</label>
                  </div>
               </div>

               <div class="login__box">
                  <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" placeholder=" "/>
                     <label htmlFor="login-pass" class="login__label">DD-MM-YYYY</label>
                     
                  </div>
               </div>
            </div>

            

            <button type="submit" class="login__button">Register</button>

            <p class="login__register">
               Already have an account! <a >Login</a>
            </p>
         </form>
      </div>
      
        )
    }
}

export default Login