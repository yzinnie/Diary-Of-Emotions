import { useNavigate } from 'react-router-dom';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import MyButton from './MyButton';
import MyHeader from './MyHeader';
import EmotionItem from './EmotionItem';
import { DiaryDispatchContext } from '../App';
import { getStringDate } from '../util/date';
import { emotionList } from '../util/emotion';

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState('');
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmotion = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (!isEdit) {
      onCreate(date, content, emotion);
    } else {
      onEdit(originData.id, date, content, emotion);
    }

    navigate('/home', { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm('일기를 삭제합니다.')) {
      onRemove(originData.id);
      navigate('/home', { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="DiaryEditor">
      <MyHeader
        headText={date}
        leftChild={<MyButton text={'<'} onClick={() => navigate(-1)} />}
        rightChild={
          isEdit && (
            <MyButton text={'삭제'} type={'negative'} onClick={handleRemove} />
          )
        }
      />
      <div>
        <section>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <h4>오늘의 기분</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmotion}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>
        <section>
          <h4>한 줄 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              placeholder="내용을 입력해 주세요"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </section>
        <section>
          <div className="control_box">
            <MyButton text={'취소'} onClick={() => navigate(-1)} />
            <MyButton text={'완료'} type={'positive'} onClick={handleSubmit} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;
