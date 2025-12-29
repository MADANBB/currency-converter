import countries from "world-countries";
import { canonicalCurrencyCountry } from "./canonicalCurrencyCountry";

const currencyMeta = {};

countries.forEach((country) => {
  if (!country.currencies) return;

  Object.entries(country.currencies).forEach(([code, details]) => {
    const currencyCode = code.toLowerCase();

    if (!currencyMeta[currencyCode]) {
      currencyMeta[currencyCode] = {
        country: country.name.common,
        currency: details.name,
        symbol: details.symbol || "",
      };
    }
  });
});


Object.entries(canonicalCurrencyCountry).forEach(
  ([code, canonical]) => {
    currencyMeta[code] = {
      ...currencyMeta[code],
      ...canonical,
    };
  }
);

export { currencyMeta };




// export const currencyMeta = {
//   usd: {
//     country: "United States",
//     currency: "US Dollar",
//     symbol: "$",
//     flag: "🇺🇸",
//   },
//   inr: {
//     country: "India",
//     currency: "Indian Rupee",
//     symbol: "₹",
//     flag: "🇮🇳",
//   },
//   eur: {
//     country: "European Union",
//     currency: "Euro",
//     symbol: "€",
//     flag: "🇪🇺",
//   },
//   gbp: {
//     country: "United Kingdom",
//     currency: "Pound Sterling",
//     symbol: "£",
//     flag: "🇬🇧",
//   },
//   jpy: {
//     country: "Japan",
//     currency: "Japanese Yen",
//     symbol: "¥",
//     flag: "🇯🇵",
//   },
//   aud: {
//     country: "Australia",
//     currency: "Australian Dollar",
//     symbol: "A$",
//     flag: "🇦🇺",
//   },
//   cad: {
//     country: "Canada",
//     currency: "Canadian Dollar",
//     symbol: "C$",
//     flag: "🇨🇦",
//   },
//   chf: {
//     country: "Switzerland",
//     currency: "Swiss Franc",
//     symbol: "CHF",
//     flag: "🇨🇭",
//   },
//   cny: {
//     country: "China",
//     currency: "Chinese Yuan",
//     symbol: "¥",
//     flag: "🇨🇳",
//   },
//   hkd: {
//     country: "Hong Kong",
//     currency: "Hong Kong Dollar",
//     symbol: "HK$",
//     flag: "🇭🇰",
//   },
//   sgd: {
//     country: "Singapore",
//     currency: "Singapore Dollar",
//     symbol: "S$",
//     flag: "🇸🇬",
//   },
//   nzd: {
//     country: "New Zealand",
//     currency: "New Zealand Dollar",
//     symbol: "NZ$",
//     flag: "🇳🇿",
//   },
//   zar: {
//     country: "South Africa",
//     currency: "South African Rand",
//     symbol: "R",
//     flag: "🇿🇦",
//   },
//   rub: {
//     country: "Russia",
//     currency: "Russian Ruble",
//     symbol: "₽",
//     flag: "🇷🇺",
//   },
//   krw: {
//     country: "South Korea",
//     currency: "South Korean Won",
//     symbol: "₩",
//     flag: "🇰🇷",
//   },
//   brl: {
//     country: "Brazil",
//     currency: "Brazilian Real",
//     symbol: "R$",
//     flag: "🇧🇷",
//   },
//   mxn: {
//     country: "Mexico",
//     currency: "Mexican Peso",
//     symbol: "$",
//     flag: "🇲🇽",
//   },
// };
