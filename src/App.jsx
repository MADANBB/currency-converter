import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { currencyMeta } from "./data/currencyMeta";
import './App.css'
import './index.css'

function App() {

  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo || {})
                        .filter((code)=> currencyMeta[code])
                        .sort((a,b)=> {
                          const countryA = currencyMeta[a].country.toLowerCase()
                          const countryB = currencyMeta[b].country.toLowerCase()
                          return countryA.localeCompare(countryB)
                        })

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(0)
    setAmount(0)
    
  }
  
  const convert = ()=>{
    if(!amount || !currencyInfo[to]) return 
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
  <div
    className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg')",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* App content */}
    <div className="relative z-10 w-full">
      <div className="w-full max-w-lg sm:max-w-xl mx-auto rounded-xl p-6 sm:p-8 backdrop-blur-md bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-2">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          {/* Swap button */}
          <div className="relative my-4 flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="border-2 border-white rounded-full bg-blue-600 text-white px-4 py-2 shadow-lg hover:bg-blue-700 transition"
            >
              ⇅
            </button>
          </div>

          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl text-lg transition"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  </div>
);



}

export default App
