const githubUsername=process.argv[2];
console.log(githubUsername);

async function githubUserActivity(username){
const url=`https://api.github.com/users/${username}/events`
const response= await fetch(url,{
    headers:{
        'User-Agent':'index.js',
    },
},
)
if(!response.ok){
    if(response.status === 404){
        throw new Error ("User not found.Pls check the username");

        
    }
    else{
        throw new Error(`Error fetching data ${response.status}:${response.statusText}`);
 
    }
}
return response.json();
}



//calling the function
githubUserActivity(githubUsername)
    .then(data=>{
        data.forEach(event => {
            const reponame=event.repo.name;
            switch (event.type) {
                case 'PushEvent':
                    const commitCount=event.payload.commits.length;
                    console.log(`Pushed ${commitCount} commit${commitCount>1?'s':''} to ${reponame}`);
                    
                    break;
                    case 'IssuesEvent':
                        if(event.payload.action === 'opened')
                        {
                            console.log(`opened a new issue in ${reponame}`);
                            
                        }
                        break;
                        case 'WatchEvent':
                            console.log(`Starred ${repoName}`);
                            break;
                default:
                    break;
            }



            console.log(event.type,event.repo.name);
            
        });
    
        
    })
    .catch(error=>{
        console.log('Error:',error.message);
        
    })
