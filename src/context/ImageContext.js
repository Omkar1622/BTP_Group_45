import { createContext , useState } from "react";

const ImageContext = createContext();

export default ImageContext ;

export const ImageContextProvider = ({children}) => {
    const [url , setUrl ] = useState('')

    let contextData = {
        url : url ,
        setUrl: setUrl ,
    }

    return(
        <ImageContext.Provider value={contextData}> {children} </ImageContext.Provider>
    )
 }