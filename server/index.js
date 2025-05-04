console.log("Hello world!");

// function getMP3DownloadUrl(query, callback) {
//     const options = {
//         method: 'GET',
//         hostname: 'yt-search-and-download-mp3.p.rapidapi.com',
//         port: null,
//         path: `/mp3?query=${encodeURIComponent(query)}`, // Using the query parameter to search YouTube
//         headers: {
//             'x-rapidapi-key': 'b9bc3b04bfmshf127d9678518e34p189eacjsn6deafc917e68',
//             'x-rapidapi-host': 'yt-search-and-download-mp3.p.rapidapi.com'
//         }
//     };

//     const req = https.request(options, function (res) {
//         const chunks = [];

//         res.on('data', function (chunk) {
//             chunks.push(chunk);
//         });

//         res.on('end', function () {
//             const body = Buffer.concat(chunks);
//             const response = JSON.parse(body.toString());
//             console.log(response);
//             if (response && response.url) {
//                 callback(null, response.url); // Return the MP3 download URL
//             } else {
//                 callback('No MP3 URL found');
//             }
//         });
//     });

//     req.on('error', (error) => {
//         callback(error); // Handle errors
//     });

//     req.end();
// }

// // Example usage: Using the title from the YouTube video URL
// getMP3DownloadUrl('pqLZyEbNIJE', (error, mp3Url) => { // You can also use the video title here if you know it
//     if (error) {
//         console.error('Error:', error);
//     } else {
//         console.log('MP3 URL:', mp3Url);
//     }
// });

// import ytdl from "ytdl-core";

// const getYouTubeVideoData = async (videoUrl) => {
//   try {
//     const info = await ytdl.getInfo(videoUrl, {
//       requestOptions: {
//         headers: {
//           "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
//         },
//       },
//     });

//     const audioFormat = ytdl.chooseFormat(info.formats, { quality: "highestaudio" });
//     const videoFormat = ytdl.chooseFormat(info.formats, { quality: "highestvideo" });

//     return {
//       title: info.videoDetails.title,
//       duration: `${Math.floor(info.videoDetails.lengthSeconds / 60)}:${info.videoDetails.lengthSeconds % 60} min`,
//       thumbnail: info.videoDetails.thumbnails.pop().url,
//       audioUrl: audioFormat.url,
//       videoUrl: videoFormat.url,
//       views: info.videoDetails.viewCount,
//       uploadDate: info.videoDetails.uploadDate,
//       author: info.videoDetails.author.name,
//     };
//   } catch (error) {
//     console.error("Error fetching YouTube video data:", error);
//     return null;
//   }
// };


// // Example usage
// getYouTubeVideoData("https://www.youtube.com/watch?v=dQw4w9WgXcQ").then(console.log);
// import axios from "axios";

// // Function to extract video ID from YouTube URL
// const getYouTubeVideoId = (url) => {
//   const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:.*v=|.*\/)([^&\n?#]+))/);
//   return match ? match[1] : null;
// };

// // Your YouTube URL (Example)
// const youtubeUrl = "https://www.youtube.com/watch?v=LXPt1BWI-F0";
// const videoId = getYouTubeVideoId(youtubeUrl);

// if (videoId) {
//   const options = {
//     method: "GET",
//     url: `https://youtube-to-mp315.p.rapidapi.com/status/${videoId}`, // Replace {id} with videoId
//     headers: {
//       "x-rapidapi-key": "b9bc3b04bfmshf127d9678518e34p189eacjsn6deafc917e68",
//       "x-rapidapi-host": "youtube-to-mp315.p.rapidapi.com",
//     },
//   };

//   // Call the API
//   axios
//     .request(options)
//     .then((response) => {
//       console.log("Audio Data:", response.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching audio:", error);
//     });
// } else {
//   console.log("Invalid YouTube URL");
// }

// import { exec } from "child_process";
// import path from "path";

// // YouTube video URL
// const videoUrl = "https://www.youtube.com/watch?v=xvFZjo5PgG0";

// // Output file path
// const outputPath = path.resolve("downloaded_audio.mp3");

// // Run yt-dlp to get MP3
// exec(`yt-dlp -x --audio-format mp3 -o "${outputPath}" "${videoUrl}"`, (error, stdout, stderr) => {
//   if (error) {
//     console.error("Error downloading audio:", error);
//     return;
//   }
//   console.log("Download complete! File saved at:", outputPath);
// });

// import { Downloader } from 'ytdl-mp3';

// async function main() {
//   const downloader = new Downloader({
//     getTags: true
//   });
  
//   try {
//     await downloader.downloadSong('https://www.youtube.com/watch?v=7jgnv0xCv-k');
//     console.log('Download completed!');
//   } catch (error) {
//     console.error('Error downloading the song:', error);
//   }
// }

// main();

// const { alldl } = require('rahad-all-downloader');

// Insert a supported URL from YouTube, Facebook, TikTok, Instagram, Twitter, threads, likee,google Drive, or Capcut.

// async function downloadVideo(url) {
//   try {
//     const result = await alldl(url);
//     console.log(result);// all response same
//   } catch (error) {
//     console.error('Error:', error.message);
//   }
// }

// downloadVideo("https://www.youtube.com/watch?v=Rzu5-B9A0zM");

// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://youtube-mp36.p.rapidapi.com/dl',
//   params: {id: 'LDy0-KKnQKo'},
//   headers: {
//     'x-rapidapi-key': 'b9bc3b04bfmshf127d9678518e34p189eacjsn6deafc917e68',
//     'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

// const ytmp3 = require('ytmp3-scrap')

// ytmp3('https://www.youtube.com/watch?v=36uDReSdFDU')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

//https://github.com/rahul72pal/virtual-ai-assistance

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
}))
app.use(express.json());
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const GITHUB_API_BASE = 'https://api.github.com';

const headers = {
  Authorization: `token ${process.env.GITHUB_TOKEN}`,
};


async function generateReadmeContent(repoInfo, projectOverview){
  const {
    name, full_name, description, owner, license, stars, forks, watchers,
    issues, topics, languages, created_at, updated_at, files,
    readme, package_json
  } = repoInfo;

  try {
    const prompt = `
You are a professional documentation writer. Please generate a clean, professional, and well-structured README.md file for the following GitHub project:

Project Name: ${name}
Full Name: ${full_name}
Description: ${description}
Owner: ${owner}
License: ${license}
Stars: ${stars}
Forks: ${forks}
Watchers: ${watchers}
Open Issues: ${issues}
Topics: ${topics.join(', ')}
Languages: ${languages.join(', ')}
Created At: ${created_at}
Updated At: ${updated_at}
Files: ${files.join(', ')}

${package_json ? `package.json contents: ${JSON.stringify(package_json, null, 2)}` : ''}

${readme ? `Existing README.md content:\n${readme}` : ''}

This is the Overview of the project: ${projectOverview} so add the overview in the README.md file live link (in formate for https) to the porject and other information

Please include the following sections if possible:
1. Project title and badges (stars, forks, license)
2. Description
3. Technologies used
4. Installation instructions
5. Usage instructions
6. File structure
7. Scripts (from package.json)
8. License
9. Contribution or Contact

Make sure the formatting is Markdown compliant and cleanly readable also add the suitable emojies.
`;

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const readmeGenerated = response.text();

    // return res.json({ success: true, readme: readmeGenerated });
    return readmeGenerated;

  } catch (err) {
    console.error('Error generating README:', err);
    // return res.status(500).json({ success: false, error: err.message });
    return null
  }
}

// app.post('/get-repo-info', async (req, res) => {
//     const { repoUrl } = req.body;
  
//     try {
//       const match = repoUrl.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)(\/)?/);
//       if (!match) return res.status(400).json({ error: 'Invalid GitHub repository URL' });
  
//       const [_, owner, repo] = match;
  
//       // Basic repo info
//       const repoRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}`);
//       const repoData = repoRes.data;
  
//       // Languages
//       const langRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`);
  
//       // Topics
//       const topicsRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/topics`, {
//         headers: { Accept: 'application/vnd.github.mercy-preview+json' }
//       });
  
//       // Package.json if exists
//       let packageJson = null;
//       try {
//         const pkgRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/package.json`);
//         if (pkgRes.data?.content) {
//           const content = Buffer.from(pkgRes.data.content, 'base64').toString('utf-8');
//           packageJson = JSON.parse(content);
//         }
//       } catch (err) {
//         // No package.json found
//       }
  
//       // List of files in root
//       let files = [];
//       try {
//         const contentsRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contents`);
//         files = contentsRes.data.map(file => file.name);
//       } catch (e) {
//         // No contents found or repo is empty
//       }
  
//       // README.md (if exists)
//       let readmeContent = null;
//       try {
//         const readmeRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/readme`);
//         if (readmeRes.data?.content) {
//           readmeContent = Buffer.from(readmeRes.data.content, 'base64').toString('utf-8');
//         }
//       } catch (e) {
//         // README not present
//       }

//       const repoInfo = {
//         name: repoData.name,
//         full_name: repoData.full_name,
//         description: repoData.description,
//         owner: repoData.owner.login,
//         license: repoData.license?.name || 'No license',
//         stars: repoData.stargazers_count,
//         forks: repoData.forks_count,
//         watchers: repoData.watchers_count,
//         issues: repoData.open_issues_count,
//         topics: topicsRes.data.names,
//         languages: Object.keys(langRes.data),
//         created_at: repoData.created_at,
//         updated_at: repoData.updated_at,
//         files,
//         readme: readmeContent,
//         package_json: packageJson
//       }

//       const readmeContentGenerated = await generateReadmeContent(repoInfo);
//       if(!readmeContentGenerated){
//          res.status(500).json({error: "Failed to generate README content"});
//       }else{
//          res.json({sucess: true, readme: readmeContentGenerated});
//       }
  
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch repo data', details: error.message });
//     }
// });

app.post('/get-repo-info', async (req, res) => {
  const { repoLink , projectOverview  } = req.body;

  try {
    const match = repoLink.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)(\/)?/);
    if (!match) return res.status(400).json({ error: 'Invalid GitHub repository URL' });

    const [_, owner, repo] = match;

    const getPackageJson = async (path) => {
      try {
        const pkgRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${path}/package.json`, { headers: {
          ...headers,
          Accept: 'application/vnd.github.mercy-preview+json',
        }, });
        const content = Buffer.from(pkgRes.data.content, 'base64').toString('utf-8');
        return JSON.parse(content);
      } catch {
        return null;
      }
    };

    const [clientPkg, serverPkg] = await Promise.all([
      getPackageJson("client"),
      getPackageJson("server"),
    ]);

    const getStackFromDeps = (pkg) => {
      if (!pkg) return null;
      const deps = Object.keys(pkg.dependencies || {});
      const devDeps = Object.keys(pkg.devDependencies || {});
      return [...deps, ...devDeps];
    };

    // Basic repo info
    const repoRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}`, {headers: {
      ...headers,
      Accept: 'application/vnd.github.mercy-preview+json',
    },});
    const repoData = repoRes.data;

    // Other metadata
    const langRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/languages`, {headers: {
      ...headers,
      Accept: 'application/vnd.github.mercy-preview+json',
    },});
    const topicsRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/topics`, {
      headers: {
        ...headers,
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    });

    const contentsRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/contents`, {
      headers: {
        ...headers,
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    });
    const files = contentsRes.data.map(file => file.name);

    let readmeContent = null;
    try {
      const readmeRes = await axios.get(`${GITHUB_API_BASE}/repos/${owner}/${repo}/readme`, {headers: {
        ...headers,
        Accept: 'application/vnd.github.mercy-preview+json',
      },});
      readmeContent = Buffer.from(readmeRes.data.content, 'base64').toString('utf-8');
    } catch {}

    const repoInfo = {
      name: repoData.name,
      full_name: repoData.full_name,
      description: repoData.description,
      owner: repoData.owner.login,
      license: repoData.license?.name || 'No license',
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      watchers: repoData.watchers_count,
      issues: repoData.open_issues_count,
      topics: topicsRes.data.names,
      languages: Object.keys(langRes.data),
      files,
      readme: readmeContent,
      techStacks: {
        client: getStackFromDeps(clientPkg),
        server: getStackFromDeps(serverPkg),
      }
    };

    const readmeContentGenerated = await generateReadmeContent(repoInfo, projectOverview || repoInfo.description );
    if (!readmeContentGenerated) {
      res.status(500).json({ error: "Failed to generate README content" });
    } else {
      res.json({ success: true, readme: readmeContentGenerated });
    }

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch repo data', details: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});



