import { Assertion } from './features/assertion/interfaces/assertion.interface';
import { Evidence } from './features/assertion/interfaces/evidence.interface';

const exampleAssertion: Assertion = {
  text: 'The Earth is flat',
  evidenceSet: [
    {
      text: 'You should be able to see the curvature of the Earth from far away',
      conclusion: 'If you cant observe the curvature of the Earth then it is not round',
      sources: [
        {
          title: 'Some Youtube Video',
          mediaType: 'Youtube Video',
          citation: 'Starts at 3:45',
          publishedDate: '2020-06-01T04:45:15.724Z',
          author: 'Some Youtube Guy',
          link: 'https://youtube.com',
          objections: [
            {
              sustained: true,
              reason: 'Light refraction and other reasons',
              evidenceSet: [
                {
                  text: 'Light refracts in the atmostphere which allows you to see slightly beyond the curvature',
                  conclusion: 'Refraction allows you to see slightly around the curvature of the Earth',
                  sources: [
                    {
                      title: 'Science video about light refraction',
                      mediaType: 'Published Article',
                      citation: 'Page 2',
                      publishedDate: '2020-06-01T04:45:15.724Z',
                      author: 'Some educator of Science',
                      link: 'https://google.com'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
//
// sustained: boolean;
// reason: string;
// evidenceSet: Evidence[];
