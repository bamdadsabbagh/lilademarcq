import React, {ReactElement, useEffect, useState} from 'react';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {fetchObjects} from '../../utils/fetch-objects';
import {fetchObject, LDObject} from '../../utils/fetch-object';
import {REVALIDATE} from '../../constants';
import {ObjectLayout} from '../../layouts/object/object.layout';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../../layouts/default/default.layout';
import {getObjectFullName} from '../../utils/get-object-full-name';
import {getRedirectionObject} from '../../utils/get-redirection-object';
import {fetchForm, FormInterface} from '../../utils/fetch-form';

export interface ObjectProps {
  object: LDObject;
  form: FormInterface;
}

export default function Object({
  object,
  form,
}: ObjectProps): ReactElement {
  const [slug, setSlug] = useState(object.slug);

  useEffect(() => {
    setSlug(object.slug);
  }, [object.slug]);

  // Purge children when slug changes
  if (object.slug !== slug) {
    return <></>;
  }

  return (
    <>
      <MetaComponent
        description={getObjectFullName(object)}
        image={object.thumbnail.url}
      />
      <DefaultLayout customMeta>
        <ObjectLayout object={object} form={form} />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<ObjectProps>> {
  const {object: o} = context.params;

  if (Array.isArray(o)) {
    throw new Error('Object name is not defined');
  }

  const object = await fetchObject(o);

  if (!object) {
    return getRedirectionObject('/404');
  }

  const form = await fetchForm();

  return {
    props: {
      object,
      form,
    },
    revalidate: REVALIDATE,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const objects = await fetchObjects();

  const paths = objects.map((object) => ({
    params: {
      object: object.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
