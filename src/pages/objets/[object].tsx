import React, {ReactElement, useEffect, useState} from 'react';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {fetchMyObjects} from '../../utils/fetch-my-objects';
import {fetchObject, LDObject} from '../../utils/fetch-object';
import {REVALIDATE} from '../../constants';
import {ObjectLayout} from '../../layouts/object/object.layout';
import {MetaComponent} from '../../components/meta/meta.component';
import {DefaultLayout} from '../../layouts/default/default.layout';
import {getObjectFullName} from '../../utils/get-object-full-name';
import {getRedirectionObject} from '../../utils/get-redirection-object';
import {fetchForm, FormInterface} from '../../utils/fetch-form';
import {CatalogInterface, fetchCatalog} from '../../utils/fetch-catalog';
import {fetchSocials, LDSocial} from '../../utils/fetch-socials';
import {FooterComponent} from '../../components/footer/footer.component';

export interface ObjectProps {
  object: LDObject;
  form: FormInterface;
  catalog: CatalogInterface;
  socials: LDSocial[];
}

export default function Object({
  object,
  form,
  catalog,
  socials,
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

      <FooterComponent catalog={catalog} socials={socials} />
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
  const catalog = await fetchCatalog();
  const socials = await fetchSocials();

  return {
    props: {
      object,
      form,
      catalog,
      socials,
    },
    revalidate: REVALIDATE,
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const objects = await fetchMyObjects();

  const paths = objects.map((object) => ({
    params: {
      object: object.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
