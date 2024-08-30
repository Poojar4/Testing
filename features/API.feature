Feature:API Testing with reqresAPI

    Scenario:Create a new user
        Given I open the site with endpoint "createUserEndpoints"
        And I pause for 5000ms
        # Then I expect the https page should be displayed
        # And I make the Post api call
        And I pause for 3000ms
        And I expect the status of POST should be 201

    Scenario:Get a list of users from Reqres
        Given I open the site with endpoint "getUserEndpoints"
        And I pause for 3000ms
        # Then I expect the https page should be displayed
        # And I make the Get api call
        And I pause for 3000ms
        And I expect the status of GET should be 200

    Scenario: Update an existing user data
        Given I open the site with endpoint "updateUserEndpoints"
        And I pause for 3000ms
        # Then I expect the https page should be displayed
        And I update the user for endpoint "updateUserEndpoints"
        # And I make the Put api call
        And I pause for 3000ms
        And I expect the status of PUT should be 200


Scenario: Delete user from Reqres
    Given I open the site with endpoint "deleteUserEndpoints"
    And I pause for 3000ms
    # Then I expect the https page should be displayed
    And I delete the user for endpoint "deleteUserEndpoints"
    # And I make the Delete api call
    And I pause for 3000ms
    And I expect the status of DELETE should be 204







