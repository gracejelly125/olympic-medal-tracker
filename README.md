# 올림필 메달 추적기 만들기
----
## 프로젝트의 목표
- 2024 파리 올림픽의 메달 집계를 관리하는 Olympic Medal Tracker 만들기
- Vite 를 이용하여 리액트 프로젝트를 셋업한다.
- 리액트 컴포넌트, 이벤트 관리, 상태(state) 관리를 통해 CRUD 기능을 구현한다.
----
## 필수 기능
### 1. **제출 폼 UI 구현**
- `Form` 태그를 활용하여 나라 이름과 금, 은, 동 메달 수를 입력할 수 있는 4개의 입력 필드를 만든다.
- 제출 후 모든 입력 필드는 빈 값으로 초기화 된다.
 
### 2. **메달 집계 CRUD 기능**
- 폼에 입력된 데이터를 사용하여 국가별 메달 집계를 관리한다. CRUD(Create, Read, Update, Delete) 기능을 통해 국가별 데이터를 추가, 조회, 수정, 삭제할 수 있다.

### 3. **메달 집계 정렬**
- 리스트에 표시된 국가별 메달 집계를 금메달 수 기준으로 내림차순 정렬한다.
- 국가 추가, 수정, 삭제 시 리스트가 자동으로 재정렬된다.

### 4. **레이아웃 설정**
- 화면 전체의 레이아웃을 설정하여 정돈된 UI를 만든다.

### 5. **컴포넌트 구조**
- 기능별로 컴포넌트를 분리하여 코드의 가독성과 재사용성을 높인다.
- Input.jsx: 데이터를 입력하는 폼
- MedalList.jsx: 메달 집계 리스트
- Button.jsx: 국가추가, 업데이트 버튼

### 5. **로컬 스토리지 활용**
- 데이터를 로컬 스토리지에 저장하여 새로고침해도 정보가 유지된다.
----
## 사용한 툴
- React
- vite
----
## 결과물
![과제](https://velog.velcdn.com/images/gracejelly125/post/f3da5e8f-b424-490d-aa92-40310440c997/image.JPG)
