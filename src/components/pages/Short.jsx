import React from 'react'
import {useForm} from "react-hook-form"

const Short = () => {
    const {handleSubmit, register, errors} = useForm()
    const onShort = link => console.log(link)

    return (
        <div> 
            <input 
                type="text"
                name="urlShort" 
                placeholder="enter your URL"
                ref={register({
                    required: "Required",
                    pattern: {
                        // value: "",
                        message: "please enter a URL"
                    }
                })}
            />
            {errors.urlShort && errors.urlShort.message}
             <button type="submit"> Shorten It!</button>
        </div>
    )
}

export default Short
