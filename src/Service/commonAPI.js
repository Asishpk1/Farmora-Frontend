import axios from "axios";
import { data } from "react-router-dom";

const commonAPI = async (httpmethod,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpmethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonAPI