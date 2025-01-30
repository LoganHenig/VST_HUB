import { VSTStar } from "./star"


export const VstCard = () =>{

    return(
        <div className="relative flex flex-col my-6 bg-black shadow-sm border border-slate-400 rounded-lg w-96">
  <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
    <img src="\src\assets\headphones.webp" alt="card-image" />
  </div>
  <div className="p-4">
    <div className="flex items-center mb-2">
      <h6 className="text-white text-xl font-semibold">
        Glue Compressor
      </h6>
 
      <div className="flex items-center gap-0 5 ml-auto">
        <VSTStar/>
        <VSTStar/>
        <VSTStar/>
        <VSTStar/>
        <VSTStar/>
        <span className="text-slate-200 ml-1.5">5.0</span>
      </div>
    </div>
    
    <p className="text-slate-300 leading-normal font-light">
      Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows.
    </p>
  </div>
 
  
  <div className="px-4 pb-4 pt-0 mt-2">
    <button className="w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      MORE INFO
    </button>
  </div>
</div>  
    )
}