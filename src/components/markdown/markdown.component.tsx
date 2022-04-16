import React, {ReactElement} from 'react';
import {Content} from './markdown.styles';

interface MarkdownComponentProps {
  content: string;
}

export function MarkdownComponent({
  content,
}: MarkdownComponentProps): ReactElement {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <Content
        dangerouslySetInnerHTML={{__html: content}}
      />
    </>
  );
}
