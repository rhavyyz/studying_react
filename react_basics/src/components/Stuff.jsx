import { useEffect, useState } from "react"

import AddNum from "./components/AddNum";

function Stuff() {

  const [logged, setLogged] = useState(false);
  // const logged = false; 
  
  const numbers = [1, 2, 4, 5, 8 , 9];

  useEffect(() => {
    console.log("ZAP RAPAZ");
  }, []) // Read Documentation

  return (
    <>
      {/* <div className="flex justify-between">
        <h1 className="text-4x1 font-bold">{logged ? "Hello" : "Please log in"}</h1>
        <button 
          onClick={() => setLogged(!logged)}
          className="padding-2 bg-gray-100 rounded-lg p-2">
            toggle logged
        </button>
      
        
        
      </div>
    
      <button 
        disabled={!logged} 
        onClick={() => {console.log(logged); setLogged(!logged);}}
        className="padding-2 bg-gray-100 rounded-lg p-2 disabled:opacity-70">
        next
      </button>

      {numbers.map((e, id)=> <p key={id}>{e}</p>)} */}

      <AddNum>
        <AddNum start_val={3}>
          <AddNum></AddNum>
        </AddNum>
      </AddNum>

    </>
  )
}

export default App
