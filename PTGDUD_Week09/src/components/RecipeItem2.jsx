import { CiBookmark } from "react-icons/ci";

const RecipeItem2=({item})=>{
    return(
        <div className="w-[45%] min-h-[230px] flex items-start justify-start border gap-3 border-gray-300 p-2 rounded-xl">
            <img src={item.img} className="h-full w-1/3 object-cover rounded-2xl"/>
            <div className="flex flex-col w-full justify-start items-start gap-5">
                <div className="flex items-start justify-between w-full">
                    <div className="text-start">
                        <p className="text-2xl font-bold">{item.name}</p>
                        <p className="font-bold text-gray-400">{item.time} minutes</p>
                    </div>
                    <button style={{padding:'7px 10px',borderRadius:100,backgroundColor:'white',border:'1px solid #F44B87FF',color:'#F44B87FF'}}
                    className="m-0 bg-white border border-[#F44B87FF] text-[#F44B87FF]">
                        <CiBookmark size={25}/>
                    </button>
                </div>
                <div className="flex gap-2 items-center">
                    <img src={item.img} className="rounded-full w-[50px] h-[50px] object-fill"/>
                    <p>{item.editorName}</p>
                </div>
                <p className="text-start">{item.desc}</p>
            </div>
        </div>
    )
}

export default RecipeItem2