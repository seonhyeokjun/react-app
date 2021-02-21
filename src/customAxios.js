import axios from "axios";

export default function (url, callback) {
    axios({
        url: '/api' + url,
        method: 'post',

        /**
         * 개발 환경에서의 크로스 도메인 이슈를 해결하기 위한 코드로
         * 운영 환경에 배포할 경우에는 14~15행을 주석 처리합니다.
         *
         * ※크로스 도메인 이슈: 브라우저에서 다른 도메인으로 URL 요청을 하는 경우 나타나는 보안문제
         */
        baseURI: 'http://localhost:8080',
        withCredentials: true
    }).then(function (reponse) {
        callback(reponse.data)
    });
}