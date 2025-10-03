interface statCardProps {
    label: string;
    value: number | string;
}

export function StatCard({label, value}: statCardProps){
    return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <p className="text-3xl font-semibold text-gray-900">{value}</p>
    </div>
    )}