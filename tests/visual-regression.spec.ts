import { test, expect } from "@playwright/test";

test.describe("REVIV Hyderabad - Visual Regression", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
  });

  test("Full page screenshot", async ({ page }) => {
    await expect(page).toHaveScreenshot("full-page.png", {
      fullPage: true,
      maxDiffPixelRatio: 0.05,
    });
  });

  test("Header", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toHaveScreenshot("header.png");
  });

  test("Hero Section", async ({ page }) => {
    const hero = page.locator("section").first();
    await expect(hero).toHaveScreenshot("hero-section.png");
  });

  test("About Section", async ({ page }) => {
    const about = page.locator("section.bg-gray-50").first();
    await expect(about).toHaveScreenshot("about-section.png");
  });

  test("Get REVIVed Section", async ({ page }) => {
    const section = page.locator("text=Get REVIVed Today").locator("..");
    await expect(section).toHaveScreenshot("get-revived-section.png");
  });

  test("IV Therapies Section", async ({ page }) => {
    const section = page.locator("#iv-therapies");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot("iv-therapies-section.png");
  });

  test("Booster Shots Section", async ({ page }) => {
    const section = page.locator("#booster-shots");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot("booster-shots-section.png");
  });

  test("Why REVIV Section", async ({ page }) => {
    const section = page.locator("#why-reviv");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot("why-reviv-section.png");
  });

  test("Testimonials Section", async ({ page }) => {
    const section = page.locator("#testimonials");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot("testimonials-section.png");
  });

  test("FAQ Section", async ({ page }) => {
    const section = page.locator("#faq");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot("faq-section.png");
  });

  test("Booking Form", async ({ page }) => {
    const section = page.locator("#book-appointment");
    await section.scrollIntoViewIfNeeded();
    await expect(section).toHaveScreenshot("booking-form.png");
  });

  test("Footer", async ({ page }) => {
    const footer = page.locator("#footer");
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toHaveScreenshot("footer.png");
  });
});
