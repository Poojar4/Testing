import fetch from "node-fetch";
// import { expect } from "chai";
import data from "../userData.json" assert { type: "json" };
import endpoint from "../api.json" assert { type: "json" };
import url from "../api.json" assert { type: "json" };
import commonAction from "./commonAction.ts";
import { RequestInit } from "node-fetch";

const sharedData: { currentUrl?; statusCode?; responseData?; updatedata?;  } = {};
// console.log(sharedData);

//let response;

class APIActions {
    async basicActions(url:string,method:string,body:any = null){
        // Define options for the fetch request
        const options :RequestInit = {
            method:method,
            headers:{
                "Content-Type":"application/json"
            }
       };


        if(body){
          console.log(`option body is : ${options.body}`);
            console.log("IN Body loop")
            options.body =JSON.stringify(body);
        }
      
    try{
        const response = await fetch(url, options);

        console.log(`${options.method}--------------------------------------------------------`);
        
         if(response.ok){
            console.log("---------------------------------------------------------")
            if(method !== "DELETE"){
            sharedData.statusCode = response.status;
            sharedData.responseData = await response.json();
            console.log(JSON.stringify(sharedData.responseData));
            }else{
              console.log("Delete request successfull,no response body to parse");
            }
            sharedData.statusCode = response.status;
            return response.status;
        }else{
            console.log(`Request is failed with status:${sharedData.statusCode}`);
        }
    }
        catch(error){
            sharedData.statusCode = 500;
            console.log("Fetch error",error)
       }
    }

    // POST Call
  async postCall(val) {
    // const baseurl = url.reqresurl.baseUrl;
    // console.log(`this is the baseUrl:${baseurl}`);

    // const val = endpoint.endpoints[value];
    // console.log(`this is the endpoint:${val}`);

    // const fullUrl = `${baseurl}${endpoint}`;
    // console.log(`FULL URL,${fullUrl}`);
    const url= await commonAction.fullUrl(val);
    console.log(`POST URL:${url}`);

     const result = await this.basicActions(url, "POST", data.Users);
     console.log(result);
       return sharedData.statusCode;

    // try {
    //     console.log('try block .............');
        
    //     const response = await fetch(url, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data.Users),
    //   });
    //   if (response.ok) {
    //     // Parse and store the response body
    //     sharedData.responseData = await response.json();
    //     console.log("Response Data:", sharedData.responseData);
    //     return response.status;
    //   } else {
    //     console.log("Request failed with status:", sharedData.statusCode);
    //   }
      
    // } catch (error) {
    //   // Handle errors and set an error status code
    //   sharedData.statusCode = 500;
    //   console.error("POST Fetch error:", error);
    // }
 }

  // GET Call
  async getCall(val) {
     const url = await commonAction.fullUrl(val);
     console.log(`GET URL:${url}`);

     const result = await this.basicActions(url,"GET");
     console.log(result);
      return sharedData.statusCode;
    
//     try {
//       const response = await fetch(url, {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });
       
//       sharedData.statusCode = response.status;
//       if (response.ok) {
//         // Parse and store the response body
//          sharedData.responseData= await response.json();
//         console.log("Response Data:", sharedData.responseData);
//         return response.status;
//       } else {
//         console.log("Request failed with status:", sharedData.statusCode);
//       }
//    } catch (error) {
//       // Handle errors and set an error status code
//       sharedData.statusCode = 500;
//       console.error("GET Fetch error:", error);
//     }
  }

  // PUT Call
  async putCall(val) {
     const url = await commonAction.fullUrl(val);
     console.log(`PUT URL:${url}`);

     const result = await this.basicActions(url, "PUT", data.Users);
     console.log(result);
     return sharedData.statusCode;
    // try {
    //   const response = await fetch(url, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data.Users),
    //   });
    //   sharedData.statusCode = response.status;
    //   if (response.ok) {
    //     // Parse and store the response body
    //     sharedData.responseData = await response.json();
    //     console.log("PUT Response Data:", sharedData.responseData);
    //     return response.status;
    //   } else {
    //     console.log("PUT Request failed with status:", sharedData.statusCode);
    //   }
      
    // } catch (error) {
    //   // Handle errors and set an error status code
    //   sharedData.statusCode = 500;
    //   console.error("PUT Fetch error:", error);
    // }
  }

  // DELETE Call
  async deleteCall(val) {
    const url = await commonAction.fullUrl(val);
    console.log(`DELETE URL:${url}`);

    const result = await this.basicActions(url, "DELETE", null);
     console.log(result);
      return sharedData.statusCode;
    
  //   try {
  //     const response = await fetch(url, { method: "DELETE"});
  //       sharedData.statusCode = response.status;
    // if (response.ok) {
    //     // If the response body exists and is in JSON format
    //     try{
    //     // Parse and store the response body
    //     // sharedData.responseData = await response.json();
    //     // console.log("Deleted Data:", JSON.stringify(sharedData.responseData));
    //    sharedData.statusCode = response.status;
    //     }catch(error){
    //         console.log("No JSON response body.");
    //     }
    //   } else {
    //     console.log("Request failed with status:", sharedData.statusCode);
    //   }
  //    } catch (error) {
  //     // Handle errors and set an error status code
  //     sharedData.statusCode = 500;
  //     console.error("DELETE Fetch error:", error);
  //   }
  }
}
export default new APIActions();
