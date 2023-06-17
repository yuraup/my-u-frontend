function copyLink() {
	// 복사할 링크의 주소를 가져옵니다.
	var link = window.document.location.href; // 여기에 공유할 링크를 입력하세요.

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
