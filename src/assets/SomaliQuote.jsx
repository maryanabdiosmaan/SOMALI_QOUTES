import { useState } from "react"

function SomaliQuote(){
    const[index, setindex]= useState(0)
    const maahmaah=[
        "1.Maroodi takarta saraan ma arkee kan kale tan saran ayuu arka",
        "2.labo kla bariday kala war la",
        "3.Talo xumo tog baas bay kaa riddaa",
        "4. Af jooga looma adeego",
        "5. Far keliya fool ma dhaqdo",
 
    ]
    const nextbtn =() =>{
        if(index<maahmaah.length - 1){
            setindex(index + 1)
        }
    }
    const Previousbtn =() =>{
        if(index>0){
            setindex(index -1)
        }
    }
    return <div className="text-center">
            <h1 style={{display: index==maahmaah.length - 1? "block":"none"}} className="font-bold text-red-600 text-3xl">Dhamaad</h1>
    <p style={{color : index ==maahmaah.length-3 ? "red":""}} className="text-center mt-6">{maahmaah[index]}</p>
    <button onClick={ Previousbtn} className="bg-blue-400 py-6 px-3 rounded text-white mt-4">Previous</button>
    <button onClick={ nextbtn}  className="bg-blue-400 py-6 px-3 rounded text-white ml-3">Next</button>
    </div>
}

export default SomaliQuote

