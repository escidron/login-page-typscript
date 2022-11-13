import { useForm,SubmitHandler } from "react-hook-form";
import React,{useContext,useState} from 'react'
import './formStyles.css'
import {useNavigate} from 'react-router-dom'
import { useGlobalState, GlobalStateInterface } from "../colorContext/GlobalStateProvider";

type FormValues = {
  email:string,
  password:string
}
interface NavProps{
  itemId:number;
  otherParam:string
}
export default function App() {
  const { setState,state } = useGlobalState()
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();
  const navigate = useNavigate()
  
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setState((prev) => ({ ...prev, ...data }))

    //navigate('home')
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <h1 id='teste'>{state.email}</h1>
        <h1 className="titleForm">Welcome back</h1>
        <h5 className="subtitleForm">Please enter your details</h5>
        <label className="labelForm">Email</label>
        <input  {...register("email")} className= 'inputForm'/>
        <br/>
      
        <label className="labelForm">Password</label>
        <input {...register("password", { required: true })} type='password' className= 'inputForm'/>
        {errors.password && <span>This field is required</span>}
      
      <br/>
      <div className="forgot"> 
        <div className="remember">
          <input type='checkbox' className="checkbox"></input>
          <label className="rememberLabel">Remember Me</label>
        </div>
        <label className="forgotLabel">Forgot passwords?</label>
      </div>
      <br/>
      <input type="submit" value='Sign in' className="buttonForm"/>
      <br/>
      <label className="rememberLabel"> Do not have an account?<a href="#" className="signUp">Sign up</a></label>
    </form>
  );
}