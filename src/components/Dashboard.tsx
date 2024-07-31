import DetailsView from './DetailsView'
import MarketCurrencies from './MarketCurrencies'

type Props = {}

function Dashboard({}: Props) {
  return (
    <div className="space-y-5 my-auto">
      <div className="text-white text-md text-left font-bold mb-3">
        Details View
      </div>
      <div className="rounded-3xl p-5 bg-main-darker">
        <DetailsView />
      </div>
      <div className="text-white text-md text-left font-bold mb-3">
        Market Coins
      </div>
      {/* <MarketCurrencies /> */}
      <MarketCurrencies />
    </div>
  )
}

export default Dashboard
