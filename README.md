# StudyGram
```
1주마다, 이미지 업로드를 통해, 스터디 현황이 자동으로 체크되면 좋을 것 같아 프로젝트를 진행하였습니다.
```

## 로그인
```
로그인 시, sessionStorage에 로그인 상태값을 삽입하여, 로그인 상태를 알 수 있도록 하였습니다.
```
![studygram00](https://user-images.githubusercontent.com/61568434/162150209-e7afa5cf-7c4f-40b0-835c-3af5ef041ee5.jpg)

## 로그인 후 화면(게시글 등록하였을 때)
```
임시로 만들어 둔, 테스트계정(하드코딩 형태로 로그인 가능하도록 해두었습니다.) 로그인 시 나타나는 화면입니다.
```

![studygram01](https://user-images.githubusercontent.com/61568434/162150466-a60eaa63-a218-4d8f-afc9-55d04889b767.jpg)

## 로그인 후 화면(게시글 등록하지 않았을 경우)
```
게시글 등록이 되지 않았을 경우, 상단의 체크리스트에 체크가 해제되며, 업로드관련 내용이 나타납니다.
```
![studygram02](https://user-images.githubusercontent.com/61568434/162150472-bbc5ab7f-d903-4e0c-aeb1-c3eb093a87d1.jpg)

## 업로드
```
dropzone을 이용하여, 업로드 화면을 넣어두었습니다.
이미지 업로드시, 이미지 썸네일이 나타납니다.
```
![studygram03](https://user-images.githubusercontent.com/61568434/162150614-f8f4d80b-207b-420a-88e1-9d8ff0b9c035.jpg)

## 회원가입
```
회원가입시 암호검증이 가능하도록 해두었습니다.
암호검증은 8자리이상, 특수기호 포함, 대문자 포함에 관한 내용을 통해 검증하게 됩니다.
카테고리의 경우, CSS적용을 위해 Custom Select컴포넌트를 별도로 제작하였습니다.
```
![studygram04](https://user-images.githubusercontent.com/61568434/162150631-310cef83-6909-42f8-8bf0-0b3d39722d9e.jpg)


### 사용한 기술 스택
```
1. Vue.js
2. Vue Router
3. Axios
4. Scss
```

