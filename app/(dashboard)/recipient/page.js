export default function RecipientPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-brand-navy tracking-tight">Recipients</h1>
        <p className="text-gray-500 mt-2">Manage your global network of recipients for faster transfers.</p>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-brand-navy">Recent Recipients</h3>
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-brand-primary-hover transition-all">
            + Add Recipient
          </button>
        </div>
        <div className="p-12 text-center text-gray-400 italic">
          Recipient list will be implemented here...
        </div>
      </div>
    </div>
  );
}
