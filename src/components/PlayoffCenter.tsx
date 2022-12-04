import Match from './Match'
import Connector from './Connector'
import { PlayoffColumnProps, MatchProps } from '../assets/Interfaces'

const Final = (props: MatchProps) => {

    return <>
        <div className='grow'></div>
        <p className='w-20 mx-auto bg-slate-900/75 text-center text-white border-solid border-t-2 border-r-2 border-l-2 border-gray-300 rounded-sm'>Final</p>
        <div className='relative inline-block mx-4 p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl'>
            <Match {...props}
                   inline={true}
                   floatingDetails={true} />
        </div>
        <div className='grow'>
            <Connector inverted={true} />
        </div>
    </>
}

const ThirdPlace = (props: MatchProps) => {

    return <>
        <div className='grow'></div>
        <p className='w-28 mx-auto bg-slate-900/75 text-center text-white border-solid border-t-2 border-r-2 border-l-2 border-gray-300 rounded-sm'>Third Place</p>
        <div className='relative inline-block mx-4 p-1 bg-slate-900/75 text-center text-white font-sans border-solid border-2 border-gray-300 rounded-3xl'>
            <Match {...props}
                   inline={true}
                   floatingDetails={true}
                   invertedDetails={true} />
        </div>
        <div className='grow'></div>
    </>
}

const Semi1 = (props: MatchProps) => {

    return <>
        <div className='w-1/4 relative inline-block p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl'>
            <Match {...props}
                   inline={false}
                   inverted={false}
                   floatingDetails={true} />        
        </div>
    </>
}

const Semi2 = (props: MatchProps) => {

    return <>
        <div className='w-1/4 relative inline-block p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl'>
            <Match {...props}
                   inline={false}
                   inverted={true}
                   floatingDetails={true}
                   invertedDetails={true} />
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