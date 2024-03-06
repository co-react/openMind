import { useState, useEffect } from 'react';

export function useOpenToast() {
  const [isOpenToast, setIsOpenToast] = useState(false);

  useEffect(() => {
  if (isOpenToast) {
    const timeoutId = setTimeout(() => {
      // 5초 후에 토스트를 닫습니다.
      setIsOpenToast(false);
    }, 5000);

    // 컴포넌트가 언마운트되면 clearTimeout을 호출하여 메모리 누수를 방지합니다.
    () => clearTimeout(timeoutId);
  }
  }, [isOpenToast])

  return [isOpenToast, setIsOpenToast];
}