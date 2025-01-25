import apiClient from ".";

//method

const getreq = async (path) => {
    try{
      const response = await apiClient.get(path);
      return response;
    }
    catch(error){
       console.log(error);
    }
}


const postreq = async (path,data) => {
    try{
     const response = await apiClient.post(path,data);
     return response;
    }
    catch(error){
      console.log(error);
    }
}


const deletereq =  async (path) => {
    try{
      const response = await apiClient.delete(path);
      return response;
    }
    catch(error){
        console.log(error);
    }
}


const putreq =  async (path, data) => {
    try{
      const response = await apiClient.put(path,data);
      return response;
    }
    catch (error) {
     console.log(error);
    }
}


export {getreq, postreq, deletereq, putreq};