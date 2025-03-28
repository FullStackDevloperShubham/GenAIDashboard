import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setCurrentQuery, addToHistory, setLoading, setResults } from '../store/querySlice';

const mockSuggestions = [
  'Show me sales trends for last quarter',
  'Compare revenue by region',
  'Analyze customer satisfaction scores',
  'Display monthly user growth',
];

const QueryInput: React.FC = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    dispatch(setCurrentQuery(query));
    dispatch(addToHistory(query));
    dispatch(setLoading(true));

    // Simulate API call
    setTimeout(() => {
      dispatch(setResults({
        type: 'bar',
        data: [
          { name: 'Jan', value: 400 },
          { name: 'Feb', value: 300 },
          { name: 'Mar', value: 600 },
          { name: 'Apr', value: 800 },
        ]
      }));
      dispatch(setLoading(false));
    }, 1500);

    setQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-2xl">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Ask your data question..."
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
        <button
          type="submit"
          className="absolute right-2 top-2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Ask
        </button>
      </form>

      {showSuggestions && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
          {mockSuggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion);
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QueryInput;