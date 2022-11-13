import React,{useContext,useState} from 'react'
import Form from '../Form/Form'
import './loginStyles.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useGlobalState, GlobalStateInterface } from "../colorContext/GlobalStateProvider";


export default function LoginPage() {
  const { state } = useGlobalState()

  return (
    <div className='loginPage'>
        <div className='loginLeft'>
            <p style={{color:state.color}}>teste color</p>
            <h1 className='pageTitle'>Login Form Essentials</h1>
            <h4 className='pagesubtitle'>Unlike other types of user interface forms, login forms do not come in all shapes and sizes. They are limited to the number of fields that are used. The reason for such a minimal and capsule approach is trivial: people do not like to fill in forms. You cannot be pushy by asking for too much information. These forms should be simple, familiar, and straight to the point.</h4>
            <div className='midiaIcons'>
              <FacebookOutlinedIcon sx={{ fontSize:30,color:'#ffff' }}/>
              <InstagramIcon sx={{ fontSize:30,color:'#ffff' }}/>
              <TwitterIcon sx={{ fontSize:30,color:'#ffff' }}/>
              <YouTubeIcon sx={{ fontSize:30,color:'#ffff' }}/>
            </div>
        </div>
        <div className='loginForm'>
            <Form/>
        </div>
    </div>
    
  )
}
