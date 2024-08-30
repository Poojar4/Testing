import url from "../api.json" assert { type: "json" };
import endPoint from "../api.json" assert { type: "json" };
const sharedData: { currentUrl?; statusCode?; responseData?; updatedata?;  } = {};

class commonAction{
    async fullUrl(endpoint){
        const baseUrl = url.reqresurl.baseUrl;
        console.log(baseUrl, "this is the baseurl");
        //console.log(endpoint, "is the end point");
      
        const val = endPoint.endpoints[endpoint];
        console.log(val, "this is the endpoint");
        const fullUrl = `${baseUrl}${val}`;
        //await browser.url(fullUrl);
       
        sharedData.currentUrl = fullUrl;
        console.log(`FullURL:${fullUrl}`);
         return fullUrl;
    }
}
export default new commonAction();