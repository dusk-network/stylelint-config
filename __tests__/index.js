import { lint } from "../lib/testing";

describe("stylelint-config", () => {
  it("stylelint runs with our config", async () => {
    return await lint(".uppercase { text-transform: uppercase; }").then(
      (data) => {
        expect(data).not.toHaveErrored();
        expect(data).toHaveResultsLength(1);
      }
    );
  });

  it("produces zero warnings with valid css", async () => {
    return await lint(`
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

  it("generates two warnings with invalid css props", async () => {
    return await lint(`
        .foo {
          width: 10px;
          top: .2em;
          max-width: initial;
          color: white;
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

  it("generates warnings with invalid BEM selectors", async () => {
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

  it("should disallow warning comments", async () => {
    const addNewlinePatterns = (patterns) =>
      patterns.flatMap((pattern) => [pattern, pattern.replace(/\s+/g, "\n")]);
    const warningWords = ["TODO", "todo", "toDo", "FIXME", "fixme", "fiXme"];
    const wrongPatterns = warningWords.flatMap((w) =>
      addNewlinePatterns([
        `/* ${w} foo */`,
        `/* foo ${w} */`,
        `/* foo ${w} bar */`,
      ])
    );

    for (const wrongPattern of wrongPatterns) {
      await lint(wrongPattern).then((data) => {
        expect(data).toHaveErrored();
        expect(data).toHaveWarningsLength(1);
      });
    }

    expect.assertions(wrongPatterns.length * 2);
  });
});
