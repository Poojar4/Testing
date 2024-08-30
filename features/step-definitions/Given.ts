import {  Given } from "@wdio/cucumber-framework";
import { expect } from 'chai';



Given(/^I open the site with url "([^"]*)?"$/, async (urlText) => {
  await browser.maximizeWindow();
   await browser.url(urlText);
  //  await browser.maximizeWindow();
  
});