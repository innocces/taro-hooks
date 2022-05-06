import { Octokit } from 'octokit';
import { TOKEN } from '@site/src/constant/repo';
import { generateBaseURI } from '@site/src/utils/tools';

const request = (input: RequestInfo | URL, init?: RequestInit) => {
  return fetch(input, init)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
      return {};
    });
};

const githubRequest = new Octokit({
  baseUrl: generateBaseURI('api.github.com'),
});

export { request, githubRequest };
