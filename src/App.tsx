import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
    <nav className="bg-white shadow-md rounded-b-2xl py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Gen AI Analytics Dashboard
          </h1>
        </div>
      </div>
    </nav>
  
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Query Input Section */}
      <div className="flex justify-center mb-8">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-2/3 lg:w-1/2 backdrop-blur-md bg-opacity-80">
          <QueryInput />
        </div>
      </div>
  
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Query History */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Query History</h2>
          <QueryHistory />
        </div>
  
        {/* Results Display */}
        <div className="md:col-span-3 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Results</h2>
          <ResultsDisplay />
        </div>
      </div>
    </main>
  </div>  
  );
}

export default App;