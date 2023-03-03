import Image from 'next/image'

const Ball = () => {

    return (
        <Image src={"/ball.png"} alt="Ball" width={28} height={28} className="text-center my-auto p-0.5"/>
    )
}

export default Ball