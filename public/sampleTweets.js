// sampleTweets.js - Mock Twitter data for U-Link application

// Sample tweet data for different users
const sampleTweets = {
  'bob': [
    {
      id: '1001',
      text: 'Just setting up my U-Link integration! Excited to see how this platform connects nature lovers. where im going most of the time ',
      created_at: '2025-04-19T14:30:00.000Z',
      author_id: 'bob',
      author_name: 'Bob',
      author_username: 'bob',
      profile_image_url:'./images/bob.jpg',
      stats: {
        replies: '245',
        retweets: '1.2K',
        likes: '5.7K'
      },
      media: []
    },
    {
      id: '1002',
      text: 'Finally found the Admin building after hours of walking.',
      created_at: '2025-04-18T09:15:00.000Z',
      author_id: 'bob',
      author_name: 'Bob',
      author_username: 'bob',
      profile_image_url:'./images/bob.jpg',
      stats: {
        replies: '189',
        retweets: '876',
        likes: '4.3K'
      },
      media: ['images/uwi.png']
    },
    {
      id: '1003',
      text: 'Had my first day of classes today.This is goign to be a hard semester',
      created_at: '2025-04-17T16:45:00.000Z',
      author_id: 'bob',
      author_name: 'Bob',
      author_username: 'bob',
      profile_image_url:'./images/bob.jpg',
      stats: {
        replies: '321',
        retweets: '1.5K',
        likes: '7.2K'
      },
      media: []
    }
  ],
  'Guild Feast': [
    {
      id: '2001',
      text: 'Pelicans, The Guild of Students wishes you a Happy Easter!',
      created_at: '2025-04-19T18:20:00.000Z',
      author_id: 'Guild Feast',
      author_name: 'Guild Feast',
      author_username: 'Guild Feast',
      profile_image_url:'./images/guildf.jpeg',
      stats: {
        replies: '4.3K',
        retweets: '12.8K',
        likes: '98.5K'
      },
      media: ['images/easter.jpg']
    },
    {
      id: '2002',
      text: 'SIP AND PAINT,We bring to you another event catered to maximum relaxation, with the proper avenue to display your artistic capabilities,Whether youre a pro-painter, never held a paintbrush in your life, or just appreciate art, For the low cost of $120, all your materials and beverages will be provided for you! Just bring yourself and a couple friend',
      created_at: '2025-04-18T12:05:00.000Z',
      author_id: 'Guild Feast',
      author_name: 'Guild Feast',
      author_username: 'Guild Feast',
      profile_image_url:'./images/guildf.jpeg',
      stats: {
        replies: '2.1K',
        retweets: '9.7K',
        likes: '76.3K'
      },
      media: ['images/sip.jpg']
    },
    {
      id: '2003',
      text: 'Join us on Earth Day at Sir Frank Stockdale Building. * We are highlighting a public-private-academia initiative for sustainability and showcasing student led projects.',
      created_at: '2025-04-17T07:30:00.000Z',
      author_id: 'Guild Feast',
      author_name: 'Guild Feast',
      author_username: 'Guild Feast',
      profile_image_url:'./images/guildf.jpeg',
      stats: {
        replies: '3.4K',
        retweets: '15.2K',
        likes: '112K'
      },
      media: ['images/earth.jpeg']
    }
  ],
  'UwiStAgustine': [
    {
      id: '3001',
      text: '📚✨Exams are here, Pelicans-but dont panic, we have got your back!💪🧠Stay sharp, stay focused, and soar through the season with these quick study tips:1️⃣Plan like a pro - Build a schedule that gives eachsubject some love. Cramming =🚫2️⃣Break it up - Power study in short bursts and takebrain-boosting breaks. Your mind needs room to breathe!3️⃣Keep the vibes high - Confidence is your secret weapon. Youve done the work—now trust your grind! 💯📢Tag a friend who needs this reminder! Lets crush exam season together.🦩💥#UWIExams #PelicanStrong #StudySmart #YouGotThis #UWISTA',
      created_at: '2025-04-19T15:45:00.000Z',
      author_id: 'UwiStAgustine',
      author_name: 'UwiStAgustine',
      author_username: 'UwiStAgustine',
      profile_image_url:'./images/uwicam.jpeg',
      stats: {
        replies: '1.2K',
        retweets: '5.6K',
        likes: '23.7K'
      },  
      media: ['images/exam.jpeg']
    },
    {
      id: '3002',
      text: '🎉Big News, UWI Students!🎉The Scholarships & Bursaries Application Cycle is officially OPEN for all new and continuing undergraduate students! 📝✨This is your chance to secure that extra funding to help power your academic journey! 🚀🗓️Apply by: Saturday, May 31st🔍Visit our Website and find out more under the Financial Aid tab.Lets get that bag, scholars!🎓💼#UWISTA #Scholarships2025 #BursaryBoost #SecureTheBag #StudentSuccess',
      created_at: '2025-04-18T10:30:00.000Z',
      author_id: 'UwiStAgustine',
      author_name: 'UwiStAgustine',
      author_username: 'UwiStAgustine',
      profile_image_url:'./images/uwicam.jpeg',
      stats: {
        replies: '876',
        retweets: '4.3K',
        likes: '18.9K'
      },
      media: ['images/school.jpeg']
    },
    {
      id: '3003',
      text: '📢Attention First-Year Students!How was your transition to university life? We want to hear from you! Share your experiences, feedback, and ideas to help make the First-Year Experience (FYE) programme even better for future students.Join us for the FYE Student Forum—a space for open discussions, insights, and real recommendations to improve the journey for new and incoming UWI students.🗓️Date: 27 March 2025⏰Time: 1:00 PM📍Location: Online via Zoom (Check your student email for the link)Lets shape a better first-year experience together!📩For more info: ✉️Email: STA-studentengagement@sta.uwi.edu 📲WhatsApp: 1 (868) 273-4706 #UWIStudentLife #FirstYearExperience #FYEForum#UWISTA',
      created_at: '2025-04-17T13:15:00.000Z',
      author_id: 'UwiStAgustine',
      author_name: 'UwiStAgustine',
      author_username: 'UwiStAgustine',
      profile_image_url:'./images/uwicam.jpeg',
      stats: {
        replies: '2.3K',
        retweets: '7.8K',
        likes: '31.2K'
      },
      media: []
    }
  ]
};

// Function to get tweets for a specific user
export function getTweetsForUser(username) {
  return sampleTweets[username] || [];
}

// Function to get all tweets from all users
export function getAllTweets() {
  const allTweets = [];
  
  Object.keys(sampleTweets).forEach(username => {
    sampleTweets[username].forEach(tweet => {
      allTweets.push(tweet);
    });
  });
  
  // Sort by date (newest first)
  return allTweets.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
}

// Function to simulate fetching tweets (with a delay to mimic API call)
export function fetchTweetsFromTwitter(username) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      try {
        const tweets = getTweetsForUser(username);
        
        // Log the fetched tweets
        console.log(`Fetched Tweets for ${username}:`, tweets);
        
        // Display the tweets in the UI
        displayTweets(tweets, username);
        
        resolve(tweets);
      } catch (error) {
        console.error(`Error fetching tweets for ${username}:`, error);
        displayErrorMessage(`Failed to load tweets from ${username}.`);
        reject(error);
      }
    }, 1000); // 1 second delay to simulate network request
  });
}

// Function to display fetched tweets for each user
function displayTweets(tweets, username) {
  const feedContainer = document.getElementById('post-feed');

  if (!feedContainer) {
    console.error('Post feed container not found');
    return;
  }

  // Remove loading message if it exists
  const loadingMessage = document.querySelector('.loading-message');
  if (loadingMessage) {
    loadingMessage.remove();
  }

  // Create a section for each user's feed
  const userFeedContainer = document.createElement('div');
  userFeedContainer.className = 'user-feed';
  userFeedContainer.innerHTML = `<h3>Tweets from @${username}</h3>`;

  // Process each tweet and create HTML elements
  tweets.forEach(tweet => {
    const tweetElement = document.createElement('div');
    tweetElement.className = 'post glass-effect';
    tweetElement.setAttribute('data-tweet-id', tweet.id);

    // Create tweet header
    const header = document.createElement('div');
    header.className = 'post-header';

    // Profile image
    const profileImg = document.createElement('img');
    profileImg.src = tweet.profile_image_url || 'images/default-avatar.jpg'; // Use provided image or default
    profileImg.alt = tweet.author_name || username;
    header.appendChild(profileImg);

    // Tweet info (user name and date)
    const info = document.createElement('div');
    info.className = 'post-info';

    const name = document.createElement('h4');
    name.textContent = tweet.author_name || username;

    const meta = document.createElement('p');
    // Format the date or use a relative time
    const tweetDate = new Date(tweet.created_at);
    const timeAgo = getTimeAgo(tweetDate);
    meta.innerHTML = `${timeAgo} · <i class="fab fa-twitter"></i>`;

    info.appendChild(name);
    info.appendChild(meta);
    header.appendChild(info);

    // Tweet content
    const content = document.createElement('div');
    content.className = 'post-content';

    const text = document.createElement('p');
    text.textContent = tweet.text || '';
    content.appendChild(text);

    // Add media if available
    if (tweet.media && tweet.media.length > 0) {
      if (tweet.media.length === 1) {
        const mediaContainer = document.createElement('div');
        mediaContainer.className = 'post-image';
        
        const img = document.createElement('img');
        img.src = tweet.media[0];
        img.alt = 'Tweet media';
        
        mediaContainer.appendChild(img);
        content.appendChild(mediaContainer);
      } else {
        const mediaGrid = document.createElement('div');
        mediaGrid.className = 'post-image-grid';
        
        tweet.media.forEach(mediaUrl => {
          const img = document.createElement('img');
          img.src = mediaUrl;
          img.alt = 'Tweet media';
          mediaGrid.appendChild(img);
        });

        content.appendChild(mediaGrid);
      }
    }

    // Tweet stats
    const stats = document.createElement('div');
    stats.className = 'post-stats';

    const reactions = document.createElement('div');
    reactions.className = 'reactions';

    const repliesCount = formatCount(tweet.stats?.replies || '0');
    const retweetsCount = formatCount(tweet.stats?.retweets || '0');
    const likesCount = formatCount(tweet.stats?.likes || '0');

    reactions.innerHTML = `
      <span><i class="fas fa-comment"></i> ${repliesCount}</span>
      <span><i class="fas fa-retweet"></i> ${retweetsCount}</span>
      <span><i class="fas fa-heart"></i> ${likesCount}</span>
    `;

    stats.appendChild(reactions);

    // Action buttons
    const actionButtons = document.createElement('div');
    actionButtons.className = 'post-actions-buttons';
    
    // Create reply button
    const replyButton = document.createElement('button');
    replyButton.className = 'reply-btn';
    replyButton.innerHTML = '<i class="far fa-comment"></i> Reply';
    replyButton.addEventListener('click', function() {
      handleReplyClick(tweet, tweetElement);
    });
    
    // Create retweet button
    const retweetButton = document.createElement('button');
    retweetButton.className = 'retweet-btn';
    retweetButton.innerHTML = '<i class="far fa-retweet"></i> Retweet';
    
    // Create like button
    const likeButton = document.createElement('button');
    likeButton.className = 'like-btn';
    likeButton.innerHTML = '<i class="far fa-heart"></i> Like';
    
    // Store the original like count in a data attribute
    const originalLikes = parseInt(tweet.stats?.likes.replace(/[^0-9]/g, '') || '0');
    likeButton.setAttribute('data-original-likes', originalLikes);
    likeButton.setAttribute('data-liked', 'false');
    
    // Add like button event listener
    likeButton.addEventListener('click', function() {
      handleLikeClick(tweet, likeButton, reactions);
    });
    
    // Add buttons to action buttons container
    actionButtons.appendChild(replyButton);
    actionButtons.appendChild(retweetButton);
    actionButtons.appendChild(likeButton);

    // Assemble tweet
    tweetElement.appendChild(header);
    tweetElement.appendChild(content);
    tweetElement.appendChild(stats);
    tweetElement.appendChild(actionButtons);

    // Add to the user's feed container
    userFeedContainer.appendChild(tweetElement);
  });

  // Append the user feed container to the main feed
  feedContainer.appendChild(userFeedContainer);
}

// Function to format the count (replies, retweets, likes)
function formatCount(countStr) {
  const count = parseInt(countStr.replace(/[^0-9]/g, '') || '0');

  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }

  return count.toString();
}

// Function to get relative time (time ago)
function getTimeAgo(date) {
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  if (diffDay > 7) {
    return date.toLocaleDateString();
  } else if (diffDay > 0) {
    return `${diffDay}d ago`;
  } else if (diffHour > 0) {
    return `${diffHour}h ago`;
  } else if (diffMin > 0) {
    return `${diffMin}m ago`;
  } else {
    return 'just now';
  }
}

// Function to handle like button clicks
function handleLikeClick(tweet, likeButton, reactionsElement) {
  const isLiked = likeButton.getAttribute('data-liked') === 'true';
  const originalLikes = parseInt(likeButton.getAttribute('data-original-likes'));
  
  // Toggle like state
  if (isLiked) {
    // Unlike
    likeButton.setAttribute('data-liked', 'false');
    likeButton.innerHTML = '<i class="far fa-heart"></i> Like';
    
    // Update the like count in the reactions section
    const newLikeCount = originalLikes;
    updateLikeCount(reactionsElement, newLikeCount);
  } else {
    // Like
    likeButton.setAttribute('data-liked', 'true');
    likeButton.innerHTML = '<i class="fas fa-heart" style="color: #e0245e;"></i> Liked';
    
    // Update the like count in the reactions section
    const newLikeCount = originalLikes + 1;
    updateLikeCount(reactionsElement, newLikeCount);
  }
}

// Function to update the like count display
function updateLikeCount(reactionsElement, newCount) {
  // Find the likes span (third child in the reactions div)
  const likesSpan = reactionsElement.querySelectorAll('span')[2];
  
  // Format the count and update the display
  const formattedCount = formatCount(newCount.toString());
  likesSpan.innerHTML = `<i class="fas fa-heart"></i> ${formattedCount}`;
}

// Function to handle reply button clicks
function handleReplyClick(tweet, tweetElement) {
  // Check if a reply form already exists for this tweet
  const existingForm = tweetElement.querySelector('.reply-form');
  
  if (existingForm) {
    // Toggle visibility if form already exists
    existingForm.style.display = existingForm.style.display === 'none' ? 'block' : 'none';
    return;
  }
  
  // Create reply form
  const replyForm = document.createElement('div');
  replyForm.className = 'reply-form';
  
  // Create textarea for reply
  const textarea = document.createElement('textarea');
  textarea.placeholder = `Reply to @${tweet.author_username || 'user'}...`;
  textarea.rows = 3;
  
  // Create buttons container
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'reply-form-buttons';
  
  // Create cancel button
  const cancelButton = document.createElement('button');
  cancelButton.className = 'cancel-reply-btn';
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', function() {
    replyForm.style.display = 'none';
  });
  
  // Create reply button
  const submitReplyButton = document.createElement('button');
  submitReplyButton.className = 'submit-reply-btn';
  submitReplyButton.textContent = 'Reply';
  submitReplyButton.addEventListener('click', function() {
    submitReply(tweet, textarea.value, tweetElement, replyForm);
  });
  
  // Assemble the form
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(submitReplyButton);
  replyForm.appendChild(textarea);
  replyForm.appendChild(buttonContainer);
  
  // Add the form to the tweet element
  tweetElement.appendChild(replyForm);
}

// Function to handle reply submission
function submitReply(tweet, replyText, tweetElement, replyForm) {
  if (!replyText.trim()) {
    alert('Please enter a reply before submitting.');
    return;
  }
  
  // Create a new reply element
  const replyElement = document.createElement('div');
  replyElement.className = 'tweet-reply glass-effect';
  
  // Get the current user info (in a real app, this would come from auth)
  const currentUser = {
    name: 'Current User',
    username: 'currentuser',
    profileImage: 'images/default-avatar.jpg'
  };
  
  // Create reply content
  replyElement.innerHTML = `
    <div class="reply-header">
      <img src="${currentUser.profileImage}" alt="${currentUser.name}">
      <div class="reply-info">
        <h4>${currentUser.name}</h4>
        <p>just now · <i class="fab fa-twitter"></i></p>
      </div>
    </div>
    <div class="reply-content">
      <p><span class="reply-to">@${tweet.author_username || 'user'}</span> ${replyText}</p>
    </div>
  `;
  
  // Add the reply below the tweet
  const repliesContainer = tweetElement.querySelector('.tweet-replies') || document.createElement('div');
  
  if (!tweetElement.querySelector('.tweet-replies')) {
    repliesContainer.className = 'tweet-replies';
    tweetElement.appendChild(repliesContainer);
  }
  
  repliesContainer.appendChild(replyElement);
  
  // Update reply count
  const statsElement = tweetElement.querySelector('.post-stats');
  const repliesSpan = statsElement.querySelector('.reactions span:first-child');
  const currentReplies = parseInt(repliesSpan.textContent.replace(/[^0-9]/g, '') || '0');
  const newRepliesCount = currentReplies + 1;
  
  repliesSpan.innerHTML = `<i class="fas fa-comment"></i> ${formatCount(newRepliesCount.toString())}`;
  
  // Clear and hide the form
  const textarea = replyForm.querySelector('textarea');
  textarea.value = '';
  replyForm.style.display = 'none';
}

// Function to load user posts from localStorage
export function loadUserPosts() {
  try {
    const savedPosts = localStorage.getItem('userPosts');
    if (savedPosts) {
      const userPosts = JSON.parse(savedPosts);
      
      // Add the saved posts to the sampleTweets object
      if (userPosts.length > 0) {
        sampleTweets['currentuser'] = userPosts;
        
        // Display the user's posts at the top of the feed
        setTimeout(() => {
          // We use setTimeout to ensure this runs after the initial feed is loaded
          displayTweets(sampleTweets['currentuser'], 'currentuser');
        }, 500); // Reduced delay to ensure this runs before other tweets are loaded
      }
    }
  } catch (error) {
    console.error('Error loading saved posts:', error);
  }
}

// Function to save user posts to localStorage
function saveUserPosts(posts) {
  try {
    localStorage.setItem('userPosts', JSON.stringify(posts));
  } catch (error) {
    console.error('Error saving posts:', error);
  }
}

// Function to create a new post and add it to the feed
export function createNewPost(text, imageUrl = null) {
  // Get the current user info (in a real app, this would come from auth)
  const currentUser = {
    id: 'currentuser',
    name: 'Current User',
    username: 'currentuser',
    profileImage: './images/default-avatar.jpg'
  };
  
  // Generate a unique ID for the new post
  const newPostId = 'post_' + Date.now();
  
  // Create the new post object
  const newPost = {
    id: newPostId,
    text: text,
    created_at: new Date().toISOString(),
    author_id: currentUser.id,
    author_name: currentUser.name,
    author_username: currentUser.username,
    profile_image_url: currentUser.profileImage,
    stats: {
      replies: '0',
      retweets: '0',
      likes: '0'
    },
    media: []
  };
  
  // Add image to media array if provided
  if (imageUrl) {
    // In a real app, you would upload the image to a server and get a URL
    // For this demo, we'll use the data URL directly or a local path
    newPost.media.push(imageUrl);
  }
  
  // Create a user section for current user if it doesn't exist
  if (!sampleTweets[currentUser.username]) {
    sampleTweets[currentUser.username] = [];
  }
  
  // Add the new post to the current user's tweets
  sampleTweets[currentUser.username].unshift(newPost);
  
  // Save the updated posts to localStorage
  saveUserPosts(sampleTweets[currentUser.username]);
  
  // Clear the feed and display all tweets including the new one
  const feedContainer = document.getElementById('post-feed');
  feedContainer.innerHTML = '';
  
  // Create a user feed container specifically for the current user's posts
  const userFeedContainer = document.createElement('div');
  userFeedContainer.className = 'user-feed';
  userFeedContainer.innerHTML = `<h3>My Posts</h3>`;
  
  // Display the new post at the top of the feed
  displayTweets(sampleTweets[currentUser.username], currentUser.username);
  
  // Display other users' tweets below
  Object.keys(sampleTweets).forEach(username => {
    if (username !== currentUser.username) {
      displayTweets(sampleTweets[username], username);
    }
  });
  
  return newPost;
}

// Function to display an error message
function displayErrorMessage(message) {
  const feedContainer = document.getElementById('post-feed');

  if (!feedContainer) {
    console.error('Post feed container not found');
    return;
  }

  feedContainer.innerHTML = `
    <div class="error-message glass-effect">
      <i class="fas fa-exclamation-circle"></i>
      <p>${message}</p>
    </div>
  `;
}

// Function to display a message when no tweets are found
function displayNoTweetsMessage(username) {
  const feedContainer = document.getElementById('post-feed');

  if (!feedContainer) {
    console.error('Post feed container not found');
    return;
  }

  feedContainer.innerHTML = `
    <div class="no-content-message glass-effect">
      <i class="far fa-comment-alt"></i>
      <p>No tweets found for @${username}. Follow Twitter accounts to see their tweets here.</p>
      <button class="follow-accounts-btn">Find Accounts to Follow</button>
    </div>
  `;
}
