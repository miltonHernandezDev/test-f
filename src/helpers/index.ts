import { Builder, parseString }  from 'xml2js';
export const convertJsonToXml = (json:any)=> {
    let instance: Builder; 
    if(!instance){
        instance = new Builder();
    }
    
    return instance.buildObject(json) 
}