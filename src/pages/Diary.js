import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import { getStringDate } from '../util/date';
import { emotionList } from '../util/emotion';
import MyHeader from '../components/MyHeader';
import MyButton from '../components/MyButton';

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `${id}번째 일기 `;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        console.error('not found');
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return (
      <div className="DiaryPage-message">
        요청하신 페이지를 찾을 수 없습니다. <br /> 입력하신 주소를 다시 확인해
        주세요.
        <br />
        <p onClick={() => navigate('/home')}>이전 페이지로 돌아가기</p>
      </div>
    );
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <div className="DiaryPage">
        <MyHeader
          headText={`${getStringDate(new Date(data.date))}`}
          leftChild={<MyButton text={'<'} onClick={() => navigate(-1)} />}
          rightChild={
            <MyButton
              text={'수정'}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 기분</h4>
            <div className="diary_img_wrapper">
              <img src={curEmotionData.emotion_img} alt="emotion" />
            </div>
          </section>
          <section>
            <h4>한 줄 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
