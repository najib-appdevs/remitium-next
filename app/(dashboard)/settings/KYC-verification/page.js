export default function KYCVerificationPage() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-sm">
        <div className="bg-gray-100 rounded-3xl p-8 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Proof Of Identity
          </h3>

          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-900">
              KYC Information
            </h2>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-gray-700">
                Verified
              </span>
            </div>
          </div>

          <p className="text-emerald-500 font-medium">
            Your KYC information is verified
          </p>
        </div>
      </div>
    </div>
  );
}
