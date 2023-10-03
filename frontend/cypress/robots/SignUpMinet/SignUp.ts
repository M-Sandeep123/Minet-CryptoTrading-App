/// <reference types="Cypress" />
import { signUpData } from "../../fixtures/commomTestData";
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class FillSignUpDependencies extends BaseDependencies {
  visitSignUpPage() {
    cy.visit("https://bc115fe.spcluster.tk/signup");
  }
}

export class FillSignUpFormRobotEyes extends BaseEyes {
  contains: any;
  get: any;

  seesElementWithText(text: string) {
    return this.seesDomVisible(text);
  }
}

export class FillSignUpFormRobotHands extends BaseHands {
  signUpEmail() {
    cy.get('[placeholder="Eg: John Doe"]')
      .type(signUpData.fullName)
      .then(($input) => {
        expect($input.val()).to.eq(signUpData.fullName);
      });

    cy.get('[placeholder="you@gmail.com"]')
      .type(signUpData.email)
      .then(($input) => {
        expect($input.val()).to.eq(signUpData.email);
      });

    cy.get('[placeholder="Create Password"]')
      .type(signUpData.password)
      .then(($input) => {
        expect($input.val()).to.eq(signUpData.password);
      });

    cy.wait(2000);

    cy.get('[data-testid="test-btn"]').should("be.visible").click();

    cy.wait(4000);

    cy.get(':nth-child(6) > [data-testid="icon"]').should("be.visible").click();
  }
}
