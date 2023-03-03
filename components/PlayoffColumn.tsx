import Match from './Match'
import Connector from './Connector'
import { PlayoffColumnProps, MatchProps, MatchPairing } from '../assets/Interfaces'

// This component represents a column on the left side of the playoffs chart
const PlayoffColumnLeft = (props: PlayoffColumnProps) => {

  // Pairing matches in groups of 2
  let pairs: Array<MatchPairing> = []
  props.matches.map( (match, i, arr) => (i%2 === 0) ?  pairs.push({match1: match, match2: arr[i+1]}) : null )
  
  let margin1: number = 0
  let margin2: number = 0
  let margin3: number = 0

  if (props.margins != undefined) {
    margin1 = props.margins.margin1
    margin2 = props.margins.margin2
    margin3 = props.margins.margin3
  }

  return (<>
    { pairs.map( (pair, i) => <div key={`${pair.match1.order}-${pair.match2.order}`}>
        { (i === 0) ? <div style={ {height: `${margin1}px`}}></div> : null }
        <div className='flex'>
            <div className='grow'>
                <div className='relative w-[100%] p-1 bg-slate-900/75 hover:bg-slate-600/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl hover:rounded-r-none'>
                      <Match key={pair.match1.order} 
                             {...pair.match1}
                             inline={false}
                             inverted={false}
                             floatingDetails={true}
                             floatingDetailsDirection={ ( (i*2+1) <= pairs.length) ? "right-down" : "right-up"} />
                </div>
                <div style={{height: `${margin3}px`}}></div>  
                <div className='relative w-[100%] p-1 bg-slate-900/75 hover:bg-slate-600/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl hover:rounded-r-none'>
                      <Match key={pair.match2.order} 
                             {...pair.match2}
                             inline={false}
                             inverted={false}
                             floatingDetails={true}
                             floatingDetailsDirection={ ( (i*2+2) <= pairs.length) ? "right-down" : "right-up"} />
                </div>
            </div>
            <Connector inverted={false} double={true}/>
        </div>
        { (i === pairs.length-1) ? <div style={{height: `${margin1}px`}}></div> : <div style={{height: `${margin2}px`}}></div> } 
      </div>) 
    }
  </>)
}

// This component represents a column on the right side of the playoffs chart
const PlayoffColumnRight = (props: PlayoffColumnProps) => {

  // Pairing matches in groups of 2
  let pairs: Array<MatchPairing> = []
  props.matches.map( (match, i, arr) => (i%2 === 0) ?  pairs.push({match1: match, match2: arr[i+1]}) : null )

  let margin1: number = 0
  let margin2: number = 0
  let margin3: number = 0

  if (props.margins != undefined) {
    margin1 = props.margins.margin1
    margin2 = props.margins.margin2
    margin3 = props.margins.margin3
  }

  return (<>
    { pairs.map( (pair, i) => <div key={`${pair.match1.order}-${pair.match2.order}`}>
        { (i === 0) ? <div style={{height: `${margin1}px`}}></div> : null }
        <div className='flex'>
            <Connector inverted={true} double={true}/>
            <div className='grow'>
                <div className='relative w-[100%] p-1 bg-slate-900/75 hover:bg-slate-600/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl hover:rounded-l-none'>
                        <Match key={pair.match1.order} 
                               {...pair.match1}
                               inline={false}
                               inverted={false}
                               floatingDetails={true}
                               floatingDetailsDirection={ ( (i*2+1) <= pairs.length) ? "left-down" : "left-up"} />
                </div>
                <div style={{height: `${margin3}px`}}></div>  
                <div className='relative w-[100%] p-1 bg-slate-900/75 hover:bg-slate-600/75 text-center text-white border-solid border-2 border-gray-300 rounded-2xl hover:rounded-l-none'>
                        <Match key={pair.match2.order} 
                               {...pair.match2}
                               inline={false}
                               inverted={false}
                               floatingDetails={true}
                               floatingDetailsDirection={ ( (i*2+2) <= pairs.length) ? "left-down" : "left-up"} />
                  </div>
            </div>
        </div>
        { (i === pairs.length-1) ? <div style={{height: `${margin1}px`}}></div> : <div style={{height: `${margin2}px`}}></div> } 
      </div>) 
    }
  </>)
}

// This component manages the columns on the playoff chart
const PlayoffColumn = (props: PlayoffColumnProps) => {

    return (
      <div style={{width: "16vw"}}>
            { (props.inverted === true)
                  ? <PlayoffColumnRight matches={props.matches} margins={props.margins} />
                  : <PlayoffColumnLeft matches={props.matches} margins={props.margins} />
            }
      </div>
    )
}

export default PlayoffColumn