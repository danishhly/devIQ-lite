import { useState } from "react";

export default function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  return [value, () => setValue(!value)] as const;
}
