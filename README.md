## 페이지 구성
### 사용자 목록 페이지 (/users)
### 사용자 상세 페이지 (/users/:id)
### 사용자 생성 페이지 (/users/new)

## 각 페이지별 요구사항
### 1. 사용자 목록 페이지 (/users)
   모든 사용자의 리스트를 보여줍니다.
각 사용자 항목을 클릭하면 상세 페이지(/users/:id)로 이동합니다.

"새 사용자 추가" 버튼을 누르면 사용자 생성 페이지(/users/new)로 이동합니다.

상태 관리:

서버에서 사용자 목록을 fetch하여 관리

로딩/에러 상태

목API 주소: GET https://jsonplaceholder.typicode.com/users

### 2. 사용자 상세 페이지 (/users/:id)
   해당 사용자의 상세 정보를 보여줍니다.

"뒤로가기" 버튼으로 목록 페이지로 이동합니다.

상태 관리:

서버에서 특정 사용자 정보를 fetch하여 관리

로딩/에러 상태

목API 주소: GET https://jsonplaceholder.typicode.com/users/{id}

### 3. 사용자 생성 페이지 (/users/new)
   이름, 이메일, 전화번호를 입력받아 새 사용자를 생성합니다.

"생성" 버튼을 누르면 서버에 사용자 정보를 POST합니다.

성공 시 목록 페이지로 이동합니다.

실패 시 에러 메시지를 보여줍니다.

상태 관리:

입력 폼 상태 (클라이언트 상태)

서버에 POST 요청 후 성공/실패 상태

로딩/에러 상태

목API 주소: POST https://jsonplaceholder.typicode.com/users

body: { name: string, email: string, phone: string }

## 개발 지침
각 페이지별로 필요한 상태와 비즈니스 로직을 클린 아키텍처(components, services, hooks, usecases 등) 원칙에 따라 분리해서 구현하세요.

서버 상태는 반드시 fetch 또는 라이브러리(TanStack Query 등)를 활용해 관리하세요.

컴포넌트는 순수하게 렌더링만 담당하고, 부수 효과와 데이터 변환은 usecases/hook/service에서 처리하세요.

에러/로딩/성공 상태를 명확하게 관리하세요.

스타일링은 생략.

