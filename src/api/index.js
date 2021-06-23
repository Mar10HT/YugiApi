import getEnvVars from "../../environment";

const {apiUrl} = getEnvVars();


//cardinfo.php?num=5&offset=0&sort=new

const fetchCards = async () =>{
    //const cardName = prompt("Nombre de la carta");
    //const cardName = "Dark Magician"
    const endpoint  = `${apiUrl}cardinfo.php?num=5&offset=0&sort=new`;

    const response = await fetch(endpoint);
    const data = await response.json();

    
    console.log(data);

    return(data);
};
export default fetchCards;