import React from "react"
const Project = (props) => {
    return(
        <div className="p-4 border-4 w-5/6 md:w-full mx-auto border-mycyan rounded-lg flex justify-between gap-10">
            <h3 className="font-medium">{props.name}</h3>
            <div>
                <h3>Visit it <a target="_blank" rel="noreferrer" href={props.url} className="underline decoration-4 underline-offset-4 decoration-mycyan hover:text-mycyan ">here.</a> </h3>
            </div>
        </div>
    )
}

export default Project