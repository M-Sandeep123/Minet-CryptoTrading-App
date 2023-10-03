/// <reference types="Cypress" />
import { BaseEyes, BaseHands } from "../BaseRobot";
import { testData } from "../../fixtures/commomTestData";

export class SellCryptoRobotEyes extends BaseEyes {
  contains: any;
  get: any;

  seesElementWithText(text: string) {
    return this.seesDomVisible(text);
  }
}

export class SellCryptoRobotHands extends BaseHands {
  sellCryptoBitCoin() {
    cy.get('[data-testid="discovery"]').click();
    cy.get(
      ':nth-child(1) > [data-testid="row"] > .firstCell > .css-csffzd > .MuiStack-root > [data-testid="row-name"]'
    ).click();
    cy.contains(testData.tradeHeading).should(($element) => {
      expect($element).to.be.visible;
    });
    cy.wait(2000);
    cy.get(".css-t0ncq9")
      .should(($element) => {
        expect($element).to.exist;
      })
      .click();
    cy.wait(2000);
    cy.get(".MuiSlider-thumb")
      .invoke("val", 2)
      .trigger("change")
      .click({ force: true });
    cy.wait(5000);
    cy.contains(testData.sellButton)
      .should(($element) => {
        expect($element).to.be.enabled;
      })
      .click();
    cy.wait(2000);
    cy.contains(testData.sellSuccessMessage).should(($element) => {
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
    cy.contains(testData.sellChipData).should(($element) => {
      expect($element).to.exist;
    });
  }

  SellCryptoEthereum() {
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
    cy.get(".css-t0ncq9")
      .should(($element) => {
        expect($element).to.exist;
      })
      .click();
    cy.wait(2000);
    cy.get(".MuiSlider-thumb")
      .invoke("val", 2)
      .trigger("change")
      .click({ force: true });
    cy.contains(testData.sellButton)
      .should(($element) => {
        expect($element).to.be.enabled;
      })
      .click();
    cy.wait(2000);
    cy.contains(testData.sellSuccessMessage).should(($element) => {
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
    cy.contains(testData.sellChipData).should(($element) => {
      expect($element).to.exist;
    });
    cy.get(':nth-child(6) > [data-testid="icon"]')
      .should(($element) => {
        expect($element).to.be.visible;
      })
      .click();
  }
}
