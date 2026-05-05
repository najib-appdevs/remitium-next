import Button from "../ui/Button";
import Card from "../ui/Card";

export default function TransferWidget() {
  return (
    <Card className="max-w-3xl mx-auto relative z-20 shadow-xl border border-gray-100">
      <div className="flex justify-center gap-8 border-b border-gray-100 pb-4 mb-6">
        <button className="text-[#00c881] font-semibold border-b-2 border-[#00c881] pb-4 -mb-4">
          Exchange Rates
        </button>
        <button className="text-gray-400 font-medium pb-4 -mb-4 hover:text-gray-600 transition-colors">
          Transfer Information
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* Send Amount */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500 font-medium block">
            Sending Amount
          </label>
          <div className="flex border border-gray-200 rounded-md overflow-hidden">
            <input
              type="text"
              defaultValue="500"
              className="w-full px-4 py-3 outline-none text-gray-800 font-medium"
            />
            <div className="bg-gray-50 px-4 py-3 border-l border-gray-200 flex items-center gap-2">
              {/* Flag placeholder */}
              <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px]">
                US
              </span>
              <span className="text-sm font-bold text-gray-700">USD</span>
            </div>
          </div>
        </div>

        {/* Receive Amount */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500 font-medium block">
            Receiving Amount
          </label>
          <div className="flex border border-gray-200 rounded-md overflow-hidden">
            <input
              type="text"
              defaultValue="42,503.54"
              readOnly
              className="w-full px-4 py-3 outline-none bg-gray-50 text-gray-800 font-medium"
            />
            <div className="bg-gray-50 px-4 py-3 border-l border-gray-200 flex items-center gap-2 cursor-pointer hover:bg-gray-100">
              {/* Flag placeholder */}
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-[10px]">
                IN
              </span>
              <span className="text-sm font-bold text-gray-700">INR</span>
              <span className="text-xs text-gray-400 ml-1">▼</span>
            </div>
          </div>
        </div>

        {/* Transfer Method */}
        <div className="space-y-2">
          <label className="text-xs text-gray-500 font-medium block">
            Transfer Method
          </label>
          <div className="flex border border-gray-200 rounded-md overflow-hidden bg-white">
            <select className="w-full px-4 py-3 outline-none text-gray-700 font-medium cursor-pointer appearance-none">
              <option>Bank Transfer</option>
              <option>Mobile Wallet</option>
              <option>Cash Pickup</option>
            </select>
            <div className="flex items-center pr-4 pointer-events-none text-gray-400 text-xs">
              ▼
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Button className="w-full text-lg py-4">Continue</Button>
      </div>
    </Card>
  );
}
