// ----CREATE----
// Create Post
    // Add to Posts DB w/
        // User Id
        // Post Id
        // Option Names
        // Number of Votes Each
        // Total of Votes

// ----READ----
// Get Feed
    // Query All Posts in DB by creation number and return recent posts from ((numProvided * 10) - 20)
    // ----OR----
    // Just query range ((numProvided * 10) - 20)

// Get Most Voted Posts
    // Get all posts in DB and filter by top 5 most voted
    // ----OR----
    // Get top 5 most total votes

// Get Popular Posts (later- could replace most popular)
    // Get Most Voted posted in last 12 hours

// Get All User's Posts
    // Get all where DB's userId == REQ's userId

// Get Relevant Posts (later)
    // Create some sort of relevant post algorithm


// ----Update----
// Add Vote
    // Add 1 to column where postId == postId provided


// ----Delete----
// Delete Post
    // DELETE post where postId == postId provided