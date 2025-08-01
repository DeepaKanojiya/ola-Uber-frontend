


const CaptainDetails = ()=>{
  return (
    <>
    <div className="flex item-center justify-between" >
          <div className="flex item-center justify-start gap-3" > 
            <img className="h-10 w-10 rounded-full object-cover" src="https://wallpapers.com/images/hd/smiling-random-person-graphic-png-trv-4350ryshed47fke7.jpg" alt="" />
            <h4 className="text-lg font-medium" >Deepak kanojiya</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold " >$45</h4>
            <p className="text-sm  text-gray-600" >Earned</p>
          </div>
        </div>
        <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start" >
          <div className="text-center" >
            <i className=" text-3xl mb-2 font-thin ri-timer-2-line"></i>
            <h5 className="text-lg font-medium" >10.2</h5>
            <p className="text-sm text-gray-600" >Hours Online</p>
            </div>
          <div className="text-center" >
            <i className=" text-3xl mb-2 font-thin ri-speed-up-line"></i>
            <h5 className="text-lg font-medium" >10.2</h5>
            <p className="text-sm text-gray-600" >Hours Online</p>
            </div>
          <div className="text-center">
            <i className=" text-3xl mb-2 font-thin ri-booklet-line"></i>
            <h5 className="text-lg font-medium" >10.2</h5>
            <p className="text-sm text-gray-600" >Hours Online</p>
            </div>
        </div>    
    </>
  )
}

export default CaptainDetails;