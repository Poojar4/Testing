import { When } from "@wdio/cucumber-framework";
//import test from '../../testData.json' assert { type: 'json' };
import { log } from "console";
import test from '../../DemoTestdata.json' assert { type: 'json' };
import { TIMEOUT } from "dns";
import { AsyncLocalStorage } from "async_hooks";
import { monitorEventLoopDelay } from "perf_hooks";

 When(/^I click on element "([^"]*)?"$/, async (element) => {
  const locator = test.locators[element];
  console.log(element);
  let val= `test.${element}`// sets the value to a loginbutton
  console.log(`----------------/////////${locator}`); // this prints the locator of the element from JSON to the console
  
   let value=await $(locator);
  // let value= await $(element)
   await value.isDisplayed();
   await value.click();
// (await $(element)).click();
});

// When(/^I enter the value "([^"]*)?" for the element "([^"]*)?"$/, async (text, element) => {
//     let value = process.env[text]; // Dynamically access the environment variable []
//   (await $(element)).setValue(text);  
    
//   });

  When(/^I scroll to element "([^"]*)?"$/, async (element) => {
    let text  = test.locators[element];
   await (await $(text)).scrollIntoView(false);
   await(await $(text)).moveTo();
  });

// When(/^I click on element "([^"]*)?"$/, async (element3) => {
// let locator = test.locators[element3];
// console.log(element3);
// console.log(`----------------/////////${locator}`);
//  await (await $(element3)).click();
// });

When(/^I wait for the element "([^"]*)?" is displayed$/, async (element) => {
    let price = test.locators[element];
  (await $(price)).isDisplayed();
  //   expect(element).to.be.displayed();
});

When(/^I pause for "([^"]*)?"ms$/, async (time) => {
  await browser.pause(time);
});

// When(/^I enter valid username and password$/, async()=>{
//   await $("#user-name").setValue(process.env.SAUCE_DEMO_USERNAME);
//   await browser.pause(2000);
//  await $("#password").setValue(process.env.SAUCE_DEMO_PASSWOD);
// });

// let randomEmail;
// function generateRandomEmail(){
//  const randomString  = Math.random().toString();
//  return `test+${randomString}@gmail.com`;

// }
When(/^I enter a random email and the password for the elements "([^"]*)?" and "([^"]*)?"$/, async(Email,Password)=>{
  const randomString  = Math.random()*100;
 const str = Math.round(randomString);
 let emailId= `test${str}@gmail.com`;
     await $("#Email").setValue(emailId);
     await browser.pause(2000);
    await $("#Password").setValue(process.env.PASSWORD);
   });

When(/^I add the product with name "([^"]*)?" to the cart$/, async (element1) => {
   const locator = test.locators[element1];
   console.log(element1);
   console.log(`----------------////////////////${locator}`);
  // let valu = `test.${element1}`;
   let loc = await $(locator);
 });

When(/^I enter the value "([^"]*)?" for the element "([^"]*)?"$/, async (text, element2) => {
  let loc = test.locators[element2];
  // await (await $(loc)).waitForDisplayed();
 await(await $(loc)).setValue(text);
 
 console.log(element2);
 console.log(`----------------/////////////////${loc}`);
 
});

When(/^I select "([^"]*)?" from "([^"]*)?" dropdown$/, async  (option, dropdownSelector) =>{
  let dropdown = test.locators[dropdownSelector];
  //  let price = test.locators[option]

console.log(option+"==========================");
 await (await $(dropdown)).click();
 //await (await $(dropdown)).waitForClickable({TIMEOUT:20000});
 await (await $(dropdown)).waitForExist();
await (await $(dropdown)).selectByVisibleText(option);
 

 });

// When(/^I enter the value "([^"]*)?" for the element "([^"]*)?"$/, async (text, element4) => {
//   await $(element4).setValue(text);
  
// });

When(/^I enter valid Email and Password for the element "([^"]*)?" and "([^"]*)?"$/, async (Email,Password) =>{
  let emailLoc = test.locators[Email];
  let passwordLoc = test.locators[Password];
  await $(emailLoc).setValue(process.env.EMAIL);
  await $(passwordLoc).setValue(process.env.PASSWORD);
})

When(/^I navigate back to the previous page "([^"]*)?"$/, async (BooksPage) =>{
 await browser.back();
})

When(/^I select "([^"]*)?" from the "([^"]*)?" dropdown$/, async  (option1, dropdownSelector1) =>{
  let value = test.locators[option1];
  let dropdown = test.locators[dropdownSelector1]
//console.log(option+"==========================");
 await (await $(dropdown)).click();
 //await (await $(dropdown)).waitForClickable({TIMEOUT:20000});
 await (await $(dropdown)).waitForExist();
await (await $(dropdown)).selectByVisibleText("India");
 console.log(value);
 });












