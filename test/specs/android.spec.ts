import LoginPage from "../pageobjects/login.page";
import HomePage from "../pageobjects/home.page";


describe("Android Mobile automation tests", () => {
  it("should check the title on home page", async () => {
    expect(await HomePage.getTitle()).toContain("WEBDRIVER");
  });

  it("should login into the app successfully", async () => {
      await HomePage.openLoginScreen();
      await LoginPage.login("Test@email.com", "Pass12345");
      expect(await LoginPage.successMessageTitle()).toEqual("Success");
      expect(await LoginPage.successMessage()).toEqual("You are logged in!");
      await LoginPage.closePopup(); 
  });
});
