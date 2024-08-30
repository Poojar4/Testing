    Feature:Login and Logout

    Scenario Outline: Login with multiple data
        # Given I open the site with url "https://www.saucedemo.com/"
        And I expect the url to contain "https://www.saucedemo.com/"
        And I enter the value <userName> for the element "#user-name"
        And I enter the value <Password> for the element "#password"
         And I pause for 2000ms
        And I click on element "#login-button"
        And I pause for 2000ms

        Examples:
            | userName                  | Password       |
            | "standard_user"           | "secret_sauce" |
            | "locked_out_user"         | "secret_sauce" |
            | "problem_user"            | "secret_sauce" |
            | "performance_glitch_user" | "secret_sauce" |
            | "error_user"              | "secret_sauce" |
            | "visual_user"             | "secret_sauce" |
