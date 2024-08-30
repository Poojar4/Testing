Feature: Complete End to End Validation

Scenario: End to End

Given I open the site with url "https://www.saucedemo.com/"
When I enter valid username and password
And I click on element "LoginButton"
And I add the product with name "PName1" to the cart
And I click on element "AddToCart1"
And I add the product with name "PName2" to the cart
And I click on element "AddToCart2"
And I click on element "ShoppingCart"
And I click on element "CheckoutButton"
# And I wait for the element "Firstname" is displayed 
# And I pause for 3000ms
And I enter the value "abcd" for the element "Firstname" 
And I enter the value "xyz" for the element "Lastname" 
And I enter the value "1234" for the element "PostalCode"
And I click on element "ContinueButton"
And I scroll to the element with the text "TotalAmount" 
# And I wait for the element "TotalAmount" is displayed
# And I pause for 3000ms
And I expect the element "TotalAmount" to contain "Total"
And I expect the element "FinishButton" is enabled
And I click on element "FinishButton"
And I wait for the element "ConfirmationText" is displayed
And I click on element "Backbutton"
And I click on element "BurgerMenu"
And I click on element "Logout"













