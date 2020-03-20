import {
  getToken,
  getQuestions,
  getCategories,
  getFilteredQuestions
} from "./questionsService";

let objMock = {
  category: "",
  type: "",
  difficulty: ""
};

describe("getToken", () => {
  it("expect that the API call works", () =>
    getToken().then(token => expect(typeof token).toBe("string")));
});

describe("getQuestions", () => {
  it("expect that the API call works", () =>
    getQuestions().then(questions => expect(typeof questions).toBe("object")));
});

describe("getCategories", () => {
  it("expect that the API call works", () =>
    getCategories().then(categories =>
      expect(typeof categories).toBe("object")
    ));
});

describe("getFilteredQuestions", () => {
  it("expect that the API call works", () =>
    getFilteredQuestions(objMock).then(filtered =>
      expect(typeof filtered).toBe("object")
    ));
});
