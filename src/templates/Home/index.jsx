import { useDebugValue, useEffect, useState } from "react";

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue);

  useDebugValue(`Query: ${queryValue}`, (name) => {
    return name + ' modificado';
  });

  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(Boolean(matchMedia.matches));
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(Boolean(matchMedia.matches));

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    }
  }, [queryValue]);

  return match;
};

export const Home = () => {
  <script src="http://localhost:8097"></script>
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 321px)');
  const background = huge ? 'red' : big ? 'green' : medium ? 'blue' : small ? 'yellow' : 'black';
  return <div style={{fontSize: '60px', background}}>Oi</div>
};