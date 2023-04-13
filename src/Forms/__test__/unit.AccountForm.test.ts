import { AccountForm } from "../AccountForm";
import { XrmMockGenerator } from "xrm-mock";

// Create a test suit
describe("AccountForm.onload", () => {
  beforeEach(() => {
    XrmMockGenerator.initialise();
  });

  // A particular aspect of the form: is it a correct url?
  it("notifies invalid website addresses", () => {
    // Arrange
    const context = XrmMockGenerator.getEventContext();
    const websiteMock = XrmMockGenerator.Attribute.createString("websiteurl", "foobar");

    // Create a mock notification
    websiteMock.controls.itemCollection[0].setNotification = jest.fn();

    // Act
    AccountForm.onload(context);
    websiteMock.fireOnChange();

    // Assert: the notification should be called, we are asserting that!
    expect(websiteMock.controls.itemCollection[0].setNotification).toBeCalled();
  });

  it("clears notification on valid website address", () => {
    // Arrange
    const context = XrmMockGenerator.getEventContext();
    const websiteMock = XrmMockGenerator.Attribute.createString("websiteurl", "foo");
    websiteMock.controls.itemCollection[0].setNotification = jest.fn();
    websiteMock.controls.itemCollection[0].clearNotification = jest.fn();

    // Act
    AccountForm.onload(context);
    websiteMock.fireOnChange();

    // Assert
    expect(websiteMock.controls.itemCollection[0].setNotification).toBeCalledWith(expect.any(String), "websiteurl");

    // Act 2
    websiteMock.value = "https://learn.develop1.net";
    websiteMock.fireOnChange();

    // Assert 2
    expect(websiteMock.controls.itemCollection[0].clearNotification).toBeCalledWith("websiteurl");
  });
});
