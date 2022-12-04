import { ConnectorProps } from '../assets/Interfaces'

// This is just a single horizontal line
const ConnectorSingle = () => {

    return (
        <div className="h-[100%] flex flex-col">
            <div className="h-1/2 border-b-4 border-gray-300"></div>
            <div className="h-1/2"></div>
        </div>
    )
}

// This is just a single vertical line
const ConnectorSingleInv = () => {

    return (
        <div className="h-[100%] flex">
            <div className="w-1/2 border-r-4 border-gray-300"></div>
            <div className="w-1/2"></div>
        </div>
    )
}

// This is a double connector for the right side of the playoffs
const ConnectorRight = () => {

    return (
        <div className="flex w-2/12">
            <div className="w-1/2">
                <ConnectorSingle />
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="h-14"></div>
                <div className="grow border-b-4 border-l-4 border-t-4 border-gray-300"></div>
                <div className="h-14"></div>
            </div>
        </div>
    )
}

// This is a double connector for the left side of the playoffs
const ConnectorLeft = () => {

    return (
        <div className="flex w-2/12">
            <div className="w-1/2 flex flex-col">
                <div className="h-14"></div>
                <div className="grow border-b-4 border-r-4 border-t-4 border-gray-300"></div>
                <div className="h-14"></div>
            </div>
            <div className="w-1/2">
                <ConnectorSingle />
            </div>
        </div>
    )
}

// This is a T shape connector pointing above
const ConnectorT = () => {
    
    return (
        <div className="h-[100%] flex flex-col">
            <div className="h-1/2 flex">
                <div className="w-1/2 border-r-4 border-b-4 border-gray-300"></div>
                <div className="w-1/2 border-b-4 border-gray-300"></div>
            </div> 
            <div className="h-1/2"></div>
        </div>
    )
}

// This is a T shape connector pointing below
const ConnectorTInv = () => {
    
    return (
        <div className="h-[100%] flex flex-col">
            <div className="h-1/2"></div>
            <div className="h-1/2 flex">
                <div className="w-1/2 border-r-4 border-t-4 border-gray-300"></div>
                <div className="w-1/2 border-t-4 border-gray-300"></div>
            </div>  
        </div>
    )
}

// This component manages the different connectors that you find in the playoffs chart
const Connector = (props: ConnectorProps) => {

    return <>
        { 
            (props.tshape === true)
                ? (props.inverted === true) ? <ConnectorTInv /> : <ConnectorT />
                : (props.double === true) 
                    ? (props.inverted === true) ? <ConnectorRight /> : <ConnectorLeft />
                    : (props.inverted === true) ? <ConnectorSingleInv /> : <ConnectorSingle />
             
        }
    </>
}

export default Connector