Feature: testing

    Scenario Outline: Scenario Outline name
        Given I open the site with url "<url>"
        And I pause for "2000"ms
        
        Examples:
            | url                                 |
            | https://the-internet.herokuapp.com/ |
            | https://reqres.in/                  |