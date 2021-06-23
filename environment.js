import Constant  from "expo-constants";
const ENV = {
    dev:{
        apiUrl: "https://db.ygoprodeck.com/api/v7/",
        imageUrl:"https://storage.googleapis.com/ygoprodeck.com/pics/"
    },
    production:{
        apiUrl: "https://db.ygoprodeck.com/api/v7/",
        imageUrl:"https://storage.googleapis.com/ygoprodeck.com/pics/"
    },
}
const getEnvVars = (env = Constant.manifest.releaseChannel) =>{
    if(__DEV__) return ENV.dev;
    else if (env == "stagging") return ENV.dev;
    else if (env == "production" || env == "default") return ENV.production;
}
export default getEnvVars;