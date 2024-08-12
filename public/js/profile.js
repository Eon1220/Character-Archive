const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#chara-name').value.trim();
    const desc = document.querySelector('#chara-desc').value.trim();
  
    if (name && desc) {
      const response = await fetch(`/api/charas`, {
        method: 'POST',
        body: JSON.stringify({ name, desc }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create charapost');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/charas/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const name = document.querySelector('#chara-name').value.trim();
      const desc = document.querySelector('#chara-desc').value.trim();
      const id = event.target.getAttribute('data-id');
      if (name && desc) {
        const response = await fetch(`/api/charas/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ name, desc }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
  
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to edit post');
        }
      }
    }
  };
  
  document
    .querySelector('.new-chara-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.chara-list')
    .addEventListener('click', delButtonHandler);
  
  document
    .querySelector('.chara-list')
    .addEventListener('click', editButtonHandler);