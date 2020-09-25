import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import axios from "axios"
import LinkBox from './LinkBox'

const Short = () => {
    const {handleSubmit, register, errors} = useForm()
    const [shortUrl, setShortUrl] = useState({})

    const POST_URL = "https://rel.ink/api/links/"
    const onShort = link => {
        axios
            .post(POST_URL, link)
            .then(response => {
                setShortUrl(response.data)
            })
            .catch(err=> console.log(`ERROR in POST!! ${err}`))
            .finally()
        }
        const {hashid, url} = shortUrl

        return (
        <div> 
           <form onSubmit={handleSubmit(onShort)}>
                <input 
                    type="text"
                    name="url" 
                    placeholder="https://www.yourURL.com"
                    ref={register({
                        required: "Required",
                        pattern: {
                            // value: "",
                            message: "please enter a URL"
                        }
                    })}
                />
                {errors.url && errors.url.message}
                 <button type="submit"> Shorten It!</button>
           </form>
           <LinkBox hashid={hashid} url={url}/>
        </div>
    )
}

export default Short
