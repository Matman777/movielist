import { useParams } from "react-router-dom";

function Details(){
    const {id} = useParams();
    console.log(id.get('id'));
    return <h1>Test {id}</h1>
    
}
export default Details;