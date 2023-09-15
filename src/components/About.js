import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileClassName from './ProfileClass';
const About = () => {
  return (
    <div>
    About
    <h2>Let's work </h2>
    <Outlet/>
    <ProfileClassName name={"PP"} />
     </div>

  )
}
export default About