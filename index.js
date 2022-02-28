const core = require('@actions/core');
const github = require('@actions/github');

async function getIDTokenAction(): Promise<void> {
  
   const audience = core.getInput('audience', {required: false})
   
   const id_token1 = await core.getIDToken()            // ID Token with default audience
   const id_token2 = await core.getIDToken(audience)    // ID token with custom audience
   
   // this id_token can be used to get access token from third party cloud providers
}
getIDTokenAction()

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
