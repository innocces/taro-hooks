import useRouter from '../useRouter';

import type { RecordData } from '../type';

export default function usePreload<T extends RecordData>() {
  const [{ preloadData }, { preload }] = useRouter();

  return [preloadData as T, preload] as const;
}
