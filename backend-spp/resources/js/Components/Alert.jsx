import React from 'react'

export default function Alert({children,type='success'}) {
    let alert = "";

    switch(type){
        case 'error':
            alert = (
                <div className="alert border border-red-300 rounded-1 text-red-700 p-2 bg-red-100 text-center text-xs">
                    {children}
                </div>)
            break;
        case 'success':
            alert = (
                <div className="alert border border-green-300 rounded-1 text-green-700 p-2 bg-green-100 text-center text-xs">
                    {children}
                </div>
            )
            break;
    }
return (
    alert
  )
}
