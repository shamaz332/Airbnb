import Banner from '../components/Banner/Banner'
import Head from 'next/head'
import Header from '../components/Header/Header'

export default function Home({exploreData}) {
  return (
    <div>
     <Header/>
     <Banner/>
     <main className="max-w-7xl mx-auto px-8 sm:px-16">
       <section className="pt-6">
         <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
     
     {
       exploreData.map(item =>(
         <h2>{item.location}</h2>
       ))
     }
       </section>
     </main>
    </div>
  )
}



export async function getStaticProps()
{
  const exploreData = await fetch("https://links.papareact.com/pyp").
  then((res)=>res.json())


  return {
    props:{
      exploreData
    }
  }
}