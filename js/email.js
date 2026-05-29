(function () {
  const form = document.querySelector('.emailForm');
  if (!form) return;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.reportValidity()) return;

    const NAME = document.getElementById('userName').value.trim();
    const EMAIL = document.getElementById('userEmail').value.trim();
    const MESSAGE = document.getElementById('message').value.trim();

    if (!NAME || !EMAIL || !MESSAGE) {
      alert('성함, 이메일, 메시지를 모두 입력해주세요.');
      return;
    }

    const templateParams = {
      fromName: NAME,
      fromEmail: EMAIL,
      message: MESSAGE,
    };

    const btn = document.getElementById('emailBtn');
    btn.disabled = true;

    emailjs
      .send('service_5xmjd6i', 'template_x77fzut', templateParams)
      .then(() => {
        alert('메일이 성공적으로 발송되었습니다. 감사합니다.');
        form.reset();
      })
      .catch(() => {
        alert('메일 발송에 실패했습니다. 잠시 후 다시 시도해주세요.');
      })
      .finally(() => {
        btn.disabled = false;
      });
  };

  form.addEventListener('submit', sendEmail);
})();
