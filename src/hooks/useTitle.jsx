import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - The World Daily News`; 
    },[title])
}

export default useTitle;