import { lint } from "../lib/testing";

describe("stylelint-config", () => {
  it("stylelint runs with our config", () => {
    return lint(".uppercase { text-transform: uppercase; }").then((data) => {
      expect(data).not.toHaveErrored();
      expect(data).toHaveResultsLength(1);
    });
  });

  it("produces zero warnings with valid css", () => {
    return lint(`
      .selector-x { width: 10%; }
      .selector-y { width: 20%; }
      .selector-z { width: 30%; }
      .component-name { width: 40%; }
      .component-name__element { width: 50%; }
      .component-name__element--modifier { width: 60%; }
    `).then((data) => {
      expect(data).not.toHaveErrored();
      expect(data).toHaveResultsLength(1);
      expect(data).toHaveWarningsLength(0);
    });
  });

  it("generates two warnings with invalid css props", () => {
    return lint(`
        .foo {
          width: 10px;
          top: .2em;
          max-width: initial;
        }
      `).then((data) => {
      expect(data).toHaveErrored();
      expect(data).toHaveWarningsLength(2);
      expect(data).toHaveWarnings([
        'Expected "top" to come before "width" (order/properties-order)',
        'Unexpected value "initial" for property "max-width" (declaration-property-value-disallowed-list)',
      ]);
    });
  });

  it("generates warnings with invalid BEM selectors", () => {
    return lint(`
        .foo__bar__baz {
          width: 10px;
        }

        .foo__bar--BAZ {
          width: 10px;
        }

        .foo-bar__baz-- {
          width: 10px;
        }
      `).then((data) => {
      expect(data).toHaveErrored();
      expect(data).toHaveWarningsLength(3);
    });
  });
});
