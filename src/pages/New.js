import DiaryEditor from '../components/DiaryEditor';
import { useEffect } from 'react';

const New = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `오늘의 한 줄 `;
  }, []);

  return <DiaryEditor />;
};

export default New;
