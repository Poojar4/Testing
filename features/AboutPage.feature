Feature:About page

Scenario:About
Given I open the site with url "https://www.saucedemo.com/"
And I expect the url to contain "https://www.saucedemo.com/"
When I enter valid username and password
And I pause for 3000ms
And I click on element "LoginButton"
And I pause for 3000ms
And I click on element "BurgerMenu"
And I pause for 3000ms
And I click on element "Logout"
And I pause for 3000ms
 