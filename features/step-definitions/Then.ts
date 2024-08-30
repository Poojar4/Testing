import { Then } from "@wdio/cucumber-framework";
//import { $ } from "@wdio/globals";
import {expect} from 'chai'
//import test from '../../testData.json' assert { type: 'json' };
import test from '../../DemoTestdata.json' assert { type: 'json' };
import { text } from "stream/consumers";

Then(/^I expect the url to contain "([^"]*)?"$/, async (text) => {
  let browserUrl = await browser.getUrl();
  console.log(browserUrl);
//   expect(browserUrl).toContain(text); //wdio
expect(browserUrl).to.equal(text);
});

// Then(/^I expect the element "([^"]*)?" is displayed$/, async (text1) => {
//     (await $(text1)).isDisplayed();
//   });

Then(/^I expect the element "([^"]*)?" to contain "([^"]*)?"$/, async (element, text) => {
    let books = test.locators[element];
    console.log(books+"///////////////////////");
    
    let book = await (await $(books)).getText();
    console.log("/////////////////"+book);
    expect(book).to.contain(text);
});

// Then(/^I expect the element "([^"]*)?" to contain "([^"]*)?"$/, async (element, text) => {
//   let message = await $(element).getText();
//   console.log(message);
//   expect(message).to.contain(text);
// });

// Then(/^I expect the element "([^"]*)?" is enabled$/, async (element) => {
// let button = test.locators[element];
// await $(button).isEnabled();
// });

Then(/^I expect the element "([^"]*)?" is displayed$/, async (element) => {
 let loc = test.locators[element];
let message = await $(loc).isDisplayed();
console.log(message);
})

Then(/^I expect the element "([^"]*)?" page is displayed$/, async (element) => {
  let loc = test.locators[element];
 let cartPage = await $(loc).isDisplayed();
 console.log(cartPage);
 })

 Then(/^I expect the element "([^"]*)?" to include "([^"]*)?"$/, async (element, text) => {
  let totalamount = test.locators[element];
  console.log(totalamount+"///////////////////////");
   await $(totalamount).isDisplayed();

  let total = await (await $(totalamount)).getText();
  console.log("/////////////////"+total);
  expect(total).to.include(text);
});




 








