<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<header>
  <h1>Hashtag Retweet</h1>
  <p>Automatically retweet tweets with specific hashtags using Node.js</p>

  <!-- Corrected Image Embed -->
  <img src="https://github.com/user-attachments/assets/010a92d3-d097-45a5-85f2-76490b3eec0c" alt="Hashtag Retweet" style="max-width: 100%; height: auto;"/>
</header>

<section>
  <h2>Features</h2>
  <ul>
    <li>Retweet tweets that contain one or more hashtags.</li>
    <li>Simple and easy-to-use Node.js script.</li>
    <li>Uses Twitter API (v2) for searching and retweeting tweets.</li>
  </ul>
</section>

<section>
  <h2>Prerequisites</h2>
  <p>Before running this script, make sure you have the following:</p>
  <ul>
    <li><strong>Node.js</strong>: Make sure Node.js is installed on your system. You can download it from <a href="https://nodejs.org/" target="_blank">here</a>.</li>
    <li><strong>Twitter Developer Account</strong>: You need to create a Twitter Developer account to get API credentials. Follow these steps:
      <ul>
        <li>Go to the <a href="https://developer.twitter.com/en/apps" target="_blank">Twitter Developer Portal</a>.</li>
        <li>Create a new application and generate the following credentials:
          <ul>
            <li>API Key</li>
            <li>API Secret Key</li>
            <li>Access Token</li>
            <li>Access Token Secret</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</section>

<section>
  <h2>Installation</h2>
  <h3>Step 1: Clone the repository</h3>
  <pre><code>git clone https://github.com/Riotcoke123/hashtagretweet.git</code></pre>
  <pre><code>cd hashtagretweet</code></pre>

  <h3>Step 2: Install dependencies</h3>
  <pre><code>npm install</code></pre>

  <h3>Step 3: Update API credentials</h3>
  <p>Open the <code>retweet.js</code> file and replace the placeholder values with your own Twitter API credentials:</p>
  <pre><code>const client = new TwitterApi({
  appKey: 'YOUR_API_KEY',
  appSecret: 'YOUR_API_SECRET',
  accessToken: 'YOUR_ACCESS_TOKEN',
  accessSecret: 'YOUR_ACCESS_SECRET',
});</code></pre>

  <h3>Step 4: Run the script</h3>
  <p>Run the script to retweet tweets with the specified hashtags. To retweet tweets with the hashtags <code>#eye</code> and <code>#2</code>, use the following command:</p>
  <pre><code>node retweet.js</code></pre>

  <h3>Optional: Customize Hashtags</h3>
  <p>To retweet tweets with different hashtags, simply modify the <code>retweetHashtags</code> function call in <code>retweet.js</code>:</p>
  <pre><code>retweetHashtags(['#yourHashtag1', '#yourHashtag2']);</code></pre>
</section>

<section>
  <h2>How It Works</h2>
  <ul>
    <li>The script uses the <strong>Twitter API v2</strong> to search for tweets containing the hashtags you specify.</li>
    <li>It retrieves up to 10 tweets (you can change this by adjusting the <code>max_results</code> parameter).</li>
    <li>The script then automatically retweets each tweet it finds.</li>
  </ul>
</section>

<section>
  <h2>Example Output</h2>
  <p>If you run the script and it finds tweets containing <code>#eye</code> and <code>#2</code>, the output will look like this:</p>
  <pre><code>Retweeting tweet with ID: 1234567890
Retweeted successfully!
Retweeting tweet with ID: 1234567891
Retweeted successfully!
...</code></pre>
</section>

<section>
  <h2>Troubleshooting</h2>
  <ul>
    <li>If you encounter errors regarding the API credentials, double-check that your credentials are correct and have the necessary permissions.</li>
    <li>Make sure you haven't hit Twitter's rate limits, which may prevent you from retweeting too many tweets in a short amount of time.</li>
    <li>If you're receiving unexpected results, check that the hashtags are correctly formatted.</li>
  </ul>
</section>

<section>
  <h2>License</h2>
  <p>This project is licensed under the <strong>GNU General Public License v3.0</strong> - see the <a href="LICENSE" target="_blank">LICENSE</a> file for details.</p>
</section>

</body>
</html>
