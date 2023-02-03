(function () {

  const sendEmail = (e) => {
    emailjs.init('U1Y7l1h_pZwNrwc4F');
    e.preventDefault();
    let NAME = document.getElementById('userName').value;
    let EMAIL = document.getElementById('userEmail').value;
    let MESSAGE = document.getElementById('message').value;
    let templateParams = {
      fromName: NAME,
      fromEmail: EMAIL,
      message: MESSAGE,
    }
    console.log(templateParams);
    // if (EMAIL.length < 8 || !/@/.test(val.userEmail)) {
    //   return alert("8글자이상 @를 포함해서 작성하세요");
    // }
    emailjs.send("service_5xmjd6i", "template_x77fzut", templateParams)
      .then((res) => {
        console.log('Success!', res.status, res.text);
        alert('메일이 성공적으로 발송되었습니다. 감사합니다.');

        // setStatus('success');
      }, function (error) {
        console.log('Failed...', error);
        // setStatus('fail');
      })



  }

  const emailBtn = document.getElementById('emailBtn');
  emailBtn.addEventListener('click', sendEmail);
})();