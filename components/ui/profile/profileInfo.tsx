import { User, AuditUser } from "@/models/interfaces";

interface ProfileInfoProps {
  user: User;
  auditUser?: AuditUser;
}

export function ProfileInfo({ user, auditUser }: ProfileInfoProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm mb-12">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <p className="text-sm font-medium text-gray-500">User ID</p>
          <p className="text-gray-900 mt-1">{user.id}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Up</p>
          <p className="text-gray-900 mt-1">{auditUser?.totalUp ?? 0}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Total Down</p>
          <p className="text-gray-900 mt-1">{auditUser?.totalDown ?? 0}</p>
        </div>
      </div>
    </div>
  );
}
