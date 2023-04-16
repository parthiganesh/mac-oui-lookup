import getVendor from "../src/index";

describe("getVendor", () => {
  test("should return the correct vendor name for a MAC address", () => {
    expect(getVendor("00-50-56-bb-fc-8e")).toBe("VMware, Inc.");
  });

  test('returns the correct vendor for a MAC address with colon (:) as delimiter', () => {
    const vendor = getVendor('00:50:56:BB:FC:8E');
    expect(vendor).toBe('VMware, Inc.');
  });

  test('returns the correct vendor for a MAC address with hypen (-) as delimiter', () => {
    const vendor = getVendor('00-50-56-BB-FC-8E');
    expect(vendor).toBe('VMware, Inc.');
  });

  test('returns the correct vendor for a MAC address with no delimiter', () => {
    const vendor = getVendor('005056BBFC8E');
    expect(vendor).toBe('VMware, Inc.');
  });
  
  test("should return the correct vendor name for a known 24-bit OUI", () => {
    expect(getVendor("00-50-56-AB-C1-23")).toBe("VMware, Inc.");
  });

  test("should return the correct vendor name for a known 28-bit OUI", () => {
    expect(getVendor("70-5A-6F-EA-BC-12")).toBe("Hall Technologies");
  });

  test("should return the correct vendor name for a known 36-bit OUI", () => {
    expect(getVendor("70-B3-D5-43-D0-12")).toBe(
      "Veryx Technologies Private Limited"
    );
  });

  test("should return the correct vendor name for a colon seperated MAC address", () => {
    expect(getVendor("70:B3:D5:43:D0:12")).toBe(
      "Veryx Technologies Private Limited"
    );
  });

  test("should return null for an unknown OUI if default vendor is not passed", () => {
    expect(getVendor("12-34-56-78-9A-BC")).toBe(null);
  });

  test('returns null for an unknown MAC address with null as default vendor', () => {
    const vendor = getVendor('12-34-56-78-9A-BC', null);
    expect(vendor).toBe(null);
  });

  test('returns unknown for an unknown MAC address with unknown as default vendor', () => {
    const vendor = getVendor('12-34-56-78-9A-BC', 'unknown');
    expect(vendor).toBe('unknown');
  });

  test("should handle lowercase", () => {
    expect(getVendor("10-e2-c9-ab-c1-23")).toBe("Apple, Inc.");
  });

  test("should handle uppercase input", () => {
    expect(getVendor("10-E2-C9-AB-C1-23")).toBe("Apple, Inc.");
  });

  test("should handle mix of lowercase and uppercase input", () => {
    expect(getVendor("10-e2-C9-AB-C1-23")).toBe("Apple, Inc.");
  });

});
