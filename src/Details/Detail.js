import { useSearchParams } from "react-router-dom";

function Details(){
    const [id, setId] = useSearchParams();
    console.log(id.get('id'));
    return <h1>Test</h1>
    
}
export default Details;