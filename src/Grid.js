import React from 'react'
import './Section1'
import Earth from './Image/earth.jpg'
import Night from './Image/Night.jpg'
import Soccer from './Image/soccer.jpg'
import Car from './Image/car.jpg'
import Road from './Image/road.jpg'
import Space from './Image/space.jpg'
import Robbot from './Image/robbot.jpg'
import Coconut from './Image/coconut.jpg'


const Grid = () => {
    return (
        <div>
            <div className=' grid'>
                <img src={Earth} alt='' />
                <img src={Night} alt='' />
                <img src={Soccer} alt='' />
                <img src={Car} alt='' />
                <img src={Road} alt='' />
                <img src={Space} alt='' />
                <img src={Robbot} alt='' />
                <img src={Coconut} alt='' />




            </div>
        </div>
    )
}

export default Grid
