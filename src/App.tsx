import { useState } from 'react';
import { HZY_CHOICE } from './constants';
import { ChoiceOption } from './typings';
import './App.scss';
import classNames from 'classnames';
import { RightOutline } from 'antd-mobile-icons';

const EXTRA_STEP_PASS = 2;
const INIT_STEP_INTERVAL = 100;

const App = () => {
  const [choice, setChoice] = useState(HZY_CHOICE);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handleClickStart = async () => {
    const optionCount = choice.options.length;
    const randomIndex = Math.floor(Math.random() * optionCount);
    const stepCount =
      optionCount * EXTRA_STEP_PASS + (randomIndex - activeIndex);
    let currentInterval = INIT_STEP_INTERVAL;
    const intervalDecay = INIT_STEP_INTERVAL / stepCount;
    for (let i = 0; i < stepCount; ++i) {
      await new Promise((resolve) => setTimeout(resolve, currentInterval));
      setActiveIndex((prev) => (prev + 1) % optionCount);
      currentInterval = Math.max(0, currentInterval - intervalDecay);
    }
  };

  const handleClickOption = (option: ChoiceOption, index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setSelectedIndex(undefined);
      return;
    }
    const nextChoice = option.choice || choice.choice;
    if (!nextChoice) {
      return;
    }
    if (index !== selectedIndex) {
      setSelectedIndex(index);
      return;
    }
    nextChoice.prev = choice;
    setChoice(nextChoice);
    setActiveIndex(0);
    setSelectedIndex(undefined);
  };

  const handleClickBack = () => {
    if (!choice.prev) {
      return;
    }
    setChoice(choice.prev);
    setActiveIndex(0);
    setSelectedIndex(undefined);
  };

  return (
    <div className="container">
      <div className="title">{choice.title}？</div>
      <div className="start-btn" onClick={handleClickStart}>
        开始
      </div>
      <div className="option-list">
        {choice.options.map((option, index) => {
          const nextChoice = option.choice || choice.choice;
          return (
            <div
              key={option.value}
              onClick={() => handleClickOption(option, index)}
              className={classNames('option-item', {
                active: index === activeIndex,
                selected: index === selectedIndex,
              })}
            >
              <span>
                {index === selectedIndex && nextChoice
                  ? `${nextChoice.title}？`
                  : option.value}
              </span>
              {index === activeIndex && nextChoice && <RightOutline />}
            </div>
          );
        })}
      </div>
      {choice.prev && (
        <div className="back-btn" onClick={handleClickBack}>
          返回
        </div>
      )}
    </div>
  );
};

export default App;
