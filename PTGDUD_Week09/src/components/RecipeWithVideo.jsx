import { useEffect, useState } from "react"
import { RecipeItem1 } from "./RecipeItem1"

const RecipeWithVideo=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])

    return(
        <div className="w-full flex flex-col items-center gap-6 mt-[100px]">
            <h1 className="text-pink-500 font-bold mt-10">Recipes With Videos</h1>
            <p className="text-2xl">Cooking Up Culinary Creations with Step-bySteps Videos</p>
            <div className="w-full gap-5 flex-wrap flex justify-center">
                {data.map((item,index)=>(
                    <RecipeItem1 key={index} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default RecipeWithVideo