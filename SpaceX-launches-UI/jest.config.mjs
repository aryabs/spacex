import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const customJestConfig = {
  testEnvironment: "jest-environment-jsdom", // Use the installed jsdom environment
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock style imports for Jest
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Load jest-dom setup
  moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node"], // Ensure .js is included
};

export default createJestConfig(customJestConfig);
