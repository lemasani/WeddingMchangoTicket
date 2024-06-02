import { ring } from 'ldrs'

ring.register()

// Default values shown

export default function Loader(){
    return(
        <>
            <l-ring
            size="20"
            stroke="3"
            bg-opacity="0"
            speed="2" 
            color="hsla(215, 98%, 61%, 1)" 
            ></l-ring>
        
        </>
    )
}