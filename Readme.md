# GitHub CLI Project

A simple Node.js CLI tool to fetch and display recent GitHub user activity using the GitHub API.
[Project URL](https://roadmap.sh/projects/github-user-activity)
## Features

- Fetches recent events for a GitHub user.
- Displays details about:
  - Push events (number of commits pushed).
  - Issues opened.
  - Repositories starred.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A stable internet connection.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/github-cli-project.git

2. Navigate to the project directory:
cd github-cli-project

3. Install dependencies (if any):
npm install

Usage
1. Run the script with a GitHub username as an argument:
node index.js <github-username>

Replace <github-username> with the username of the GitHub user whose activity you want to fetch.

2. Example:
node index.js octocat

Output:
Pushed 3 commits to octocat/Hello-World
Opened a new issue in octocat/Hello-World
Starred octocat/Hello-World


Error Handling
. If the username is invalid or not found, the script will display:
Error: User not found. Please check the username.

. For other errors, it will display the HTTP status code and message:
Error: Error fetching data 500: Internal Server Error

Project Structure
. index.js: Main script that fetches and processes GitHub user activity.
Dependencies
. node-fetch: Used to make HTTP requests to the GitHub API.
Notes
. The script uses the GitHub API's public endpoints, which may have rate limits. If you encounter rate limit errors, consider using a GitHub token for authentication.

License
This project is licensed under the MIT License. See the LICENSE file for details.

