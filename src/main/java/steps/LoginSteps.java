package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
	WebDriver driver;
	@Given("^user is on the TechFios Login Page$")
	public void user_is_on_the_TechFios_Login_Page() {
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver");
		driver = new ChromeDriver();
		driver.get("https://www.techfios.com/billing/?ng=login/");
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		
	}
	
	@When("^user enters username$")
	public void user_enters_username() throws Throwable {
		driver.findElement(By.id("username")).sendKeys("demo@techfios.com");
	    
	}

	@When("^user enters password$")
	public void user_enters_password() throws Throwable {
		driver.findElement(By.id("password")).sendKeys("abc123");
	    
	}

	@When("^user click on Signin Button$")
	public void user_click_on_Signin_Button() throws Throwable {
		driver.findElement(By.name("login")).click();
	    
	}

	@Then("^user should land on Dashboard Page$")
	public void user_should_land_on_Dashboard_Page() throws Throwable {
	   
	}

}
