import vendorData from './vendor-data.json';

function getVendor(macAddress: string, defaultVendor: string | null = null): string | null {

  // Extract the first 6 characters of the MAC address
  const oui24 = macAddress.toUpperCase().replace(/[:-]/g, '').substring(0, 6);
  const oui28 = macAddress.toUpperCase().replace(/[:-]/g, '').substring(0, 7);
  const oui36 = macAddress.toUpperCase().replace(/[:-]/g, '').substring(0, 9);

  return vendorData[oui36] || vendorData[oui28] || vendorData[oui24] || defaultVendor;
}

export default getVendor;
export { getVendor };