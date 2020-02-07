import React from 'react';
import './TodayBoard.scss';

export type TodayBoardType = {
  month: string,
  date: string
};

const TodayBoard = ({ month, date }: TodayBoardType) => {
  return (
    <div className="TodayBoard">
      <span className="TodayBoard__number">{month}</span>월
      <span className="TodayBoard__number">{date}</span>일의 점심
    </div>
  )
}

export { TodayBoard };