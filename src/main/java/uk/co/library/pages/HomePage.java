package uk.co.library.pages;


import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import uk.co.library.utility.Utility;

//***  Created by Dipak Pansuriya  ***//

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//button[@id='save']")
    WebElement acceptAllBtn;

    @CacheLookup
    @FindBy(xpath = "//input[@id='keywords']")
    WebElement jobTitle;

    @CacheLookup
    @FindBy(xpath = "//input[@id='location']")
    WebElement location;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(xpath = "//button[@id='toggle-hp-search']")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymin']")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(xpath = "//input[@id='salarymax']")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(xpath = "//select[@id='salarytype']")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='tempperm']")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(xpath = "//input[@id='hp-search-btn']")
    WebElement findJobsBtn;


//***************************************************************************

    public void acceptIFrameAlert() throws InterruptedException {
        Thread.sleep(1000);
        driver.switchTo().frame("gdpr-consent-notice");
        clickOnElement(acceptAllBtn);
        log.info("accept IFrame Alert : " + acceptAllBtn.toString());
    }

    public void enterJobTitle(String enterjobTitle) {
        sendTextToElement(jobTitle, enterjobTitle);
        log.info("enter Job Title : " + jobTitle.toString());

    }

    public void enterLocation(String enterLocation) {
        sendTextToElement(location, enterLocation);
        log.info("enter Location : " + location.toString());
    }

    public void selectDistance(String distance) {
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
        log.info("select Distance : " + distanceDropDown.toString());
    }

    public void clickOnMoreSearchOptionLink() {
        clickOnElement(moreSearchOptionsLink);
        log.info("click On More Search Option Link : " + moreSearchOptionsLink.toString());
    }

    public void enterMinSalary(String minSalary) {
        sendTextToElement(salaryMin, minSalary);
        log.info("enter Min Salary : " + salaryMin.toString());
    }

    public void enterMaxSalary(String maxSalary) {
        sendTextToElement(salaryMax, maxSalary);
        log.info("enter Max Salary: " + salaryMax.toString());
    }

    public void selectSalaryType(String salaryType) {
        selectByVisibleTextFromDropDown(salaryTypeDropDown, salaryType);
        log.info("select Salary Type : " + salaryTypeDropDown.toString());
    }

    public void selectJobType(String jobType) {
        selectByVisibleTextFromDropDown(jobTypeDropDown, jobType);
        log.info("select Job Type : " + jobTypeDropDown.toString());
    }

    public void clickOnFindJobsButton() {
        clickOnElement(findJobsBtn);
        log.info("click On Find Jobs Button : " + findJobsBtn.toString());
    }

}
