const deleteBtn = document.querySelector('#delete-btn');
const titleTag = document.querySelector('h2#title');

deleteBtn.addEventListener('click', e => {
  const endpoint = `/blogs/${deleteBtn.getAttribute('data-doc')}`;
  const blogTitle = titleTag.dataset.title;
  let confirm = prompt(`Enter your blog title "${blogTitle}" to delete your blog post: `, blogTitle);
  if (confirm === blogTitle) {
    fetch(endpoint, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => window.location.href = data.redirect)
      .catch(console.error);
  } else if (confirm && confirm !== blogTitle) {
    alert('Incorrect blog title');
    e.preventDefault();
  } else {
    e.preventDefault();
  }
});