package uk.co.library.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSerchSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @And("^I click on the pop up$")
    public void iClickOnThePopUp() throws InterruptedException {
        new HomePage().acceptIFrameAlert();
    }

    @Then("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String enterjobtitle){
        new HomePage().enterJobTitle(enterjobtitle);
    }

    @And("^I enter location \"([^\"]*)\"$")
    public void iEnterLocation(String location) {
        new HomePage().enterLocation(location);
    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance) {
        new HomePage().selectDistance(distance);

    }

    @And("^I click on more Serch Options Link$")
    public void iClickOnMoreSerchOptionsLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String salaryMin)  {
        new HomePage().enterMinSalary(salaryMin);

    }

    @And("^I enter salaryMax \"([^\"]*)\"$")
    public void iEnterSalaryMax(String salaryMax) {
        new HomePage().enterMaxSalary(salaryMax);

    }

    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType)  {
        new HomePage().selectSalaryType(salaryType);

    }

    @And("^I select JobType \"([^\"]*)\"$")
    public void iSelectJobType(String jobType)  {
        new HomePage().selectJobType(jobType);

    }

    @And("^I click on 'Find Jobs' button$")
    public void iClickOnFindJobsButton() {
        new HomePage().clickOnFindJobsButton();
    }


    @And("^I verify the result$")
    public void iVerifyTheResult() {
        String expResult = "Jobs in London";
        Assert.assertEquals("Result Verify",expResult,new ResultPage().verifyTheResults(expResult));

    }


    @And("^I verify the result \"([^\"]*)\"$")
    public void iVerifyTheResult(String result) {
       new ResultPage().verifyTheResults(result);

    }
}

