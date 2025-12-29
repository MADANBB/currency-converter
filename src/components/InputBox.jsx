import React, { useId } from "react"
import { currencyMeta } from "../data/currencyMeta"

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {
    const amountInputId = useId()

    return (

        <div
  className={`bg-white p-4 sm:p-5 rounded-xl text-base flex flex-col sm:flex-row gap-4 sm:gap-8 ${className}`}
>
  {/* Amount Section */}
  <div className="w-full sm:flex-[2]">
    <label
      htmlFor={amountInputId}
      className="text-black/50 mb-2 block text-sm sm:text-base"
    >
      {label}
    </label>
    <input
      id={amountInputId}
      className="outline-none w-full bg-transparent py-2 text-lg"
      type="number"
      placeholder="Amount"
      value={amount || ""}
      onChange={(e) =>
        onAmountChange &&
        onAmountChange(e.target.value === "" ? "" : Number(e.target.value))
      }
      disabled={amountDisable}
    />
  </div>

  {/* Currency Section */}
  <div className="w-full sm:flex-[2] sm:max-w-[300px] flex flex-col items-start sm:items-end">
    <p className="text-black/50 mb-2 text-sm sm:text-base">
      Currency Type
    </p>
    <select
      className="w-full rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none text-base"
      value={selectCurrency}
      onChange={(e) =>
        onCurrencyChange && onCurrencyChange(e.target.value)
      }
      disabled={currencyDisable}
    >
      {currencyOptions.map((currency) => {
        const meta = currencyMeta[currency];
        if (!meta) return null;

        return (
          <option key={currency} value={currency}>
            {meta.flag} {meta.country} ({currency.toUpperCase()})
          </option>
        );
      })}
    </select>
  </div>
</div>

);


}

    export default InputBox;