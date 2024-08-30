Feature:DemoWebshop Login

    Scenario:End to End scenario
    Given I open the site with url "https://demowebshop.tricentis.com/"
    And I expect the url to contain "https://demowebshop.tricentis.com/"
    And I pause for 3000ms
    And I click on element "RegisterLink"
    And I click on element "GenderButton"
    And I enter the value "pooja" for the element "Firstname"
    And I enter the value "R" for the element "Lastname"
    And I enter a random email and the password for the elements "Email" and "Password"
    And I enter the value "testing@123" for the element "Password"
    And I enter the value "testing@123" for the element "ConfirmPassword"
    And I click on element "RegisterButton"
    And I expect the element "ErrorMessage1" is displayed
    And I click on element "LoginLink"
    And I pause for 3000ms
    And I enter valid Email and Password for the element "Email" and "Password"
    And I pause for 3000ms
    And I click on element "LoginButton"
    And I pause for 3000ms
    And I expect the element "ErrorMessage2" is displayed
    And I click on element "BooksPage"
    And I expect the element "Books" to contain "Books"
    And I click on element "PositionDropdown"
    # And I pause for 5000ms 
    And I select "Price: Low to High" from "PositionDropdown" dropdown
    And I wait for the element "SelectPrice" is displayed
    And I pause for 5000ms
    And I expect the element "PositionDropdown" to contain "Price: Low to High"
    And I click on element "Book1"
    And I click on element "AddToCart1"
    # And I pause for 3000ms
    And I wait for the element "ConfirmationMessage" is displayed
    # And I pause for 20000
    And I navigate back to the previous page "BooksPage"
    # And I pause for 3000ms
    And I scroll to element "Science"
    And I click on element "Book2"
    # And I pause for 3000ms
    And I click on element "AddToCart2"
    And I wait for the element "ConfirmationMessage" is displayed
    # And I pause for 3000ms
    And I click on element "ComputerPage"
    And I expect the element "Computers" to contain "Computers"
    And I wait for the element "Computers" is displayed
    And I click on element "Desktops"
    And I click on element "ComputerPicture"
    And I scroll to element "ProductTags"
    # And I pause for 3000ms 
    And I click on element "AddToCart3"
    And I click on element "ShoppingCart"
    And I expect the element "ShoppingCart" page is displayed
    And I click on element "CountryDropdown"
    And I select "India" from the "CountryDropdown" dropdown
    And I wait for the element "IndiaText" is displayed
    And I expect the element "CountryDropdown" to contain "India" 
    And I enter the value "1234" for the element "ZipCode"
    And I click on element "EstimateShipping"
    # And I expect the element "TotalAmount" to include "Total"
    And I click on element "Checkbox"
    And I click on element "checkoutButton"







