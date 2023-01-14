import React from 'react'
import Svg1 from './Svg1';
import Svg2 from './Svg2';
import Svg3 from './Svg3';
import "./styles.css";

function Feature() {

    const features = [
        {
            title : 'Easy Returns',
            content : 'Our return policy is simple and that is why customers love our shop.',
            svg : <Svg1/>,
        },
        {
            title : 'Customer Service',
            content : 'We offer amazing customer service no matter what happens.',
            svg : <Svg2/>,
        },
        {
            title : 'High Quality',
            content : 'All of our products go through strict inspection before we dispatch them.',
            svg : <Svg3/>,
        },
    ]

  return (
    <div className='feature-container' >
        <div className='feature-header'>
        Why People Choose Us
        </div>
        <div className='feature-items-container'>
        {
            features.map((feature) => {
                return (
                    <div className='feature-content-container' key={feature.title} >
                         {feature.svg}
                        <div className='feature-title'>
                            {feature.title}
                            </div>
                            <div className='feature-content'>
                                {feature.content}
                                </div>
                        </div>
                )
            })
        }
        </div>
       
    </div>
  )
}

export default Feature