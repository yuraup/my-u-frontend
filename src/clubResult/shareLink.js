/*sharePage = () => {
	const shareObject = {
		title: '결과 공유',
		text: '',
		url: window.location.href,
	};
	if (navigator.share) {
		navigator.share(shareObject)
			.then(() => {
				alert('공유 링크가 복사되었습니다')
			})
			.catch((error) => {
				alert('에러가 발생했습니다')
			})
	} else {
		alert('페이지 공유를 지원하지 않습니다')
	}
}*/

function copyLink() {
	// 복사할 링크의 주소를 가져옵니다.
	var link = "https://www.example.com"; // 여기에 공유할 링크를 입력하세요.

	// 임시 textarea 엘리먼트를 생성하고 링크를 설정합니다.
	var textarea = document.createElement('textarea');
	textarea.value = link;

	// body에 textarea를 추가하고 선택합니다.
	document.body.appendChild(textarea);
	textarea.select();

	// 링크를 클립보드에 복사합니다.
	document.execCommand('copy');

	// textarea를 제거합니다.
	document.body.removeChild(textarea);

	// 복사 완료 메시지를 표시합니다.
	alert("링크가 복사되었습니다.");
}