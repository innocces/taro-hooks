import { githubRequest } from '@site/src/utils/request';
import {
  CASESPATH,
  CASESREPO,
  CASESORG,
  INITCASES,
} from '@site/src/constant/repo';

export interface ICasesItem {
  framework: 'react' | 'vue';
  name: string;
  description: string;
  taroVersion: string;
  url: string;
  screenshot: string;
}

export function getUserCases(): Promise<Record<string, ICasesItem>> {
  return githubRequest.rest.repos
    .getContent({
      mediaType: {
        format: 'raw',
      },
      owner: CASESORG,
      repo: CASESREPO,
      path: CASESPATH,
    })
    .then(({ data = '' }) => JSON.parse(data as string))
    .catch((error) => {
      console.error(error);
      return INITCASES;
    });
}
