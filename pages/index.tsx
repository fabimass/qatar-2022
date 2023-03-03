import Head from 'next/head'
import { Inter } from '@next/font/google'
import Fixture from '@/assets/Fixture'
import Groups from '@/components/Groups'
import Playoffs from '@/components/Playoffs'

const inter = Inter({ subsets: ['latin'] })

// Static Site Generated
export async function getStaticProps(){
  return {
    props: {
      first_round: Fixture["first-round"],
      playoffs: Fixture["playoffs"]
    }
  }
}

export default function Home( props: any ) {
  return (
    <>
      <Head>
        <title>Qatar 2022</title>
        <meta name="description" content="Fixture of the World Cup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mx-auto my-0 p-[1rem] text-center'>
        <Groups groups={props.first_round}/>
      <div className="block xl:hidden">
        <Groups groups={props.playoffs}/>
      </div>
      <div className="hidden xl:block">
        <Playoffs groups={props.playoffs}/>
      </div>
    </div>
    </>
  )
}
