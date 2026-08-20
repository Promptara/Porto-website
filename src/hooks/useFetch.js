import { useState, useEffect, useCallback } from 'react';
import api from '../api/api';

/**
 * Custom hook for making GET requests.
 * @param {string} endpoint - The API endpoint to fetch from.
 * @param {Object} options - Additional axios options.
 * @returns {Object} { data, loading, error, refetch }
 */
const useFetch = (endpoint, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const optionsString = JSON.stringify(options);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(endpoint, options);
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [endpoint, optionsString]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetch;
