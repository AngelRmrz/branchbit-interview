import { LogOut } from 'lucide-react';

interface AppBarProps {
  logout: () => void;
}

const AppBar: React.FC<AppBarProps> = ({ logout }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Branchbit Interview</h1>
        </div>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center transition-colors"
          aria-label="Logout"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default AppBar;
