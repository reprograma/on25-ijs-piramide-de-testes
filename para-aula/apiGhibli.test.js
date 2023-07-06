const request = require("supertest");
const ApiUrl = "https://ghibliapi.vercel.app/";

describe("GET /films/{id}", () => {
  it("should return 200 when finds totoro movie", () => {
    request(ApiUrl)
      .get("films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
      .expect(200)
      .then((res) => {
        expect(res.body.title).toEqual("My Neighbor Totoro");
      });
  });
});

describe("Get /people", () => {
  it("should return 200 when find a character", () => {
    request(ApiUrl)
      .get("people")
      .expect(200)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ name: "Ashitaka" }),
          ])
        );
      });
  });
});
