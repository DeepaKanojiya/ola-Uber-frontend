

  const LocationSearchPanel = (props)=>{
 
    // sample array for location
    const location = [
      "24B ,  Near kappor's cafe, sheryians coding school, Bhopal",
      "22C ,  Near Malhotra's cafe, sheryians coding school, Bhopal",
      "20B ,  Near singhai's cafe, sheryians coding school, Bhopal",
      "18A ,  Near sharma's cafe, sheryians coding school, Bhopal",

    ]

    return(
     <div>
       {
        location.map((element ,index)=>{
          return  <div key={index} onClick={()=>{
            props.setVehiclePanelOpen(true)
            props.setPanelOpen(false)
          }} className="flex justify-start border-2 border-gray-50 active:border-black rounded-xl my-2 p-3 items-center gap-4">
        <h2 className="bg-[#eee] p-2 rounded-full h-8 w-12 flex items-center justify-center " ><i className="ri-map-pin-fill "></i></h2>
        <h4 className="font-medium" >{element}</h4>
      </div>
        })
       }
     </div>

      
    )
  }

  export default LocationSearchPanel;