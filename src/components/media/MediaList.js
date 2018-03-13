import React from 'react';
import MediaListItem from './MediaListItem.js';

const MEDIAICONS = [
  { href: 'https://www.github.com/apati04', icon: [ 'fab', 'github-alt' ] },
  {
    href: 'https://www.linkedin.com/in/apati04',
    icon: [ 'fab', 'linkedin-in' ]
  }
];

export default () => {
  const listItems = (items) => {
    return items.map((el, i) => {
      return <MediaListItem {...el} />;
    });
  };
  return <ul className="mb-0">{listItems(MEDIAICONS)}</ul>;
};
