import React from 'react';
import { Clock } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const QueryHistory: React.FC = () => {
  const history = useSelector((state: RootState) => state.query.queryHistory);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center mb-4">
        <Clock className="h-5 w-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-semibold">Query History</h2>
      </div>
      <div className="space-y-2">
        {history.map((query, index) => (
          <div
            key={index}
            className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
          >
            {query}
          </div>
        ))}
        {history.length === 0 && (
          <p className="text-gray-500 text-center py-4">No queries yet</p>
        )}
      </div>
    </div>
  );
};

export default QueryHistory;