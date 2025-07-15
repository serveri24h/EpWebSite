import React, {useEffect, useState} from 'react';
import './BandMembers.css';
import BandMemberDetails, {MemberConfig, MemberConfigList} from './BandMemberDetails';

function computeShit(n:number){
    return [
        Math.sin(n*(2*Math.PI/7)),
        Math.cos(n*(2*Math.PI/7)),
    ]
}

interface BandMemberSelectorProps extends MemberConfig {
    onSelection:any;
    onHoverEnter: (memberID:number)=>void;
}


const BandMemberSelector:React.FC<BandMemberSelectorProps> = ({onSelection, n, name, xOffset, yOffset, width, height, onHoverEnter }) => {

    const radius = 225
    const [centerX, centerY] = [250, 250] 

    const [xDiffStart, yDiffStart] = computeShit(n)
    const [xDiffStop, yDiffStop] = computeShit(n+1)

    const xStartPos = centerX+radius*xDiffStart;
    const yStartPos = centerY-radius*yDiffStart;

    const xStopPos = centerX+radius*xDiffStop;
    const yStopPos = centerY-radius*yDiffStop;

    const d = `M${centerX},${centerY} L${xStartPos},${yStartPos} A${radius},${radius} 0 0,1 ${xStopPos},${yStopPos} Z`;
    const idName=`memberBackground${name}`

    return (
        <g
            className="member-mini-image"
            style={{ cursor: 'pointer' }}  // Optional, to show pointer on hover
            onClick={onSelection}
            onMouseEnter={()=>onHoverEnter(n)}
        >
            <pattern id={idName} patternUnits="userSpaceOnUse" width="600" height="800"
            >
                <image 
                    href={`${process.env.PUBLIC_URL}/images/bandmembers/${name.toLowerCase()}.jpg`} 
                    x={`${xOffset}`} y={`${yOffset}`}
                    width={width} height={height} 
                    preserveAspectRatio="xMidYMid slice" 
                />
            </pattern>
            <path d={d} fill={`url(#${idName})`} />
        </g>
    )
}


const BandMembers:React.FC = () => {

    const [orderedMemberList, setOrderedMemberList] = useState<number[]>(MemberConfigList.map(m=>m.n))
    const [selectedMember, setSelectedMember] = useState<number | null>(null);
    
    const orderMemberList = (memberId:number)=>{
        // re-ordering is done in order to put the hover effect on top
        setOrderedMemberList([
            ...orderedMemberList.filter(k=>k!==memberId), memberId
        ])
    }   
    

    return <>
        <div className='band-member-selector-container'>
            <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
                {
                    orderedMemberList.map(
                        ((i) => <BandMemberSelector 
                            key={i} 
                            onSelection={()=>setSelectedMember(i)}
                            onHoverEnter={orderMemberList}
                            {...MemberConfigList[i]}/>
                        ))
                }
            </svg>
        </div>
        {selectedMember!==null && <BandMemberDetails data={MemberConfigList[selectedMember]} onClose={() => setSelectedMember(null)} />}
    </>
}

export default BandMembers;
