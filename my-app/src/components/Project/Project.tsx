import React from "react";
import { isPropertySignature } from "typescript";
import "./Project.scss"

interface Props{
    imageUrl: string;
    projectName?: string; 
    projectDesc?: string;
}

export const Project: React.FC<Props> = ({imageUrl, projectName, projectDesc}) => {
    
    
    return(
        <>
            <div>
                <img src={imageUrl}/>
                <p>{projectName}</p>
                <p>{projectDesc}</p>
            </div>
        </>
    )
}