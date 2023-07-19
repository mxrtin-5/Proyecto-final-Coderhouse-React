import { FetchData } from "../../ejemplos/renderprops/FetchData"
import { useFetch } from "../../hooks/useFetch"





export const Posts = () =>{

    return(
        <div>
            <h2>Json Placeholder</h2>
            <hr />

            <FetchData url={'https://jsonplaceholder.typicode.com/posts'}>

                {(data) =>(
                    <>
                    {
                        
                        data && data.map(data =>(
                            <div key={data.id}>
                                <h4>{data.title}</h4>
                                <p>{data.body}</p>
                                <hr />
                            </div>
                        ))
                    
                    }
                    
                    </>
                )}
            

            </FetchData>
        </div>
    )
}

