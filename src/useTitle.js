import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Mazaa`;
  }, [title]);
};

export default useTitle;
