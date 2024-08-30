import {Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from 'chai';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

const locator = yaml.load(fs.readFileSync('./locators.yml', 'utf8')) as any;

// Given(/^I open the site with url "([^"]*)?"$/, async (urlText) => {
//   // await browser.maximizeWindow();
//    await browser.url(urlText);
//    await browser.maximizeWindow();
// });

Then(/^I expect the url to contain "([^"]*)?"$/, async (text) => {
    let browserUrl = await browser.getUrl();
    console.log(browserUrl);
  //   expect(browserUrl).toContain(text); //wdio
  expect(browserUrl).to.equal(text);
 });

 Then(/^I expect the element "([^"]*)?" is displayed$/, async (element) => {
    const loc = locator.locators[element];
    const ele= await $(loc).isDisplayed();
    console.log(ele);
});



