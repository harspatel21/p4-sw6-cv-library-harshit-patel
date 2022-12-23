package uk.co.library.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import uk.co.library.utility.Utility;

//***  Created by Dipak Pansuriya  ***//

public class ResultPage extends Utility {
    private static final Logger log = LogManager.getLogger(ResultPage.class.getName());

    @CacheLookup
    @FindBy(xpath = "//div/h1[@class = 'search-header__title']")
    WebElement result;

//*********************************************************************

    public String verifyTheResults(String expected) {
        log.info("verify The Results : " + result.toString());
        return getTextFromElement(result);
    }

}
