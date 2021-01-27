import React from 'react'
import demo from '../assets/login.gif'

export default function Home() {
    return (
    <>
    <h1 className="p-4 text-center" >Welcome to Users Dashboard!</h1>
    <img className="img-fluid mx-auto d-block mb-5" src={demo}/>
    </>
    )
}
