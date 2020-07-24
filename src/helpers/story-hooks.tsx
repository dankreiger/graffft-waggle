import { useEffect } from 'react';

export const useNoStoryBookStyle = () =>
  useEffect(() => {
    document.body.setAttribute('style', '');
    document.body.style.margin = '0px';
  }, []);

export const useFullHeightRootElement = () =>
  useEffect(() => {
    document.querySelector('html')!.style.height = '100%';
    document.body.style.height = '100%';
    (document.querySelector('#root') as HTMLElement)!.style.height = '100%';
  }, []);
