const { TwitterApi } = require('twitter-api-v2');

// Replace these with your own Twitter API credentials
const client = new TwitterApi({
  appKey: 'YOUR_API_KEY',
  appSecret: 'YOUR_API_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_SECRET',
});

// Create a Twitter client
const twitterClient = client.readWrite;

// Function to search for tweets with specific hashtags and retweet them
async function retweetHashtags(hashtags) {
  try {
    // Create a search query with both hashtags
    const query = hashtags.join(' ');

    // Search for tweets containing both hashtags
    const tweets = await twitterClient.v2.search(query, {
      max_results: 10,  // Adjust the number of tweets you want to fetch
    });

    // Retweet each tweet
    for (const tweet of tweets.data) {
      console.log(`Retweeting tweet with ID: ${tweet.id}`);
      await twitterClient.v2.retweet(tweet.id);
      console.log(`Retweeted successfully!`);
    }
  } catch (error) {
    console.error('Error retweeting:', error);
  }
}

// Example usage: Retweet tweets with the hashtags #eye and #2
retweetHashtags(['#eye', '#2']);
