Feature: Validate Login Functionality 

Background: 
	Given user is on the TechFios Login Page 
	
	
Scenario: user should be able login with valid credentials 
	When user enters username 
	And user enters password 
	And user click on Signin Button 
	Then user should land on Dashboard Page 
	
	
 