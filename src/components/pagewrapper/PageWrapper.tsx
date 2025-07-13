import React, { ReactNode } from 'react';

const PageWrapper:React.FC<{children: ReactNode}>= ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: "100%",
            justifyContent: "center",  
            alignItems: "center",     
            height: "100vh", 
            flexGrow: 1, 
            overflow: "auto",
        }}>
            {children}
        </div>
    );
};

export const FullPageWrapper:React.FC<{children: ReactNode[]}> = ({children}) => {
    if (!children || children.length!==2) {
        throw Error("Fuck")
    }
    return (
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {children[0] /* The first child (header) */}
        <PageWrapper>
          {children[1] /* Remaining children */}
        </PageWrapper>
      </div>
    );
  };



export default PageWrapper;