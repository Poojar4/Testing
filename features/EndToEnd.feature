Feature:End to End Functionality

    Scenario:End to End
        Given I open the site with url "https://www.saucedemo.com/"
        And I expect the url to contain "https://www.saucedemo.com/"
        When I enter valid username and password
        And I pause for 3000ms
        And I click on element "LoginButton"
        # And I pause for 3000ms
        And I click on element "AddToCart1"
        And I pause for 3000ms
        And I click on element "AddToCart2"
        # And I pause for 3000ms
        And I click on element "ShoppingCart"
        # And I pause for 3000ms
        And I click on element "CheckoutButton"
        # And I pause for 3000ms
        And I enter the value "abcd" for the element "Firstname"
        # And I pause for 3000ms
        And I enter the value "xyz" for the element "Lastname"
        # And I pause for 3000ms
        And I enter the value "1234" for the element "PostalCode"
        And I pause for 3000ms
        And I click on element "ContinueButton"
        And I pause for 3000ms
        And I scroll to the element with the text "TotalAmount"
        And I pause for 3000ms
        And I expect the element "TotalAmount" is displayed
        And I pause for 3000ms
        And I wait for the element "TotalAmount" is displayed
        And I pause for 3000ms
        # And I expect the element "//div[@data-test='total-label']" to contain "Total: $43.18"
        And I expect the element "TotalAmount" to contain "Total"
        And I click on element "FinishButton"
        And I pause for 3000ms
        And I wait for the element "ConfirmationText" is displayed
        And I pause for 3000ms
        And I expect the element "ConfirmationText" to contai "ConfirmationText"
        And I pause for 3000ms
        And I click on element "Backbutton"
        And I pause for 3000ms
        And I click on element "BurgerMenu"
        And I pause for 3000ms
        And I click on element "Logout"
        And I pause for 3000ms











