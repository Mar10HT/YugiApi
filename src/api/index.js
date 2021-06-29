import getEnvVars from "../../enviroment"

const {apiUrl} = getEnvVars();


//cardinfo.php?num=5&offset=0&sort=new

export const fetchCards = async () =>{
    try {
        const endpoint  = `${apiUrl}cardinfo.php?num=10&offset=0&sort=new`;

        const response = await fetch(endpoint);
        const data = await response.json();
    
        console.log(data);

        return(data);

    } catch (error) {
        console.log(error);
        return { count: 0 };
    }
};

export const searchCard = async (card) => {
    try {
        const endpoint = `${apiUrl}cardinfo.php?&fname=${card}`;

        const response = await fetch(endpoint);
        const data = await response.json();

        return data;

    } catch (error) {
        console.log(error);
    }
};