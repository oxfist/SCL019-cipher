import cipher from "../src/cipher";

describe("cipher", () => {
  it("should be an object", () => {
    expect(typeof cipher).toBe("object");
  });

  describe("cipher.encode", () => {
    it("should be a function", () => {
      expect(typeof cipher.encode).toBe("function");
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      const expectedEncodedMsg = "HIJKLMNOPQRSTUVWXYZABCDEFG";

      const actualEncodedMsg = cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

      expect(actualEncodedMsg).toBe(expectedEncodedMsg);
    });

    it("should throw TypeError when invoked with wrong argument types", () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    // it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
    //   expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
    // });

    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // it('should return " !@" for " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });

  describe("cipher.decode", () => {
    it("should be a function", () => {
      expect(typeof cipher.decode).toBe("function");
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG")).toBe(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    });

    it("should throw TypeError when invoked with wrong argument types", () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    // it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
    //   expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
    // });

    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    // it('should return " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });
});
