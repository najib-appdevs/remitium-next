export default function KYCVerificationPage() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-sm">
        <div
          className="relative overflow-hidden rounded-3xl p-8"
          style={{ background: "#f0faf5", border: "0.5px solid #a7dfbf" }}
        >
          <h3 className="text-lg font-bold text-gray-900 mb-6 relative z-10">
            Proof Of Identity
          </h3>

          <div className="flex items-center gap-3 mb-2 relative z-10">
            <h2 className="text-2xl font-bold text-gray-900">
              KYC Information
            </h2>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-gray-700">
                Verified
              </span>
            </div>
          </div>

          <p className="text-emerald-500 font-medium relative z-10">
            Your KYC information is verified
          </p>
        </div>
      </div>
    </div>
  );
}
