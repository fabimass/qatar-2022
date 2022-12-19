import Match from './Match'
import Connector from './Connector'
import { PlayoffColumnProps, MatchProps } from '../assets/Interfaces'
import { Fireworks } from '@fireworks-js/react'
import { useState } from 'react'

const Final = (props: MatchProps) => {

    const [animation, setAnimation] = useState(<></>)

    const firework = <Fireworks
                        options={{
                            rocketsPoint: {
                                min: 0,
                                max: 100
                            }
                        }}
                        style={{
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            position: 'fixed',
                            zIndex: -1
                        }}/>

    return <>
        <div className='grow'></div>
        <p className='w-20 mx-auto bg-slate-900/75 text-center text-white border-solid border-t-2 border-r-2 border-l-2 border-gray-300'>Final</p>
        <div className='relative inline-block min-w-[450px] max-w-[550px] mx-auto p-1 bg-slate-900/75 hover:bg-amber-300/75 text-center text-white border-solid border-2 border-gray-300 rounded-full'
             onMouseEnter={() => setAnimation(firework)}
             onMouseLeave={() => setAnimation(<></>)}>
            <Match {...props}
                   inline={true}
                   floatingDetails={true}
                   floatingDetailsDirection="center-down" />
            {animation}
        </div>
        <div className='grow'>
            <Connector inverted={true} />
        </div>
    </>
}

const ThirdPlace = (props: MatchProps) => {

    return <>
        <div className='grow'></div>
        <div className='relative inline-block min-w-[380px] max-w-[500px] mx-auto p-1 bg-slate-900/75 hover:bg-slate-600/75 text-center text-white font-sans border-solid border-2 border-gray-300 rounded-full'>
            <Match {...props}
                   inline={true}
                   floatingDetails={true}
                   floatingDetailsDirection="center-up" />
        </div>
        <p className='w-28 mx-auto bg-slate-900/75 text-center text-white border-solid border-b-2 border-r-2 border-l-2 border-gray-300'>Third Place</p>
        <div className='grow'></div>
    </>
}

const Semi1 = (props: MatchProps) => {

    return <>
        <div className='w-[200px] relative inline-block p-1 bg-slate-900/75 hover:bg-slate-600/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl hover:rounded-r-none'>
            <Match {...props}
                   inline={false}
                   inverted={false}
                   floatingDetails={true}
                   floatingDetailsDirection="right-down" />        
        </div>
    </>
}

const Semi2 = (props: MatchProps) => {

    return <>
        <div className='w-[200px] relative inline-block p-1 bg-slate-900/75 hover:bg-slate-600/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl hover:rounded-l-none'>
            <Match {...props}
                   inline={false}
                   inverted={true}
                   floatingDetails={true}
                   floatingDetailsDirection="left-down" />
        </div>
    </>
}

// This component represents the center of the playoffs
const PlayoffCenter = (props: PlayoffColumnProps) => {

    return (
        <div className="grow flex flex-col">
            <Final {...props.matches[3]} />
            <div className='flex'>
                <Semi1 {...props.matches[0]} />
                <div className='grow'>
                    <Connector tshape={true} inverted={false} />
                </div>
                <Semi2 {...props.matches[1]} />
            </div>
            <ThirdPlace {...props.matches[2]} />
        </div>
    )
}

export default PlayoffCenter