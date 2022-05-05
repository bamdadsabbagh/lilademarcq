import {fetchContentful} from './fetch-contentful';
import {getPlaceholder} from './get-placeholder';

export interface LDPress {
  title: string;
  category: string;
  description: string;
  thumbnail: {
    url: string;
    width: number;
    height: number;
    base64: string;
  };
  imagesCollection: {
    items: Array<{
      url: string;
      width: number;
      height: number;
    }>;
  };
}

interface LDMyPressHeadline {
  headlineTitle: string;
  headlineBody?: string;
  headlineReleaseText: string;
  headlineReleasePdf: {
    url: string;
  };
}

interface LDPressPaper {
  paperTitle: string;
  paperNewsCollection: {
    items: LDPress[];
  };
}

interface LDPressDigital {
  digitalTitle: string;
  digitalNewsCollection: {
    items: LDPress[];
  };
}

export type LDMyPress = LDMyPressHeadline & LDPressPaper & LDPressDigital;

const queryPressParts = `
fragment PressParts on Press {
  title
  category
  description
  thumbnail {
    url
    width
    height
  }
  imagesCollection {
    items {
      url
      width
      height
    }
  }
}
`;

interface PressHeadlineResponse {
  myPressCollection: {
    items: LDMyPressHeadline[];
  };
}

const queryPressHeadline = `
query {
  myPressCollection(limit: 1) {
    items {
      headlineTitle
      headlineBody
      headlineReleaseText
      headlineReleasePdf {
        url
      }
    }
  }
}
`;

interface PressPaperResponse {
  myPressCollection: {
    items: LDPressPaper[];
  };
}

const queryPressPaper = `${queryPressParts}
query {
  myPressCollection(limit: 1) {
    items {
      paperTitle
      paperNewsCollection {
        items {
          ...PressParts
        }
      }
    }
  }
}
`;

interface PressDigitalResponse {
  myPressCollection: {
    items: LDPressDigital[];
  };
}

const queryPressDigital = `${queryPressParts}
query {
  myPressCollection(limit: 1) {
    items {
      digitalTitle
      digitalNewsCollection {
        items {
          ...PressParts
        }
      }
    }
  }
}
`;

export async function fetchPress(): Promise<LDMyPress> {
  const pressResponse: PressHeadlineResponse = await fetchContentful(queryPressHeadline);
  const press = pressResponse.myPressCollection.items[0];

  const pressPaperResponse: PressPaperResponse = await fetchContentful(queryPressPaper);
  const pressPaper = pressPaperResponse.myPressCollection.items[0];

  const pressDigitalResponse: PressDigitalResponse = await fetchContentful(queryPressDigital);
  const pressDigital = pressDigitalResponse.myPressCollection.items[0];

  const myPress: LDMyPress = {
    ...press,
    ...pressPaper,
    ...pressDigital,
  };

  // get placeholders for thumbnails
  await Promise.all(myPress.paperNewsCollection.items.map(async (news) => {
    news.thumbnail.base64 = await getPlaceholder(news.thumbnail.url);
  }));

  await Promise.all(myPress.digitalNewsCollection.items.map(async (news) => {
    news.thumbnail.base64 = await getPlaceholder(news.thumbnail.url);
  }));

  return myPress;
}
