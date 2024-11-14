import { User } from "../data";

export interface CardProps {
  user: User;
  position: string;
}

export function Card({ user, position }: CardProps) {
  return (
    <div className="p-3 rounded-xl bg-gradient-to-br from-green-50 to-blue-50  transition-all duration-300">
      <div className="bg-white backdrop-blur-sm border border-white/40 p-4 rounded-lg shadow-sm  transition-all duration-300">
        <div className="flex items-center gap-4">
          <div className="text-gray-500 text-sm">{position}</div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
            <img
              src={user.avatar}
              alt={user.name}
              className="relative w-12 h-12 rounded-full object-cover border-2 border-white"
            />
          </div>
          <h3 className="font-medium text-gray-800 hover:text-green-700 transition-colors">{user.name}</h3>
        </div>
      </div>
    </div>
  );
}
