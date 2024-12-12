import { expect } from '@jest/globals';
describe('Test based on environment', () => {
  test('See if ENV_TEST_VALUE is pass', async () => {
    expect(process.env.ENV_TEST_VALUE).toBe("pass");
  });
});
