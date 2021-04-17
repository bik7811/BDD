$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Login Functionality",
  "description": "",
  "id": "validate-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on the TechFios Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_is_on_the_TechFios_Login_Page()"
});
formatter.result({
  "duration": 4296112982,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "user should be able login with valid credentials",
  "description": "",
  "id": "validate-login-functionality;user-should-be-able-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should land on Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_enters_username()"
});
formatter.result({
  "duration": 224370490,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_password()"
});
formatter.result({
  "duration": 111186105,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_click_on_Signin_Button()"
});
formatter.result({
  "duration": 1455983177,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_Dashboard_Page()"
});
formatter.result({
  "duration": 15396,
  "status": "passed"
});
});