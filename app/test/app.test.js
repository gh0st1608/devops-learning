const request = require("supertest");
const app = require("../src/app");

describe("CI/CD Test App", () => {
  it("should return 200 on /health", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
  });

  it("should return app info on /", async () => {
    const res = await request(app).get("/");
    expect(res.body.message).toBe("CI/CD Test App");
  });
});