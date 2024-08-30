Feature:Login,Add to cart

Scenario:Login and Add to cart
Given I open the site with url "https://www.saucedemo.com/"
And I expect the url to contain "https://www.saucedemo.com/"
When I enter valid username and password
And I pause for 3000ms
And I click on element "AddToCart1"
And I pause for 3000ms
# And I expect the element contain "//input[@id='user-name']" text
# Then I expect home page is displayed