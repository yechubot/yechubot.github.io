import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>안녕하세요, 김예은이라고 합니다. 
                 2020년 7월, 자바를 처음 배우기 시작해서 현재는 안드로이드 앱 프로젝트를 계속 만들며 공부하고 있습니다. 현재 React, Next JS 의 개념을 익히고 있으며 네이버 부스트코스 서포터즈 3기 활동으로 Kotlin을 조금씩 배우고 있습니다.</p>

            <p>하나씩 공부해서 풀스택 개발자가 되는 꿈을 갖고 있습니다.</p>

            <p>현재까지 개인 프로젝트로 책을 위한 앱,'북스로그'를 만들었으며, 내부DB를 구현하였으며, 베스트셀러 페이지, 네이버 검색 API를 활용하였습니다.</p>

            <p>팀 프로젝트로는 '산책홈즈'라는 앱을 만들었습니다. Firebase를 구축하여 아두이노 센서 값을 블루투스로 송신하여 스마트 홈을 제어하고 산책관리를 할 수 있는 앱입니다. OpenWeather API를 활용하여 날씨도 확인할 수 있습니다.</p>
           
            </Content>
        </div>
    );

}

export default AboutPage;