
const TitleText = ({title,desc}) => {
    return (
<div>
<h1 class="pt-5 text-3xl font-bold text-gray-900 sm:pl-6 lg:pl-14">
        {title}
      </h1>
      <h1 class="pt-2 text-1xl font-light text-gray-700 sm:pl-6 lg:pl-14">
        {desc}
      </h1>
  </div>
    )
    
}

export default TitleText;