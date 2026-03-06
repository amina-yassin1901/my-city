import { useEffect } from "react";
export function useTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
export function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
