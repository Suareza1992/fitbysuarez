document.addEventListener('DOMContentLoaded', () => {
    // Like and Dislike button counters
    let likeCount = 0;
    let dislikeCount = 0;

    const likeButton = document.querySelector('.like-btn');
    const dislikeButton = document.querySelector('.dislike-btn');
    const commentForm = document.querySelector('.comment-form');
    const commentList = document.querySelector('.comments-section');

    // Like Button
    likeButton.addEventListener('click', () => {
        likeCount++;
        likeButton.innerHTML = `<i class="fas fa-thumbs-up"></i> Me gusta (${likeCount})`;
    });

    // Dislike Button
    dislikeButton.addEventListener('click', () => {
        dislikeCount++;
        dislikeButton.innerHTML = `<i class="fas fa-thumbs-down"></i> No me gusta (${dislikeCount})`;
    });

    // Comment Submission
    commentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const commentText = commentForm.querySelector('textarea').value;

        if (commentText.trim()) {
            try {
                // Post comment to backend
                const response = await fetch('/api/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ comment: commentText }),
                });
                
                const result = await response.json();
                if (response.ok) {
                    addCommentToList(result.comment);
                    commentForm.reset();
                } else {
                    alert("Error: " + result.error);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

    // Function to add comment to the list on frontend
    function addCommentToList(commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<p><strong>Usuario:</strong> ${commentText}</p><span class="comment-time">Hace un momento</span>`;
        commentList.appendChild(commentDiv);
    }
});
