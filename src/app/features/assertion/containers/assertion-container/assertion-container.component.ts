import { Component, OnInit } from '@angular/core';
import { Assertion } from '../../interfaces/assertion.interface';
import { Source } from '../../interfaces/source.interface';
import { MatDialog } from '@angular/material/dialog';
import { NewEvidenceContainerComponent } from '../new-evidence-container/new-evidence-container.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NewEvidenceSourceContainerComponent } from '../new-evidence-source-container/new-evidence-source-container.component';
import { EvidenceReference } from '../../interfaces/evidence-reference.interface';

const mockAssertion: Assertion = {
  text: 'The Earth is not a globe',
  evidenceSet: [
    {
      text: 'The curvature of the earth cant be seen from the ground',
      conclusion: 'These articles demonstrate that you cant see the curvature of the earth from the ground where it should be. Therefore the earth does not have a curvature. Therefore the earth is not a globe',
      sources: [
        {
          title: 'Experiment performed by Nathan Thompson',
          mediaType: 'video',
          citations: ['4:30', '40:23'],
          publishedDate: '2020-06-28T00:48:45.288Z',
          author: 'Nathan Thompson',
          link: 'https://youtube.com',
          objections: null
        }
      ],
      objections: [
        {
          sustained: true,
          reason: 'The experiment conducted by Mr. Thompson is invalid because no precise measuring technique was used to observe the curvature of the Earth. Furthermore, the calculations are flowed such that they necessitate ',
          evidenceSet: [
            {
              text: 'The curvature of the earth can be measured in many different ways',
              conclusion: 'These articles demonstrate that you can indeed measure the curvature of the earth in a variety of ways. You can also conduct a vast array of other experiments that demonstrate the Earth is a globe',
              sources: [
                {
                  title: 'Experiment that demonstrates the curvature of the Earth',
                  mediaType: 'article',
                  citations: ['p1', 'p96', 'p97', 'p99', 'p101', 'p123', 'p127'],
                  publishedDate: '2020-06-28T00:48:45.288Z',
                  author: 'Scientist',
                  link: 'https://google.com',
                  objections: null
                },
                {
                  title: 'Experiment that demonstrates the curvature of the Earth again',
                  mediaType: 'article',
                  citations: ['p1', 'p94', 'p98', 'p99', 'p107', 'p133', 'p137', 'p156'],
                  publishedDate: '2020-06-28T00:48:45.288Z',
                  author: 'Scientist 2',
                  link: 'https://google.com',
                  objections: null
                },
                {
                  title: 'Experiment that demonstrates the curvature of the Earth again 3',
                  mediaType: 'article',
                  citations: ['p1', 'p94', 'p98', 'p99', 'p107', 'p133', 'p137', 'p156', 'p161', 'p172'],
                  publishedDate: '2020-06-28T00:48:45.288Z',
                  author: 'Scientist 3',
                  link: 'https://google.com',
                  objections: null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: 'The curvature of the earth cant be seen from the ground 2',
      conclusion: 'These articles demonstrate that you cant see the curvature of the earth from the ground where it should be. Therefore the earth does not have a curvature. Therefore the earth is not a globe',
      sources: [
        {
          title: 'Experiment performed by Nathan Thompson',
          mediaType: 'video',
          citations: ['4:30', '40:23'],
          publishedDate: '2020-06-28T00:48:45.288Z',
          author: 'Nathan Thompson',
          link: 'https://youtube.com',
          objections: null
        }
      ],
      objections: [
        {
          sustained: false,
          reason: 'The experiment conducted by Mr. Thompson is invalid because no precise measuring technique was used to observe the curvature of the Earth. Furthermore, the calculations are flowed such that they necessitate ',
          evidenceSet: [
            {
              text: 'The curvature of the earth can be measured in many different ways',
              conclusion: 'These articles demonstrate that you can indeed measure the curvature of the earth in a variety of ways. You can also conduct a vast array of other experiments that demonstrate the Earth is a globe',
              sources: [
                {
                  title: 'Experiment that demonstrates the curvature of the Earth',
                  mediaType: 'article',
                  citations: ['p1', 'p96', 'p97', 'p99', 'p101', 'p123', 'p127'],
                  publishedDate: '2020-06-28T00:48:45.288Z',
                  author: 'Scientist',
                  link: 'https://google.com',
                  objections: null
                },
                {
                  title: 'Experiment that demonstrates the curvature of the Earth again',
                  mediaType: 'article',
                  citations: ['p1', 'p94', 'p98', 'p99', 'p107', 'p133', 'p137', 'p156'],
                  publishedDate: '2020-06-28T00:48:45.288Z',
                  author: 'Scientist 2',
                  link: 'https://google.com',
                  objections: null
                },
                {
                  title: 'Experiment that demonstrates the curvature of the Earth again 3',
                  mediaType: 'article',
                  citations: ['p1', 'p94', 'p98', 'p99', 'p107', 'p133', 'p137', 'p156', 'p161', 'p172'],
                  publishedDate: '2020-06-28T00:48:45.288Z',
                  author: 'Scientist 3',
                  link: 'https://google.com',
                  objections: null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-assertion-container',
  templateUrl: './assertion-container.component.html',
  styleUrls: ['./assertion-container.component.scss']
})
export class AssertionContainerComponent implements OnInit {

  mockAssertion: Assertion;
  unsubscribe$ = new Subject<true>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.mockAssertion = mockAssertion;
  }

  openAddEvidenceDialog(): void {
    const dialogRef = this.dialog.open(NewEvidenceContainerComponent, {
      minWidth: '400px',
      data: {
        assertionText: mockAssertion.text
      }
    });

    dialogRef.afterClosed().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(newEvidence => {
      if (newEvidence) {
        this.mockAssertion.evidenceSet.push(newEvidence);
      }
    });
  }

  openAddSourceDialog(evidenceRef: EvidenceReference): void {
    const dialogRef = this.dialog.open(NewEvidenceSourceContainerComponent, {
      minWidth: '400px',
      data: {
        assertionText: evidenceRef.evidenceText
      }
    });

    dialogRef.afterClosed().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((newSource: Source) => {
      if (newSource) {
        this.mockAssertion.evidenceSet.find((evidence, index) => {
          return index === evidenceRef.evidenceIndex;
        }).sources.push(newSource);
      }
    });
  }

}
