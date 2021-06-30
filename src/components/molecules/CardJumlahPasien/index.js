const CardJumlahPasien = ({isolasi, sembuh}) => {
    return (
<div class="pt-1 pb-5 mt-1 sm:mt-8 px-6 sm:flex sm:justify-center lg:justify-start px-12">
  
  <div class="flex items-center justify-center h-48 w-48 rounded-md bg-red-400 text-white">
    
<p class="pt-5 text-3xl font-bold text-white-900">
        {isolasi}
      </p>
      <br/>
     
            </div>
            
            <div class="mt-3 sm:mt-0 sm:ml-3">
            <div class="flex items-center justify-center h-48 w-48 rounded-md bg-blue-300 text-white">
<h1 class="pt-5 text-3xl font-bold text-white-900">
       {sembuh}
      </h1>
            </div>
            </div>
          </div>
  
    )
    
}

export default CardJumlahPasien;