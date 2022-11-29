
interface ConnectorInterface{
    left: boolean,
    upper: boolean
}

const ConnectorUpperRight = () => {

    return <>
            <div className="w-1/2 border-b-2 border-red-500"></div>
            <div className="w-1/2 flex flex-col">
                <div className="h-1/2"></div>
                <div className="h-1/2 border-t-2 border-l-2 border-red-500"></div>
            </div>
           </>
}

const ConnectorUpperLeft = () => {

    return <>
            <div className="w-1/2 flex flex-col">
                <div className="h-1/2"></div>
                <div className="h-1/2 border-t-2 border-r-2 border-red-500"></div>
            </div>
            <div className="w-1/2 border-b-2 border-red-500"></div>
           </>
}

const ConnectorLowerRight = () => {

    return <>
            <div className="w-1/2"></div>
            <div className="w-1/2 flex flex-col">
                <div className="h-1/2 border-b-2 border-l-2 border-red-500"></div>
                <div className="h-1/2"></div>
            </div>
           </>
}

const ConnectorLowerLeft = () => {

    return <>
            <div className="w-1/2 flex flex-col">
                <div className="h-1/2 border-b-2 border-r-2 border-red-500"></div>
                <div className="h-1/2"></div>
            </div>
            <div className="w-1/2"></div>
           </>
}

// This component represents a connector which leads to the next stage
const Connector = (props: ConnectorInterface) => {

    return (
        <div className="flex w-2/12">
            { (props.left === true) 
                ? (props.upper === true) ? <ConnectorUpperLeft /> : <ConnectorLowerLeft />
                : (props.upper === true) ? <ConnectorUpperRight /> : <ConnectorLowerRight /> 
            }
        </div>
    )
}

export default Connector