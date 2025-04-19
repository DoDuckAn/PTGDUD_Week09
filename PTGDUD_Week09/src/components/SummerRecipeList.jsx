import { useEffect, useState } from "react"
import { RecipeItem1 } from "./RecipeItem1"

const SummerRecipeList=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])

    return(
        <div className="w-full flex flex-col items-center gap-6">
            <h1 className="text-pink-500 font-bold mt-10">This Summer Recipes</h1>
            <p className="text-2xl">We have all your Independence Day sweets covered.</p>
            <div className="w-full gap-5 flex-wrap flex justify-center">
                {data.map((item,index)=>(
                    <RecipeItem1 key={index} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default SummerRecipeList