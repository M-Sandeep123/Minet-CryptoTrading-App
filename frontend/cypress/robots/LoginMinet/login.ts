/// <reference types="Cypress" />
import { signUpData, testData } from "../../fixtures/commomTestData";
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class FillLogInDependencies extends BaseDependencies {
  visitLoginPage() {
    cy.visit("https://bc115fe.spcluster.tk/");
  }
}

export class FillLogInFormRobotEyes extends BaseEyes {
  contains: any;
  get: any;

  seesElementWithText(text: string) {
    return this.seesDomVisible(text);
  }
}

export class FillLogInFormRobotHands extends BaseHands {
  logInEmail() {
    cy.get('[placeholder="you@company.com"]')
      .type(testData.email)
      .then(($input) => {
        expect($input.val()).to.eq(testData.email);
      });

    cy.get('[placeholder="Enter Password"]')
      .type(testData.password)
      .then(($input) => {
        expect($input.val()).to.eq(testData.password);
      });

    cy.wait(4000);

    cy.get('[data-testid="test-btn"]').click();
  }

  forgetPassword() {
    cy.get('[placeholder="you@company.com"]')
      .type(signUpData.email)
      .then(($input) => {
        expect($input.val()).to.eq(signUpData.email);
      });

    cy.contains(testData.forgotPassword).should("be.visible").click();
    cy.contains(testData.content).should("be.visible");

    cy.get('[placeholder="you@company.com"]')
      .type(signUpData.email)
      .then(($input) => {
        expect($input.val()).to.eq(signUpData.email);
      });

    cy.get('[data-testid="test-btn"]').should("be.enabled").click();

    cy.get('[placeholder="8 digits code"]')
      .type(testData.resetCode)
      .then(($input) => {
        expect($input.val()).to.eq(testData.resetCode);
      });

    cy.get('[data-testid="test-btn"]').should("be.enabled").click();

    cy.get('[placeholder="Enter Password"]')
      .type(testData.password)
      .then(($input) => {
        expect($input.val()).to.eq(testData.password);
      });

    cy.get('[placeholder="Re-Enter Password"]')
      .type(testData.password)
      .then(($input) => {
        expect($input.val()).to.eq(testData.password);
      });

    cy.get('[data-testid="test-btn"]').should("be.enabled").click();

    cy.wait(1000);

    cy.get('[data-testid="test-btn"]').click();
  }
}
