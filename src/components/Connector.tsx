
interface ConnectorInterface{
    inverted: boolean,
    double: boolean
}

const ConnectorRight = () => {

    return <div className="flex w-2/12">
            <div className="w-1/2 flex flex-col">
                <div className="h-14"></div>
                <div className="grow border-b-2 border-l-2 border-t-2 border-red-500"></div>
                <div className="h-14"></div>
            </div>
            <div className="w-1/2"></div>
           </div>
}

const ConnectorSingle = () => {

    return <div className="h-[100%] flex flex-col">
                <div className="h-1/2 border-b-2 border-red-500"></div>
                <div className="h-1/2"></div>
           </div>
}

const ConnectorLeft = () => {

    return <div className="flex w-2/12">
            <div className="w-1/2 flex flex-col">
                <div className="h-14"></div>
                <div className="grow border-b-2 border-r-2 border-t-2 border-red-500"></div>
                <div className="h-14"></div>
            </div>
            <div className="w-1/2">
                <ConnectorSingle />
            </div>
           </div>
}

// This component represents a connector which leads to the next stage
const Connector = (props: ConnectorInterface) => {

    return (
        <>
            { (props.double === true) 
                ? (props.inverted === true) ? <ConnectorRight /> : <ConnectorLeft />
                : <ConnectorSingle /> 
            }
        </>
    )
}

export default Connector