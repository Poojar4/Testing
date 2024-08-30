Feature:User Login

Scenario: Successful login with valid credentials
    Given I open the site with url "https://www.saucedemo.com/"
    When I enter valid username and password 
    And I pause for 3000ms
    And I click on element "LoginButton"
    And I pause for 3000ms
    And I add the product with name "PName1" to the cart 
    And I pause for 3000ms
    And I click on element "AddToCart1"
    
   
    

    
    

    
