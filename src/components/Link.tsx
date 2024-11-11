type LinkProps = {
    name : string
}


function Link({name} : LinkProps
    
) {
  return (
    <div className="text-base text-white font-semibold bg-grey700 rounded-md py-3 text-center hover:bg-green hover:text-grey900">{name}</div>
  )
}

export default Link