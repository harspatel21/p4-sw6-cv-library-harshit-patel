$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobserch.feature");
formatter.feature({
  "line": 2,
  "name": "Job Search",
  "description": "As a user I want to search for jobs",
  "id": "job-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the pop up",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Serch Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select JobType \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search;user-should-be-able-to-go-on-web;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "job-search;user-should-be-able-to-go-on-web;;2"
    },
    {
      "cells": [
        "Teacher",
        "London",
        "up to 35 miles",
        "15000",
        "25000",
        "Per annum",
        "Permanent",
        "Teacher jobs in London"
      ],
      "line": 21,
      "id": "job-search;user-should-be-able-to-go-on-web;;3"
    },
    {
      "cells": [
        "Doctor",
        "London",
        "up to 25 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Doctor jobs in London"
      ],
      "line": 22,
      "id": "job-search;user-should-be-able-to-go-on-web;;4"
    },
    {
      "cells": [
        "Accountant",
        "Harrow",
        "up to 15 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Accountant jobs in Harrow on the Hill"
      ],
      "line": 23,
      "id": "job-search;user-should-be-able-to-go-on-web;;5"
    },
    {
      "cells": [
        "Tester",
        "London",
        "up to 10 miles",
        "35000",
        "55000",
        "Per annum",
        "Permanent",
        "Tester jobs in London"
      ],
      "line": 24,
      "id": "job-search;user-should-be-able-to-go-on-web;;6"
    },
    {
      "cells": [
        "Cashier",
        "London",
        "up to 15 miles",
        "25000",
        "35000",
        "Per annum",
        "Permanent",
        "Cashier jobs in London"
      ],
      "line": 25,
      "id": "job-search;user-should-be-able-to-go-on-web;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12709362800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the pop up",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Serch Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select JobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSerchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 389520300,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnThePopUp()"
});
formatter.result({
  "duration": 22842609300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 4992556100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 193854900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 460531600,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnMoreSerchOptionsLink()"
});
formatter.result({
  "duration": 240989100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 457889300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 191692700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 175347200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 267457600,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 382098500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 12445302900,
  "status": "passed"
});
formatter.after({
  "duration": 1857708700,
  "status": "passed"
});
formatter.before({
  "duration": 6474454400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the pop up",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Teacher\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 35 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Serch Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"15000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"25000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select JobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Teacher jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSerchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44900,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnThePopUp()"
});
formatter.result({
  "duration": 41066874400,
  "error_message": "org.openqa.selenium.NoSuchFrameException: No frame element found by name or id gdpr-consent-notice\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:1013)\r\n\tat uk.co.library.pages.HomePage.acceptIFrameAlert(HomePage.java:61)\r\n\tat uk.co.library.steps.JobSerchSteps.iClickOnThePopUp(JobSerchSteps.java:17)\r\n\tat ✽.When I click on the pop up(jobserch.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iEnterLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iSelectDistance(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnMoreSerchOptionsLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "15000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iSelectJobType(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Teacher jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2214755900,
  "status": "passed"
});
formatter.before({
  "duration": 5960449700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the pop up",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Doctor\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Serch Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select JobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Doctor jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSerchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42300,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnThePopUp()"
});
formatter.result({
  "duration": 21661255800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doctor",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1726134400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 323666500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 437008000,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnMoreSerchOptionsLink()"
});
formatter.result({
  "duration": 265421600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 426572500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 233862500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 135543000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 258084600,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 301704400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Doctor jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 9054052400,
  "status": "passed"
});
formatter.after({
  "duration": 1775610800,
  "status": "passed"
});
formatter.before({
  "duration": 7249764400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the pop up",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Accountant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Serch Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select JobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Accountant jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSerchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36300,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnThePopUp()"
});
formatter.result({
  "duration": 21829063100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 3088545300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 346550200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 197493600,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnMoreSerchOptionsLink()"
});
formatter.result({
  "duration": 330837200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 409096000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 207143900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 342562200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 418712500,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 314517600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 8902402600,
  "status": "passed"
});
formatter.after({
  "duration": 1469765000,
  "status": "passed"
});
formatter.before({
  "duration": 5721127500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the pop up",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Serch Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"55000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select JobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSerchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnThePopUp()"
});
formatter.result({
  "duration": 21321431000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2071363300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 210529200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 699909200,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnMoreSerchOptionsLink()"
});
formatter.result({
  "duration": 314420300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 530277600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "55000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 266303100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 152178200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 245284300,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 382797100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 19193845800,
  "status": "passed"
});
formatter.after({
  "duration": 2243567000,
  "status": "passed"
});
formatter.before({
  "duration": 5546640600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to go on web",
  "description": "",
  "id": "job-search;user-should-be-able-to-go-on-web;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the pop up",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Cashier\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on more Serch Options Link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMax \"35000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select JobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the result \"Cashier jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "location": "JobSerchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 241900,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnThePopUp()"
});
formatter.result({
  "duration": 22087327000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cashier",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2387369400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 519481500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 234536500,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnMoreSerchOptionsLink()"
});
formatter.result({
  "duration": 390230400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 382787300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 19
    }
  ],
  "location": "JobSerchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 232151200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 372545200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "JobSerchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 496729400,
  "status": "passed"
});
formatter.match({
  "location": "JobSerchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 404153900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cashier jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSerchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 11929378500,
  "status": "passed"
});
formatter.after({
  "duration": 1343739500,
  "status": "passed"
});
});