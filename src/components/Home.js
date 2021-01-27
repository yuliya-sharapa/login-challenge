import React from 'react'
import demo from '../assets/demo-collage.png'

export default function Home() {
    return (
    <>
    <h1 className="p-4 text-center" >Welcome to Users Dashboard!</h1>
    <img alt="demo" className="img-fluid mx-auto d-block mb-5 w-50" src={demo}/>
    </>
    )
}
