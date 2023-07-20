import React, { useEffect } from 'react'

const Animate = () => {

  let bg = document.body ;

  useEffect(() => {
    document.title = "Trailing Circle Animation";
  }, [])

  function animation() {
   
    let position = Math.floor(Math.random()*100);
    let size = Math.floor(Math.random()*(11-3))+3;
    let time = (Math.random()*(4-2))+2;

    let particle = document.createElement("div");
    particle.classList.add("circle");
    bg.appendChild(particle);

    setTimeout(() => {
      bg.removeChild(particle)
    }, 4000);

  let arr=[particle,position,size,time]; 
  return arr;
  }

  setInterval(() => {
    let [particle,position,size,time] = animation();
    particle.style.left=`${position}%`
    particle.style.width=`${size}px`
    particle.style.animationDuration=`${time}s`
  }, 500);

  return (
    <>
    <div className=' relative overflow-hidden text-neutral-50'></div>
   
    </>
  )
}

export default Animate

{/* <div className='relative left-1/2 top-1/2 w-3 aspect-1 rounded-full bg-yellow-300 shadow-4 animate-spin-slow'> */}