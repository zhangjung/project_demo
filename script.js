const themeToggle = document.querySelector('#themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀' : '◐';
});

document.querySelectorAll('.command-tabs button').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.command-tabs button').forEach((item) => item.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.command-row').forEach((row) => {
      row.hidden = filter !== 'all' && row.dataset.type !== filter;
    });
  });
});

document.querySelectorAll('.command-row').forEach((row) => {
  row.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(row.dataset.copy);
      const label = row.querySelector('b');
      label.textContent = '已复制 ✓';
      setTimeout(() => { label.textContent = '复制'; }, 1200);
    } catch { /* 浏览器禁止剪贴板时，不影响页面使用 */ }
  });
});

document.querySelectorAll('.quiz-options button').forEach((option) => {
  option.addEventListener('click', () => {
    const result = document.querySelector('#quizResult');
    const correct = option.dataset.answer === 'correct';
    result.textContent = correct ? '答对了！git push 会把本地提交推送到远程仓库。' : '再想想：git push 才是“上传”到远程仓库。';
    result.style.color = correct ? '#a9f3c9' : '#ffd0bd';
  });
});

