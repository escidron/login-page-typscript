import React,{useContext} from 'react'
// import {userContext} from '../../App'
import { useGlobalState, GlobalStateInterface } from "../colorContext/GlobalStateProvider";


export default function Home() {
  const { state } = useGlobalState()
    return (
    <div>{state.email}</div>
  )
}
