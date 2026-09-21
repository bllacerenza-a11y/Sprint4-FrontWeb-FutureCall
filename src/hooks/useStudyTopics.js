import { useEffect, useState } from 'react';
import { fetchStudyTopics } from '../services/wikipediaApi.js';

export function useStudyTopics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadTopics() {
      try {
        const result = await fetchStudyTopics();
        if (isMounted) setTopics(result);
      } catch (requestError) {
        if (isMounted) setError(requestError.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadTopics();

    return () => {
      isMounted = false;
    };
  }, []);

  return { topics, loading, error };
}
