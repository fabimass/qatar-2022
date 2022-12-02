import Match from './Match'
import Connector from './Connector'

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

type marginData = {
    margin1: number,
    margin2: number,
    margin3: number
}

type matchPairing = {
    match1: matchData,
    match2: matchData
}

interface PlayoffColumnInterface{
    pairs: Array<matchPairing>,
    margins: marginData
}

interface PlayoffInterface{
    matches: Array<matchData>,
    round: number,
    inverted: boolean
}

// This component represents a column on the left side of the playoffs chart
const PlayoffColumnLeft = (props: PlayoffColumnInterface) => {

  return <>
              { props.pairs.map( (pair, i) => <>
                  { (i === 0) ? <div style={{height: `${props.margins.margin1}px`}}></div> : null }
                  <div className='flex' key={`${pair.match1.order}-${pair.match2.order}`}>
                    <div className='grow relative'>
                    <div className='w-[100%] p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl'>
                      <Match key={pair.match1.order} 
                        team_1={pair.match1.team_1}
                        team_1_goals={pair.match1.team_1_goals}
                        team_2={pair.match1.team_2}
                        team_2_goals={pair.match1.team_2_goals}
                        photo={pair.match1.photo}
                        goals={pair.match1.goals}
                        inline={false}
                        inverted={false}
                        floatingDetails={true}
                        invertedDetails={false}
                        />
                        </div>
                      <div style={{height: `${props.margins.margin3}px`}}></div>  
                      <div className='w-[100%] p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl'>
                      <Match key={pair.match2.order} 
                        team_1={pair.match2.team_1}
                        team_1_goals={pair.match2.team_1_goals}
                        team_2={pair.match2.team_2}
                        team_2_goals={pair.match2.team_2_goals}
                        photo={pair.match2.photo}
                        goals={pair.match2.goals}
                        inline={false}
                        inverted={false}
                        floatingDetails={true}
                        invertedDetails={false}
                        />
                        </div>
                    </div>
                    <Connector inverted={false} double={true}/>
                  </div>
                  { (i === props.pairs.length-1) ? <div style={{height: `${props.margins.margin1}px`}}></div> : <div style={{height: `${props.margins.margin2}px`}}></div> } 
              </>
              ) }
        </>
}

// This component represents a column on the right side of the playoffs chart
const PlayoffColumnRight = (props: PlayoffColumnInterface) => {

  return <>
              { props.pairs.map( (pair, i) => <>
                  { (i === 0) ? <div style={{height: `${props.margins.margin1}px`}}></div> : null }
                  <div className='flex' key={`${pair.match1.order}-${pair.match2.order}`}>
                    <Connector inverted={true} double={true}/>
                    <div className='grow relative'>
                      <div className='w-[100%] p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl'>
                        <Match key={pair.match1.order} 
                          team_1={pair.match1.team_1}
                          team_1_goals={pair.match1.team_1_goals}
                          team_2={pair.match1.team_2}
                          team_2_goals={pair.match1.team_2_goals}
                          photo={pair.match1.photo}
                          goals={pair.match1.goals}
                          inline={false}
                          inverted={false}
                          floatingDetails={true}
                          invertedDetails={true}
                          />
                      </div>
                      <div style={{height: `${props.margins.margin3}px`}}></div>  
                      <div className='w-[100%] p-1 bg-slate-900/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl'>
                        <Match key={pair.match2.order} 
                          team_1={pair.match2.team_1}
                          team_1_goals={pair.match2.team_1_goals}
                          team_2={pair.match2.team_2}
                          team_2_goals={pair.match2.team_2_goals}
                          photo={pair.match2.photo}
                          goals={pair.match2.goals}
                          inline={false}
                          inverted={false}
                          floatingDetails={true}
                          invertedDetails={true}
                          />
                      </div>
                    </div>
                  </div>
                  { (i === props.pairs.length-1) ? <div style={{height: `${props.margins.margin1}px`}}></div> : <div style={{height: `${props.margins.margin2}px`}}></div> } 
              </>
              ) }
        </>
}

const PlayoffColumn = (props: PlayoffInterface) => {

    // Pairing matches in groups of 2
    let pairs: Array<matchPairing> = []
    props.matches.map( (match, i, arr) => (i%2 === 0) ?  pairs.push({match1: match, match2: arr[i+1]}) : null )
    
    let margin1: number = 0 // This is gonna be the top and bottom margin for the whole column
    let margin2: number = 0 // This is gonna be the margin between pairs of matches
    let margin3: number = 0 // This is gonna be the margin between matches inside a pair

    switch( props.round ){

      case 1:
        margin1= 50
        margin2= 50
        margin3= 30
        break;
      case 2:
        margin1= 120
        margin2= 0
        margin3= 215
        break;
      default:
        margin1= 0
        margin2= 0
        margin3= 0
    }

    return <div className='w-[250px]'>
            { (props.inverted === true)
                  ? <PlayoffColumnRight pairs={pairs} margins={{margin1, margin2, margin3}} />
                  : <PlayoffColumnLeft pairs={pairs} margins={{margin1, margin2, margin3}} />
            }
           </div>
}

export default PlayoffColumn