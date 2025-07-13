import React, { ReactNode } from 'react';
import './PageWrapper.css';

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
      </div>
    );
  };



export default FullPageWrapper;