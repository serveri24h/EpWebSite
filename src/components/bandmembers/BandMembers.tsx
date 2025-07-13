import React, {useState} from 'react';
import './BandMembers.css';
import BandMemberDetails, {MemberConfig, MemberConfigList} from './BandMemberDetails';

function computeShit(n:number){
    return [
        Math.sin(n*(2*Math.PI/7)),
        Math.cos(n*(2*Math.PI/7)),
    ]
}

interface BandMemberSelectorProps extends MemberConfig {
    onSelection:any
}


const BandMemberSelector:React.FC<BandMemberSelectorProps> = ({onSelection, n, name, xOffset, yOffset, width, height}) => {

    const radius = 225
    const [centerX, centerY] = [250, 250] 

    const [xDiffStart, yDiffStart] = computeShit(n)
    const [xDiffStop, yDiffStop] = computeShit(n+1)

    console.log(xDiffStart, yDiffStart)

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
        >
            <pattern id={idName} patternUnits="userSpaceOnUse" width="600" height="800">
                <image 
                    href={`${process.env.PUBLIC_URL}/bandmembers/${name.toLowerCase()}.jpg`} 
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
    const [selectedMember, setSelectedMember] = useState<number | null>(null);
    return (
        <div>
        <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            {
                MemberConfigList.map(
                    ((configs,i) => <BandMemberSelector 
                        key={i} 
                        onSelection={()=>setSelectedMember(i)}
                        {...configs}/>
                    ))
            }
        </svg>
        {selectedMember!==null && <BandMemberDetails data={MemberConfigList[selectedMember]} onClose={() => setSelectedMember(null)} />}
        </div>
    )
}

export default BandMembers;
