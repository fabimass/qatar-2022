
interface ConnectorInterface{
    inverted: boolean,
    double: boolean
}

const ConnectorRight = () => {

    return <div className="flex w-2/12">
            <div className="w-1/2">
                <ConnectorSingle />
            </div>
            <div className="w-1/2 flex flex-col">
                <div className="h-14"></div>
                <div className="grow border-b-4 border-l-4 border-t-4 border-gray-300"></div>
                <div className="h-14"></div>
            </div>
           </div>
}

const ConnectorSingle = () => {

    return <div className="h-[100%] flex flex-col">
                <div className="h-1/2 border-b-4 border-gray-300"></div>
                <div className="h-1/2"></div>
           </div>
}

const ConnectorLeft = () => {

    return <div className="flex w-2/12">
            <div className="w-1/2 flex flex-col">
                <div className="h-14"></div>
                <div className="grow border-b-4 border-r-4 border-t-4 border-gray-300"></div>
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