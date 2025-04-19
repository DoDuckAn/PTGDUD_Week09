import { useEffect, useState } from "react"
import RecipeItem2 from "./RecipeItem2"

const EditorPick=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://67cd6670dd7651e464ee43e8.mockapi.io/Recipe')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=>console.log(err))
    },[])

    return(
        <div className="w-full flex flex-col items-center gap-6 mt-[100px]">
            <h1 className="text-pink-500 font-bold mt-10">Editor's pick</h1>
            <p className="text-2xl">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors</p>
            <div className="w-full gap-5 flex-wrap flex justify-center">
                {data.map((item,index)=>(
                    <RecipeItem2 key={index} item={item}/>
                ))}
            </div>
        </div>
    )
}

export default EditorPick