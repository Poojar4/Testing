import { Given, When, Then } from "@wdio/cucumber-framework";
import fetch from "node-fetch";
// import { expect } from "chai";
import { expect } from "@wdio/globals";
import url from "../../api.json" assert { type: "json" };
import data from "../../userData.json" assert { type: "json" };
import endpoint from "../../api.json" assert { type: "json" };
import APIActions from "../../commonAction/APIActions.ts";
import { log } from "console";
import commonAction from "../../commonAction/commonAction.ts";



let response;
let sharedData;

Given(/^I open the site with endpoint "([^"]*)?"$/, async (value) => {
  //console.log("Opening URL:", value);
  const url = await commonAction.fullUrl(value);
  console.log(`this is the url:${url}`);
  //await browser.url(url);
  //await browser.maximizeWindow();
  await browser.pause(1000);
});

When(/^I make the Post api call$/, async () => {
  sharedData = await APIActions.postCall;

});

When(/^I pause for ([^"]*)?ms$/, async (time) => {
  await browser.pause(time);
});

// Then(/^I expect the response status should be "([^"]*)?"$/,async (expectedStatus) => {
//     console.log("responseStatus", sharedData.statusCode);
//    await expect(sharedData.statusCode).toEqual(parseInt(expectedStatus));
//   });
Then(/^I expect the status of (GET|POST|PUT|DELETE) should be (\d+)$/,
  async (type, StatusCode: number) => {
    switch (type) {
      case "GET":
        const sharedData_get = await APIActions.getCall("getUserEndpoints");
        console.log(`status code is ${sharedData_get}`);
        await expect(sharedData_get).toEqual(Number(StatusCode));
        console.log(`HTTP Method: ${type},Expected Status code: ${StatusCode}`);
        break;

      case "POST":
       const sharedData_post  = await APIActions.postCall("createUserEndpoints");
        console.log(`status code is ${sharedData_post}`);
        await expect(sharedData_post).toEqual(Number(StatusCode));
        break;

      case "PUT":
        const sharedData_put  = await APIActions.putCall("updateUserEndpoints");
        console.log(`status code is ${sharedData_put}`);
        await expect(sharedData_put).toEqual(Number(StatusCode));
        break;

      case "DELETE":
        const sharedData_del  = await APIActions.deleteCall("deleteUserEndpoints");
        console.log(`status code is ${sharedData_del}`);
        await expect(sharedData_del).toEqual(Number(StatusCode));
        break;
    }
  }
);

Then(/^I expect the https page should be displayed$/, async () => {
  // const currentUrl = await browser.getUrl();
  // console.log("Current URL after navigation:", currentUrl);
  //await expect(currentUrl).to.match(/^https:/);
  // const fullUrl = await commonAction.fullUrl();
  // await browser.url(fullUrl);

  await expect(browser).toHaveUrlContaining("https://"); // Check if the URL is an HTTP page
});

When(/^I make the Get api call$/, async () => {
  await APIActions.getCall;
});

When(/^I update the user for endpoint "([^"]*)?"$/, async (val) => {
//  const fullUrl = await commonAction.fullUrl(val);
// const currentUrl= await browser.getUrl();
//  console.log(`FullUrl is:${currentUrl}`);
await APIActions.putCall(val);

//  const updatedData = {
//  name :'abc',
//  email : 'abc@gmail.com'
//  };

   const updatedData = data.Users[0].name ="Brajesh";
  console.log(`data to be updated:${JSON.stringify(updatedData)}`);

//const val = endpoint.endpoints[endpoint];
  // const baseUrl = url.reqresurl.baseUrl;
  //var fullUrl = `${baseUrl}/${val}`;
  // console.log(`URL_WHEN:${url}`);
  
  // const updatedata = data.Users[0];
  // console.log(updatedata);

  // try {
  //   const response = await fetch(currentUrl, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(updatedData),
  //   });
  //   sharedData.statusCode = response.status;
  //   if (response.ok) {
  //     sharedData.updatedata = await response.json();
  //     console.log("Update Data:", sharedData.updatedata);
  //   } else {
  //     console.log(`statusCode is:${response.status}`);
  //     console.log("Request failed with status:", sharedData.statusCode);
  //   }
  // } catch (error) {
  //   sharedData.statusCode = 500;
  //   console.error("Fetch error:", error);
  //  }
 });

When(/^I make the Put api call$/, async () => {
  await APIActions.putCall;
});

// const response = await fetch(`${baseUrl}/api/users/${userId}`);
// expect(response.status).to.equal(200);
// const user = response.json();
// expect(user.data.id).to.equal(parseInt(userId))

When(/^I delete the user for endpoint "([^"]*)?"$/, async (val) =>{
  await APIActions.deleteCall(val);
  // const currentUrl = await browser.getUrl();
  // console.log(currentUrl);
  // const userId = data.Users[0][id];
  // console.log(`user is deleted with id:${userId}`);
  // const deleteData = data.Users[0];
  // console.log(`deleted data is:${deleteData}`);
  // try {
  //   const response = await fetch(currentUrl, {method: "DELETE",
  //   });
  //   if (response.ok) {
  //     sharedData.deletedata = await response.json();
  //     console.log("Delete Data:", sharedData.deletedata);
  //   } else {
  //     sharedData.statusCode = response.status;
  //     console.log(`statusCode is:${response.status}`);
  //     console.log("Request failed with status:", sharedData.statusCode);
  //   }
  // } catch (error) {
  //   sharedData.statusCode = 500;
  //   console.error("Fetch error:", error);
  // }
})

When(/^I make the Delete api call$/, async () => {
  await APIActions.deleteCall;
});

// Then(/^I expect the response status should be (\d+)$/, async () => {
//   expect(response.status).to.equal(204);
// });
