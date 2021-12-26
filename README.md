# clone_momentum

## Make clone momentum. With the help of a nomad coder

## https://taeminchoe.github.io/clone_momentum/

### Description of each function

#### 1. Login

- Form태그 안에서 submit이벤트가 발생하면, 기본적으로 새로고침됩니다.
- event.preventDefault()를 활용해 새로고침을 방지합니다.
- LocalStorage를 활용해 username을 관리합니다.
- password는 입력받지 않습니다.
- 저장된 username이 있다면 "Hello [username]"을 보여줍니다.
- 저장된 username이 없다면 username을 입력받는 Form을 보여줍니다.
- 입력받는 Form과 문구는 hidden클래스로 렌더링 유무를 결정합니다.

#### 2. Clock

- Date()객체를 사용합니다.
- Date객체에서 Hours, Minutes, Seconds값을 요청합니다.
- 1자리수 값의 경우, String.padStart()메서드를 사용해 2자리로 변환해줍니다.
- setInterver()메서드를 사용해 1초 간격으로 Date값을 갱신합니다.

#### 3. Quotes

- 사전에 n개의 명언들을 json형식으로 저장합니다.
- Math.random()메서드를 사용해 명언 갯수만큼의 난수를 생성합니다.
- 난수 값에 따라 랜덤으로 명언을 보여줍니다.

#### 4. Weather

- https://openweathermap.org/ 에서 api키를 발급 받습니다.
- navigator.geolocation.getCurrentPosition API를 활용해 브라우저에서 lat, lon을 받습니다.
- openweathermap서버에 lat, lon, api key를 보내 지역과 날씨 정보를 요청합니다.

#### 5. To-Do List

- LocalStorage을 활용합니다.
- LocalStorage에서는 항상 문자열로 저장합니다.
- Object와 같은 데이터를 저장하기 위해서는 JSON객체를 활용합니다.
- JSON.stringify()은 오브젝트를 문자열로 변환해줍니다.
- JSON.parse()은 문자열을 오브젝트로 변환해줍니다.
- element 생성은 document.createElement([tag])를 사용합니다.
- element 삭제는 Element.remove()를 사용합니다.

#### 6. background image

- Quotes와 같이 랜덤 난수를 활용합니다.
