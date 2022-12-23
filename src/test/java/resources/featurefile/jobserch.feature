@regression
Feature: Job Search
  As a user I want to search for jobs
@sanity
  Scenario Outline: User should be able to go on web
    Given I am on homepage
    When I click on the pop up
    Then I enter job title "<jobTitle>"
    And I enter location "<location>"
    And I select distance "<distance>"
    And I click on more Serch Options Link
    And I enter salaryMin "<salaryMin>"
    And I enter salaryMax "<salaryMax>"
    And I select salaryType "<salaryType>"
    And I select JobType "<jobType>"
    And I click on 'Find Jobs' button
    And I verify the result "<result>"
    Examples:
      | jobTitle   | location | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                      |
      | Tester     | Harrow   | up to 5 miles  | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill |
      | Teacher    | London   | up to 35 miles | 15000     | 25000     | Per annum  | Permanent | Teacher jobs in London                      |
      | Doctor     | London   | up to 25 miles | 25000     | 35000     | Per annum  | Permanent | Doctor jobs in London                       |
      | Accountant | Harrow   | up to 15 miles | 25000     | 35000     | Per annum  | Permanent | Accountant jobs in Harrow on the Hill       |
      | Tester     | London   | up to 10 miles | 35000     | 55000     | Per annum  | Permanent | Tester jobs in London                       |
      | Cashier    | London   | up to 15 miles | 25000     | 35000     | Per annum  | Permanent | Cashier jobs in London                      |
