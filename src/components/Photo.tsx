
interface PhotoInterface{
    path: string
}

const Photo = (props: PhotoInterface) => {

    return (
            <img src={props.path} className="text-center my-2 mx-auto "/>
    )
}

export default Photo