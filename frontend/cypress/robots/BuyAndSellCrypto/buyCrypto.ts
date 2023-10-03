/// <reference types="Cypress" />
import { BaseEyes, BaseHands } from "../BaseRobot";
import { testData } from "../../fixtures/commomTestData";

export class BuyCryptoRobotEyes extends BaseEyes {
  contains: any;
  get: any;

  seesElementWithText(text: string) {
    return this.seesDomVisible(text);
  }
}

export class BuyCryptoRobotHands extends BaseHands {
  buyCryptoBitCoin() {
    cy.get('[data-testid="discovery"]').click();
    cy.get(
      ':nth-child(1) > [data-testid="row"] > .firstCell > .css-csffzd > .MuiStack-root > [data-testid="row-name"]'
    ).click();
    cy.contains(testData.tradeHeading).should(($element) => {
      expect($element).to.be.visible;
    });
    cy.wait(2000);
    cy.get(".css-1h3pss3")
      .should(($element) => {
        expect($element).to.exist;
      })
      .click();
    cy.wait(2000);
    cy.get(".MuiSlider-thumb")
      .invoke("val", 2)
      .trigger("change")
      .click({ force: true });
    cy.contains(testData.buyButton)
      .should(($element) => {
        expect($element).to.be.enabled;
      })
      .click();
    cy.wait(2000);
    cy.contains(testData.buySuccessMessage).should(($element) => {
      expect($element).to.be.visible;
    });
    cy.contains(testData.UsdButton)
      .should(($element) => {
        expect($element).to.exist;
      })
      .click();
    cy.contains(testData.balance).should(($element) => {
      expect($element).to.be.visible;
    });
    cy.get(':nth-child(2) > [data-testid="icon"]')
      .should(($element) => {
        expect($element).to.be.visible;
      })
      .click();
    cy.wait(4000);
    cy.contains(testData.buyChipData).should(($element) => {
      expect($element).to.exist;
    });
    cy.wait(2000);
    cy.contains(testData.transactionsHeading).should(($element) => {
      expect($element).to.exist;
    });
  }

  buyCryptoEthereum() {
    cy.get('[data-testid="discovery"]').click();
    cy.get(
      ':nth-child(2) > [data-testid="row"] > .firstCell > .css-csffzd > .MuiStack-root > [data-testid="row-name"]'
    )
      .should(($element) => {
        expect($element).to.be.visible;
      })
      .click();
    cy.contains(testData.tradeHeading).should(($element) => {
      expect($element).to.be.visible;
    });
    cy.wait(2000);
    cy.get(".css-1h3pss3")
      .should(($element) => {
        expect($element).to.exist;
      })
      .click();
    cy.wait(2000);
    cy.get(".MuiSlider-thumb")
      .invoke("val", 2)
      .trigger("change")
      .click({ force: true });
    cy.contains(testData.buyButton)
      .should(($element) => {
        expect($element).to.be.enabled;
      })
      .click();
    cy.wait(2000);
    cy.contains(testData.buySuccessMessage).should(($element) => {
      expect($element).to.be.visible;
    });
    cy.contains(testData.UsdButton)
      .should(($element) => {
        expect($element).to.exist;
      })
      .click();
    cy.contains(testData.balance).should(($element) => {
      expect($element).to.be.visible;
    });
    cy.get(':nth-child(2) > [data-testid="icon"]')
      .should(($element) => {
        expect($element).to.be.visible;
      })
      .click();
    cy.wait(4000);
    cy.contains(testData.buyChipData).should(($element) => {
      expect($element).to.exist;
    });
    cy.wait(2000);
    cy.contains(testData.transactionsHeading).should(($element) => {
      expect($element).to.exist;
    });
  }
}
