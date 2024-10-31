import React, { useState, useEffect } from 'react';
import MedalList from './MedalList';
import Button from './Button';
import Input from './Input';
import './App.css';


const App = () => {
  const [countryName, setCountryName] = useState(''); 
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');
  const [bronze, setBronze] = useState('');
  const [countries, setCountries] = useState(() => {
  const savedCountries = localStorage.getItem("countries");
    return savedCountries ? JSON.parse(savedCountries) : [];
  });
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["black","blue", "yellow", "green", "red"];

  // 타이틀 색깔 바꾸기 이벤트
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [colors.length]);

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  // 국가 추가 버튼
  const addCountryHandler = (e) => {
    e.preventDefault();

    let isIncluded = false;

    for (let i = 0; i < countries.length; i++) {
      if (countries[i].countryName === countryName) {
        isIncluded = true;
        break;
      }
    }

    if (isIncluded) {
      return alert("이미 등록된 국가입니다.");
    }

    if (countryName) {
      setCountries([...countries, { countryName, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) }]);
      resetForm();
    }
  };

  // 인풋 입력값 핸들러
  const countryNameHandler = (e) => setCountryName(e.target.value.trim());
  const goldHandler = (e) => setGold(Number(e.target.value));
  const silverHandler = (e) => setSilver(Number(e.target.value));
  const bronzeHandler = (e) => setBronze(Number(e.target.value));


  // 업데이트 버튼
  const updateCountryHandler = (e) => {
    e.preventDefault();

    const existingCountry = countries.find((c) => c.countryName === countryName);

    if (!existingCountry) {
      return alert("등록되지 않은 국가입니다.");
    }

    const updatedCountries = countries.map((c) => {
      if (c.countryName === countryName) {
        return { ...c, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) };
      }
      return c;
    });

    setCountries(updatedCountries);
    resetForm();
  };

  // 삭제 버튼
  const deleteCountryHandler = (countryToDelete) => {
    const confirmDelete = window.confirm(`${countryToDelete} 국가를 정말 삭제하시겠습니까?`);
    if (confirmDelete) {
      const deletedCountries = countries.filter(c => c.countryName !== countryToDelete);
      setCountries(deletedCountries);
    }
  };

  // 빈 문자열로 초기화해서 placeholder 가 다시 보이게 함
  const resetForm = () => {
    setCountryName('');
    setGold('');
    setSilver('');
    setBronze('');
  };

  // 메달리스트 메달 갯수 내림차순 정렬하기 논리합연산자 활용
  const sortedCountries = [...countries].sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);

  return (
    <>
      <div>
        <h1 className='title' style={{ color: colors[colorIndex] }}>2024 파리 올림픽🤼</h1>
      </div>
      <div className='container'>
        <form onSubmit={addCountryHandler}>
          <div className='form-row'>
            <Input label={"🌍국가명"} type={"text"} placeholder={"국가명을 입력하세요."} value={countryName} onChange={countryNameHandler} />
            <Input label={"🥇금메달"} type={"number"} placeholder={"금메달 수를 입력하세요."} value={gold} onChange={goldHandler} />
            <Input label={"🥈은메달"} type={"number"} placeholder={"은메달 수를 입력하세요."} value={silver} onChange={silverHandler} />
            <Input label={"🥉동메달"} type={"number"} placeholder={"동메달 수를 입력하세요."} value={bronze} onChange={bronzeHandler} />
            <Button addCountryHandler={addCountryHandler} updateCountryHandler={updateCountryHandler} />
          </div>
        </form>
      </div>

      <MedalList countries={sortedCountries} deleteCountryHandler={deleteCountryHandler} />
    </>
  );
};

export default App;


