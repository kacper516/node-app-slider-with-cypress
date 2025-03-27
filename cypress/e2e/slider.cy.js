describe("Swiper Gallery Test", function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });
});

describe("Swiper Gallery Test", function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");
  });
});

describe("Swiper Gallery buttons Test", function () {
  it("Checks if user can use navigation buttons properly", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
    cy.get(".swiper-button-prev").click();
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Italy");
  });
});

describe("Swiper Gallery description Test", function () {
  it("Checks if there's correct description for each title", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-slide-active").should("contain", "Italy");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "France");
  });
});

describe("Responsiveness Test", function () {
  it("Checks different viewports", function () {
    const viewports = [
      { device: "macbook-11", expectedWidth: 352 },
      { device: "iphone-8", expectedWidth: 280 },
      { device: "ipad-mini", expectedWidth: 384 },
    ];

    viewports.forEach(({ device, expectedWidth }) => {
      it(`Should set correct slide width on ${device}`, function () {
        cy.viewport(device);
        cy.visit("http://localhost:3001");

        cy.get(".swiper-slide")
          .first()
          .should("have.css", "width", `${expectedWidth}px`);

        cy.get(".swiper-button-prev").should("be.visible");
        cy.get(".swiper-button-prev").click();

        cy.get(".swiper-button-next").should("be.visible");
        cy.get(".swiper-button-next").click();
      });
    });
  });
});

describe("Swiper Gallery Display Test", function () {
  it("Checks if all gallery elements are visible", function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper").should("be.visible");
    cy.get(".swiper-slide").should("have.length", 3);
    cy.get(".swiper-slide.swiper-slide-active").should("be.visible");
    cy.get(".swiper-button-next").should("be.visible").click();
    cy.get(".swiper-slide.swiper-slide-active").should("be.visible");
    cy.get(".swiper-button-prev").should("be.visible").click();
    cy.get(".swiper-slide.swiper-slide-active").should("be.visible");
  });
});
