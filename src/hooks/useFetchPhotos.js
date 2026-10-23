import { useState, useEffect } from 'react';

const API_URL = 'https://picsum.photos/v2/list?limit=30';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);
        
        // Agar response status 200 na ho (e.g. 404, 500)
        if (!response.ok) {
          throw new Error(`Failed to fetch photos (Status: ${response.status})`);
        }

        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message || 'Something went wrong while fetching photos.');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []); // Empty dependency array: Sirf ek baar mount hone par chalega

  return { photos, loading, error };
}
