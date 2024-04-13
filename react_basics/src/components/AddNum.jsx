import { useState } from "react";

function AddNum({start_val, children}) {

    const [cont, setCont] = useState(start_val ? start_val : 0 );

    return <div>
        <p>Number of clicks {cont}</p>

        {children}

        <button 
        onClick={e => setCont(cont+1)}
        className="padding-2 bg-gray-100 rounded-lg p-2 disabled:opacity-70">
        Raise to {cont +  1}
        </button>
    </div>

}


export default AddNum;