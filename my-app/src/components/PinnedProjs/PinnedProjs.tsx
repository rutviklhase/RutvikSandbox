import React, { useEffect, useState } from "react";
import { Project } from "../Project/Project";
import "./PinnedProjs.scss";

export const PinnedProjs: React.FC = () =>
{
    const [pinnedProjs, setPinnedProjs] = useState<any[]>([]);
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://gh-pinned-repos.egoist.dev/?username=rutviklhase')
        .then((res)=>res.json())
        .then((data)=>{setPinnedProjs(data); console.log(data);}) 
    },[]);

    useEffect(() => {
        fetch('http://localhost:3001/projects')
        .then((res)=>res.json())
        .then((data)=>{setProjects(data); console.log(data);}) 
    },[]);



    
    return(
            <> 
                <div>
                    {pinnedProjs.map
                    (home => 
                        <div>
                            <Project imageUrl="asdf" projectDesc={home.owner} projectName={home.repo}/>
                        </div>
                    )}
                </div>
            </>
            )
       
}