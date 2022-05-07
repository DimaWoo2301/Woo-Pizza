import React from 'react';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
  const navigate = useNavigate();
  const onGoBack = () => {
    navigate('/');
  };

  return (
    <div>
      <span>Доступ ограничен</span>
      <div>
        <button
          type="button"
          onClick={onGoBack}>&#8594;
          Вернуться в главное меню
        </button>
      </div>
    </div>
  );
};

export default NotFound;
