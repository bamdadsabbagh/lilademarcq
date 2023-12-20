import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import React, {useEffect, useState} from 'react';
import {FooterComponent} from '../../components/footer/footer.component';
import {SeoComponent} from '../../components/seo/seo.component';
import {REVALIDATE} from '../../constants';
import {DefaultLayout} from '../../layouts/default/default.layout';
import {ObjectLayout} from '../../layouts/object/object.layout';
import {fetchCatalog, LDCatalog} from '../../utils/fetch-catalog';
import {fetchForm, FormInterface} from '../../utils/fetch-form';
import {fetchMyObjects} from '../../utils/fetch-my-objects';
import {fetchObject, LDObject} from '../../utils/fetch-object';
import {fetchSocials, LDSocial} from '../../utils/fetch-socials';
import {getRedirectionObject} from '../../utils/get-redirection-object';

export interface ObjectProps {
  object: LDObject;
  form: FormInterface;
  catalog: LDCatalog;
  socials: LDSocial[];
}

export default function Object({
  object,
  form,
  catalog,
  socials,
}: ObjectProps): JSX.Element {
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
      <SeoComponent
        canonical={`objets/${object.slug}`}
        title={object.seoTitle}
        description={object.seoDescription}
        image={object.seoImage}
      />

      <DefaultLayout>
        <ObjectLayout
          object={object}
          form={form}
        />
      </DefaultLayout>

      <FooterComponent
        catalog={catalog}
        socials={socials}
      />
    </>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext,
): Promise<GetStaticPropsResult<ObjectProps>> {
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
  const myObjects = await fetchMyObjects();

  const paths = myObjects.objectsCollection.items.map((object) => ({
    params: {
      object: object.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
