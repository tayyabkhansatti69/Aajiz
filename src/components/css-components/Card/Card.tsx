import { memo } from 'react';
// import type { FC } from 'react';

import resets from '../_resets.module.css';
// import { _22Icon } from './_22Icon';
import { ArrowUpRightIcon } from './ArrowUpRightIcon';
import classes from './Card.module.css';
import { RatingIcon } from './RatingIcon';
import { Avatar } from '@mui/material';
import Image from 'next/image';


/* @figmaId 8:185 */
export const Card = memo(function Card(props:any) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.image}>
            <Image src={props.image} alt='kff '/>
            {/* className={classes.frame1} */}
        <div >
          {/* <div className={classes._22}>
          </div> */}
          {/* <div className={classes._8Hr12Mins}></div> */}
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.headingAndSubheading}>
          <div className={classes.subheading}>Design</div>
          <div className={classes.headingAndText}>
            <div className={classes.headingAndIcon}>
              <div className={classes.heading}>Figma UI UX Design..</div>
              <div className={classes.iconWrap}>
                <div className={classes.arrowUpRight}>
                  <ArrowUpRightIcon className={classes.icon2} />
                </div>
              </div>
            </div>
            <div className={classes.supportingText}>
              Use Figma to get a job in UI Design, User Interface, User Experience design.
            </div>
          </div>
        </div>
        <div className={classes.avatarLabelGroup}>
          <div className={classes.avatar}>
          <Avatar />

          </div>
          <div className={classes.textAndSupportingText}>
            <div className={classes.text}>Jane Cooper</div>
            <div className={classes.supportingText2}>2001 Enrolled</div>
          </div>
        </div>
        <div className={classes.rating}>
          <div className={classes.frame402}>
            <div className={classes.frame401}>
              <div className={classes._43}>4.3</div>
              <div className={classes.rating2}>
                <RatingIcon className={classes.icon3} />
              </div>
            </div>
            <div className={classes._16325}>(16,325)</div>
          </div>
        </div>
        <div className={classes._1784}>$17.84</div>
      </div>
    </div>
  );
});
