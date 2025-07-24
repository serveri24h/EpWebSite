import React, { ReactNode } from 'react';
import './PageWrapper.css';

const Credits:React.FC = () => {
  return <div className='credits-container'>
    <h4> Kansitaide - Irene Vapalahti </h4>
    <h4> Kuvat - Otso Karhu </h4>
  </div>
} 

export const FullPageWrapper:React.FC<{children: ReactNode[]}> = ({children}) => {
    if (!children || children.length!==2) {
        throw Error("Fuck")
    }
    return (
      <div className='page-wrapper'>
        {children[0] /* The first child (header) */}
        <div className='page-wrapper-child'>
          {children[1] /* Remaining children */}
        </div>
        <Credits/>
      </div>
    );
  };



export default FullPageWrapper;