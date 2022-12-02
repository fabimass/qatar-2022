import Match from './Match'

type goalData = {
    order: number,
    minute: string,
    author: string,
    team: number
}

type matchData = {
    order: number,
    team_1: string,
    team_1_goals: number | null,
    team_2: string,
    team_2_goals: number | null,
    goals: Array<goalData>,
    photo: string
}

interface PlayoffCenterInterface{
    semi1: matchData,
    semi2: matchData,
    third: matchData,
    final: matchData
}

const Final = (props: matchData) => {

    return <>
        <div className='grow'></div>
        <p className='w-20 mx-auto bg-slate-900/75 text-center text-white border-solid border-t-2 border-r-2 border-l-2 border-gray-300 rounded-sm'>Final</p>
        <div className='relative inline-block mx-4 p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl'>
            <Match team_1={props.team_1}
                team_1_goals={props.team_1_goals}
                team_2={props.team_2}
                team_2_goals={props.team_2_goals}
                photo={props.photo}
                goals={props.goals}
                inline={true}
                floatingDetails={true} />
        </div>
        <div className='grow'>
            <div className="h-[100%] flex">
                <div className="w-1/2 border-r-4 border-gray-300"></div>
                <div className="w-1/2"></div>
           </div> 
        </div>
    </>
}

const ThirdPlace = (props: matchData) => {

    return <>
        <div className='grow'></div>
        <p className='w-28 mx-auto bg-slate-900/75 text-center text-white border-solid border-t-2 border-r-2 border-l-2 border-gray-300 rounded-sm'>Third Place</p>
        <div className='relative inline-block mx-4 p-1 bg-slate-900/75 text-center text-white font-sans border-solid border-2 border-gray-300 rounded-3xl'>
            <Match team_1={props.team_1}
                team_1_goals={props.team_1_goals}
                team_2={props.team_2}
                team_2_goals={props.team_2_goals}
                photo={props.photo}
                goals={props.goals}
                inline={true}
                floatingDetails={true}
                invertedDetails={true} />
        </div>
        
        <div className='grow'></div>
    </>
}

const Semi1 = (props: matchData) => {

    return <>
        <div className='w-1/4 relative inline-block p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl'>
            <Match team_1={props.team_1}
                team_1_goals={props.team_1_goals}
                team_2={props.team_2}
                team_2_goals={props.team_2_goals}
                photo={props.photo}
                goals={props.goals}
                inline={false}
                inverted={false}
                floatingDetails={true} />        
        </div>
    </>
}

const Semi2 = (props: matchData) => {

    return <>
        <div className='w-1/4 relative inline-block p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-3xl'>
            <Match team_1={props.team_1}
                team_1_goals={props.team_1_goals}
                team_2={props.team_2}
                team_2_goals={props.team_2_goals}
                photo={props.photo}
                goals={props.goals}
                inline={false}
                inverted={true}
                floatingDetails={true}
                invertedDetails={true} />
        </div>
    </>
}

// This component represents the center of the playoffs
const PlayoffCenter = (props: PlayoffCenterInterface) => {

    return <div className="grow flex flex-col">
            <Final {...props.final} />
            <div className='flex'>
                <Semi1 {...props.semi1} />
                <div className='grow'>
                    <div className="h-[100%] flex flex-col">
                        <div className="h-1/2 flex">
                            <div className="w-1/2 border-r-4 border-b-4 border-gray-300"></div>
                            <div className="w-1/2 border-b-4 border-gray-300"></div>
                        </div> 
                    <div className="h-1/2"></div>
                    </div>
                </div>
                <Semi2 {...props.semi2} />
            </div>
            <ThirdPlace {...props.third} />
           </div>
}

export default PlayoffCenter