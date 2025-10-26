const { greet, calculate, generateRandom } = require('../lib/utils');

describe('Utils Tests', () => {
  describe('greet', () => {
    test('should greet with a name', () => {
      const result = greet('John');
      expect(result).toContain('Hello, John!');
    });

    test('should greet with default name', () => {
      const result = greet('World');
      expect(result).toContain('Hello, World!');
    });
  });

  describe('calculate', () => {
    test('should add two numbers', () => {
      expect(calculate(2, 3, 'add')).toBe(5);
    });

    test('should subtract two numbers', () => {
      expect(calculate(5, 3, 'subtract')).toBe(2);
    });

    test('should multiply two numbers', () => {
      expect(calculate(4, 5, 'multiply')).toBe(20);
    });

    test('should divide two numbers', () => {
      expect(calculate(10, 2, 'divide')).toBe(5);
    });

    test('should throw error for division by zero', () => {
      expect(() => calculate(10, 0, 'divide')).toThrow('Division by zero is not allowed');
    });

    test('should throw error for unknown operation', () => {
      expect(() => calculate(10, 5, 'unknown')).toThrow('Unknown operation: unknown');
    });
  });

  describe('generateRandom', () => {
    test('should generate a number', () => {
      const result = generateRandom('number');
      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(1000);
    });

    test('should generate a string of specified length', () => {
      const result = generateRandom('string', 5);
      expect(typeof result).toBe('string');
      expect(result).toHaveLength(5);
    });

    test('should generate a UUID', () => {
      const result = generateRandom('uuid');
      expect(typeof result).toBe('string');
      expect(result).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });

    test('should throw error for unknown type', () => {
      expect(() => generateRandom('unknown')).toThrow('Unknown type: unknown');
    });
  });
});
